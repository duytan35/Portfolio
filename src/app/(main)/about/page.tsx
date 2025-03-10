import Image from "next/image";
import { ExperienceItem } from "./components/ExperienceItem";
import { SkillsSection } from "./components/Skills";
import { fetchAbout } from "@/services/about";
import { FaFileAlt } from "react-icons/fa";

export default async function About() {
  const about = await fetchAbout();

  return (
    <>
      <section id="about" className="pt-16">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div
              className="text-gray-600 mb-6"
              dangerouslySetInnerHTML={{ __html: about.firstDescription }}
            />
            <div
              className="text-gray-600 mb-6"
              dangerouslySetInnerHTML={{ __html: about.secondDescription }}
            />
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
              <Image
                src={about.avatar}
                alt="Duy Tan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <SkillsSection />
      <section id="experience" className="pt-16">
        <h2 className="text-3xl font-bold mb-12">Experience</h2>
        {about.experience.map((e) => (
          <ExperienceItem
            key={e.title}
            title={e.title}
            company={e.company}
            period={e.period}
            description={e.description}
          />
        ))}
      </section>
      <section id="project" className="pt-16">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        {about.experience.map((e) => (
          <ExperienceItem
            key={e.title}
            title={e.title}
            company={e.company}
            period={e.period}
            description={e.description}
          />
        ))}
      </section>
      <div className="my-16 flex justify-center">
        <a
          href={about.pdfCVFile}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-[#171717] rounded-md hover:bg-gray-300 transition-colors"
        >
          <FaFileAlt size={18} />
          <span>View my CV</span>
        </a>
      </div>
    </>
  );
}
