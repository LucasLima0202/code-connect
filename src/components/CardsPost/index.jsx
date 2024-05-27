import Image from "next/image"
import styles from './genstyle.module.css'
import Link from "next/link"
import Avatar from "../Avatar/Index"
import { incrementThumbsUp, postComment } from "@/actions"
import { ThumbsUpButton } from "./ThumbsUpButton"
import { ModalComment } from "../ModalComment"


export const CardPost = ({ post }) => {

    const submitThumbsUp = incrementThumbsUp.bind(null, post);
    const submitComment = postComment.bind(null, post);
    return (

        <article className={styles.card_box}>
            <header className={styles.header_box}>
                <figure>
                    <Image className={styles.img_card}
                        src={post.cover}
                        width={438}
                        height={133}
                        alt={`Capa do Post de Titulo: ${post.title}`}
                    />
                </figure>
            </header>
            <section className={styles.post_box}>
                <h2 className={styles.style_format_text}>{post.title}</h2>
                <p className={styles.style_format_text_p}>{post.body}</p>
                <Link href={`/posts/${post.slug}`} className={styles.link}>Ver detalhes</Link>
            </section>
            <footer className={styles.footer_box}>
                <div className={styles.inputType}>
                    <form action={submitThumbsUp} >
                            <ThumbsUpButton></ThumbsUpButton>
                        <p>
                            {post.likes}
                        </p>
                    </form>
                    <div className={styles.comment}>
                    <ModalComment action={submitComment}/>
                        <p>
                            {post.comments.length}
                        </p>
                    </div>
                </div>

                <Avatar
                    imageSrc={post.author.avatar}
                    name={post.author.username}
                />
            </footer>
        </article>

    )

}