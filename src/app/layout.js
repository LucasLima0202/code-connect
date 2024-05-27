/*
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
*/
import { Aside } from '@/components/Aside';
import './globals.css'
import { SearchForm } from '@/components/SearchForm'

import { Prompt } from 'next/font/google'

// código omitido

const prompt = Prompt({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
})

// código omitido



export const metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className='app-container'>
          <div>
            <Aside />
          </div>
          <div className='main-content'>
          <SearchForm />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
