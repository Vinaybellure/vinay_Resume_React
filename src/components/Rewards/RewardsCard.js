import { Grid, Paper, Typography } from "@mui/material";
import "./Rewards.css";

const RewardsCard = (props) => {
  const { reward } = props;
  return (
    <>
      <Grid item xs={12} md={5.5}>
        <Paper
          elevation={3}
          className="rewards"
          style={{ textAlign: "left", background: "inherit" }}
        >
          <h3 style={{ color: "var(--clr-primary)" }}>{reward.name}</h3>
          <div className="projects__grid">
            <Typography variant="subtitle2" color="var(--clr-fg)">
              {reward.company} | {reward.when}
            </Typography>
            <Typography
              variant="subtitle2"
              color="var(--clr-fg)"
              sx={{ mt: 2 }}
            >
              {reward.details}
            </Typography>
          </div>
        </Paper>
      </Grid>
    </>
  );
};
export default RewardsCard;
