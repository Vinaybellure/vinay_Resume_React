import { Grid, Paper, Typography } from "@mui/material";
import "./Education.css";

const EducationCard = (props) => {
  const { edu } = props;
  return (
    <>
      <Grid item xs={12} md={5.5}>
        <Paper
          className="education"
          style={{ textAlign: "left", background: "inherit" }}
        >
          <h3 style={{ color: "var(--clr-primary)" }}>{edu.study}</h3>
          <div className="projects__grid">
            <Typography
              variant="subtitle2"
              color="var(--clr-fg)"
              sx={{ mt: 2 }}
            >
              {edu.name} | {edu.startYear} – {edu.endYear}
            </Typography>
            <Typography variant="subtitle2" color="var(--clr-fg)">
              {edu.place}
            </Typography>
          </div>
        </Paper>
      </Grid>
    </>
  );
};
export default EducationCard;
