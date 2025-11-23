import { Code, Layers, Smartphone, Zap, Users, TrendingUp } from "lucide-react";

const About = () => {
  const qualities = [
    {
      icon: Zap,
      title: "Responsive",
      description: "Mobile-first design approach"
    },
    {
      icon: Users,
      title: "User-friendly",
      description: "Intuitive interfaces"
    },
    {
      icon: Code,
      title: "Clean & Maintainable",
      description: "Quality code standards"
    },
    {
      icon: Layers,
      title: "Cross-functional",
      description: "Team collaboration"
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "Always evolving"
    },
    {
      icon: Smartphone,
      title: "Professional Growth",
      description: "Career-focused"
    }
  ];

  const expertise = [
    { label: "Frontend", color: "bg-blue-100 text-blue-800" },
    { label: "Backend", color: "bg-indigo-100 text-indigo-800" },
    { label: "Mobile", color: "bg-green-100 text-green-800" },
    { label: "Full Stack", color: "bg-orange-100 text-orange-800" }
  ];

  return (
    <section id="about" className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="text-3xl font-bold text-center text-gray-900">
              About Me
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            A passionate software engineer with 2 years of experience building
            scalable applications
          </p>
        </div>

        <div className="grid items-center gap-12 mb-16 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              Building Digital Solutions That Matter
            </h3>
            <p className="leading-relaxed text-gray-600">
              I specialize in creating full-stack applications that solve
              real-world business challenges. From multi-vendor eCommerce
              platforms to internal business tools, I focus on delivering
              responsive, user-friendly solutions that enhance productivity and
              user experience.
            </p>
            <p className="leading-relaxed text-gray-600">
              My approach combines technical expertise with a deep understanding
              of business needs, ensuring every project I work on delivers
              measurable value while maintaining clean, maintainable code
              standards.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className={`px-6 py-3 ${item.color} font-medium rounded-full shadow transform hover:scale-105 transition-all duration-300`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {qualities.map((quality, index) => {
              const Icon = quality.icon;
              return (
                <div
                  key={index}
                  className="p-6 transition-all duration-300 transform bg-white shadow rounded-3xl hover:shadow-lg hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-center mb-4 w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-400 rounded-2xl">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-gray-800">
                    {quality.title}
                  </h4>
                  <p className="text-sm text-gray-600">{quality.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
