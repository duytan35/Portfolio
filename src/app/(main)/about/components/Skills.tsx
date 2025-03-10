import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaAngular,
  FaLaravel,
  FaGithub,
  FaDocker,
  FaAws,
  FaFigma,
  FaDatabase,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaChrome,
  FaMobile,
  FaPaintBrush,
  FaNetworkWired,
  FaTasks,
  FaRocket,
  FaUniversalAccess,
  FaSearchPlus,
  FaBook,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiJest,
  SiWebpack,
  SiPostman,
  SiGraphql,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import type { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-4 py-3 bg-gray-100 rounded-md text-gray-700 flex items-center"
          >
            <skill.icon className="mr-2 text-gray-800" size={18} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export function SkillsSection() {
  const programmingLanguages: Skill[] = [
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Python", icon: SiPython },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "SQL", icon: FaDatabase },
    { name: "PHP", icon: FaPhp },
  ];

  const frameworks: Skill[] = [
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Vue.js", icon: FaVuejs },
    { name: "Angular", icon: FaAngular },
    { name: "Laravel", icon: FaLaravel },
  ];

  const tools: Skill[] = [
    { name: "Git/GitHub", icon: FaGithub },
    { name: "Docker", icon: FaDocker },
    { name: "AWS", icon: FaAws },
    { name: "Figma", icon: FaFigma },
    { name: "Jest", icon: SiJest },
    { name: "Webpack", icon: SiWebpack },
    { name: "VS Code", icon: VscCode },
    { name: "Postman", icon: SiPostman },
  ];

  const otherSkills: Skill[] = [
    { name: "Responsive Design", icon: FaMobile },
    { name: "UI/UX Design", icon: FaPaintBrush },
    { name: "RESTful APIs", icon: FaNetworkWired },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Agile/Scrum", icon: FaTasks },
    { name: "CI/CD", icon: FaRocket },
    { name: "Performance Optimization", icon: FaChrome },
    { name: "Accessibility (a11y)", icon: FaUniversalAccess },
    { name: "SEO", icon: FaSearchPlus },
    { name: "Technical Writing", icon: FaBook },
  ];

  return (
    <section id="skills" className="pt-16">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCategory
          title="Programming Languages"
          skills={programmingLanguages}
        />
        <SkillCategory title="Frameworks & Libraries" skills={frameworks} />
        <SkillCategory title="Tools & Technologies" skills={tools} />
      </div>

      <div className="my-12">
        <h3 className="text-xl font-semibold mb-6">Other Skills</h3>
        <div className="flex flex-wrap gap-3">
          {otherSkills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-md text-gray-700 flex items-center"
            >
              <skill.icon className="mr-2 text-gray-800" size={16} />
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
