import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import ContactCard from './ContactCard';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {
  // property name is contacts and it passes an array of objects
  // these props are used to pass data from parent to child.
  // they can be accessed anywhere using props
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact])
  };

  return (
    <div>
      <Header/>
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts={contacts}/> 
    </div>
  );
}

export default App;
