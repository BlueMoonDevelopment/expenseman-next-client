"use client"

import {Roboto} from "next/font/google";
import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import NavBar from "@/components/NavBar/NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Footer from "@/components/layout/Footer";
import {SnackbarProvider} from "notistack";
import {amber, deepOrange, grey} from "@mui/material/colors";

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});

export default function ThemedLayout(props: { children: React.ReactNode }) {
    const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );



    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    /*
                    ...(mode === 'light'
                        ? {
                            // palette values for light mode
                            primary: amber,
                            divider: amber[200],
                            text: {
                                primary: grey[900],
                                secondary: grey[800],
                            },
                        }
                        : {
                            // palette values for dark mode
                            primary: deepOrange,
                            divider: deepOrange[700],
                            background: {
                                default: deepOrange[900],
                                paper: deepOrange[900],
                            },
                            text: {
                                primary: '#fff',
                                secondary: grey[500],
                            },
                        }),*/
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
        [mode],
    );


    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <SnackbarProvider anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}/>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <NavBar/>
                {props.children}
                <Container sx={{
                    display: {xs: 'none', md: 'flex'},
                    flexDirection: 'column',
                    minHeight: '50vh',
                }} maxWidth="sm">
                </Container>
                <Footer/>

            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}