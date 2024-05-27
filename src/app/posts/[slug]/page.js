import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html";
import Image from "next/image";
import styles from '../../../components/CardsPost/genstyle.module.css';
import Avatar  from '../../../components/Avatar';
import db from "../../../../prisma/migrations/db";
import { log } from "winston";
import { redirect } from 'next'; 

export async function getPostBySlug(slug) {

  try {
    const post = await db.post.findFirst({
      where: {
        slug
      }
      , include: {
        author: true
      }
    })

    if (!post) {
      throw new Error(`Post com o slug ${slug} não foi encontrado`)

    }

    const processedContent = await remark().use(html).process(post.markdown);
    const contentHtml = processedContent.toString();
    post.markdown = contentHtml;
    return post;
  } catch (error) {
    logger.error('Falha ao obter o post com o slug: ', {
      slug,
      error
    })
  }
  redirect('/not-found');
}

  const PagePost = async ({ params }) => {
    const post = await getPostBySlug(params.slug);
    return (
      <>
        <section className={styles.header_box_post}>
          <figure>
            <Image className={styles.img_card_post}
              src={post.cover}
              width={961}
              gap={0}
              padding={0}
              margin={0}
              height={315}
              alt={`Capa do Post de Titulo: ${post.title}`}
            />
          </figure>
        </section>
        <article className={styles.footer_box_post}>
          <h1 style={{ color: "#BCBCBC" }}>{post.title}</h1>
          <p style={{ color: "#BCBCBC" }}>{post.body}</p>

          <footer className={styles.footer_box}>
            <Avatar
              imageSrc={post.author.avatar}
              name={post.author.username}
            />
          </footer>
        </article>


        <section>
          <h1 style={{ color: "#BCBCBC" }}>Código:</h1>
          <div className={styles.box_post} dangerouslySetInnerHTML={{ __html: post.markdown }} />
        </section>

      </>
    );
  };

  export default PagePost;