import React from "react";
import Google_G_logo from "../websiteAssets/Google__G__logo.svg.png";
import flipkart_icon from "../websiteAssets/flipkart_icon.png";
import group from "../websiteAssets/Group.svg";
import Heroimage from "../websiteAssets/Heroimage.png";
import UserGroup from '../websiteAssets/Users Group Two Rounded.svg'
import phoneCalling from '../websiteAssets/Phone Calling.svg';


function HeroSection() {
    const styles = {
      heroSection: {
        padding: '72px 105px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '40px',
      },
      heroLeftContent: {
        flex: 1,
        width: '710px',
        height: '660.14px',
      },
      bestsellerTag: {
        display: 'inline-block',
        padding: '4.57px 13.71px',
        background: 'linear-gradient(90deg, #ECFDF3, #B4FFD3)',
        borderRadius: '18.29px',
        width: '103.43px',
        height: '32.14px',
        color: '#039855',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '32.14px',
        textAlign: 'center',
        marginBottom: '16px',
      },
      heroMainHeading: {
        fontSize: '49px',
        fontWeight: 600,
        color: '#142956',
        lineHeight: '60.4px',
        marginBottom: '25px',
        letterSpacing: '-2px',
        fontFamily: 'Inter,sans-serif',
      },
      heroDescription: {
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '28px',
        letterSpacing: '0%',
        verticalAlign: 'middle',
        color: '#555',
        marginBottom: '25px',
        gap: '12px'
      },
      heroRatings: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '25px',
        color: '#555',
        gap: '4px',
      },
      heroStars: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '20px',
      },
      heroRatingNumber: {
        fontSize: '20.2px',
        fontWeight: 600,
        lineHeight: '30px',
        marginRight: '8px',
        color: '#475467',
        width: '31px',
        height: '30px',
      },
      heroStar: {
        color: '#DDD',
        fontSize: '20px',
      },
      heroStarFilled: {
        color: '#FEC84B',
        fontSize: '28px',
        width: '28px',
        lineHeight: '30px',
      },
      heroStarHalfFilled: {
        background: 'linear-gradient(90deg, #FEC84B 50%, #DDD 50%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '28px',
        lineHeight: '30px',
      },
      heroRatingsCount: {
        color: '#101828',
        fontSize: '18px',
        lineHeight: '28px',
        fontFamily: 'Inter,sans-serif',
        fontWeight: 400,
        textDecoration: 'underline',
        textDecorationStyle: 'solid',
        textDecorationThickness: '7.5%',
        textDecorationColor: '#101828',
      },
      heroRatingPlatforms: {
        marginLeft: '10px',
        display: 'flex',
        gap: '16px',
      },
      heroPlatformLogo1: {
        height: '24px',
        width: '24px',
      },
      heroPlatformLogo2: {
        height: '24px',
        width: '75.87px',
      },
      heroPartnership: {
        display: 'flex',
        alignItems: 'center',
        padding: '12px 16px',
        border: '1px solid #EAECF0',
        borderRadius: '8px',
        marginBottom: '30px',
        gap: '4px',
        // width: '453.28px',
        // height: '52px',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
      },
      BoxContent: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        // width: '421.28px',
        // height: '28px',
      },
      heroPartnerLogo: {
        width: '28.28px',
        height: '28px',
      },
      heroPartnerText: {
        display: 'flex',
        gap: '8px',
      },
      heroPartnershipTitle: {
        fontWeight: 500,
        fontSize: '14px',
        color: '#344054',
        fontFamily: 'Inter,sans-serif',
        lineHeight: '20px',
      },
      heroPartnershipSubtitle: {
        fontSize: '14px',
        color: '#667085',
        fontWeight: 400,
        lineHeight: '20px',
        fontFamily: 'Inter,sans-serif',
      },
      heroActionButtons: {
        display: 'flex',
        gap: '20px',
        marginBottom: '30px',
      },
      heroApplyBtn: {
        width: '286.5px',
        height: '68px',
        padding: '20px 28px',
        backgroundColor: '#48BF84',
        color: '#FFFFFF',
        fontFamily: 'Inter,sans-serif',
        gap: '8px',
        fontWeight: 600,
        lineHeight: '28px',
        fontSize: '20px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.06), 0px 1px 3px rgba(16, 24, 40, 0.10)',

      },
      heroDownloadBtn: {
        width: '286.5px',
        height: '68px',
        padding: '20px 28px',
        gap: '8px',
        backgroundColor: 'white',
        color: '#344054',
        fontFamily: 'Inter,sans-serif',
        fontWeight: 600,
        fontSize: '20px',
        border: '1px solid #D0D5DD',
        lineHeight: '28px',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.06), 0px 1px 3px rgba(16, 24, 40, 0.10)',
      },
      heroStats: {
        marginTop: '30px',
        gap: '12px',
      },
      heroStatItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
        gap: '8px',
        width: '710px',
        height: '30px',
      },
      heroStatIcon: {
        fontSize: '20px',
        marginRight: '15px',
      },
      heroStatText: {
        fontFamily: 'Inter,sans-serif',
        fontSize: '20px',
        fontWeight: 400,
        lineHeight: '30px',
        color: '#1C274C',
      },
      heroRightContent: {
        flex: 1,
        width: '465px',
        height: '688px',
      },
      heroImage: {
        width: '474.47px',
        height: '688px',
        borderRadius: '20px'
      },
    };
  
    return (
      <main style={styles.heroSection}>
            <div style={styles.heroLeftContent}>
              <div style={styles.heroContent}>
                <div style={styles.bestsellerTag}>Bestseller</div>
                
                <h2 style={styles.heroMainHeading}>
                  Data Analytics Program From Beginner to Job-Ready in 12 Weeks
                </h2>
                <div>
                <p style={styles.heroDescription}>
                  Master in-demand tools like Python, SQL, and Tableau, and build a portfolio with
                  real-world projects. Learn from experts, work on live projects, and get certified to
                  kickstart your data career.
                </p>
                </div>
                <div style={styles.heroRatings}>
                    <span style={styles.heroRatingNumber}>4.7</span>
                  <div style={styles.heroStars}>
                    <span style={styles.heroStarFilled}>★</span>
                    <span style={styles.heroStarFilled}>★</span>
                    <span style={styles.heroStarFilled}>★</span>
                    <span style={styles.heroStarFilled}>★</span>
                    <span style={styles.heroStarHalfFilled}>★</span>
                  </div>
                  <span style={styles.heroRatingsCount}>(3500+ ratings)</span>
                  
                  <div style={styles.heroRatingPlatforms}>
                    <img src={Google_G_logo} alt="Google" style={styles.heroPlatformLogo1} />
                    <img src={group} alt="Glassdoor" style={styles.heroPlatformLogo2} />
                  </div>
                </div>
                
                <div style={styles.heroPartnership}>
                  <div style={styles.BoxContent}>
                    <img src={flipkart_icon} alt="Flipkart" style={styles.heroPartnerLogo} />
                    <div style={styles.heroPartnerText}>
                      <span style={styles.heroPartnershipTitle}>In Partnership with Flipkart</span>
                      {"  "}
                      <span style={styles.heroPartnershipSubtitle}>Learn from Industry Leaders</span>
                    </div>
                </div>
                </div>
              </div>  
              <div style={styles.heroActionButtons}>
                <button style={styles.heroApplyBtn}>Apply Now</button>
                <button style={styles.heroDownloadBtn}>Download Syllabus</button>
              </div>
              <div style={styles.heroStats}>
                <div style={styles.heroStatItem}>
                  <img src={UserGroup} alt="UserGroup" />
                  <span style={styles.heroStatText}>Join 3,000+ Students Who've Transformed Their Careers with Trainity</span>
                </div>
                
                <div style={styles.heroStatItem}>
                 <img src={phoneCalling} alt="PhoneCalling" />
                  <span style={styles.heroStatText}>For enquiries call: <b>1800 210 2020</b></span>
                </div>
              </div>
            </div>
            
            <div style={styles.heroRightContent}>
              <img src={Heroimage} alt="IIT Building" style={styles.heroImage} />
            </div>
      </main>
    );
  }
  
  export default HeroSection;