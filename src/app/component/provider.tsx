import React, { ReactNode, useState } from 'react'
import { contacts } from '../data/contacts'

type Props = {
    children : ReactNode
}

export default function Provider({children}: Props) {
    const [ContactList, setContactList] = useState(contacts);
    return (
        {children}
    )
}