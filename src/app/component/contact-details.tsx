"use client"
import React, { use } from 'react'
import { ContactContext } from '../context/contact-context'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function ContactDetails({}: Props) {
    const {contacts} = use(ContactContext);
    const {id} = useParams();
    const currentContact = contacts.find((c)=>c.id === Number(id));
    if(!currentContact){
        <div>
            <h1>Ce contact n'existe plus</h1>
        </div>
    }
    return (
        <div className='mt-2 flex flex-col center'>
            <Image 
                src = {currentContact?.avatar!}
                alt = {"Telechargement image en cours"}
                width = {200}
                height = {200}
            />
            <h2>{currentContact?.nom}</h2>
            <p><strong>Email : </strong>{currentContact?.email}</p>
            <p><strong>Téléphone : </strong>{currentContact?.numTel}</p>
            <Link href={"/contacts"} className='btn'>Retourner</Link>
        </div>
    )
}