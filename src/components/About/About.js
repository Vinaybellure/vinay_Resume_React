import { Box } from "@mui/material";
import "./About.css";
import Grid from "@mui/material/Grid2";
import Skills from "./Skills/Skills";
import { GitHub } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { personalDetails } from "../../Details";
import Tooltip from "@mui/material/Tooltip";
import pdf from "../../Assets/VINAY_REACT_RESUME.pdf";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "VINAY_REACT_RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <section id="about">
        <Box>
          <h2 className="section__title" style={{ textAlign: "center" }}>
            About Me
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
            A snapshot of my journey — the skills I've honed and the passions
            that drive my work
          </p>
        </Box>
        <Box>
          <Grid container spacing={8}>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <section className="section skills" id="skills">
                <h2 className="section__title">Get to know me!</h2>
                <p className="get__desc">
                  I’m a software engineer with strong expertise in React,
                  JavaScript, and AWS, specializing in building scalable,
                  high-performance web applications. My experience spans
                  crafting responsive user interfaces, integrating APIs, and
                  optimizing application performance to meet both technical and
                  business goals.
                </p>
                <p className="get__desc" style={{ marginTop: 20 }}>
                  I’m passionate about delivering clean, maintainable code and
                  creating digital solutions that are both functional and
                  user-friendly. Whether collaborating with cross-functional
                  teams, mentoring developers, or exploring emerging
                  technologies, I focus on producing work that drives results
                  and enhances user experiences.
                </p>
                <div className="about__contact center">
                  <Tooltip title="GitHub">
                    <a
                      href={personalDetails.github}
                      aria-label="github"
                      className="link link--icon"
                      target="_blank"
                    >
                      <GitHub />
                    </a>
                  </Tooltip>
                  <Tooltip title="Linked In">
                    <a
                      href={personalDetails.linkedin}
                      aria-label="linkedin"
                      className="link link--icon"
                      target="_blank"
                    >
                      <LinkedInIcon />
                    </a>
                  </Tooltip>
                  <Tooltip title={personalDetails.tooltipPhone}>
                    <a
                      href={personalDetails.phone}
                      aria-label="Phone"
                      className="link link--icon"
                    >
                      <PhoneIcon />
                    </a>
                  </Tooltip>
                  <Tooltip title={personalDetails.tooltipMail}>
                    <a
                      href={personalDetails.email}
                      aria-label="Email"
                      className="link link--icon"
                      target="_blank"
                    >
                      <EmailIcon />
                    </a>
                  </Tooltip>
                  <button onClick={handleDownload}>
                    <span type="button" className="btn btn--outline">
                      Resume
                    </span>
                  </button>
                </div>
              </section>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Box>
                <Skills />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </section>
    </>
  );
};

export default About;
