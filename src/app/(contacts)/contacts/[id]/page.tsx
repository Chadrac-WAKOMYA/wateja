import ContactDetails from '@/app/component/contact-details'
import React from 'react'

type Props = {
  params : {
    id:number
  }
}

export default function page({params}: Props) {
  return (
    <div className='mt-2'>
      <h1>Conatct</h1>
      <ContactDetails />
    </div>
  )
}