import React, { ReactNode, useState } from 'react'
import { contacts } from '../data/contacts'
import { ContactContext } from '../context/contact-context';

type Props = {
    children : ReactNode
}

export default function Provider({children}: Props) {
    const [ContactList, setContactList] = useState(contacts);
    return (
        <ContactContext value={{
            contacts:ContactList, 
            setContact:setContactList
        }}>
            {children}
        </ContactContext>
    )
}