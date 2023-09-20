import { FaCertificate } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";

export const SuggestedFollowingData = [
    {
      title: "Node.js and 9 others follow",
      name: "freeCodeCamp.org",
      icon: <FaCertificate className="text-info" />,
      type: "@freeCodeCamp",
      text: "We're a community of millions of people who are building new skills and getting new jobs togethe. A 501(v)(3) public charity. Tweets by",
      img: "/assets/rf.png",
      user: <BiSolidUser className="gray-text icon" />,
    },
    {
      title: "Node.js and 9 others follow",
      name: "TypeScript",
      type: "@typescript",
      text: "TypeScript is a language for application-scale javaScript devlopment. it's a typed superset of javascript that compiles to plain JavaScript.",
      img: "/assets/ts.png",
      icon: null,
      user: <BiSolidUser className="gray-text icon" />,
    },
    {
      title: "Yazeed Obaid and 3 others follow",
      name: `Tailwind css`,
      type: "@tailwindcss",
      text: "The utility-first CSS frawork. Rapidly build modern websites, without ever leaving your HTML.",
      img: "/assets/tw.jpeg",
      icon: <FaCertificate className="text-info" />,
      user: <BiSolidUser className="gray-text icon" />,
    },
  ]