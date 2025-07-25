import React from 'react'

type Props = {}

export default function ContactCardAction({}: Props) {
  return (
    <div className='flex between'>
        <button className='btn btn-netral'>Voir</button>
        <button className='btn-danger'>Supprimer</button>
    </div>
  )
}