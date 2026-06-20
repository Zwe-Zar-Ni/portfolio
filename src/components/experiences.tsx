import { experiences } from "../config/experiences";

const HeadingNoise = ({ reverse = false }: { reverse?: boolean }) => {
  return (
    <div
      className={`flex gap-2 items-center justify-center ${reverse
        ? "flex-row-reverse"
        : "flex-row"}`}
    >
      <span className="w-3 h-3 border rounded-sm border-background-primary/80" />
      <span className="w-8 h-2 rounded-sm bg-background-primary/80" />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-4 mt-12 sm:gap-12">
      <span className="w-2 h-2 rounded-full opacity-20 bg-background-primary" />
      <span className="w-24 h-2 rounded-full opacity-20 bg-background-primary" />
      <span className="text-sm font-medium opacity-20 text-background-primary">
        1 2 3
      </span>
      <span className="w-24 h-2 rounded-full opacity-20 bg-background-primary" />
      <span className="w-2 h-2 rounded-full opacity-20 bg-background-primary" />
    </div>
  );
};

const Experiences = () => {
  return (
    <section className="max-w-screen-xl py-16 mx-auto">
      <div className="flex items-center justify-center gap-8 mb-12 sm:gap-24">
        <HeadingNoise />
        <h1 className="text-xl font-bold text-center text-heading-secondary">
          CAREER TRAJECTORY
        </h1>
        <HeadingNoise reverse />
      </div>
      <div className="relative flex items-center justify-center gap-8 sm:gap-16">
        <div className="flex items-end gap-4">
          <span className="w-3 h-3 bg-background-primary/50" />
          <span className="w-1 h-16 bg-background-primary" />
        </div>
        <h3 className="text-xl sm:text-4xl font-medium text-heading-foreground corner-box py-1.5 px-4">
          EXPERIENCE
        </h3>
        <h2 className="p-1.5 sm:px-4 text-heading-primary sm:min-w-[480px] min-w-[240px] font-black text-xl sm:text-4xl border rounded-sm border-background-primary">
          CAREER TRAJECTORY
        </h2>
        <div className="flex items-end gap-4">
          <span className="w-1 h-16 bg-background-primary" />
          <span className="w-3 h-3 bg-background-primary/50" />
        </div>
      </div>
      <ul className="px-8 mt-12">
        {experiences.map((exp, index) =>
          <li key={exp.date} className="relative mb-4">
            <span className="absolute w-4 h-4 rounded-sm bg-background-primary/60 -left-8" />
            {index < experiences.length - 1
              ? <span className="absolute w-[2px] h-full top-4 bg-background-primary/60 -left-[25px]" />
              : null}
            <div className="flex flex-col gap-4 mb-1 sm:items-center sm:flex-row">
              <h3 className="px-4 py-1 text-xl font-bold uppercase rounded-sm w-fit text-heading-foreground bg-background-primary">
                {exp.title}
              </h3>
              <p className="uppercase text-heading-secondary">
                [{exp.date}]
              </p>
            </div>
            <a
              target="_blank"
              href={exp.link}
              className="mb-1 underline uppercase text-heading-secondary"
            >
              {exp.company}
            </a>
            {exp.responsibilities && exp.responsibilities.length > 0
              ? exp.responsibilities.map((res, i) =>
                  <p
                    key={i}
                    className="text-sm font-medium text-paragraph-primary"
                  >
                    {res}
                  </p>
                )
              : null}
          </li>
        )}
      </ul>
      <Footer />
    </section>
  );
};

export default Experiences;
