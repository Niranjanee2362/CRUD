import React from 'react';
import './App.css';
import Header from './Header';
import ContactCard from './ContactCard';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {
  // property name is contacts and it passes an array of objects
  // these props are used to pass data from parent to child.
  // they can be accessed anywhere using props
  const contacts = [
    {
    id: '1',
    'name': 'Niranjanee',
    'email': 'niranjanee.mohan@gmail.com'
  },
  {
    id: '2',
    'name': 'Mohan',
    'email': 'niranjaneemohanasundaram@gmail.com'
  }
];
  return (
    <div>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/> 
    </div>
  );
}

export default App;
