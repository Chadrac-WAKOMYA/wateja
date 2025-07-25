import { useRouter } from 'next/router';
import React from 'react';
import { Contact } from '../types/contact.model';

type Props = {
    contact : Contact;
}

export default function ContactCardAction({contact}: Props) {
    const router = useRouter();
    const handleNavigate = ()=>{
        router.push(`/contacts/${contact.id}`)
    }
    return (
        <div className='flex between'>
            <button className='btn btn-netral' onClick={handleNavigate}>Voir</button>
            <button className='btn-danger'>Supprimer</button>
        </div>
    )
}