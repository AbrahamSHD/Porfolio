
import {
  Angular,
  AspNet,
  Ftp,
  Oracle,
  Smtp,
  Sql,
  VisualBasic,
  CSharp,
  Css,
  DotNet,
  Express,
  Html,
  Javascript,
  JQuery,
  Mongo,
  NestJs,
  Node,
  Postgres,
  Prisma,
  React,
  Redux,
  SqlServer,
  Tailwind,
  Typescript,
  Vite,
} from '../components'

export const defaultSkillClass = "rounded size-10 hover:size-14 transition-all duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"

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
    name: "Tailwind",
    class: "bg-[#3178C6] text-white ",
    skillClass: defaultSkillClass,
    icon: Tailwind,
  },

  JAVASCRIPT: {
    name: "JavaScript",
    class: "bg-[#f0db4f] text-black ",
    skillClass: defaultSkillClass,
    icon: Javascript,
  },
  
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-[#3178C6] text-white ",
    skillClass: defaultSkillClass,
    icon: Typescript,
  },

  CSHARP: {
    name: "C#",
    class: "bg-gradient-to-r from-[#fff5] to-[#390091]  text-white ",
    skillClass: defaultSkillClass,
    icon: CSharp,
  },
  
  EXPRESS: {
    name: "Express",
    class: " bg-[#fff5] text-white ",
    skillClass: defaultSkillClass,
    icon: Express,
  },

  NESTJS: {
    name: "NestJS",
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
    class: "bg-gradient-to-r from-[#fff7] to-[#DC087D] text-white fill-current",
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

  // VITE: {
  //   name: "Vite",
  //   class: " bg-gradient-to-r from-purple-500 to-blue-500 text-white ",
  //   skillClass: defaultSkillClass,
  //   icon: Vite,
  // },
};

// Experience stack pills. Kept apart from ICONS so they don't appear in the skills grid.
// Entries without `icon` render as text-only pills.
export const EXPERIENCE_TAGS = {
  VBNET: {
    name: "VB.NET",
    class: "bg-gradient-to-r from-[#232323] to-[#004E8C] text-white",
    icon: VisualBasic,
  },
  DOTNET: {
    name: ".NET",
    class: "bg-gradient-to-r from-[#232323] to-[#512BD4] text-white",
    icon: DotNet,
  },
  DOTNET_FRAMEWORK: {
    name: ".NET Framework",
    class: "bg-gradient-to-r from-[#232323] to-[#512BD4] text-white",
    icon: DotNet,
  },
  ASPNET_MVC: {
    name: "ASP.NET MVC",
    class: "bg-gradient-to-r from-[#232323] to-[#6C429C] text-white",
    icon: AspNet,
  },
  SQLSERVER: {
    name: "SQL Server",
    class: "bg-gradient-to-r from-[#cfd8dc] to-[#CC2927] text-white",
    icon: SqlServer,
  },
  ORACLE: {
    name: "Oracle",
    class: "bg-gradient-to-r from-[#232323] to-[#C74634] text-white",
    skillClass: "size-10 text-[#C74634] hover:size-14 transition-all duration-500",
    icon: Oracle,
  },
  JQUERY: {
    name: "jQuery",
    class: "bg-gradient-to-r from-[#131B28] to-[#0868AC] text-white",
    icon: JQuery,
  },
  AJAX: {
    name: "AJAX",
    class: "bg-gradient-to-r from-[#fff7] to-[#f0db4f] text-black",
  },
  SQL: {
    name: "SQL",
    class: "bg-gradient-to-r from-[#232323] to-[#00758F] text-white",
    icon: Sql,
  },
  FTP: {
    name: "FTP",
    class: "bg-gradient-to-r from-[#232323] to-[#4A5568] text-white",
    icon: Ftp,
  },
  SMTP: {
    name: "SMTP",
    class: "bg-gradient-to-r from-[#232323] to-[#EA4335] text-white",
    icon: Smtp,
  },
};
