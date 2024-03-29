import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import Image from "next/image";

import ProTip from '@/components/ProTip';

import logo from "../../public/img/logo/transparent-bg/expenseman-logo-transparent-with-symbol.png"
import SignInButton from "@/functions/SignInButton";

export default function Home() {
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
                    Material UI - Next.js App Router example in TypeScript
                </Typography>
                <Link href="/about" color="secondary" component={NextLink}>
                    Go to the about page
                </Link>
                <ProTip/>
                <SignInButton />
                <Image src={logo} alt={'Logo'}/>
            </Box>
        </Container>
    );
}
