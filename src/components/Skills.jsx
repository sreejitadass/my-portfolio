import Icon from "./Icon.jsx";

export default function Skills() {
    return (
        <section className="section-skills" id="skills">
            <h1>My Skills</h1>
            <h2>Professional Skillset</h2>
            <div className="technologies-1">
                <Icon>C</Icon>
                <Icon>C++</Icon>
                <Icon>Python</Icon>
                <Icon>Java</Icon>
            </div>
            <div className="technologies-2">
                <Icon>HTML</Icon>
                <Icon>CSS</Icon>  
                <Icon>JavaScript</Icon>
            </div>
            <div className="technologies-3">
                <Icon>Node.js</Icon>
                <Icon>React.js</Icon>
                <Icon>Express.js</Icon>
                <Icon>Next.js</Icon>
            </div>
            <div className="technologies-4">
                <Icon>TypeScript</Icon>
                <Icon>MongoDB</Icon>
                <Icon>MySQL</Icon>
            </div>
            <h2>Tools I Use</h2>
            <div className="technologies-1">
                <Icon>Git</Icon>
                <Icon>GitHub</Icon>
            </div>
            <div className="technologies-2">
                <Icon>VSCode</Icon>
                <Icon>IntelliJ</Icon>
                <Icon>PyCharm</Icon>
                <Icon>Eclipse</Icon>
            </div>
            <div className="technologies-3">
                <Icon>Postman</Icon>
                <Icon>npm</Icon>
            </div>
        </section>
    );
}