import React from 'react';
import {Link} from 'react-router-dom';


function Users (props) {
    const {mrops} = props;
    const {check} = props
    return(
        <Link to="/users/id" style={styles.users}>
         {
          
           mrops.length ? mrops.map( item =>
                <img style={styles.useres} src={item.avatar_url} alt="name"
                 key={item.id} onClick={check.item} />
           ) : <p>loding...</p>
          
         }
        </Link>
    );
};

const styles ={
    users:{
        
    },
    useres:{
        width:'200px',
        borderRadius:'50%',
        margin:'0px 20px'
    }
}
export default Users;
