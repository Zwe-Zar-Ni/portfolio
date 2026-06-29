import { skills } from "../config/skills";
import SectionHeader from "./section-header";

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-4 mt-12 sm:gap-12">
      <span className="text-sm font-medium opacity-20 text-background-primary">
        1 2 3
      </span>
      <span className="w-2 h-2 rounded-full opacity-20 bg-background-primary" />
      <span className="w-24 h-2 rounded-full opacity-20 bg-background-primary" />
      <span className="w-24 h-2 rounded-full opacity-20 bg-background-primary" />
      <span className="w-2 h-2 rounded-full opacity-20 bg-background-primary" />
      <span className="text-sm font-medium opacity-20 text-background-primary">
        1 2 3
      </span>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="max-w-screen-xl py-16 mx-auto">
      <SectionHeader heading="CORE COMPETENCIES" />
      <div className="flex items-center justify-center gap-8 sm:gap-16">
        <h2 className="p-1.5 sm:px-4 text-heading-primary sm:min-w-[480px] min-w-[240px] font-black text-xl sm:text-4xl border rounded-sm border-background-primary">
          CORE COMPETENCIES
        </h2>
        <h3 className="text-xl sm:text-4xl font-medium text-heading-foreground corner-box py-1.5 px-4">
          SKILLS
        </h3>
      </div>
      <ul className="relative grid max-w-screen-lg grid-cols-1 gap-8 px-6 mx-auto mt-12 sm:gap-12 md:grid-cols-2">
        <span className="absolute text-[100px] font-thin sm:font-medium text-background-primary -left-6 sm:-left-12">
          {"["}
        </span>
        <span className="absolute text-[18px] sm:text-[36px] font-medium text-background-primary/50 -left-1 sm:-left-10 top-32">
          {"+"}
        </span>
        <span className="absolute text-[100px] font-thin sm:font-medium text-background-primary -right-6 sm:-right-12 bottom-0">
          {"]"}
        </span>
        <span className="absolute text-[18px] sm:text-[36px] font-medium text-background-primary/50 -right-1 sm:-right-10 bottom-32">
          {"+"}
        </span>
        {skills.map((skill, index) => (
          <li
            key={skill.title}
            className={`flex items-center gap-4 ${
              index % 2 === 1 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="p-2 border rounded-sm border-background-primary/80">
              <skill.icon color="#E9454D" size={32} />
            </div>
            <div>
              <h3
                className={`text-xl ${
                  index % 2 === 1 ? "text-end" : "text-start"
                } font-bold uppercase text-heading-primary sm:text-2xl`}
              >
                {skill.title}
              </h3>
              <p
                className={`uppercase text-paragraph-primary ${
                  index % 2 === 1 ? "text-end" : "text-start"
                }`}
              >
                {skill.items.map((item) => item).join(", ")}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <Footer />
    </section>
  );
};

export default Skills;
