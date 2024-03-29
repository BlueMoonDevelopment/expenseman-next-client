"use client"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Copyright from "@/components/Copyright";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import {GitHub} from "@mui/icons-material";
import {Grid} from "@mui/material";

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
                    <Grid container spacing={1} minHeight={80}>
                        <Grid xs display="flex" justifyContent="center" alignItems="center">
                            <Link href="https://github.com/BlueMoonDevelopment/expenseman-next-client" target="_blank"
                                  rel="noreferrer">
                                <Button variant="outlined" startIcon={<GitHub/>}>
                                    Source Code
                                </Button>
                            </Link>
                        </Grid>
                        <Grid xs display="flex" justifyContent="center" alignItems="center">
                            <Link href="https://github.com/BlueMoonDevelopment/" target="_blank"
                                  rel="noreferrer">
                                <Button variant="outlined" startIcon={<GitHub/>}>
                                    BlueMoonDevelopment
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <Container maxWidth="sm">
                        <Copyright/>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
