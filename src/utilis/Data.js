import homeless from "/images/homeless.png";
import medical from "/images/medical.png";
import education from "/images/education.png";
import banner from "/images/banner.png";

export const cause = [
  {
    id: 1,
    category: "Medical",
    title: "Emergency campaign for medical treatment",
    img: medical,
    raised: "$2000",
    goal: "$12000",
  },
  {
    id: 2,
    category: "Education",
    title: "Raising fund for better child education",
    img: education,
    raised: "$2500",
    goal: "20000",
  },
  {
    id: 3,
    category: "Feeding",
    title: "Help put smile on hungry faces as we feed them",
    img: homeless,
    raised: "$3500",
    goal: "$30000",
  },
  {
    id: 4,
    category: "Home",
    title: "Urgent raising for homeless children",
    img: banner,
    raised: "$4100",
    goal: "$35000",
  },
];
