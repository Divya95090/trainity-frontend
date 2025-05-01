import React from "react";
import StarIcon from "../websiteAssets/starIcon.svg";
import CompleteApplication from "../websiteAssets/Complete Application.svg";
import SelectionTest from "../websiteAssets/Selection Test.svg";
import OfferLetter from "../websiteAssets/Offer Letter & Reserve Seat.svg";
import arrowIcon from '../websiteAssets/arrowIcon.svg';

const Apply = () => {
  const applicationSteps = [
    {
      icon: CompleteApplication,
      title: "Complete Application",
      description: "Fill out a short form with your details to kickstart your enrollment process.",
    },
    {
      icon: SelectionTest,
      title: "Selection Test",
      description: "Take a brief assessment designed to gauge your analytical thinking and problem-solving skills.",
    },
    {
      icon: OfferLetter,
      title: "Offer Letter & Reserve Seat",
      description: "Upon selection, receive your offer letter and confirm your seat by making a ₹15,000 deposit.",
    },
  ];

  return (
    <section style={{
      padding: "72px 80px",
      backgroundColor: "#ffffff",
      fontFamily: "Inter, sans-serif"
    }}>
      
      <p style={{
        color: "#027948",
        fontSize: "16px",
        fontWeight: 500,
        letterSpacing: "12%",
        textTransform: "uppercase",
        margin: "0 0 16px 0"
      }}>
        UNLOCK YOUR FUTURE IN DATA ANALYTICS
      </p>
      
      <h2 style={{
        fontSize: "36px",
        fontWeight: 600,
        color: "#101828",
        lineHeight: "44px",
        letterSpacing: "-2%",
        margin: "0 0 16px 0"
      }}>
        How To Apply
      </h2>
      
      <p style={{
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: "30px",
        color: "#667085",
        marginBottom: "32px",
      }}>
        The Executive Diploma in Machine Learning and Artificial Intelligence Admissions
        process is easy and can be done entirely online.
      </p>
      
      <div style={{
        backgroundColor: "#f6fef9",
        border: "1px solid #a6f4c5",
        borderRadius: "8px",
        padding: "16px",
        display: "flex",
        alignItems: "center",
        marginBottom: "48px",
      }}>
        <div style={{
          width: "48px",
          height: "48px",
          backgroundColor: "#d1fadf",
          borderRadius: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "16px"
        }}>
          <img src={StarIcon} alt="Star Icon" style={{ width: "20.57px", height: "20.57px" }} />
        </div>
        
        <div style={{ flex: 1 }}>
          <p style={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#039855",
            lineHeight: "24px",
            margin: "0 0 4px 0"
          }}>
            Eligibility
          </p>
          
          <p style={{
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: 500,
            color: "#05603A",
            margin: 0
          }}>
            The program is open to anyone passionate about building a career in Data Analytics - no specific degree or background required.
          </p>
        </div>
      </div>
      
      
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        marginBottom: "48px"
      }}>
        {applicationSteps.map((step, index) => (
          <React.Fragment key={index}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              maxWidth: "280px",
              height: "186px",
            }}>
              <div style={{
                width: "56px",
                height: "56px",
                background: "linear-gradient(135deg, #1D976C 0%, #93F9B9 100%)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px"
              }}>
                <img 
                  src={step.icon} 
                  alt={step.title}
                />
              </div>
              
              <h3 style={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
                color: "#101828",
                margin: "0 0 8px 0"
              }}>
                {step.title}
              </h3>
              
              <p style={{
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "#667085",
                margin: 0
              }}>
                {step.description}
              </p>
            </div>
            
            {index < applicationSteps.length - 1 && (
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 16px"
              }}>
                <img 
                  src={arrowIcon} 
                  alt="Arrow" 
                  style={{ width: "40px", height: "16px" }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Apply;