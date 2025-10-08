export const formalEducation = {
  category: "Formal Education",
  subTitle:
    "From fixing Ferraris to building software - the unconventional path",
  items: [
    {
      degree: "Military Service",
      institution: "Salzburg, Austria",
      period: "2011",
      focus: "Leadership training and discipline (mostly just discipline)",
    },
    {
      degree: "Car Mechatronics Engineer Apprenticeship",
      institution:
        "Karner & Grossegger, Salzburg (Ferrari, Maserati, Aston Martin & Bentley specialist)",
      period: "2007-2011",
      focus:
        "Diagnosing and fixing luxury cars, electronic systems, and learning that everything is just systems talking to each other",
      achievements: [
        "Passed final apprenticeship exam (officially a car mechanic)",
        "Specialized in luxury vehicle diagnostics and retrofitting electronics",
        "Became the unofficial IT support guy because I was the only one who understood computers",
        "Attended seminars on personality, appearance, and communication (learned to talk to rich people)",
      ],
    },
    {
      degree: "Polytechnic School - Electrical Engineering",
      institution: "Neumarkt (Department of Electrical Engineering)",
      period: "2006-2007",
      focus:
        "Electrical engineering basics - where I learned Ohm's law and soldering",
    },
  ],
} as const;
