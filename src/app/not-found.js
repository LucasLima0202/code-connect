import Image from "next/image";
import Link from "next/link";

import style from './error/error.module.css'
import banner from './error/404.png'

export const ArrowBack = ({ color = '#81FE88' }) => {
    return (
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5117 5.76172V7.23828H3.37109L7.55469 11.457L6.5 12.5117L0.488281 6.5L6.5 0.488281L7.55469 1.54297L3.37109 5.76172H12.5117Z" fill={color} />
      </svg>
    );
  };

export default async function NotFound() {
  return (
    <div className={style.container}>
      <Image src={banner}/>
      <section>Opa! Ocorreu um erro.</section>
      <p className={style.text}>Não conseguimos carregar a página, volte para seguir navegando.</p>
      <Link href="/">
        Voltar ao feed <ArrowBack color='#81FE88'/>
      </Link>
    </div>
  )
}