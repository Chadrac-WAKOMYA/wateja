import React from 'react'
import { Contact } from '../types/contact.model';
import Image from 'next/image'

type Props = {
    contact : Contact;
}

export default function ContactCard({contact}: Props) {
  return (
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
  )
}