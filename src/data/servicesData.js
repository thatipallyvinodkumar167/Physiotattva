import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ElderlyIcon from "@mui/icons-material/Elderly";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

// Central services config used for cards and ServiceDetails
const servicesData = [
    {
        title: "Musculoskeletal Physio",
        slug: "musculoskeletal-physio",
        description:
            "Expert care for bones, joints and muscles including back pain, neck pain and arthritis.",
        icon: <FitnessCenterIcon fontSize="large" />,
        color: "#006D77",
    },
    {
        title: "Sports Rehabilitation",
        slug: "sports-rehabilitation",
        description:
            "Targeted recovery plans for athletes to regain strength and safely return to sport.",
        icon: <SportsKabaddiIcon fontSize="large" />,
        color: "#83C5BE",
    },
    {
        title: "Post-Surgery Rehab",
        slug: "post-surgery-rehab",
        description:
            "Structured rehabilitation after orthopedic and spine surgeries for optimal recovery.",
        icon: <LocalHospitalIcon fontSize="large" />,
        color: "#006D77",
    },
    {
        title: "Neurological Physio",
        slug: "neurological-physio",
        description:
            "Advanced therapy for stroke, Parkinson’s disease and other neurological conditions.",
        icon: <AccessibilityNewIcon fontSize="large" />,
        color: "#83C5BE",
    },
    {
        title: "Geriatric Care",
        slug: "geriatric-care",
        description:
            "Improving mobility, balance and independence for elderly patients.",
        icon: <ElderlyIcon fontSize="large" />,
        color: "#006D77",
    },
    {
        title: "Pediatric Physio",
        slug: "pediatric-physio",
        description:
            "Compassionate physiotherapy care focused on child development and milestones.",
        icon: <BabyChangingStationIcon fontSize="large" />,
        color: "#83C5BE",
    },
    // Extended speciality services
    {
        title: "Neuro Rehabilitation in Hyderabad",
        slug: "neuro-rehabilitation-hyderabad",
        description:
            "Comprehensive neuro rehabilitation programs to restore mobility, independence and confidence after neurological conditions.",
        icon: <AccessibilityNewIcon fontSize="large" />,
        color: "#006D77",
    },
    {
        title: "Stroke Rehabilitation Center in Hyderabad",
        slug: "stroke-rehabilitation-center-hyderabad",
        description:
            "Intensive, goal-oriented stroke rehab focusing on gait training, balance and upper limb recovery.",
        icon: <AccessibilityNewIcon fontSize="large" />,
        color: "#83C5BE",
    },
    {
        title: "Head Injury Rehabilitation in Hyderabad",
        slug: "head-injury-rehabilitation-hyderabad",
        description:
            "Specialised rehab for traumatic brain injury with focus on cognition, balance and functional independence.",
        icon: <AccessibilityNewIcon fontSize="large" />,
        color: "#006D77",
    },
    {
        title: "Physiotherapy in Hyderabad",
        slug: "physiotherapy-in-hyderabad",
        description:
            "End-to-end physiotherapy care for pain, stiffness, post-surgical recovery and chronic conditions.",
        icon: <FitnessCenterIcon fontSize="large" />,
        color: "#83C5BE",
    },
    {
        title: "Brachial Plexus Rehabilitation",
        slug: "brachial-plexus-rehabilitation",
        description:
            "Targeted rehab for brachial plexus injuries to restore arm strength, control and functional reach.",
        icon: <SportsKabaddiIcon fontSize="large" />,
        color: "#006D77",
    },
    {
        title: "Bladder and Bowel Rehabilitation",
        slug: "bladder-bowel-rehabilitation",
        description:
            "Pelvic floor and functional training to improve bladder and bowel control and quality of life.",
        icon: <LocalHospitalIcon fontSize="large" />,
        color: "#83C5BE",
    },
    {
        title: "Vestibular Rehabilitation",
        slug: "vestibular-rehabilitation",
        description:
            "Specialised exercises to treat vertigo, dizziness and balance problems due to vestibular disorders.",
        icon: <AccessibilityNewIcon fontSize="large" />,
        color: "#006D77",
    },
    {
        title: "Orthopedic Rehabilitation",
        slug: "orthopedic-rehabilitation",
        description:
            "Rehab for fractures, ligament injuries and joint replacements to regain strength and range of motion.",
        icon: <FitnessCenterIcon fontSize="large" />,
        color: "#83C5BE",
    },
    {
        title: "Sports Rehabilitation",
        slug: "sports-rehabilitation-advanced",
        description:
            "Advanced sports rehab protocols tailored for professional and recreational athletes.",
        icon: <SportsKabaddiIcon fontSize="large" />,
        color: "#006D77",
    },
    {
        title: "Post COVID Rehabilitation",
        slug: "post-covid-rehabilitation",
        description:
            "Cardio‑pulmonary and functional rehab to combat fatigue, breathlessness and deconditioning after COVID‑19.",
        icon: <LocalHospitalIcon fontSize="large" />,
        color: "#83C5BE",
    },
    {
        title: "Gynecology Rehabilitation",
        slug: "gynecology-rehabilitation",
        description:
            "Physiotherapy support for antenatal, postnatal and women’s pelvic health conditions.",
        icon: <BabyChangingStationIcon fontSize="large" />,
        color: "#006D77",
    },
    {
        title: "Cardio Pulmonary Rehabilitation",
        slug: "cardio-pulmonary-rehabilitation",
        description:
            "Supervised exercise and breathing programs for heart and lung conditions to improve endurance and safety.",
        icon: <LocalHospitalIcon fontSize="large" />,
        color: "#83C5BE",
    },
    {
        title: "COMA Care",
        slug: "coma-care",
        description:
            "Long‑term coma and low‑awareness state management focusing on positioning, contracture prevention and sensory input.",
        icon: <LocalHospitalIcon fontSize="large" />,
        color: "#006D77",
    },
    {
        title: "Pain Management",
        slug: "pain-management",
        description:
            "Multimodal physiotherapy approaches to reduce chronic pain and improve day‑to‑day function.",
        icon: <FitnessCenterIcon fontSize="large" />,
        color: "#83C5BE",
    },
    {
        title: "Bedsore Management",
        slug: "bedsore-management",
        description:
            "Prevention and management of pressure sores through positioning, mobility plans and tissue care.",
        icon: <LocalHospitalIcon fontSize="large" />,
        color: "#006D77",
    },
];

export default servicesData;
