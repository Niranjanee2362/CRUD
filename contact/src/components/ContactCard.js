import React from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ContactCard =(props) => {

const {id,name,email} = props.contact

  return (
    <div className="border-solid border-2 flex">
        <div className="border-solid border-2 w-4/5 m-0 p-8 flex">
               <div className="w-1/6 border-solid border-2 m-0 py-2 px-6">
                  <AccountCircleIcon fontSize='large'/>
              </div>
              <div className="w-5/6 border-solid border-2 m-0">
                    <div className='Name'>{name}
                    </div>
                    <div className="Email">{email}
                    </div>
              </div>

              
        </div>
        <div className='border-solid border-2 w-1/5 m-0 '>
                  <button className='border-solid border-2 p-4 m-8 bg-red-500 text-white rounded-xl'>Delete</button>
        </div>
    </div>
  );
}

export default ContactCard