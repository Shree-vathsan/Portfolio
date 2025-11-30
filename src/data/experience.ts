export interface Experience {
    role: string;
    company: string;
    period: string;
    details: string[];
}

export const experience: Experience[] = [
    {
        role: "Cyber Security Intern",
        company: "SysArc Informatics",
        period: "Nov 2023 – Dec 2023",
        details: [
            "Mastered corporate data management and digital asset protection.",
            "Performed vulnerability assessments and applied mitigations for web applications.",
            "Enhanced threat detection using hands-on cybersecurity practices."
        ]
    },
    {
        role: "Web Developer Intern",
        company: "Infograss Technologies",
        period: "May 2024 – Jun 2024",
        details: [
            "Developed web apps using Eclipse, Spring Boot, MVC architecture.",
            "Designed & tested RESTful APIs (100+ testcases).",
            "Integrated frontend & backend, boosting debugging efficiency by 30%."
        ]
    }
];
