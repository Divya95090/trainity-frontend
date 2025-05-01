import React from 'react';
import icon from '../websiteAssets/Icon.svg'
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
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',  
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
      color: '#FFFFFF',
      borderRadius: '4px',
      borderPadding: '-0.26px',
      padding: '4.64px 12.56px',
      fontWeight: 'bold',
      marginRight: '8px',
    },
    logoText: {
      color: '#142952',
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '104px',
      width: '675.66px',
      height: '48px',
      gap: '20px',
      flexGrow: 1,
    },
    dropbtn: {
      backgroundColor: 'white',
      border: '1px solid #6CE9A6',
      borderRadius: '8px',
      fontSize: '16px',
      lineHeight: '24px',
      paragraphSpacing: '16px',
      color: '#48BF84',
      cursor: 'pointer',
      fontWeight: '500',
      padding: '12px 20px',
      gap: '8px',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    },
    iconStyle: {
      padding:'3px 5px',
      width: '10px',
      height: '5px',
    },
    navItems: {
      display: 'flex',
      gap: '20px',
    },
    navLink: {
      textDecoration: 'none',
      color: '#031D30',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight : '15px',
      letterSpacing: '0px',
      verticalAlignment: 'Middle',
      padding: '8px',
    },
    navbarRight: {
      marginLeft: 'auto',
    },
    loginBtn: {
      padding: '12px 20px',
      border: '1px solid #48BF84',
      backgroundColor: 'white',
      color: '#48BF84',
      borderRadius: '8px',
      fontWeight: '500',
      cursor: 'pointer',
      fontSize: '16px',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
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
            <button style={styles.dropbtn}>Explore Programs
              <img src={icon} alt="arrow" style={styles.iconStyle}/>
            </button>
            
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
