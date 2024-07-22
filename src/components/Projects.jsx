import ProjectCard from "./ProjectCard.jsx";
import TourImage from "./../assets/tourProject.jpg";
import RestaurantImage from "./../assets/restaurantProject.jpg";
import BankImage from "./../assets/bankProject.jpg";

const descriptions1 = ["This online platform allows you to book and manage your next exciting and buget-friendly tour, with the support of well-trained guides and with a group of your own choice.", "Created using MERN stack and implemented authentication and authorization mechanisms using JWT and bcrypt"]

const descriptions2 = [
    "This full-stack web application manages all restaurant operations, including inventory management and online slot reservations",
    "Implemented user authentication and multi-role access control, improving security and enabling efficient management"];

const descriptions3 = [
    "This responsive online bank application takes care of all your deposits, withdrawals and loans, maintaining a clear organized history of your transactions",
    "Built using HTML, CSS and JavaScript, this dynamic application is very easy to handle and use."
];

export default function Projects() {
    return (
        <section className="section-projects" id="projects">
            <h1>My Projects</h1>
            <p>Ready to take a look at my exciting projects? From innovative web applications to complex algorithms, each project showcases my skills, creativity, and dedication to solving real-world problems. Dive in to explore my journey as a developer, where I turn ideas into functional, user-friendly, and aesthetically pleasing digital solutions.</p>
            <div className="projects-box">
                <ProjectCard image={TourImage} title= "RESTful API" description={descriptions1} repo="RESTful-API-project"/>
                <ProjectCard image={RestaurantImage} title= "Restaurant Website" description={descriptions2} repo="#"/>
                <ProjectCard image={BankImage} title= "Online bank application" description={descriptions3} repo="online-Bank-mini-project "/>
            </div>
        </section>
    );
}