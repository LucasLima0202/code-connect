'use client' // Error components must be Client Components

import styles from '../app/error/error.module.css'
import { useEffect } from 'react'
import Image from 'next/image';
import banner from './error/500.png'

export const ArrowBack = ({ color = '#81FE88' }) => {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5117 5.76172V7.23828H3.37109L7.55469 11.457L6.5 12.5117L0.488281 6.5L6.5 0.488281L7.55469 1.54297L3.37109 5.76172H12.5117Z" fill={color} />
    </svg>
  );
};

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className={styles.erro_box}>
      <section className={styles.erro_box_sm} >
        <Image src={banner}/>
        <h2 className={styles.Font}>OPS! Página não encontrada.</h2>
        <p className={styles.normal} >Você pode voltar ao feed e continuar buscando projetos incríveis!</p>
        <span className={styles.pad}>
          <a className={styles.pad} href=''>Voltar ao feed</a>
          <ArrowBack />
        </span>
      </section>
    </div>
  )
}
