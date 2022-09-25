import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';

const ContactCard =(props) => {

const {id,name,email} = props.contact

  return (
    <div className="p-4 m-1 shadow-lg">
                <div className="content">
                    <div className='Name'>{name}
                    </div>
                    <div className="Email">{email}
                    </div>
                </div>
            <DeleteIcon fontSize="large"/>
    </div>
  );
}

export default ContactCard