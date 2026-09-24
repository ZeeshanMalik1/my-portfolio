
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiGit } from "react-icons/si";
import { CONTACT_INFO } from './socials';

export const personalInfo = [
    { label: 'First Name', value: 'Zeeshan' },
    { label: 'Last Name', value: 'Siddique' },
    { label: 'Age', value: '21 Years' },
    { label: 'Nationality', value: 'Pakistani' },
    { label: 'Freelance', value: 'Available', isGreen: true },
    { label: 'Address', value: CONTACT_INFO.ADDRESS },
    { label: 'Phone', value: CONTACT_INFO.PHONE },
    { label: 'Email', value: CONTACT_INFO.EMAIL },
    { label: 'Languages', value: 'English , Urdu' },
];

export const stats = [
    { number: "2", suffix: "+", text: "Years Experience" },
    { number: "12", suffix: "", text: "Projects Completed" },
    { number: "99", suffix: "%", text: "Client Satisfaction" },
    { number: "24", suffix: "/7", text: "Support Availability" }
];

export const skills = [
    { label: "HTML5", value: 95, icon: FaHtml5, color: "#E34F26" },
    { label: "JavaScript", value: 85, icon: FaJs, color: "#F7DF1E" },
    { label: "React", value: 90, icon: FaReact, color: "#61DAFB" },
    { label: "Next.js", value: 80, icon: SiNextdotjs, color: "#000000" },
    { label: "Tailwind", value: 95, icon: SiTailwindcss, color: "#06B6D4" },
    { label: "Node.js", value: 65, icon: FaNodeJs, color: "#339933" },
    { label: "Express", value: 70, icon: SiExpress, color: "#808080" },
    { label: "Mongodb", value: 65, icon: SiMongodb, color: "#47A248" },
    { label: "Git", value: 65, icon: SiGit, color: "#E34F26" },
    { label: "GitHub", value: 75, icon: FaGithub, color: "#000000" },
];

export const experience = [
    {
        time: "2025 - Present",
        title: "Full Stack Web Engineer",
        subtitle: "Freelance",
        description: "Developing high-performance web applications using the MERN stack and Next.js for various international clients."
    },
    {
        time: "2024 - 2025",
        title: "Frontend Developer",
        subtitle: "Switch2itech",
        description: "Worked on UI/UX components and optimized web performance using React and Tailwind CSS."
    }
];

export const education = [
    {
        time: "2026 - Present",
        title: "BS Software Engineering",
        subtitle: "University of Sargodha",
        description: "Pursuing a degree in SE with a focus on Software Engineering and Web Technologies."
    }
];
