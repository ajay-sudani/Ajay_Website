const experiencesData = [
  {
    title: "Surge Cloud",
    description:
      "This is a real-time application developed in Angular and .NET, and we also implemented Socket.IO for real-time data. The app provides a solution for companies in various fields such as mining, rail and locomotive, transit, bus, highway transportation, power generators, and off-highway transportation.",
  },
  {
    title: "Recruiter | Jobs Fair",
    description:
      "This is a site for real-time job seekers who post their details, including email, phone number, location, and the type of job they are looking for. A recruiter can then access the database and sift through for the type of job seeker they are looking for.",
  },
  {
    title: "Involved Tech",
    description:
      "This is a portal for students and parents. Students can see their lecture details, timing, information about the teacher, and more. Students and parents can create their profiles, and parents can see their student's performance.",
  },
  {
    title: "Cloudart",
    description:
      "This is a platform to decide your server space based on your requirements and provides you with the most cost-effective server suggestions from a list of servers. The user needs to enter their requirements about their server, and this platform will give the best suggestions considering cost, space, memory, RAM, and so on.",
  },
];

function ExperienceItem({
  experience,
}: {
  experience: (typeof experiencesData)[number];
}) {
  const { title, description } = experience;

  return (
    <div className="relative whitespace-pre-wrap sm:flex gap-4 items-start">
      <div className="hidden sm:block w-px h-full absolute top-0 left-5 bg-white shadow" />

      <div className="relative hidden sm:block rounded-full overflow-hidden p-4 bg-white flex-shrink-0">
        <p className="block w-2 h-2 object-contain"></p>
      </div>

      <div className="relative inline-grid gap-3 sm:gap-6">
        <div className="text-gray-200">
          <h2 className="font-semibold sm:text-xl text-gray-100">{title}</h2>
        </div>

        <p className="text-gray-300 font-light text-sm sm:text-base max-w-2xl mb-3 sm:list-disc">
          {description}
        </p>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <div id="Projects" className="bg-accent">
      <div className="container py-24 sm:py-32">
        <h2 className="text-white mb-20">
          <small className="uppercase">The amazing </small>
          <span className="FontFancy text-3xl sm:text-5xl font-bold block">
            Projects
          </span>
          <small className="uppercase"> I have completed</small>
        </h2>

        <div className="grid gap-10 sm:gap-20">
          {experiencesData.map((experience) => (
            <ExperienceItem key={experience.title} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
