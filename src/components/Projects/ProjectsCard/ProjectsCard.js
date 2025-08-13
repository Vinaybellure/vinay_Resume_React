import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";
import "./ProjectsCard.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { Grid, Paper, Typography } from "@mui/material";

const ProjectsCard = (props) => {
  const { project } = props;
  return (
    <>
      <Grid item xs={12} md={5.5}>
        <Paper
          className="project"
          style={{ textAlign: "left", background: "inherit" }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ color: "var(--clr-primary)" }}>{project.name}</h3>
            <a href={project.link} className="link link--icon" target="_blank">
              <OpenInNewIcon />
            </a>
          </Box>

          <div className="projects__grid">
            <List dense sx={{ pl: 2, mt: 2 }}>
              {project.description.map((point, index) => (
                <ListItem
                  key={index}
                  disablePadding
                  sx={{ mb: 1, color: "var(--clr-fg)" }}
                >
                  <ListItemText primary={` ${point}`} />
                </ListItem>
              ))}
            </List>
            <Box mt={2}>
              <ul
                className="skills__list"
                style={{ maxWidth: "auto", color: "var(--clr-fg)" }}
              >
                {project.techStack.map((skill) => (
                  <li key={skill} className="skills__list-item btn btn--plain">
                    {skill}
                  </li>
                ))}
              </ul>
            </Box>
          </div>
        </Paper>
      </Grid>
    </>
  );
};
export default ProjectsCard;
