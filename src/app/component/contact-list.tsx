import React from 'react'
import { contacts } from '../data/contacts'
import ContactCard from './contact-card'

type Props = {}

export default function ContactList({}: Props) {
  return (
    <div className='w-full'>
        {
            contacts.map((contact)=> (
                <ContactCard contact={contact} key={contact.id} />
            ))
        }
    </div>
  )
}