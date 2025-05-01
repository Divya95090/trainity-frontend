import React from 'react';
import Duration from "../websiteAssets/Duration.svg";
import Eligibility from "../websiteAssets/Eligibility.svg";
import SelfPaced from "../websiteAssets/Self Paced.svg";
import Support from "../websiteAssets/Support.svg";

const SocialProofSection = () => {
  
  const containerStyle = {
    backgroundColor: '#101323', 
    color: 'white',
    padding: '72px 105px'
  };

  const innerContainerStyle = {
  
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '32px',
    flexWrap: 'wrap'
  };

  const itemStyle = {
    display: 'flex',
    width: '289px',
    height: '91px',
    alignItems: 'flex-start',
    gap: '18px',
    flex: '1 1 0',
  };

  const titleStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '30px',
    marginBottom: '4px',
    color: '#FFFFFF'
  };

  const contentStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#EAECF5',
  };

  const textContainerStyle = {
    width: '231px',
    paddingTop: '5px',
    gap: '8px'
  };
  
  const iconContainerBaseStyle = {
    width: '40px',
    height: '40px',
    padding: '10px',
    borderRadius: '28px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  const iconContainerStyles = {
    duration: {
      ...iconContainerBaseStyle,
      backgroundColor: '#FFE4E8',
      border: '6px solid #FFF1F3'
    },
    eligibility: {
      ...iconContainerBaseStyle,
      backgroundColor: '#FFEAD5',
      border: '6px solid #FFF6ED'
    },
    selfPaced: {
      ...iconContainerBaseStyle,
      backgroundColor: '#D1FADF',
      border: '6px solid #ECFDF3'
    },
    support: {
      ...iconContainerBaseStyle,
      backgroundColor: '#D1E9FF',
      border: '6px solid #EFF8FF'
    }
  };

  const iconStyle = {
    width: '40px',
    height: '40px'
  };

  const features = [
    {
      icon: Duration,
      iconStyle: iconContainerStyles.duration,
      title: "Duration",
      content: "12 Weeks of Job-Ready Training"
    },
    {
      icon: Eligibility,
      iconStyle: iconContainerStyles.eligibility,
      title: "Eligibility",
      content: "Btech, B.Com, BBA, B.Sc, etc. No prior experience required"
    },
    {
      icon: SelfPaced,
      iconStyle: iconContainerStyles.selfPaced,
      title: "Self Paced",
      content: "Pre-Recorded Lectures + Live Q&A Sessions"
    },
    {
      icon: Support,
      iconStyle: iconContainerStyles.support,
      title: "Support",
      content: "Dedicated TA Support & Peer Community"
    }
  ];

  return (
    <div style={containerStyle}>
      <div style={innerContainerStyle}>
        {features.map((feature, index) => (
          <div key={index} style={itemStyle}>
            <div style={feature.iconStyle}>
              <img src={feature.icon} alt={feature.title} style={iconStyle} />
            </div>
            <div style={textContainerStyle}>
              <h3 style={titleStyle}>{feature.title}</h3>
              <p style={contentStyle}>{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProofSection;