import React from 'react';
import Duration from "../websiteAssets/Duration.svg";
import Eligibility from "../websiteAssets/Eligibility.svg";
import SelfPaced from "../websiteAssets/Self Paced.svg";
import Support from "../websiteAssets/Support.svg";

const SocialProofSection = () => {
  const SOCIAL_PROOF_ITEMS = [
    {
      id: 'duration',
      title: 'Duration',
      content: ['12 Weeks of Job-Ready Training'],
      icon: Duration,
      iconBgColor: '#FFE4E8',
    },
    {
      id: 'eligibility',
      title: 'Eligibility',
      content: [
        'Btech, B.Com, BBA, B.Sc, etc.',
        'No prior experience required'
      ],
      icon: Eligibility,
      iconBgColor: '#FFEAD5',
    },
    {
      id: 'self-paced',
      title: 'Self Paced',
      content: [
        'Pre-Recorded Lectures + Live',
        'Q&A Sessions'
      ],
      icon: SelfPaced,
      iconBgColor: '#D1FADF',
    },
    {
      id: 'support',
      title: 'Support',
      content: [
        'Dedicated TA Support & Peer',
        'Community'
      ],
      icon: Support,
      iconBgColor: '#D1E9FF', 
    }
  ];

  const containerStyle = {
    width: 'auto',
    backgroundColor: '#101323', 
    color: 'white',
    padding: '72px 105px'
  };

  const innerContainerStyle = {
    maxWidth: '1440px',
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
    alignItems: 'flex-start',
    gap: '16px',
    flex: '1 1 0',
    minWidth: '250px'
  };

  const iconContainerStyle = (bgColor) => ({
    backgroundColor: bgColor,
    padding: '12px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  });

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '4px'
  };

  const contentStyle = {
    color: '#d1d5db',
    margin: '0'
  };

  return (
    <div style={containerStyle}>
      <div style={innerContainerStyle}>
        {SOCIAL_PROOF_ITEMS.map((item) => (
          <div key={item.id} style={itemStyle}>
            <div style={iconContainerStyle(item.iconBgColor)}>
              <img src={item.icon} alt={item.title} style={{ width: '24px', height: '24px' }} />
            </div>
            <div>
              <h3 style={titleStyle}>{item.title}</h3>
              {item.content.map((text, index) => (
                <p key={index} style={contentStyle}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProofSection;
