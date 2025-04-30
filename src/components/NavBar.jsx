import React from 'react';

function NavBar() {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 32px',
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e5e5',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      width: '100%',            
      boxSizing: 'border-box',  
    },    
    navbarLeft: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: '20px',
    },
    logoIcon: {
      backgroundColor: '#48BF84',
      color: 'white',
      borderRadius: '4px',
      padding: '6px 12px',
      fontWeight: 'bold',
      marginRight: '8px',
    },
    logoText: {
      color: '#1e1e1e',
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '40px',
      gap: '24px',
      flexGrow: 1,
    },
    dropbtn: {
      backgroundColor: 'white',
      border: '1px solid #00b386',
      borderRadius: '6px',
      fontSize: '16px',
      color: '#00b386',
      cursor: 'pointer',
      fontWeight: '500',
      padding: '8px 16px',
    },
    navItems: {
      display: 'flex',
      gap: '20px',
    },
    navLink: {
      textDecoration: 'none',
      color: '#333',
      fontSize: '16px',
      padding: '8px',
    },
    navbarRight: {
      marginLeft: 'auto',
    },
    loginBtn: {
      padding: '8px 20px',
      border: '1px solid #00b386',
      backgroundColor: 'white',
      color: '#00b386',
      borderRadius: '6px',
      fontWeight: '500',
      cursor: 'pointer',
      fontSize: '16px',
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarLeft}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}>T</span>
          <span style={styles.logoText}>trainity</span>
        </div>
        <div style={styles.navLinks}>
          <div className='dropdown'>
            <button style={styles.dropbtn}>Explore Programs ▾</button>
          </div>
          <div style={styles.navItems}>
            <a href="#" style={styles.navLink}>Products</a>
            <a href="#" style={styles.navLink}>Industries</a>
            <a href="#" style={styles.navLink}>Resources</a>
            <a href="#" style={styles.navLink}>Company</a>
          </div>
        </div>
        <div style={styles.navbarRight}>
          <button style={styles.loginBtn}>Login</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
