import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import humanbeanroutineImg from "@/public/human_bean_routine_homepage.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Human Bean Routine",
    description:
      "An andriod app that aims to improve users’ mental and physical health by rewarding them in taking small steps to establish better habits or routines.",
    tags: ["Java", "Android Studio"],
    imageUrl: humanbeanroutineImg,
  },
] as const;

const projectsDataOld = [
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;


export const skillsData = [
  "Python", 
  "Go", 
  "C#", 
  "SQL", 
  "T-SQL", 
  "Django",  
  "Pandas", 
  "NumPy", 
  "React",
  "Next.js",
  "TypeScript", 
  "Angular",
  "JavaScript", 
  "HTML", 
  "CSS",
  "Tailwind",  
  "Framer Motion",
  "ASP.NET",
  "Unity", 
  "Agile Methodology",
  "Git",
] as const;


// TO-DO: add full content or summarize bullet points
const description1Password = `• Managed and engineered on the Watchtower Reports feature as part of the Insights team which is a large-scale
production feature that analyzes and alerts about the security of user passwords
• Contributed to the implementation of additional security checks on various features using Go
• Abstracted an Insights widget component using React.js, and SASS to reduce duplicate components by over 33%
• Refactored front-end components and added ARIA into the user interface component library to provide accessibility features for screen readers and navigation`;

const descriptionUkenGames = `• Worked over multiple AA mobile games, adding exciting features such as a Battle Pass and Attaboy phrases with voice over system, attracting 100+ new players and creating a stronger emotional connection
• Implemented a new Breadth First Search algorithm that 100% guarantees a valid user-friendly word input arrangement
• Provided code reviews, refactored outdated code and added unit tests to thoroughly test and polish all software solutions`;

const descriptionBDO = `• Architected a new web request portal to track tax requests, driving efficiency by over 60% for a manual paper process
• Built the project using an open source application framework called ASP.NET Boilerplate that has a Domain Driven Design architecture and uses best coding practices such as Dependency Injection, Repository pattern etc
• Directed a training session on ASP.NET Boilerplate and impressed supervisors by its re-usability to serve future client projects with a consistent modern project structure`;

const descriptionSPSCommerce = `• Designed and delivered efficient software solutions and tools under an agile environment
• Created custom angular directives and Web APIs to build a library file management page
• Improved load time by 50% on web reports, graphs, charts, tables for large sets of data`;

const descriptionKenna2 = `• Built a new marketing application tool that visualizes sales data for BASF AP Canada, improving customer satisfaction by 70%
• Wrote SQL Stored Procedures with updated documentation for 46 common data queries
• Transferred 15 tables from Lotus Notes to SQL Server`;

const descriptionKenna1 = `• Performed over 200 ad hoc data queries throughout the coop term under tight deadlines
• Assured accuracy and quality of data pulls by carefully checking data requirements and seeking clarifications from the requester whenever needed
• Created a business term dictionary for newcomers to understand the terminology used in client requests while also providing the location of related tables and fields for the data.`;


export const experiencesData = [
  {
    title: "Graduated from the University of Waterloo",
    location: "Bachelors of Computer Science",
    description:
      "I earned my Bachelors of Computer Science degree from UW after 6 years of studying. I've gained 2 years (6 internships) of work experience as part of the Honours Co-operative Program there.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Junior Developer Intern",
    location: "1Password",
    description: description1Password,
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Software Engineer Intern",
    location: "Uken Games",
    description: descriptionUkenGames,
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Full Stack Microsoft Developer Intern",
    location: "BDO Solutions",
    description: descriptionBDO,
    icon: React.createElement(CgWorkAlt),
    date: "2018",
  },
  {
    title: "Associate Software Engineer Intern",
    location: "SPS Commerce",
    description: descriptionSPSCommerce,
    icon: React.createElement(CgWorkAlt),
    date: "2018",
  },
  {
    title: "Application Developer Intern",
    location: "Kenna",
    description: descriptionKenna2,
    icon: React.createElement(CgWorkAlt),
    date: "2017",
  },
  {
    title: "SQL Application Developer",
    location: "Kenna",
    description: descriptionKenna1,
    icon: React.createElement(CgWorkAlt),
    date: "2016",
  },
] as const;