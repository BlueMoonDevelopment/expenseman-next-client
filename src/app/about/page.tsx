import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import Image from "next/image";
import ProTip from '@/components/ProTip';

import {Metadata} from 'next'

import logo from "../../../public/img/logo/transparent-bg/expenseman-logo-transparent-with-symbol.png"

export const metadata: Metadata = {
    title: 'About',
}
export default function About() {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" component="h1" sx={{mb: 2}}>
                    Material UI - Next.js example in TypeScript
                </Typography>
                <Box sx={{maxWidth: 'sm'}}>
                    <Button variant="contained" component={NextLink} href="/">
                        Go to the home page
                    </Button>
                </Box>
                <ProTip/>
                <Image src={logo} alt={'Logo'}/>
            </Box>
        </Container>
    );
}
