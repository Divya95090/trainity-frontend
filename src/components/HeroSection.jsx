import React from "react";
import Google_G_logo from "../websiteAssets/Google__G__logo.svg.png";
import GD_logo_Green from "../websiteAssets/GD_logo_Green.jpg";
import flipkart_icon from "../websiteAssets/flipkart_icon.png";
import Heroimage from "../websiteAssets/Heroimage.png"

function HeroSection() {
    const styles = {
      heroSection: {
        padding: '60px 0',
      },
      container: {
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 15px',
      },
      heroContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '40px',
      },
      heroLeftContent: {
        flex: 1,
        maxWidth: '600px',
      },
      bestsellerTag: {
        display: 'inline-block',
        padding: '5px 15px',
        backgroundColor: '#E6F7EF',
        color: '#039855',
        fontWeight: 500,
        fontSize: '14px',
        borderRadius: '20px',
        marginBottom: '16px',
      },
      heroMainHeading: {
        fontSize: '49px',
        fontWeight: 600,
        color: '#142956',
        lineHeight: '60.4px',
        marginBottom: '25px',
      },
      heroDescription: {
        fontSize: '18px',
        color: '#555',
        marginBottom: '25px',
      },
      heroRatings: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '25px',
      },
      heroStars: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '20px',
      },
      heroRatingNumber: {
        fontSize: '28px',
        fontWeight: 600,
        marginRight: '8px',
      },
      heroStar: {
        color: '#DDD',
        fontSize: '20px',
      },
      heroStarFilled: {
        color: '#FEC84B',
        fontSize: '28px',
      },
      heroStarHalfFilled: {
        background: 'linear-gradient(90deg, #FEC84B 50%, #DDD 50%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '28px',
      },
      heroRatingsCount: {
        marginLeft: '10px',
        color: '#777',
        fontSize: '16px',
      },
      heroRatingPlatforms: {
        display: 'flex',
        gap: '15px',
      },
      heroPlatformLogo: {
        height: '24px',
      },
      heroPartnership: {
        display: 'flex',
        alignItems: 'center',
        padding: '15px',
        border: '1px solid #eaeaea',
        borderRadius: '8px',
        marginBottom: '30px',
      },
      heroPartnerLogo: {
        width: '28.28px',
        height: '28px',
        marginRight: '15px',
      },
      heroPartnershipTitle: {
        fontWeight: 500,
        fontSize: '14px',

      },
      heroPartnershipSubtitle: {
        fontSize: '14px',
        color: '#667085',
      },
      heroActionButtons: {
        display: 'flex',
        gap: '20px',
        marginBottom: '30px',
      },
      heroApplyBtn: {
        padding: '15px 30px',
        backgroundColor: '#36B37E',
        color: 'white',
        fontWeight: 600,
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      },
      heroDownloadBtn: {
        padding: '15px 30px',
        backgroundColor: 'white',
        color: '#12263A',
        fontWeight: 600,
        fontSize: '16px',
        border: '1px solid #eaeaea',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      },
      heroStats: {
        marginTop: '30px',
      },
      heroStatItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
      },
      heroStatIcon: {
        fontSize: '20px',
        marginRight: '15px',
      },
      heroStatText: {
        fontSize: '16px',
        color: '#555',
      },
      heroRightContent: {
        flex: 1,
        maxWidth: '500px',
      },
      heroImage: {
        width: 'auto',
        height: 'auto',
        borderRadius: '10px'
      },
    };
  
    return (
      <main style={styles.heroSection}>
        <div style={styles.container}>
          <div style={styles.heroContainer}>
            <div style={styles.heroLeftContent}>
              <div style={styles.bestsellerTag}>Bestseller</div>
              
              <h2 style={styles.heroMainHeading}>
                Data Analytics Program From Beginner to Job-Ready in 12 Weeks
              </h2>
              
              <p style={styles.heroDescription}>
                Master in-demand tools like Python, SQL, and Tableau, and build a portfolio with
                real-world projects. Learn from experts, work on live projects, and get certified to
                kickstart your data career.
              </p>
              
              <div style={styles.heroRatings}>
                <div style={styles.heroStars}>
                  <span style={styles.heroRatingNumber}>4.7</span>
                  <span style={styles.heroStarFilled}>★</span>
                  <span style={styles.heroStarFilled}>★</span>
                  <span style={styles.heroStarFilled}>★</span>
                  <span style={styles.heroStarFilled}>★</span>
                  <span style={styles.heroStarHalfFilled}>★</span>
                  <span style={styles.heroRatingsCount}>(3500+ ratings)</span>
                </div>
                
                <div style={styles.heroRatingPlatforms}>
                  <img src={Google_G_logo} alt="Google" style={styles.heroPlatformLogo} />
                  <img src={GD_logo_Green} alt="Glassdoor" style={styles.heroPlatformLogo} />
                </div>
              </div>
              
              <div style={styles.heroPartnership}>
                <img src={flipkart_icon} alt="Flipkart" style={styles.heroPartnerLogo} />
                <div>
                  <span style={styles.heroPartnershipTitle}>In Partnership with Flipkart</span>
                  {"  "}
                  <span style={styles.heroPartnershipSubtitle}>Learn from Industry Leaders</span>
                </div>
              </div>
              
              <div style={styles.heroActionButtons}>
                <button style={styles.heroApplyBtn}>Apply Now</button>
                <button style={styles.heroDownloadBtn}>Download Syllabus</button>
              </div>
              
              <div style={styles.heroStats}>
                <div style={styles.heroStatItem}>
                  <span style={styles.heroStatIcon}>👥</span>
                  <span style={styles.heroStatText}>Join 3,000+ Students Who've Transformed Their Careers with Trainity</span>
                </div>
                
                <div style={styles.heroStatItem}>
                  <span style={styles.heroStatIcon}>📞</span>
                  <span style={styles.heroStatText}>For enquiries call: 1800 210 2020</span>
                </div>
              </div>
            </div>
            
            <div style={styles.heroRightContent}>
              <img src={Heroimage} alt="IIT Building" style={styles.heroImage} />
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  export default HeroSection;