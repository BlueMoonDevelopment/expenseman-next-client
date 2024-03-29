import * as React from 'react';
import type {Metadata} from "next"
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
    title: {
        template: '%s | ExpenseMan.app',
        default: 'ExpenseMan',
    },
    description: 'Manage your income and expenses with ExpenseMan',
    authors: [{name: 'BlueMoonDevelopment'}],
    keywords: ['expense', 'income', 'account', 'manage', 'money', 'expenseman'],

    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        title: 'ExpenseMan',
        description: 'Manage your income and expenses with ExpenseMan',
        images: [
            {
                url: '/img/banner/banner-1280x640.png',
                width: 1200,
                height: 600,
            }
        ],
        locale: 'en_US',
    },
    manifest: '/manifest.json',
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}
export default function RootLayout(props: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <AppRouterCacheProvider options={{enableCssLayer: true}}>
            <ThemeProvider theme={theme}>
                <NavBar />
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                {props.children}
                <Footer/>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
