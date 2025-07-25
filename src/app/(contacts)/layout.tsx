import React, { ReactNode } from 'react'
import Navbar from '../component/navbar'
import Provider from '../component/provider'

type Props = {children : ReactNode}

export default function layout({children}: Props) {
  return (
    <div className='page'>
      <Provider>
        <Navbar/>
        {children}
      </Provider>
        
    </div>
  )
}