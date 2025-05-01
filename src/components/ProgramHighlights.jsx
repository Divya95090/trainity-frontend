import React from "react";
import RupeeIcon from "../websiteAssets/0 Effective Fee.svg";
import CertificateIcon from "../websiteAssets/Internship Certificate_ for ALL.svg";
import InterviewIcon from "../websiteAssets/Interview Preparation_ 4 Weeks.svg";
import PlacementIcon from "../websiteAssets/100Percent Placement Assistance.svg";
import ExperienceIcon from "../websiteAssets/Gain Hands-on Experience.svg";
import TechIcon from "../websiteAssets/Learn Latest Tech Stack.svg";

const ProgramHighlights = () => {
  const highlights = [
    {
      icon: RupeeIcon,
      alt: "Rupee Icon",
      title: "0 Effective Fee",
      description: "Affordable Learning: Access world-class data analytics training with no hidden costs or additional fees.",
    },
    {
      icon: CertificateIcon,
      alt: "Award Icon",
      title: "Internship Certificate: for ALL",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: InterviewIcon,
      alt: "Task Square Icon",
      title: "Interview Preparation: 4 Weeks",
      description: "Get 4 weeks of dedicated interview prep, including mock interviews and resume building to ace your interview.",
    },
    {
      icon: PlacementIcon,
      alt: "Rocket Icon",
      title: "100% Placement Assistance",
      description: "Get 100% assistance with job placements, including access to top companies and career guidance.",
    },
    {
      icon: ExperienceIcon,
      alt: "Tool Icon",
      title: "Gain Hands-on Experience",
      description: "Work on 8 real-world projects to build a portfolio that showcases your skills to employers.",
    },
    {
      icon: TechIcon,
      alt: "Layer Icon",
      title: "Learn Latest Tech Stack",
      description: "Learn the latest tech stack, including Python, SQL, Tableau, and more, to stay ahead in the industry.",
    },
  ];

  const styles = {
    section: {
      padding: "72px 80px",
      backgroundColor: "#ffffff",
    },
    sectionLabel: {
      fontSize: "16px",
      fontWeight: 500,
      letterSpacing: "1px",
      color: "#027948",
      marginBottom: "16px",
      textTransform: "uppercase",
    },
    sectionTitle: {
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: "44px",
      color: "#0f1728",
      marginBottom: "56px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "36px",
    },
    item: {
      display: "flex",
      alignItems: "flex-start",
    },
    iconContainer: {
      width: "56px",
      height: "56px",
      backgroundColor: "#d1fadf",
      border: "10px solid #ecfdf3",
      borderRadius: "28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "20px",
      flexShrink: 0,
    },
    icon: {
      width: "28px",
      height: "28px",
    },
    content: {
      flex: 1,
    },
    title: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "30px",
      color: "#0f1728",
      marginBottom: "10px",
    },
    description: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "28px",
      color: "#667084",
    },
  };

  return (
    <section style={styles.section}>
      <h4 style={styles.sectionLabel}>TRAINITY DATA ANALYTICS PROGRAM</h4>
      <h2 style={styles.sectionTitle}>Key Program Highlights</h2>

      <div style={styles.grid}>
        {highlights.map((item, index) => (
          <div key={index} style={styles.item}>
            <div style={styles.iconContainer}>
              <img src={item.icon} alt={item.alt} style={styles.icon} />
            </div>
            <div style={styles.content}>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramHighlights;
