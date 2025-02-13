import React from 'react';
import { Container, Typography, Link } from '@mui/material';

export default function ContactView() {
    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant="body1">
                If you have any questions or comments, please feel free to contact us at
                <Link href="mailto:info@dishdelights.com"> info@dishdelights.com</Link>.
            </Typography>
        </Container>
    );
}