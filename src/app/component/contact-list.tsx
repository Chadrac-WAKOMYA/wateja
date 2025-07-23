import React from 'react'
import { contacts } from '../data/contacts'
import Image from 'next/image'

type Props = {}

export default function ContactList({}: Props) {
  return (
    <div className='w-full'>
        {
            contacts.map((contact)=> (
                <div key={contact.id} className='flex mt-2 between '>
                    <Image alt = {"Image Loading..."} src={contact.avatar} width = {70} height = {70}/>
                    <div className='flex-1'>
                        <h4>{contact.id}-{contact.nom}</h4>
                        <p>{contact.email}</p>
                        <p>{contact.numTel}</p>
                    </div>
                    <div className='flex between'>
                        <button className='btn btn-netral'>Voir</button>
                        <button className='btn-danger'>Supprimer</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}