import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link as RouterLink } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "80vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.55)
          ),
          url("/images/hero-bg.png")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="lg">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <Box sx={{ maxWidth: 740 }}>
            {/* Main Heading */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                lineHeight: 1.2,
                fontSize: { xs: "2.4rem", md: "3.6rem" },
              }}
            >
              SRI SAI PRIYA
              <br />
              <Typography component="span" variant="inherit" sx={{ color: theme.palette.primary.light }}>PHYSIOTHERAPY</Typography>
            </Typography>

            {/* Sub Heading */}
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 500,
                color: "#d1fae5",
              }}
            >
              Modern Clinics • Skilled Practitioners • Quality Care
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                mb: 5,
                fontSize: "1.05rem",
                color: "#e5e7eb",
                lineHeight: 1.7,
              }}
            >
              At SRI SAI PRIYA PHYSIOTHERAPY, we are committed to bring access to quality physio care through ultra-modern clinics and high-skilled practitioners to all.
            </Typography>

            {/* CTA Buttons */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2.5}
            >
              <Button
                component={RouterLink}
                to="/services"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 4,
                  py: 1.6,
                  borderRadius: "30px",
                  fontWeight: 700,
                  textTransform: "none",
                  bgcolor: theme.palette.primary.main,
                  "&:hover": {
                    bgcolor: theme.palette.primary.dark,
                  },
                }}
              >
                Start Your Recovery Today
              </Button>

              <Button
                component={RouterLink}
                to="/book-appointment"
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.6,
                  borderRadius: "30px",
                  fontWeight: 700,
                  textTransform: "none",
                  color: "#fff",
                  borderColor: "#fff",
                  "&:hover": {
                    borderColor: theme.palette.primary.light,
                    color: theme.palette.primary.light,
                  },
                }}
              >
                Book An Appointment
              </Button>

              <Button
                component={RouterLink}
                to="/contact"
                startIcon={<PhoneIcon />}
                size="large"
                sx={{
                  px: 4,
                  py: 1.6,
                  borderRadius: "30px",
                  fontWeight: 700,
                  textTransform: "none",
                  color: "#fff",
                }}
              >
                Talk To Our Physiotherapist
              </Button>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
