import React from 'react';
import { projects } from '../data/projects';
import { experience } from '../data/experience';
import { skills } from '../data/skills';
import { certificates } from '../data/certificates';
import { achievements } from '../data/achievements';
import { education } from '../data/education';
import { volunteers } from '../data/volunteers';
import { profile } from '../data/profile';

export const commands: Record<string, (args: string[]) => React.ReactNode> = {
    help: () => (
        <div className="space-y-2 text-terminal-text">
            <p>Available commands:</p>
            <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="text-terminal-yellow">name</span>
                <span>Show my name</span>
                <span className="text-terminal-yellow">about</span>
                <span>About me</span>
                <span className="text-terminal-yellow">education</span>
                <span>Education details</span>
                <span className="text-terminal-yellow">experience</span>
                <span>Work experience</span>
                <span className="text-terminal-yellow">skills</span>
                <span>Technical skills</span>
                <span className="text-terminal-yellow">projects</span>
                <span>My projects</span>
                <span className="text-terminal-yellow">certificates</span>
                <span>Certifications</span>
                <span className="text-terminal-yellow">volunteers</span>
                <span>Volunteering</span>
                <span className="text-terminal-yellow">achievements</span>
                <span>Achievements & CP</span>
                <span className="text-terminal-yellow">contact</span>
                <span>Contact information</span>
                <span className="text-terminal-yellow">downloadcv</span>
                <span>Download Resume</span>
                <span className="text-terminal-yellow">clear</span>
                <span>Clear terminal</span>
                <span className="text-terminal-yellow">gui</span>
                <span>Switch to GUI mode (Coming Soon)</span>
            </div>
        </div>
    ),
    education: () => (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <h3 className="text-terminal-blue font-bold">{education.institution}</h3>
                <span className="text-gray-500">{education.period}</span>
            </div>
            <div className="text-terminal-purple">{education.degree}</div>
            <div className="text-gray-400">CGPA: {education.cgpa}/10</div>
        </div>
    ),
    certificates: () => (
        <div className="space-y-2">
            <div className="text-terminal-yellow font-bold mb-2">Certifications</div>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
                {certificates.map((cert, index) => (
                    <li key={index}>{cert}</li>
                ))}
            </ul>
        </div>
    ),
    volunteers: () => (
        <div className="space-y-4">
            {volunteers.map((vol, index) => (
                <div key={index}>
                    <h3 className="text-terminal-blue font-bold">{vol.title}</h3>
                    <p className="text-gray-400 mt-1">
                        {vol.description}
                    </p>
                </div>
            ))}
        </div>
    ),
    achievements: () => (
        <div className="space-y-4">
            <div>
                <div className="text-terminal-yellow font-bold mb-2">Competitive Programming</div>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {achievements.competitiveProgramming.map((item, index) => (
                        <li key={index}><span className="text-terminal-green">{item.title}:</span> {item.subtitle}</li>
                    ))}
                </ul>
            </div>
            <div>
                <div className="text-terminal-yellow font-bold mb-2">Hackathons</div>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {achievements.hackathons.map((item, index) => (
                        <li key={index}><span className="text-terminal-purple">{item.title}:</span> {item.subtitle}</li>
                    ))}
                </ul>
            </div>
        </div>
    ),
    downloadcv: () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Shreevathsan_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return (
            <div className="text-terminal-green">
                Downloading resume...
            </div>
        );
    },

    name: () => (
        <div className="text-xl font-normal text-terminal-purple mb-2">
            {profile.name}
        </div>
    ),
    gui: () => (
        <div className="text-terminal-red">
            GUI mode is currently under development. Stay tuned!
        </div>
    ),
    about: () => (
        <div className="max-w-2xl space-y-4">
            {profile.about.map((paragraph, index) => (
                <p key={index}>
                    {paragraph}
                </p>
            ))}
        </div>
    ),
    experience: () => (
        <div className="space-y-4">
            {experience.map((exp, index) => (
                <div key={index}>
                    <div className="flex justify-between items-center">
                        <h3 className="text-terminal-blue font-bold">{exp.role}</h3>
                        <span className="text-gray-500">{exp.period}</span>
                    </div>
                    <div className="text-terminal-purple">{exp.company}</div>
                    <ul className="list-disc list-inside text-gray-400 mt-1 space-y-1">
                        {exp.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    ),
    skills: () => (
        <div className="space-y-2">
            <div>
                <span className="text-terminal-yellow font-bold w-32 inline-block">Languages:</span>
                <span className="text-gray-300">{skills.languages.join(", ")}</span>
            </div>
            <div>
                <span className="text-terminal-yellow font-bold w-32 inline-block">Frameworks:</span>
                <span className="text-gray-300">{skills.frameworks.join(", ")}</span>
            </div>
            <div>
                <span className="text-terminal-yellow font-bold w-32 inline-block">Tools:</span>
                <span className="text-gray-300">{skills.tools.join(", ")}</span>
            </div>
            <div>
                <span className="text-terminal-yellow font-bold w-32 inline-block">Technical:</span>
                <span className="text-gray-300">{skills.technical.join(", ")}</span>
            </div>
        </div>
    ),
    projects: () => (
        <div className="space-y-4">
            {projects.map((project, index) => (
                <div key={index}>
                    <div className="flex items-center space-x-2">
                        <h3 className="text-terminal-blue font-bold">{project.title}</h3>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-terminal-cyan hover:underline text-sm">(Link)</a>
                    </div>
                    <p className="text-gray-400 mt-1">{project.subtitle}</p>
                    <ul className="list-disc list-inside text-gray-500 mt-1 text-sm">
                        {project.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    ),
    contact: () => (
        <div className="space-y-2">
            <div className="flex items-center space-x-2">
                <span className="text-terminal-green">Email:</span>
                <a href={`mailto:${profile.contact.email}`} className="text-terminal-text hover:text-terminal-blue">{profile.contact.email}</a>
            </div>
            <div className="flex items-center space-x-2">
                <span className="text-terminal-green">Phone:</span>
                <span className="text-terminal-text">{profile.contact.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
                <span className="text-terminal-green">LinkedIn:</span>
                <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-terminal-text hover:text-terminal-blue">{profile.contact.linkedin.replace('https://www.', '')}</a>
            </div>
            <div className="flex items-center space-x-2">
                <span className="text-terminal-green">GitHub:</span>
                <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="text-terminal-text hover:text-terminal-blue">{profile.contact.github.replace('https://', '')}</a>
            </div>
        </div>
    ),
};

export const executeCommand = (input: string): React.ReactNode | null => {
    const [cmd, ...args] = input.trim().split(/\s+/);
    if (!cmd) return null;

    const commandFn = commands[cmd.toLowerCase()];
    if (commandFn) {
        return commandFn(args);
    }

    return (
        <div className="text-terminal-red">
            Command not found: {cmd}. Type <span className="text-terminal-yellow">help</span> for a list of commands.
        </div>
    );
};
