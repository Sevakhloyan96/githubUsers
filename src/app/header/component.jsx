import React from 'react';
import {Link} from 'react-router-dom';


function Header() {
  return(
    <header>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/">Home</Link>
        </li>
        <li style={styles.li}>
          <Link to="/users">User</Link>
        </li>
      </ul>
    </header>
  )
}

const styles ={
 ul:{
    textAlign:'center',
    display: 'block',
    display: 'flex',
    justifyContent: 'center'
  },
  li:{
    float:'left',
    margin:'0px 20px',
    listStyle: 'none',
    
  }
}

export default Header;