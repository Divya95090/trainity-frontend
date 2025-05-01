import React, { useState } from "react";

import Industry from "../websiteAssets/Industry-Recognized Certificate.svg";
import StandOut from "../websiteAssets/Stand Out in Job Market.svg";
import Passport from "../websiteAssets/Your Passport to Career Growth.svg";
import Certificate from "../websiteAssets/certificateImage.png";

export default function Certificates() {
  const [activeTab, setActiveTab] = useState("internship");

  const tabs = [
    { key: "internship", label: "Internship Certificate" },
    { key: "project", label: "Live Project" },
    { key: "training", label: "Training Certificate" },
  ];

  const benefits = [
    {
      icon: Industry,
      title: "Industry-Recognized Certificate",
      description: "Earn a certificate valued by top companies.",
    },
    {
      icon: StandOut,
      title: "Stand Out in Job Market",
      description: "Fortify Your Profile to Increase Credibility",
    },
    {
      icon: Passport,
      title: "Your Passport to Career Growth",
      description: "Access Well-Paying Data Analyst positions",
    },
  ];

  return (
    <section
      style={{
        padding: "64px 80px",
        backgroundColor: "#ffffff",
      }}
    >
      <div>
        <h4
        style={{
          fontSize: "16px",
          fontWeight: "500",
          color: "#027948",
          letterSpacing: "12%",
          marginBottom: "8px",
        }}
      >
        TRAINITY CERTIFICATE
      </h4>
      <h2
        style={{
          fontSize: "36px",
          fontWeight: "600",
          color: "#101828",
          marginBottom: "40px",
        }}
      >
        Work Experience Certificates
      </h2>
      </div>
      
      <div>
          <div
          style={{
            display: "flex",
            borderBottom: "1px solid #eaecf0",
            marginBottom: "28px",
          }}
        >
          {tabs.map((tab) => {
  const isActive = activeTab === tab.key;

  return (
    <div
      key={tab.key}
      onClick={() => setActiveTab(tab.key)}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#ECFDF3";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
      }}
      style={{
        padding: "14px 12px",
        fontSize: "16px",
        fontWeight: isActive ? "600" : "500",
        color: isActive ? "#027948" : "#667084",
        cursor: "pointer",
        marginRight: "28px",
        position: "relative",
        borderBottom: isActive ? "2px solid #027948" : "none",
        transition: "background-color 0.2s ease",
      }}
    >
      {tab.label}
    </div>
  );
})}

        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          {/* Benefits */}
          <div style={{ flex: "1 1 300px" }}>
            {benefits.map((item) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "38px",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "#e0ffed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "16px",
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={{ width: "56px", height: "56px" ,borderRadius: "28px"}}
                  />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "500",
                      color: "#101828",
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "18px", color: "#667085", margin: 0 ,fontWeight: 400,lineHeight: "28px"}}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ flex: "0 1 300px" }}>
            <img
              src={Certificate}
              alt="Certificate Sample"
              style={{
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      
    </section>
  );
}
