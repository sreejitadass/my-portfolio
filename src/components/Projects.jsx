import React, { useState } from "react";

// Tech stack icons
import {
  FaReact,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaJsSquare,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaUserShield,
} from "react-icons/fa";

import { DiMongodb } from "react-icons/di";
import {
  SiChainlink,
  SiGooglecalendar,
  SiMysql,
  SiStreamlit,
  SiSqlite,
  SiGooglegemini,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiClerk,
  SiJavascript,
  SiMongodb,
  SiStripe,
  SiOpenai,
} from "react-icons/si";

const descriptions1 = [
  "AI-powered personalized study assistant that delivers smart summaries, quizzes, notes, and calendar-integrated scheduling for optimized learning.",
];

const descriptions2 = [
  "Smart AI-powered chatbot enabling users to connect to and query any SQL database using natural language or raw SQL.",
];

const descriptions3 = [
  "AI-powered healthcare platform that analyzes medical reports and generates personalized treatment plans with a user-friendly interface.",
];

const descriptions4 = [
  "A SaaS AI platform that generates content such as news articles, product image analysis, and blog posts, enabling streamlined content creation.",
];

const descriptions5 = [
  "A tour booking and management platform offering tour group and guide selection, personalized itineraries to enhance travel planning.",
];

const descriptions6 = [
  "An AI-powered application that converts natural language queries into math problems and provides step-by-step solutions with clear explanations.",
];

export default function Projects() {
  const email = "dassreejita1609@gmail.com";
  const [buttonText, setButtonText] = useState("Copy my email");

  function copyEmailHandler() {
    navigator.clipboard.writeText(email).then(() => {
      setButtonText("Email copied!");
      setTimeout(() => {
        setButtonText("Copy my email");
      }, 2000);
    });
  }

  return (
    <section className="section-projects" id="projects">
      <h1>My Projects</h1>
      <div className="projects-box">
        <div className="project-card-1">
          <div className="project-details">
            <h2 className="project-title">StudyBuddy</h2>
            <p className="project-description">{descriptions1}</p>
            <div
              className="tech-icons"
              style={{ display: "flex", gap: "1rem", fontSize: "2rem" }}
            >
              <div title="Langchain">
                <SiChainlink />
              </div>
              <div title="React">
                <FaReact />
              </div>
              <div title="Node.js">
                <FaNodeJs />
              </div>
              <div title="MongoDB">
                <DiMongodb />
              </div>
              <div title="Google Calendar API">
                <SiGooglecalendar />
              </div>
              <div title="Clerk Auth">
                <SiClerk />
              </div>
            </div>
          </div>
          <a
            href="https://github.com/sreejitadass/StudyBuddyAIProject"
            className="repo-link"
          >
            Repository
          </a>
        </div>
        <div className="project-card-2">
          <div className="project-details">
            <h2 className="project-title">SQLPro</h2>
            <p className="project-description">{descriptions2}</p>
            <div
              className="tech-icons"
              style={{ display: "flex", gap: "1rem", fontSize: "2rem" }}
            >
              <div title="Python">
                <FaPython />
              </div>
              <div title="Streamlit">
                <SiStreamlit />
              </div>
              <div title="LangChain (using Chainlink icon)">
                <SiChainlink />
              </div>
              <div title="MySQL">
                <SiMysql />
              </div>
              <div title="SQLite">
                <SiSqlite />
              </div>
            </div>
          </div>
          <a
            href="https://github.com/sreejitadass/Chat-with-SQL-Project"
            className="repo-link"
          >
            Repository
          </a>
        </div>
        <div className="project-card-3">
          <div className="project-details">
            <h2 className="project-title">HealthScope AI</h2>
            <p className="project-description">{descriptions3}</p>
            <div
              className="tech-icons"
              style={{ display: "flex", gap: "1rem", fontSize: "2rem" }}
            >
              <div title="React">
                <FaReact />
              </div>
              <div title="Gemini">
                <SiGooglegemini />
              </div>
              <div title="Tailwind CSS">
                <SiTailwindcss />
              </div>
              <div title="Privy">
                <FaUserShield />
              </div>
            </div>
          </div>
          <a
            href="https://github.com/sreejitadass/AI-medical-treatment"
            className="repo-link"
          >
            Repository
          </a>
        </div>
        <div className="project-card-4">
          <div className="project-details">
            <h2 className="project-title">ContentCrafter</h2>
            <p className="project-description">{descriptions4}</p>
            <div
              className="tech-icons"
              style={{ display: "flex", gap: "1rem", fontSize: "2rem" }}
            >
              <div title="Next">
                <SiNextdotjs />
              </div>
              <div title="Tailwind CSS">
                <SiTailwindcss />
              </div>
              <div title="TypeScript">
                <SiTypescript />
              </div>
              <div title="Clerk">
                <SiClerk />
              </div>
            </div>
          </div>
          <a
            href="https://github.com/sreejitadass/ContentCrafter"
            className="repo-link"
          >
            Repository
          </a>
        </div>
        <div className="project-card-5">
          <div className="project-details">
            <h2 className="project-title">Natours</h2>
            <p className="project-description">{descriptions5}</p>
            <div
              className="tech-icons"
              style={{ display: "flex", gap: "1rem", fontSize: "2rem" }}
            >
              <div title="JavaScript">
                <SiJavascript />
              </div>
              <div title="MongoDB">
                <SiMongodb />
              </div>
              <div title="CSS">
                <FaCss3Alt />
              </div>
              <div title="Stripe">
                <SiStripe />
              </div>
            </div>
          </div>
          <a
            href="https://github.com/sreejitadass/RESTful-API-project"
            className="repo-link"
          >
            Repository
          </a>
        </div>
        <div className="project-card-6">
          <div className="project-details">
            <h2 className="project-title">Mathify</h2>
            <p className="project-description">{descriptions6}</p>
            <div
              className="tech-icons"
              style={{ display: "flex", gap: "1rem", fontSize: "2rem" }}
            >
              <div title="Python">
                <FaPython />
              </div>
              <div title="Streamlit">
                <SiStreamlit />
              </div>
              <div title="Openai">
                <SiOpenai />
              </div>
            </div>
          </div>
          <a
            href="https://github.com/sreejitadass/text-to-math-solver"
            className="repo-link"
          >
            Repository
          </a>
        </div>
      </div>
      {/* <div className="email-info">
        <p style={{ color: "#9dc5ce" }}>
          Want to work on more exciting projects?
        </p>
        <p>Click below to get started!</p>
        <div className="email-resume-container">
          <button className="email-button" onClick={copyEmailHandler}>
            {buttonText}
          </button>
          <div className="resume-download">
            <a href={ResumePDF} download className="email-button">
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
}
