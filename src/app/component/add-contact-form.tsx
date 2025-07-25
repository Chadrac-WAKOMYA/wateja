import React from 'react'

type Props = {}

export default function AddContactForm({}: Props) {
  return (
    <form action="" className='mt-2 flex'>
        <div className="form-group">
            <label htmlFor="nom">Nom du contact</label>
            <input type="text" name='nom' placeholder='Nelly' id='' required minLength={3}/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Adresse mail du contact</label>
            <input type="email" name='email' placeholder='Nelly' id='' required />
        </div>
        <div className="form-group">
            <label htmlFor="numTel">Nom du contact</label>
            <input type="tel" name='numTel' placeholder='Nelly' id='' required />
        </div>
        <button type="submit" className='btn w-full'>Ajouter le contact</button>
    </form>
  )
}