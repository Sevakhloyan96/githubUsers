import React from 'react';


function Users (props) {
    const {mrops} = props
    return(
        <div>
         {
            mrops.length && (
           <p>text</p>
            )
          
         }
        </div>
    );
};

export default Users;