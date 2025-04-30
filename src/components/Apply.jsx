import React, { Fragment } from "react";

import StarIcon from "../websiteAssets/starIcon.svg";
import CompleteApplication from "../websiteAssets/Complete Application.svg";
import SelectionTest from "../websiteAssets/Selection Test.svg";
import OfferLetter from "../websiteAssets/Offer Letter & Reserve Seat.svg";
import arrowIcon from '../websiteAssets/arrowIcon.svg';

const applicationSteps = [
  {
    icon: CompleteApplication,
    title: "Complete Application",
    description:
      "Fill out a short form with your details to kickstart your enrollment process.",
  },
  {
    icon: SelectionTest,
    title: "Selection Test",
    description:
      "Take a brief assessment designed to gauge your analytical thinking and problem-solving skills.",
  },
  {
    icon: OfferLetter,
    title: "Offer Letter & Reserve Seat",
    description:
      "Upon selection, receive your offer letter and confirm your seat by making a ₹15,000 deposit.",
  },
];

const Apply = () => {
  return (
    <section style={{ backgroundColor: "#fffff", padding: "72px 80px", width: "100%", boxSizing: "border-box" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "48px", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              color: "#047857",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "2px",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            UNLOCK YOUR FUTURE IN DATA ANALYTICS
          </p>
          <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#111827", margin: "16px 0 0 0" }}>
            How To Apply
          </h2>
          <p style={{ color: "#667084", fontSize: "18px", lineHeight: "30px", margin: "16px 0 0 0" }}>
            The Executive Diploma in Machine Learning and Artificial Intelligence Admissions
            process is easy and can be done entirely online.
          </p>
        </div>

        
        <div
          style={{
            display: "flex",
            gap: "16px",
            backgroundColor: "#ecfdf5",
            border: "1px solid #a6f4c5",
            borderRadius: "12px",
            padding: "20px",
            alignItems: "center",
          }}
        >
          <div style={{ width: "36px", height: "36px" }}>
            <img
              src={StarIcon}
              alt="Star Icon"
              style={{ width: "36px", height: "36px", color: "#047857" }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ color: "#047857", fontSize: "16px", fontWeight: 600, marginBottom: "4px", marginTop: 0 }}>
              Eligibility
            </h4>
            <p style={{ color: "#065f46", fontSize: "16px", margin: 0 }}>
              The program is open to anyone passionate about building a career in Data Analytics - no specific degree or background required.
            </p>
          </div>
        </div>

       
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "16px",
            marginTop: "40px",
          }}
        >
          {applicationSteps.map((step, index) => (
            <Fragment key={index}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "280px",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "8px",
                    backgroundColor: "#3cb878",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={step.icon}
                    alt={step.title}
                    style={{ width: "32px", height: "32px", color: "#ffffff" }}
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#111827", margin: 0 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "16px", color: "#667084", margin: "8px 0 0 0", lineHeight: "24px" }}>
                    {step.description}
                  </p>
                </div>
              </div>

              {index < applicationSteps.length - 1 && (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", marginTop: "32px" }}>
                  <img
                    src={arrowIcon}
                    alt="Arrow"
                    style={{ width: "40px", height: "8px" }}
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apply;