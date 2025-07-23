import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <header className='navbar'>
        <h3>
            <Link href="/">Wateja</Link>
        </h3>
    </header>
  )
}