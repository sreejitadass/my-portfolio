export default function ProjectCard({ image, title,description,repo }) {

    return (
        <div className="project-card-box">
            <div className="project-image">
                <img src={image} alt={title} />
            </div>
            <div className="project-details">
                <h2>{title}</h2>
                <div className="project-description">
                    <ul>
                        <li>
                            {description[0]}
                        </li>
                        <li>
                            {description[1]}
                        </li>
                    </ul>
                </div>
                <div className="project-repo">
                    <a href={`https://github.com/sreejitadass/${repo}`} className="repo-button">
                        <button>GitHub Repository</button>
                    </a>
                </div>
            </div>
        </div>
    );
}
