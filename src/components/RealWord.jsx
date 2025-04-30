import React from "react";
import realWorld from "../websiteAssets/certificateIcon.svg";
import CreditCard from "../websiteAssets/ProjectImage03.png";
import leadScoring from "../websiteAssets/ProjectImage02.png";
import IMDb from "../websiteAssets/ProjectImage01.png";

function RealWord() {
  const features = [
    {
      id: 1,
      icon: realWorld,
      title: "Real-World Case Studies",
      description:
        "Apply data analytics in finance, marketing & entertainment.",
    },
    {
      id: 2,
      icon: realWorld,
      title: "Industry-Aligned Projects",
      description: "Work on datasets used by top companies.",
    },
    {
      id: 3,
      icon: realWorld,
      title: "Portfolio-Ready Work",
      description: "Build projects to showcase in job applications.",
    },
  ];

  const projects = [
    {
      id: 1,
      image: CreditCard,
      title: "Credit Card Fraud Analysis",
      description:
        "Analyze customer transaction patterns to detect fraud and improve security measures.",
    },
    {
      id: 2,
      image: leadScoring,
      title: "Lead Scoring",
      description:
        "Develop predictive models to identify high-value leads and optimize sales efficiency.",
    },
    {
      id: 3,
      image: IMDb,
      title: "IMDb Movie Analysis",
      description:
        "Extract insights from 100+ years of movie data to predict trends and audience preferences.",
    },
  ];

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "60px 20px",
        backgroundColor: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", width: "100%", display: "flex", flexDirection: "column", gap: "40px" }}>
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ color: "#1a7d54", fontWeight: "600", fontSize: "14px", letterSpacing: "1.92px" }}>
            REAL-WORLD LEARNING WITH INDUSTRY EXPERTS
          </h3>
          <h2 style={{ color: "#0f172a", fontSize: "32px", fontWeight: "700", lineHeight: "1.4" }}>
            Gain Hands-On Experience with 8+ Real-World Projects
          </h2>
        </div>

       
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          {features.map((feature) => (
            <div key={feature.id} style={{ display: "flex", gap: "20px", flex: "1 1 300px", minWidth: "300px" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#e0ffed",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={feature.icon} alt="icon" style={{ width: "30px", height: "30px" }} />
              </div>
              <div>
                <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#0f172a", marginBottom: "4px" }}>
                  {feature.title}
                </h4>
                <p style={{ fontSize: "16px", color: "#667084", margin: 0 }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "space-between" }}>
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                flex: "1 1 300px",
                maxWidth: "400px",
                border: "1px solid #eaecf0",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src={project.image} alt={project.title} style={{ width: "100%", height: "280px", objectFit: "cover" }} />
              <div style={{ padding: "20px" }}>
                <h4 style={{ fontSize: "18px", fontWeight: "500", color: "#344054", marginBottom: "8px" }}>
                  {project.title}
                </h4>
                <p style={{ fontSize: "16px", color: "#667084", margin: 0 }}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

       
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#1a7d54", fontSize: "24px", fontWeight: "500" }}>and +6 more</p>
        </div>
      </div>
    </section>
  );
}

export default RealWord;
