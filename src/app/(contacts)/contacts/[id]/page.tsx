import ContactDetails from '@/app/component/contact-details'
import React from 'react'

type Props = {
  params : {
    id:number
  }
}

export default function page({params}: Props) {
  return (
    <div>
      <ContactDetails />
    </div>
  )
}