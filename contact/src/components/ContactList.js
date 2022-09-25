import React from 'react';
import ContactCard from './ContactCard';

function ContactList(props) {
    console.log(props);
    // displays the contacts

    // maps the contact info and returns name and email through prop.name / prop.email

    const renderContactList = props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} />
        );
    })
  return (
    <div className="block">
        <h2 className="block m-1 text-md">{renderContactList}</h2>
    </div>
  )
}

export default ContactList