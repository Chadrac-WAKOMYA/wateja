import Link from 'next/link'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='mt-2'>
      <header className='flex between'>
        <h1>Liste de contacts</h1>
        <Link href={"/add-contacts"} className='btn'>Ajouter un conact</Link>
      </header>
    </div>
  )
}