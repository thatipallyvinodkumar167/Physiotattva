import React, { useRef } from "react";
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Box,
} from "@mui/material";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ServiceCard({ service, index }) {
    const ref = useRef(null);
    const navigate = useNavigate();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useMotionTemplate`${useSpring(y)}deg`;
    const rotateY = useMotionTemplate`${useSpring(x)}deg`;

    return (
        <motion.div
            ref={ref}
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Card sx={{ height: 300, borderRadius: 4 }}>
                <Box sx={{ height: 4, bgcolor: service.color }} />

                <CardContent>
                    <Box sx={{ color: service.color, mb: 2 }}>
                        {service.icon}
                    </Box>

                    <Typography variant="h6" fontWeight="bold">
                        {service.title}
                    </Typography>

                    <Typography color="text.secondary">
                        {service.description}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button
                        endIcon={<ArrowForwardIcon />}
                        sx={{ color: service.color }}
                        onClick={() => navigate(`/services/${service.slug}`)}
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </motion.div>
    );
}
