import { Box } from "@mui/material";
import RewardsCard from "./RewardsCard";
import { RewardsDetails } from "./RewardsDetails";
import { Grid } from "@mui/material";

const Rewards = () => {
  return (
    <>
      <Box className="section" id="awards">
        <h2
          className="section__Exp__title"
          style={{ textAlign: "center", marginBottom: "0.5em" }}
        >
          AWARDS
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
          Recognition and milestones achieved throughout my career.
        </p>
      </Box>
      <Box className="section">
        <Grid container justifyContent="space-between">
          {RewardsDetails.map((reward) => {
            return <RewardsCard reward={reward} key={reward.name} />;
          })}
        </Grid>
      </Box>
    </>
  );
};
export default Rewards;
