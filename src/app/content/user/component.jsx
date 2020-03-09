import React from 'react';
import {Link} from 'react-router-dom'

function User(props) {
    const {mrops} = props
    return(
    <div>
       
       <div>
       <img src={mrops.avatar_url} alt="name" key='id'/> 
         
       </div>
       
    </div>
    );
};

export default User;