import { Box } from "@mui/material";
import EducationCard from "./EducationCard";
import { EducationDetails } from "../../Details";
import { Grid } from "@mui/material";

const Education = () => {
  return (
    <>
      <Box className="section" id="education">
        <h2
          className="section__Exp__title"
          style={{ textAlign: "center", marginBottom: "0.5em" }}
        >
          Education
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
          My academic background and certifications.
        </p>
      </Box>
      <Box className="section">
        <Grid container justifyContent="space-between">
          {EducationDetails.map((edu) => {
            return <EducationCard edu={edu} key={edu.name} />;
          })}
        </Grid>
      </Box>
    </>
  );
};
export default Education;
