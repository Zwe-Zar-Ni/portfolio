const Hero = () => {
  return (
    <section className="max-w-screen-xl py-16 mx-auto">
      <h1 className="mb-24 text-xl font-black text-center sm:text-3xl text-heading-primary">
        [ZWE ZAR NI // SYSTEM V3.0]
      </h1>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-medium text-heading-secondary">PERSONAL</h2>
        <div className="relative flex w-full gap-4 p-3 mt-4 border rounded border-background-primary/70 hero-card md:max-w-screen-lg">
          <span className="absolute w-8 h-1 rounded-sm bg-background-primary/80 -top-4 left-40" />
          <span className="absolute w-8 h-1 rounded-sm bg-background-primary/80 -top-4 right-40" />
          <span className="absolute w-px h-8 rounded-sm bg-background-primary/80 top-24 -left-4" />
          <span className="absolute w-px h-8 rounded-sm bg-background-primary/80 top-24 -right-4" />
          <span className="w-40 h-1 rounded-sm bg-background-primary/80 absolute right-[100px] -bottom-4" />
          <span className="w-1 h-1 rounded-sm bg-background-primary/80 absolute right-[90px] -bottom-4" />
          <span className="w-20 h-1 rounded-sm bg-background-primary/80 absolute left-[20px] -bottom-4" />
          <span className="absolute w-px h-8 rounded-sm bg-background-primary/80 top-24 -right-4" />
          <div className="flex-grow">
            <h3 className="bg-background-primary p-1.5 font-bold text-xl text-heading-foreground mb-4">
              PERSONAL IDENTIFICATION
            </h3>
            <p className="text-paragraph-primary border border-paragraph-primary p-1.5">
              FULL NAME: ZWE ZAR NI
              <br />
              SPECIALITY: SOFTWARE ENGINEER
              <br />
              LOCATION: YANGON, MYANMAR
              <br />
              EXPERIENCE: 3 YEARS
              <br />
              <a href="mailto:heinzwe2626@gmail.com" target="_blank">
                CONTACT:{" "}
                <span className="underline">heinzwe2626@gmail.com</span>
              </a>
            </p>
          </div>
          <div className="sm:h-[192px] h-[100px] w-[100px] sm:w-[192px] bg-blue-800/30 overflow-hidden z-0">
            <img
              src="/profile.png"
              className="object-cover w-full h-full rounded-sm"
              alt="Portfolio"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
