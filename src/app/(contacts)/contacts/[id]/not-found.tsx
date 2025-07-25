import Link from 'next/link'
import React from 'react'

type Props = {}

export default function NotFound({}: Props) {
  return (
    <div className='mt-2 flex center'>
        <h1>Contact non trouvé</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro voluptas delectus vitae officiis laborum exercitationem numquam dolorum voluptates esse aliquid neque magnam iusto adipisci atque optio harum quibusdam sunt, alias cumque recusandae. Laborum, quaerat! Tenetur, similique. Nemo tenetur sapiente perferendis?</p>
        <Link href={"/contacts"} className='btn'/>
    </div>
  )
}