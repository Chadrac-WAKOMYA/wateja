import React from 'react'

type Props = {
  params : {
    id:number
  }
}

export default function page({params}: Props) {
  return (
    <div>La page contact {params.id} marche très bien</div>
  )
}