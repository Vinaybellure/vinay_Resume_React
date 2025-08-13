import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";
import "./ExperienceCard.css";

const ExperienceCard = (props) => {
  const { exp } = props;
  return (
    <>
      <Box
        className="exp"
        style={{
          textAlign: "left",
          marginBottom: "30px !important",
        }}
      >
        <h3 style={{ color: "var(--clr-primary)" }}>{exp.desgnation}</h3>
        <div className="projects__grid">
          <Typography variant="subtitle2" color="var(--clr-fg)">
            {exp.companyName} | Jan 2022 – Current | Bengaluru, Karnataka
          </Typography>
          <List dense sx={{ pl: 2, mt: 2 }}>
            {exp.rolesAndResponsibility.map((point, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                <ListItemText primary={` ${point}`} />
              </ListItem>
            ))}
          </List>
          <Box mt={2}>
            <ul className="skills__list1">
              {exp.techStack.map((skill) => (
                <li key={skill} className="skills__list-item btn btn--plain">
                  {skill}
                </li>
              ))}
            </ul>
          </Box>
        </div>
      </Box>
    </>
  );
};
export default ExperienceCard;
