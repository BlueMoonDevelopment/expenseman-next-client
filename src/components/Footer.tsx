"use client"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Copyright from "@/components/Copyright";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import {GitHub} from "@mui/icons-material";

export default function Footer() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '16.6vh',
                }}
            >
                <CssBaseline/>
                <Box component="footer" sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
                }}>
                    <Container maxWidth="sm">
                        <Typography variant="body2">
                            <Link href="https://github.com/BlueMoonDevelopment" target="_blank" rel="noreferrer">
                                <Button variant="outlined" startIcon={<GitHub/>}>
                                    BlueMoonDevelopment
                                </Button>
                            </Link>
                            <Link href="https://github.com/BlueMoonDevelopment/expenseman-react-client" target="_blank"
                                  rel="noreferrer">
                                <Button variant="outlined" startIcon={<GitHub/>}>
                                    Source Code
                                </Button>
                            </Link>
                        </Typography>
                        <Copyright/>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
