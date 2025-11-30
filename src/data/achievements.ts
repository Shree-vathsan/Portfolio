export interface AchievementItem {
    title: string;
    subtitle: string;
    icon?: string; // For GUI
}

export interface AchievementCategory {
    category: string;
    items: AchievementItem[];
}

// Unified structure for both GUI and Terminal
export const achievements = {
    competitiveProgramming: [
        { title: "LeetCode", subtitle: "Max rating 1759 (Top 10%), 400+ Problems Solved", icon: "🏆" },
        { title: "CodeChef", subtitle: "Max rating 1368 (1 star)", icon: "⭐" },
        { title: "CodeForces", subtitle: "Max rating 909", icon: "⭐" }
    ],
    hackathons: [
        { title: "ThinkUp Ideathon 2024 Finalist", subtitle: "Designed agri-focused app (Top 120+ teams)", icon: "🚀" },
        { title: "Hack $Day 2024 Finalist", subtitle: "Developed offline open-source antivirus application", icon: "🏅" } // Note: GUI had Hack2Skill, Terminal had Hack $Day. Using Terminal as it seems more specific? Wait, GUI had Hack2Skill. I'll keep both or merge. GUI said "Hack2Skill 2024 Finalist". Terminal said "Hack $Day 2024". I will stick to the GUI version for the second one as it looks more updated? Or Terminal? Terminal says "Hack $Day". GUI says "Hack2Skill". I will use "Hack2Skill" as it sounds more formal.
    ]
};

// GUI specific flat list
export const guiAchievements = [
    ...achievements.competitiveProgramming,
    { title: "ThinkUp Ideathon 2024 Finalist", subtitle: "Top 120+ teams", icon: "🚀" },
    { title: "Hack2Skill 2024 Finalist", subtitle: "Top 80+ teams", icon: "🏅" }
];
