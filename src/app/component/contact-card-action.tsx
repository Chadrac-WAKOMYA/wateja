"use client"
import { useRouter } from 'next/navigation';
import React, { use } from 'react';
import { Contact } from '../types/contact.model';
import { ContactContext } from '../context/contact-context';

type Props = {
    contact : Contact;
}

export default function ContactCardAction({contact}: Props) {
    const router = useRouter();
    const {contacts,setContact} = use(ContactContext);

    const handleDeleteContact = ()=> {
        if(confirm("Voulez-vous supprimer ce contact ?")){
            const newContacts = contacts.filter((c)=>c.id !== contact.id);
            setContact(newContacts);
        }
        
    }
    const handleNavigate = ()=>{
        router.push(`/contacts/${contact.id}`)
    }
    return (
        <div className='flex between'>
            <button className='btn btn-netral' onClick={handleNavigate}>Voir</button>
            <button className='btn-danger' onClick={handleDeleteContact}>Supprimer</button>
        </div>
    )
}