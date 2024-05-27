import Image from "next/image";
import styles from "./page.module.css";
import { CardPost } from "@/components/CardsPost";

import logger from "@/logger";
import Link from "next/link"
import db from "../../prisma/migrations/db";


async function getAllPosts (page, searchTerm) {

try { 

  const where = {}

  if (searchTerm){
    where.title = {
      contains: searchTerm,
      mode: 'insensitive'
    }
  }

  const perPage = 6
  const skip = (page - 1) * perPage;
  const prev = page > 1 ? page - 1 : null
  const totalitems = await db.post.count({ where })
  const totalPage = Math.ceil(totalitems/perPage)
  const next = page < totalPage ? page + 1 : null

  const posts = await db.post.findMany({
    take: perPage,
    skip: skip,
    where: where,
    orderBy: {id: 'desc'},
    include: {
        author: true,
        comments: true
    }
})


return { data: posts, prev, next }

} catch (error) {
    logger.error('Falha ao obter post'),{ error }
    return {data: [], prev: null,next: null}
}


} 


export default async function Home({searchParams }) {
    const currentPage = parseInt(searchParams?.page || 1)
    const searchTerm = searchParams?.q
    const { data: posts, prev, next } = await getAllPosts(currentPage,searchTerm)
    return (
        <main >
          <section className={styles.grid}>
            {posts.map(post =>  <CardPost key={post.id} post={post} />)}
          </section>
            <div  className={styles.link_section}>
            {prev && <Link  className={styles.prev_next_link} href={{pathname: '/', query: {page : prev, q: searchTerm}}}>Página anterior</Link>}
            {next && <Link  className={styles.prev_next_link} href={{pathname: '/', query: {page : next, q: searchTerm}}}>Próxima página</Link>}
            </div>
        </main>
    )
}

