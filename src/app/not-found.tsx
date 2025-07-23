import Link from 'next/link'
import React from 'react'
import styles from "./page.module.css"; 

type Props = {}

export default function NotFound({}: Props) {
  return (
    <div className= "flex flex-col center page">
        <h2>La page demandée n'existe pas</h2>
        <Link href={"/"} className='btn-link'>Page d'accueil</Link>
    </div>
  )
}