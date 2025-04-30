import React, { useState } from "react";

import Industry from "../websiteAssets/Industry-Recognized Certificate.svg";
import StandOut from "../websiteAssets/Stand Out in Job Market.svg";
import Passport from "../websiteAssets/Your Passport to Career Growth.svg";
import Certificate from "../websiteAssets/certificateImage.png";

export default function Certificates() {
  const [activeTab, setActiveTab] = useState("internship");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "60px 20px",
        fontFamily: "sans-serif",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", width: "100%", display: "flex", flexDirection: "column", gap: "40px" }}>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ color: "#1a7d54", fontWeight: "600", fontSize: "14px", margin: 0, letterSpacing: "1.5px" }}>
            TRAINITY CERTIFICATE
          </p>
          <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#0f172a", margin: 0 }}>
            Work Experience Certificates
          </h2>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", borderBottom: "1px solid #eaecf0", gap: "24px" }}>
          {["internship", "project", "training"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              style={{
                paddingBottom: "12px",
                background: "transparent",
                border: "none",
                fontSize: "16px",
                fontWeight: activeTab === tab ? "600" : "400",
                color: activeTab === tab ? "#1a7d54" : "#64748b",
                borderBottom: activeTab === tab ? "2px solid #1a7d54" : "2px solid transparent",
                cursor: "pointer",
              }}
            >
              {tab === "internship"
                ? "Internship Certificate"
                : tab === "project"
                ? "Live Project"
                : "Training Certificate"}
            </button>
          ))}
        </div>

        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "space-between" }}>
          
          <div style={{ flex: "1 1 300px", minWidth: "300px", display: "flex", flexDirection: "column", gap: "32px" }}>
            {[{ icon: Industry, title: "Industry-Recognized Certificate", text: "Earn a certificate valued by top companies." },
              { icon: StandOut, title: "Stand Out in Job Market", text: "Fortify Your Profile to Increase Credibility" },
              { icon: Passport, title: "Your Passport to Career Growth", text: "Access Well-Paying Data Analyst positions" }
            ].map((item, index) => (
              <div key={index} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "#e0ffed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={item.icon} alt={item.title} style={{ width: "28px", height: "28px" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#0f172a", marginBottom: "8px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "16px", color: "#64748b", margin: 0 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

         
          <div
            style={{
              flex: "1 1 300px",
              minWidth: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                padding: "12px",
                boxShadow: "0 0 8px rgba(0,0,0,0.05)",
                maxWidth: "400px",
                width: "100%",
              }}
            >
              <img
                src={Certificate}
                alt="Certificate"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
