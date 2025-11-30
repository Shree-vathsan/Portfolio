export interface Project {
    title: string;
    subtitle: string;
    tags: string[];
    link: string;
    details: string[];
}

export const projects: Project[] = [
    {
        title: "SmartCare-360",
        subtitle: "Full Stack Patient Management System",
        tags: ["React.js", "Node.js", "SQLite"],
        link: "https://smartcare360.vercel.app/",
        details: [
            "Engineered with React.js, Node.js, and SQLite.",
            "Implemented JWT-based authentication and role-based routing.",
            "Enabled chatbot-assisted appointment booking.",
            "Designed modular REST APIs and real-time notifications."
        ]
    },
    {
        title: "ResumeMatch AI",
        subtitle: "Machine Learning Analysis Tool",
        tags: ["Python", "Flask"],
        link: "https://github.com/Shree-vathsan/Resume-Analyzer",
        details: [
            "Built a Python/Flask AI agent to analyze resumes in <5 seconds, supporting concurrent requests with 95% efficiency.",
            "Achieved 90% accuracy in technical skill extraction using Sentence-BERT, processing 100+ job descriptions across domains.",
            "Deployed React.js front-end with RESTful Flask API, ensuring 99% uptime and 100% data integrity and highlighting missing skills based on job descriptions"
        ]
    },
    {
        title: "BookSense ML",
        subtitle: "Machine Learning Analysis Tool",
        tags: ["Python", "ML"],
        link: "https://github.com/Shree-vathsan/Book-Analysis-ML-Project",
        details: [
            "Logistic Regression model with 88% accuracy.",
            "Built a dynamic Dash dashboard with interactive filters.",
            "Automated workflows for 10,000+ records.",
            "Delivered actionable insights into bestselling trends."
        ]
    },
    {
        title: "TrackIt",
        subtitle: "Expense Tracker",
        tags: ["React.js", "Node.js", "MongoDB"],
        link: "https://github.com/Shree-vathsan/TrackIt",
        details: [
            "Implemented JWT auth and CRUD workflows, improving user operations by 40%.",
            "Built ML microservice for category prediction, boosting entry accuracy by 65%.",
            "Designed analytics dashboard with insights, reducing financial review time by 55%.",
            "Added budget tracking system with alerts, enhancing overspend detection by 70%."
        ]
    }
];
