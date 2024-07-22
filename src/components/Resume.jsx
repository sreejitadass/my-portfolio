import ResumePDF from "./../assets/Resume_Updated.pdf";

export default function () {
  return (
    <>
      <section className="section-resume" id="resume">
        <h1>My Resume</h1>
        <p>
          Hey there! Below I have attached my resume, which highlights my
          skills, experiences, and the innovative projects I've been involved
          in. Feel free to reach out and collaborate with me anytime!
        </p>
        <div className="resume-download">
          <a href={ResumePDF} download className="download-button">
            <span>Download Resume (.pdf)</span>
          </a>
        </div>
        <div className="resume-img-box">
          <img src="src/assets/ResumeImg.jpg" alt="Resume-img" />
        </div>
      </section>
    </>
  );
}
