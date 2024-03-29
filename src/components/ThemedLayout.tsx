"use client"

import {Roboto} from "next/font/google";
import {useMediaQuery} from "@mui/material";
import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import NavBar from "@/components/NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Footer from "@/components/Footer";

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});


export default function ThemedLayout(props: { children: React.ReactNode }) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
                typography: {
                    fontFamily: roboto.style.fontFamily,
                },
                components: {
                    MuiAlert: {
                        styleOverrides: {
                            root: ({ownerState}) => ({
                                ...(ownerState.severity === 'info' && {
                                    backgroundColor: '#60a5fa',
                                }),
                            }),
                        },
                    },
                },
            }),
        [prefersDarkMode],
    );
    return (
        <ThemeProvider theme={theme}>
            <NavBar/>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline/>
            <Container component="main" sx={{mt: 8, mb: 2}} maxWidth="sm">
                {props.children}
            </Container>
            <Footer/>
        </ThemeProvider>
    );
}