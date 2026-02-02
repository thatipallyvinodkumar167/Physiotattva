import Doctors from "../components/Doctors";
import Hero from "../components/Hero";
import ServicesPage from "../pages/ServicesPage";
import WhoWeAre from "../components/WhoWeAre";
import SymptomTreatments from "../components/SymptomTreatments";
import BangalorePresence from "../components/BangalorePresence";
import RecoveryStories from "../components/RecoveryStories";
import LatestBlogsSection from "../components/LatestBlogsSection";
import GetInTouchSection from "../components/GetInTouchSection";
import { Box } from "@mui/material";

function Home() {
    return (
        <>
            <Box sx={{ mt: { xs: 10, md: 12 } }}>
                <Hero />
            </Box>
            <WhoWeAre />
            <ServicesPage limit={6} /> {/* Show only 6 cards */}
            <SymptomTreatments />
            <Doctors />
            <BangalorePresence />
            <RecoveryStories />
            <LatestBlogsSection />
            <GetInTouchSection />
        </>
    )
}

export default Home;
