import moonpic from "./../assets/pexels-pixabay-459475.jpg";

export default function ContactMe() {
  return (
    <section className="section-resume" id="contact">
      <h1>
        Contact <span className="half-text">Me</span>
      </h1>
      <p>Feel free to reach out and collaborate with me anytime!</p>

      <div className="contact-card refined-layout">
        {/* Left side form */}
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button type="submit" className="email-button">
            Send Message
          </button>
        </form>

        {/* Right side image */}
        <div className="contact-image-box">
          <img src={moonpic} alt="Contact" className="contact-image" />
        </div>
      </div>
    </section>
  );
}
