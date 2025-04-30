import React from "react";
import RupeeIcon from "../websiteAssets/0 Effective Fee.svg";
import CertificateIcon from "../websiteAssets/Internship Certificate_ for ALL.svg";
import InterviewIcon from "../websiteAssets/Interview Preparation_ 4 Weeks.svg";
import PlacementIcon from "../websiteAssets/100Percent Placement Assistance.svg";
import ExperienceIcon from "../websiteAssets/Gain Hands-on Experience.svg";
import TechIcon from "../websiteAssets/Learn Latest Tech Stack.svg";

const highlights = [
  {
    id: 1,
    title: "0 Effective Fee",
    description:
      "Affordable Learning: Access world-class data analytics training with no hidden costs or additional fees.",
    icon: RupeeIcon,
  },
  {
    id: 2,
    title: "Internship Certificate: for ALL",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: CertificateIcon,
  },
  {
    id: 3,
    title: "Interview Preparation: 4 Weeks",
    description:
      "Get 4 weeks of dedicated interview prep, including mock interviews and resume building to ace your interview.",
    icon: InterviewIcon,
  },
  {
    id: 4,
    title: "100% Placement Assistance",
    description:
      "Get 100% assistance with job placements, including access to top companies and career guidance.",
    icon: PlacementIcon,
  },
  {
    id: 5,
    title: "Gain Hands-on Experience",
    description:
      "Work on 8 real-world projects to build a portfolio that showcases your skills to employers.",
    icon: ExperienceIcon,
  },
  {
    id: 6,
    title: "Learn Latest Tech Stack",
    description:
      "Learn the latest tech stack, including Python, SQL, Tableau, and more, to stay ahead in the industry.",
    icon: TechIcon,
  },
];

const styles = {
  section: {
    padding: "3rem 1rem",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "'Inter', sans-serif",
  },
  subtitle: {
    color: "#059669",
    fontWeight: 600,
    textTransform: "uppercase",
    fontSize: "0.875rem",
    letterSpacing: "0.05em",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 700,
    margin: "0.5rem 0 2rem",
    color: "#0f172a",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
  },
  item: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
  },
  iconCircle: {
    backgroundColor: "#d1fae5",
    padding: "1rem",
    borderRadius: "9999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: "24px",
    height: "24px",
  },
  heading: {
    margin: 0,
    fontSize: "1.125rem",
    fontWeight: 600,
    color: "#0f172a",
  },
  description: {
    marginTop: "0.25rem",
    color: "#475569",
    fontSize: "0.95rem",
    lineHeight: 1.5,
  },
};

const ProgramHighlights = () => {
  return (
    <div style={styles.section}>
      <h4 style={styles.subtitle}>TRAINITY DATA ANALYTICS PROGRAM</h4>
      <h2 style={styles.title}>Key Program Highlights</h2>
      <div style={styles.grid}>
        {highlights.map((item) => (
          <div style={styles.item} key={item.id}>
            <div style={styles.iconCircle}>
              <img src={item.icon} alt={item.title} style={styles.icon} />
            </div>
            <div>
              <h3 style={styles.heading}>{item.title}</h3>
              <p style={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramHighlights;
