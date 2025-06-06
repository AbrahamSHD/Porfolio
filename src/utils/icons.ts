
import {
  Angular,
  Css,
  Express,
  Html,
  Javascript,
  Mongo,
  NestJs,
  Node,
  Postgres,
  Prisma,
  React,
  Redux,
  Tailwind,
  Typescript,
  Vite,
} from '../components'

const defaultSkillClass = "rounded size-10 hover:size-14 transition-all duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"

export const ICONS = {
  HTML: {
    name: "HTML",
    class: "bg-[#fff9] text-black ",
    skillClass: defaultSkillClass,
    icon: Html,
  },
  
  CSS: {
    name: "CSS",
    class: "bg-gradient-to-r from-[#fff9] to-[#639] text-white ",
    skillClass: defaultSkillClass,
    icon: Css,
  },

  TAILWIND: {
    name: "Javascript",
    class: "bg-[#3178C6] text-white ",
    skillClass: defaultSkillClass,
    icon: Tailwind,
  },

  JAVASCRIPT: {
    name: "Javascript",
    class: "bg-[#f0db4f] text-black ",
    skillClass: defaultSkillClass,
    icon: Javascript,
  },
  
  TYPESCRIPT: {
    name: "Typescript",
    class: "bg-[#3178C6] text-white ",
    skillClass: defaultSkillClass,
    icon: Typescript,
  },
  
  EXPRESS: {
    name: "Express",
    class: " bg-[#fff5] text-white ",
    skillClass: defaultSkillClass,
    icon: Express,
  },

  NESTJS: {
    name: "NestJs",
    class: "bg-gradient-to-r from-[#232323] to-[#e0234e] text-white ",
    skillClass: defaultSkillClass,
    icon: NestJs,
  },

  NODE: {
    name: "Node",
    class: "bg-gradient-to-r from-[#232323] to-[#41873F] text-white ",
    skillClass: defaultSkillClass,
    icon: Node,
  },

  MONGODB: {
    name: "MongoDB",
    class: " bg-[#fff9] text-black ",
    skillClass: "h-10 hover:h-14 transition-all duration-500 sm:h-90 md:scale-95 md:group-hover:scale-95",
    icon: Mongo,
  },

  POSTGRESQL: {
    name: "PostgreSQL",
    class: "bg-gradient-to-r from-[#3178C6] to-[#336791] text-white ",
    skillClass: defaultSkillClass,
    icon: Postgres,
  },

  PRISMA: {
    name: "Prisma",
    class: " bg-[#232323] text-white ",
    skillClass: defaultSkillClass,
    icon: Prisma,
  },
  ANGULAR: {
    name: "Angular",
    class: "bg-gradient-to-r from-[#232323] to-[#DC087D] text-white fill-current",
    skillClass: "size-10 hover:size-14 duration-500 sm:h-90 md:scale-95 md:group-hover:scale-95",
    icon: Angular,
  },
  REACT: {
    name: "React",
    class: "bg-gradient-to-r from-[#232323] to-[#00D8FF] text-black",
    skillClass: defaultSkillClass,
    icon: React,
  },
  REDUX: {
    name: "Redux",
    class: "bg-gradient-to-r from-white to-purple-600 text-black",
    skillClass: defaultSkillClass,
    icon: Redux,
  },

  VITE: {
    name: "Vite",
    class: " bg-gradient-to-r from-purple-500 to-blue-500 text-white ",
    skillClass: defaultSkillClass,
    icon: Vite,
  },
};
