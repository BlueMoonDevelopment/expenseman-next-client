"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import UserMenu from '@/components/NavBar/UserMenu';
import {useRouter} from "next/navigation";
import PageMenu from '@/components/NavBar/PageMenu';
import logoIcon from "../../../public/img/logo-trans.svg";
import SvgIcon from "@mui/material/SvgIcon";


function NavBar() {
    const router = useRouter();

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <SvgIcon component={logoIcon} sx={{display: {xs: 'none', md: 'flex'}, mr: 1, width: "2em", height: "2em"}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        onClick={() => router.push('/')}
                    >
                        EXPENSEMAN
                    </Typography>
                    <PageMenu/>
                    <UserMenu/>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;