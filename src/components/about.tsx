import { tags } from "../configs/about";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center p-1 py-16 bg-gray-50">
      <Marquee
        className="max-w-4xl"
        gradient
        gradientColor="#F9FAFB"
        gradientWidth={80}
        pauseOnHover
        speed={75}
        direction="left"
      >
        {tags.slice(0, tags.length / 2).map((tag, index) => (
          <p
            key={index}
            className="px-4 py-1 mx-4 transition-all bg-teal-100 rounded-full cursor-pointer tags hover:-translate-y-1 hover:bg-purple-100"
          >
            {tag}
          </p>
        ))}
      </Marquee>
      <Marquee
        className="max-w-4xl mt-4"
        gradient
        gradientColor="#F9FAFB"
        gradientWidth={80}
        pauseOnHover
        speed={75}
        direction="right"
      >
        {tags.slice(tags.length / 2, tags.length).map((tag, index) => (
          <p
            key={index}
            className="px-4 py-1 mx-4 transition-all bg-purple-100 rounded-full cursor-pointer tags hover:-translate-y-1 hover:bg-teal-100"
          >
            {tag}
          </p>
        ))}
      </Marquee>
      {/* <div className="flex flex-wrap justify-center max-w-6xl gap-4 px-1 mx-auto md:px-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-1 transition-all rounded-full cursor-pointer tags hover:-translate-y-1 hover:bg-teal-50 bg-purple-50"
          >
            {tag}
          </span>
        ))}
      </div> */}
    </section>
  );
};

export default About;
