import React from 'react';
import { useTerminal } from '../context/TerminalContext';

import { projects } from '../data/projects';
import { experience } from '../data/experience';
import { certificates } from '../data/certificates';
import { guiSkills } from '../data/skills';
import { guiAchievements } from '../data/achievements';
import { profile } from '../data/profile';
import { education } from '../data/education';
export const GUI: React.FC = () => {
    const { setViewMode } = useTerminal();
    return (
        <div className="w-full h-screen bg-[#E0E7FF] text-black font-sans overflow-y-auto p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header / Nav */}
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl font-black tracking-tighter">
                        PORTFOLIO<span className="text-[#4F46E5]">.EXE</span>
                    </h1>
                    <button
                        onClick={() => setViewMode('terminal')}
                        className="bg-black text-white px-6 py-3 font-bold hover:bg-[#4F46E5] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out border-2 border-black"
                    >
                        RETURN TO TERMINAL
                    </button>
                </div>
                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">

                    {/* Hero Card */}
                    <div className="md:col-span-2 bg-[#A5B4FC] p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl">
                        <h2 className="text-6xl font-black mb-4">HELLO, I'M {profile.name.toUpperCase()}.</h2>
                        <p className="text-xl font-bold mb-6">{profile.role}</p>
                        <div className="flex gap-4">
                        </div>
                    </div>
                    {/* Stats / Quick Info */}
                    <div className="bg-[#FCD34D] p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl flex flex-col justify-center items-center text-center">
                        <div className="text-5xl font-black mb-2">{education.cgpa}</div>
                        <div className="font-bold text-xl">CGPA</div>
                        <div className="mt-4 text-sm font-bold">{education.institution}</div>
                    </div>
                    {/* Projects Section */}
                    <div className="md:col-span-3">
                        <h3 className="text-4xl font-black mb-6 text-white bg-black inline-block px-4 py-2 transform -rotate-1">PROJECTS</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[600px] overflow-y-auto pr-2 border-4 border-black p-4 bg-white rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            {projects.map((project, index) => (
                                <div key={index} className="group relative">
                                    {/* Small Card (Default) */}
                                    <div className="h-full bg-[#F472B6] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl transition-all duration-300 ease-in-out group-hover:opacity-0">
                                        <h4 className="text-2xl font-black mb-2">{project.title}</h4>
                                        <p className="font-bold mb-4">{project.subtitle}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="bg-black text-white text-xs px-2 py-1 font-bold">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Expanded Floating Card (Hover) */}
                                    <div className="absolute inset-0 z-10 hidden group-hover:block">
                                        <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl transform -translate-y-1 -translate-x-1 transition-all duration-300 ease-in-out h-auto min-h-full flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="text-2xl font-black text-[#F472B6]">{project.title}</h4>
                                                    <a href={project.link} target="_blank" rel="noreferrer" className="text-xs font-bold underline hover:text-[#F472B6]">VIEW LINK</a>
                                                </div>
                                                <p className="font-bold text-sm mb-4">{project.subtitle}</p>
                                                <ul className="list-disc list-inside text-sm space-y-1 font-medium">
                                                    {project.details.map((detail, i) => (
                                                        <li key={i}>{detail}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Experience Section */}
                    <div className="md:col-span-3 mt-8">
                        <h3 className="text-4xl font-black mb-6 text-white bg-black inline-block px-4 py-2 transform rotate-1">EXPERIENCE</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {experience.map((exp, index) => (
                                <div key={index} className="group relative">
                                    {/* Small Card */}
                                    <div className="h-full bg-[#34D399] p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl transition-all duration-300 ease-in-out group-hover:opacity-0">
                                        <h4 className="text-2xl font-black mb-1">{exp.role}</h4>
                                        <p className="font-bold text-sm mb-4">{exp.company}</p>
                                        <span className="bg-black text-white text-xs px-2 py-1 font-bold">{exp.period}</span>
                                    </div>
                                    {/* Expanded Floating Card */}
                                    <div className="absolute inset-0 z-10 hidden group-hover:block">
                                        <div className="bg-white p-6 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-xl transform -translate-y-2 -translate-x-2 transition-all duration-300 ease-in-out h-auto min-h-full">
                                            <h4 className="text-2xl font-black text-[#34D399] mb-1">{exp.role}</h4>
                                            <div className="flex justify-between items-center mb-4">
                                                <p className="font-bold text-sm">{exp.company}</p>
                                                <span className="text-xs font-bold bg-[#34D399] px-2 py-1 border border-black">{exp.period}</span>
                                            </div>
                                            <ul className="list-disc list-inside text-sm space-y-1 font-medium">
                                                {exp.details.map((detail, i) => (
                                                    <li key={i}>{detail}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Skills Section */}
                    <div className="md:col-span-3 mt-8">
                        <h3 className="text-4xl font-black mb-6 text-white bg-black inline-block px-4 py-2 transform -rotate-1">SKILLS</h3>
                        <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl">
                            <div className="space-y-6">
                                {guiSkills.map((category, index) => (
                                    <div key={index}>
                                        <h4 className={`text-xl font-black mb-3 ${category.color}`}>{category.title}</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {category.skills.map(skill => (
                                                <span key={skill} className={`${category.bg} border-2 border-black px-3 py-1 font-bold ${category.hover} ${category.title === 'TOOLS & TECH' ? 'hover:text-black' : 'hover:text-white'} transition-colors duration-300 ease-in-out cursor-default`}>{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Certificates Section */}
                    <div className="md:col-span-3 mt-8">
                        <h3 className="text-4xl font-black mb-6 text-white bg-black inline-block px-4 py-2 transform rotate-1">CERTIFICATIONS</h3>
                        <div className="bg-[#FCD34D] p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl">
                            <ul className="space-y-4">
                                {certificates.map((cert, index) => (
                                    <li key={index} className="bg-white p-4 border-2 border-black font-bold flex items-center gap-4">
                                        <span className="text-2xl">📜</span>
                                        <span>{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Achievements Section */}
                    <div className="md:col-span-2 mt-8">
                        <h3 className="text-4xl font-black mb-6 text-white bg-black inline-block px-4 py-2 transform rotate-1">ACHIEVEMENTS</h3>
                        <div className="bg-[#A5B4FC] p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl">
                            <ul className="space-y-4">
                                {guiAchievements.map((achievement, index) => (
                                    <li key={index} className="bg-white p-4 border-2 border-black flex items-center gap-4">
                                        <span className="text-2xl">{achievement.icon}</span>
                                        <div>
                                            <div className="font-black">{achievement.title}</div>
                                            <div className="text-sm font-bold">{achievement.subtitle}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Contact & Footer Column */}
                    <div className="md:col-span-1 flex flex-col gap-6 mt-8">
                        {/* Contact Section */}
                        <div>
                            <h3 className="text-4xl font-black mb-6 text-white bg-black inline-block px-4 py-2 transform -rotate-1">CONTACT</h3>
                            <div className="bg-[#F472B6] p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl flex flex-col justify-between">
                                <div className="space-y-4">
                                    <a href="mailto:shreevathsan1904@gmail.com" className="block bg-white p-4 border-2 border-black font-black hover:translate-x-1 hover:translate-y-1 transition-transform duration-300 ease-in-out text-center">
                                        SEND EMAIL
                                    </a>
                                    <a href="https://www.linkedin.com/in/shreevathsan/" target="_blank" rel="noreferrer" className="block bg-[#0077B5] text-white p-4 border-2 border-black font-black hover:translate-x-1 hover:translate-y-1 transition-transform duration-300 ease-in-out text-center">
                                        LINKEDIN
                                    </a>
                                    <a href="https://github.com/shree-vathsan" target="_blank" rel="noreferrer" className="block bg-[#333] text-white p-4 border-2 border-black font-black hover:translate-x-1 hover:translate-y-1 transition-transform duration-300 ease-in-out text-center">
                                        GITHUB
                                    </a>
                                </div>
                                <div className="mt-6 text-center font-bold">
                                    <p>{profile.contact.location}</p>
                                    <p>+91 {profile.contact.phone}</p>
                                </div>
                            </div>
                        </div>
                        {/* Footer */}
                        <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl text-center">
                            <p className="font-bold text-sm">
                                © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
