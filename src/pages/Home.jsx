import AppointmentForm from "../components/AppointmentForm";
import Doctors from "../components/Doctors";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";


function Home() {

    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Doctors />
            <Testimonials />
            <AppointmentForm />

        </>
    )
}
export default Home;