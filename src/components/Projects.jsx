import ProjectCard from "./ProjectCard.jsx";
import TourImage from "./../assets/tourProject.jpg";
import RestaurantImage from "./../assets/restaurantProject.jpg";
import BankImage from "./../assets/bankProject.jpg";
import ManagementImage from "./../assets/managementProject.jpg";
import InvestImage from "./../assets/investProject.jpg";
import GameImage from "./../assets/gameProject.jpg";

const descriptions1 = [
  "This online platform allows you to book and manage your next exciting and buget-friendly tour, with the support of well-trained guides and with a group of your own choice.",
  "Created using MERN stack and implemented authentication and authorization mechanisms using JWT and bcrypt",
];

const descriptions2 = [
  "This full-stack web application manages all restaurant operations, including inventory management and online slot reservations",
  "Implemented user authentication and multi-role access control, improving security and enabling efficient management",
];

const descriptions3 = [
  "This responsive online bank application takes care of all your deposits, withdrawals and loans, maintaining a clear organized history of your transactions",
  "Built using HTML, CSS and JavaScript, this dynamic application is very easy to handle and use.",
];

const descriptions4 = [
  "This is a very simple-level project and task management application, built utilizing the reusable component technology of React.js and styled using Tailwind CSS.",
  "It is a great minimalistic tool that allows simple and efficient task management, helping you avoid the deadlines",
];

const descriptions5 = [
  "This investment calculator app provides a user-friendly interface to calculate potential returns on your investments. Built with React.js and its advanced concepts, it offers a sleek and intuitive design.",
  "Perfect for both novice and experienced investors, this app helps you estimate future investment growth and make informed financial decisions with ease and precision.",
];

const descriptions6 = [
  "These apps implement basic game-playing logic and interactive UI to challenge your competitive spirit",
  "Includes a classic Tic-Tac-Toe game, an interactive guessing game where players try to guess a hidden number, with features like hints and score tracking and a digital version of the Pig Dice Game",
];

export default function Projects() {
  return (
    <section className="section-projects" id="projects">
      <h1>My Projects</h1>
      <p>
        Dive in to explore my journey as a developer, where I turn ideas into
        functional, user-friendly, and aesthetically pleasing digital solutions.
      </p>
      <div className="projects-box">
        <ProjectCard
          image={TourImage}
          title="RESTful API"
          description={descriptions1}
          repo="RESTful-API-project"
        />
        <ProjectCard
          image={RestaurantImage}
          title="Restaurant Website"
          description={descriptions2}
          repo="#"
        />
        <ProjectCard
          image={BankImage}
          title="Online bank application"
          description={descriptions3}
          repo="online-Bank-mini-project "
        />
        <ProjectCard
          image={ManagementImage}
          title="Project Management App"
          description={descriptions4}
          repo="project-management-application"
        />
        <ProjectCard
          image={InvestImage}
          title="Investment Calculator"
          description={descriptions5}
          repo="investment-calculator"
        />
        <ProjectCard
          image={GameImage}
          title="Game-playing apps"
          description={descriptions6}
          repo="Tic-Tac-Toe-mini-project"
        />
      </div>
    </section>
  );
}
