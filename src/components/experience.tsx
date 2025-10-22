const Experience = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl px-1 mx-auto md:px-6">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
          Work Experience
        </h2>
        <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Software Engineer
            </h3>
            <p className="text-lg font-medium text-blue-600">OOAK Inc</p>
            <p className="text-gray-600">December 2023 - Present</p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-gray-900">
              Responsibilities & Contributions:
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="mt-1 text-blue-500">•</span>
                <span>
                  Developed and maintained full-stack web applications,
                  including a multi-vendor eCommerce platform and various
                  business management systems.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-blue-500">•</span>
                <span>
                  Built internal tools and dashboards for telecom and restaurant
                  operations, including SIM/WiFi order management, employee
                  scheduling, and inventory tracking.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-blue-500">•</span>
                <span>
                  Created a comprehensive school management system for handling
                  student information and academic processes.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-blue-500">•</span>
                <span>
                  Designed and implemented job listing and job-seeking platforms
                  with intuitive dashboards.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-blue-500">•</span>
                <span>
                  Developed a private messaging app tailored for a business
                  community spanning telecom, retail, education, and real estate
                  sectors.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-blue-500">•</span>
                <span>
                  Led the development of cross-platform inventory management
                  solutions using React Native for restaurant operations.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-blue-500">•</span>
                <span>
                  Collaborated closely with cross-functional teams to deliver
                  user-centric, scalable, and efficient software solutions.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-blue-500">•</span>
                <span>
                  Solved real-world business challenges by automating manual
                  workflows, improving data organization, and enhancing system
                  usability across web and mobile platforms.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
