export interface SkillCategory {
    title: string;
    skills: string[];
}

export const skills: Record<string, string[]> = {
    languages: ["Java", "Python", "C", "JavaScript", "HTML", "CSS", "SQL"],
    frameworks: ["React.js", "Node.js", "Express.js", "Tailwind", "Pandas", "Scikit-learn"],
    tools: ["Git", "GitHub", "AWS", "Docker", "Postman"],
    technical: ["Data Analytics", "Machine Learning", "Cloud Computing"]
};

// Helper for GUI which uses specific colors/titles
export const guiSkills = [
    { title: "LANGUAGES", skills: skills.languages, color: "text-[#4F46E5]", bg: "bg-[#E0E7FF]", hover: "hover:bg-[#4F46E5]" },
    { title: "FRAMEWORKS", skills: skills.frameworks, color: "text-[#F472B6]", bg: "bg-[#FCE7F3]", hover: "hover:bg-[#F472B6]" },
    { title: "TOOLS & TECH", skills: [...skills.tools, ...skills.technical], color: "text-[#FCD34D]", bg: "bg-[#FEF3C7]", hover: "hover:bg-[#FCD34D]" }
];
