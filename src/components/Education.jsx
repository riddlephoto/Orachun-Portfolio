import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Box, Typography } from "@mui/material";

import "react-vertical-timeline-component/style.min.css";

import "./education.css";

import { SkLogo, CuLogo } from "../assets";

// const ExperiencesCard = ({ experiences }) => (
//   <VerticalTimelineElement
//     contentStyle={{ background: "#1d1836", color: "#fff" }}
//     contentArrowStyle={{borderRight:"7px solid #232631"}}
//     date={experiences.date}
//     iconStyle={{background:"#fff"}}
//     icon={
//       <div>
//         <img className="Timeline_Icon" src={experiences.icon} alt="School" />
//       </div>
//     }
//   >
//     <div>
//       <Typography
//         color="var(--color-p2)"
//         fontFamily="var(--font-family)"
//         fontSize="32px"
//       >{experiences.school}
//       </Typography>
//     </div>
//   </VerticalTimelineElement>
// );

const Education = () => {
  return (
    <Box clasName="TimeLine_Container">
      <Typography
        color="var(--color-p2)"
        fontFamily="var(--font-family)"
        fontSize={{ xs: "60px", md: "83px" }}
        fontWeight="700"
        marginBottom="19px"
        textAlign={{ xs: "start" }}
      >
        Education
      </Typography>
      <Box className="Vertical_Timeline">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#604F71", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #604F71" }}
            date="2016 - 2018"
            iconStyle={{ background: "white", color: "#fff" }}
            icon={<img className="Timeline_Icon" src={SkLogo} alt="School" />}
          >
            <h3 className="vertical-timeline-element-title">
              Suankularb Wittayalai School
            </h3>
            <ul className="Education_List">
              <li>Studied in “Gifted Math Program”</li>
              <li>
                Awarded first runner-up in the "District Math Project
                Competition."
              </li>
              <li>GPAX: 3.63</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#604F71", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #604F71" }}
            date="2019 - 2022"
            iconStyle={{ background: "white", color: "#fff" }}
            icon={<img className="Timeline_Icon" src={CuLogo} alt="School" />}
          >
            <h3 className="vertical-timeline-element-title">
              Chulalongkorn University
            </h3>
            <ul className="Education_List">
              <li>Studied in “Aerospace engineering”</li>
              <li>
                Participated in the “Thailand Association of Aerospace Engineer
                (TAAE) Competition”
              </li>
              <li>Participated in the “Design Build Fly (DBF) Competition”</li>
              <li>
                Created “Conceptual RC Aircraft Design Website” as a senior
                project
              </li>
              <li>GPAX: 3.30</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Box>
    </Box>
  );
};

export default Education;
