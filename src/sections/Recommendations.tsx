import { Tab } from "@headlessui/react";
import { useFollowCursor } from "../utils/useFollowCursor";

const recommendationsData = [
  {
    personName: "Sklad",
    personImage: "SK",
    content:
      "Ajay - you have been such a great partner to the entire team, but marketing especially. You helped us solve many tricky problems leading up to and post launch and I’m very grateful for all your efforts! We will miss you",
  },
  {
    personName: "Veronica",
    personImage: "VE",
    content:
      "Ajay, best of luck in all your future endeavors! You’ve been a joy to work with, and we will miss you as a partner",
  },
  {
    personName: "Yianni",
    personImage: "YI",
    content:
      "Ajay, it was great working with you on the recruiting website asks. Thanks for your dedication, you’ll be missed! Wishing you the best in your next journey",
  },
  {
    personName: "Natalie",
    personImage: "NA",
    content:
      "Ajay, your work has been impactful in so many ways. We are going to miss you on the team! Best of luck in your future endeavors!",
  },
  {
    personName: "Dylan",
    personImage: "DY",
    content:
      "It was such a pleasure to work with you, Ajay! I appreciated your leadership as we worked on the updated site together. Good luck in what’s next!",
  },
  {
    personName: "Silas",
    personImage: "SI",
    content:
      "Ajay, thank you for your hard work and tireless efforts and how you always asked insightful questions about how to solve the most difficult web problem. Despite quick timelines you remained calm and patiently figured out solutions, did research proactively to make our website better, and were so easy and great to work with!",
  },
  {
    personName: "Dina",
    personImage: "DI",
    content:
      "Ajay! We’re going to miss you so much! Thank you for being an amazing web partner - specifically appreciate your ability to smile in the face of enormous responsibility and countless challenges. Your impact on Cruise is immeasurable. Hope to keep in touch and please reach out if I can help support you in any way.",
  },
  {
    personName: "Zach L",
    personImage: "ZL",
    content:
      "Ajay! Thank you so much for all of your incredible work over the past couple of years. You have always been kind, proactive, insightful, helpful, and one smart cookie! Very much appreciate you being on the team and wish you nothing but the best.",
  },
  {
    personName: "Boubacar",
    personImage: "BO",
    content:
      "You’ve been the best guide in my journey of getting comfortable on the website team. I’ve learned a lot from you, and loved your positive attitude and solution mindset even when timelines got rough. I look forward to seeing what great things you end up building out in the future.Thank you for everything!",
  },
];

function RecommendationPerson({
  selected,
  recommendation: { personName, personImage },
  minimal, // in list, only show icon in small screens
}: {
  selected: boolean;
  recommendation: Pick<
    (typeof recommendationsData)[number],
    "personName" | "personImage"
  >;
  minimal?: boolean;
}) {
  const imageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  };

  return (
    <div
      className={
        "rounded-full text-left p-1 flex gap-2 items-center bg-darkSecondary transition-all will-change-transform " +
        (minimal ? "md:pr-6 " : "pr-6 ") +
        (selected
          ? "bg-opacity-100 shadow-lg -translate-y-0.5"
          : "bg-opacity-30")
      }
    >
      <div
        className="w-8 h-8 md:w-12 md:h-12 rounded-full text-black bg-white"
        style={imageStyle}
      >
        {personImage}
      </div>

      <div className={minimal ? "hidden md:block" : ""}>
        <h3 className="text-sm md:text-base text-white">{personName}</h3>
      </div>
    </div>
  );
}

function RecommendationMessage({
  recommendation,
}: {
  recommendation: (typeof recommendationsData)[number];
}) {
  return (
    <div
      className="relative pt-8 bg-darkPrimary bg-opacity-80 text-lightPrimary rounded-xl shadow-lg"
      style={{ transform: "translateZ(100px)" }}
    >
      <div
        className="absolute -top-5 sm:left-7"
        style={{ transform: "translateZ(80px)" }}
      >
        <RecommendationPerson selected recommendation={recommendation} />
      </div>

      <div className="RecommendationQuote p-6 md:p-8">
        <blockquote
          className="whitespace-pre-wrap md:text-lg font-light"
          style={{ transform: "translateZ(100px)" }}
        >
          {recommendation.content}
        </blockquote>
      </div>
    </div>
  );
}

export function Recommendations() {
  const followCursor = useFollowCursor();

  return (
    <div
      id="Recommendations"
      onMouseMove={followCursor.handleContainerMouseMove}
      className="bg-darkSecondary bg-opacity-70"
    >
      <div className="container py-24 sm:py-32">
        <h2 className="text-white mb-20">
          <small className="uppercase">I am </small>
          <span className="FontFancy text-3xl sm:text-5xl font-bold block">
            Recommended by
          </span>
          <small className="uppercase"> awesome people</small>
        </h2>

        <Tab.Group>
          <div
            className={
              "bg-darkPrimary bg-opacity-30 shadow rounded-xl " +
              followCursor.className
            }
            style={followCursor.style}
          >
            <Tab.Panels>
              {recommendationsData.map((recommendation) => (
                <Tab.Panel key={recommendation.personName}>
                  <RecommendationMessage recommendation={recommendation} />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>

          <Tab.List className="flex flex-wrap gap-2 md:gap-4 my-8">
            {recommendationsData.map((recommendation) => (
              <Tab key={recommendation.personName}>
                {({ selected }) => (
                  <RecommendationPerson
                    selected={selected}
                    recommendation={recommendation}
                    minimal
                  />
                )}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
      </div>
    </div>
  );
}
