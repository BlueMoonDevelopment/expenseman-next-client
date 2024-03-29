import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';

import Copyright from "@/components/Copyright";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import {GitHub} from "@mui/icons-material";
import ScrollToTop from "react-scroll-to-top";

export default function Footer() {
    const styles: React.CSSProperties = {
        backgroundColor: theme.palette.primary.main,
        color: 'white'
    }
    return (
        <>
            {/*<ScrollToTop smooth component={<MySVG/>} style={styles}/>*/}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '50vh',
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
                        <Typography variant="body1">
                            <Link href="https://github.com/BlueMoonDevelopment" target="_blank" rel="noreferrer">
                                <Button variant="outlined" startIcon={<GitHub />}>
                                    BlueMoonDevelopment
                                </Button>
                            </Link>
                            <Link href="https://github.com/BlueMoonDevelopment/expenseman-react-client" target="_blank" rel="noreferrer">
                                <Button variant="outlined" startIcon={<GitHub />}>
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
