import React from "react";
import { IoMdContact } from "react-icons/io";
import { GiGraduateCap } from "react-icons/gi";
import { GrStatusGood } from "react-icons/gr";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const Info = [
  {
    id: 1,
    name: "Profile",
    icon: <IoMdContact />,
    dirIcon: <IoIosArrowDroprightCircle />,
  },

  {
    id: 2,
    name: "Courses",
    icon: <GiGraduateCap />,
    dirIcon: <IoIosArrowDroprightCircle />,
  },
  {
    id: 3,
    name: "Attendance",
    icon: <GrStatusGood />,
    dirIcon: <IoIosArrowDroprightCircle />,
  },
];

export default Info;
