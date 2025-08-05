import React, { useRef } from "react";

export default function Experience() {
  const experienceRef = useRef(null);

  return (
    <section className="section-experience" id="experience">
      <h1>
        My <span className="half-text">Experience</span>
      </h1>

      <div className="experience-cards-container">
        <div className="experience-card">
          <h3>Academic Research Project — Skin Cancer Lesion Segmentation</h3>
          <p className="experience-subtitle">
            IIIT Guwahati &nbsp;|&nbsp; Jan 2025 – Apr 2025
          </p>
          <ul>
            <li>
              Enhanced R2U-Net with attention gates and hybrid BCE-Dice loss on
              ISIC 2017 dataset, increasing accuracy by <strong>9.2%</strong>{" "}
              and Dice score by <strong>24.3%</strong>.
            </li>
            <li>
              Improved lesion sensitivity by <strong>26.7%</strong> and
              specificity by <strong>5.1%</strong> via attention-based
              segmentation.
            </li>
          </ul>
        </div>

        <div className="experience-card">
          <h3>Open Source Contributor — GirlScript Summer of Code 2025</h3>
          <p className="experience-subtitle">
            Remote &nbsp;|&nbsp; Jun 2025 – Present
          </p>
          <ul>
            <li>
              Contributed to frontend enhancements and chatbot features across{" "}
              <strong>10+ repositories</strong>, focusing on user experience.
            </li>
            <li>
              Implemented reusable UI components, fixed interface bugs, and
              collaborated with maintainers via GitHub workflows.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
