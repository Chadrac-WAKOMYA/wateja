"use client"
import React, { use } from 'react'
import { Contact } from '../types/contact.model';
import { ContactContext } from '../context/contact-context';
import { useRouter } from 'next/navigation';

type Props = {}

export default function AddContactForm({}: Props) {
    const router = useRouter();
    const {contacts, setContact} = use(ContactContext);
    const handleSubmitForm = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const newContact : Contact = {
            id: Math.round(Math.random()*100),
            nom : form.get("nom") as string,
            email : form.get("email") as string,
            numTel: form.get("numTel") as string,
            avatar:"http://avatar.iran.liara.run/public/boy"
        }

        setContact([newContact, ...contacts]);
        router.push("/contacts");
    }
    return (
    <form action="" className='mt-2 flex' onSubmit={(e)=>{handleSubmitForm(e)}}>
        <div className="form-group">
            <label htmlFor="nom">Nom du contact</label>
            <input type="text" name='nom' placeholder='Nelly' id='' required minLength={3}/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Adresse mail du contact</label>
            <input type="email" name='email' placeholder='test@gmail.com' id='' required />
        </div>
        <div className="form-group">
            <label htmlFor="numTel">Nom du contact</label>
            <input type="tel" name='numTel' placeholder='0 999 999 999' id='' required />
        </div>
        <button type="submit" className='btn w-full'>Ajouter le contact</button>
    </form>
  )
}