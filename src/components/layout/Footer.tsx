import * as React from 'react';

import Copyright from "@/components/layout/Copyright";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import {GitHub} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";

export default function Footer() {
    return (
        <Box component="footer" sx={{
            p: 3,
            backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        }}>
            <Grid container spacing={5} alignItems="center">
                <Grid xl={8} lg={8} md={12} sm={12} xs={12} display={"flex"} justifyContent="flex-start">
                    <Copyright/>
                </Grid>
                <Grid xl={2} lg={2} md={4} sm={4} xs={4} display={"flex"}>
                    <Link href="https://github.com/BlueMoonDevelopment/expenseman-next-client"
                          target="_blank"
                          rel="noreferrer">
                        <Button variant="contained" startIcon={<GitHub/>}>
                            Source Code
                        </Button>
                    </Link>
                </Grid>
                <Grid xl={2} lg={2} md={4} sm={4} xs={4} display={"flex"}>
                    <Link href="https://github.com/BlueMoonDevelopment/" target="_blank"
                          rel="noreferrer">
                        <Button variant="contained" startIcon={<GitHub/>}>
                            BlueMoonDevelopment
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}
