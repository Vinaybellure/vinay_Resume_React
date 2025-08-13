import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { experienceDetails } from "../../Details";
const Experience = () => {
  return (
    <section id="experience">
      <Box className="section">
        <h2
          className="section__Exp__title"
          style={{ textAlign: "center", marginBottom: "0.5em" }}
        >
          Experience
        </h2>

        <Box
          sx={{
            width: 60,
            height: 5,
            backgroundColor: "var(--clr-primary)",
            mx: "auto",
            my: 1,
            borderRadius: "5px",
          }}
        />

        <p className="about__desc">
          Companies I’ve worked with and the roles I’ve played.
        </p>
      </Box>
      <Box className="section">
        {experienceDetails.map((exp) => {
          return <ExperienceCard exp={exp} key={exp.companyName} />;
        })}
      </Box>
    </section>
  );
};
export default Experience;
