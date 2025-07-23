import React, { ReactNode } from 'react'
import Navbar from '../component/navbar'

type Props = {children : ReactNode}

export default function layout({children}: Props) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}