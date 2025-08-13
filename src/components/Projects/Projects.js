import { Box } from "@mui/material";
import "./Projects.css";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import { ProjectsDetails } from "../../Details";
import { Grid } from "@mui/material";

const Projects = () => {
  return (
    <section id="projects">
      <Box className="section">
        <h2
          className="section__Exp__title"
          style={{ textAlign: "center", marginBottom: "0.5em" }}
        >
          Projects
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
        <p className="about__desc">Projects i have been worked on</p>
      </Box>
      {/* <Box
        style={{ display: "flex", gap: 10, justifyContent: "space-between" }}
      > */}
      <Box className="section">
        <Grid container justifyContent="space-between">
          {ProjectsDetails.map((project) => {
            return <ProjectsCard project={project} key={project.name} />;
          })}
        </Grid>
      </Box>
      {/* </Box> */}
    </section>
  );
};
export default Projects;
