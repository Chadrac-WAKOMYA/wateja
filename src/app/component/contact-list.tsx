import React from 'react'
import { contacts } from '../data/contacts'
import Image from 'next/image'

type Props = {}

export default function ContactList({}: Props) {
  return (
    <div>
        {
            contacts.map((contact)=> (
                <div key={contact.id}>
                    <Image alt = {"Image Loading..."} src={contact.avatar} width = {70} height = {70}/>
                </div>
            ))
        }
    </div>
  )
}