"use client"
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import {useEffect, useState} from "react";
import {API_ENDPOINT_URL} from "@/configuration/configuration";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useRouter} from "next/navigation";

export default function UserMenu() {
    const [signed, setSigned] = useState<Boolean | null>(null);
    const [isLoading, setLoading] = useState(true);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    let settings: MenuEntry[] = [];

    const router = useRouter();
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    useEffect(() => {
        const url = API_ENDPOINT_URL + '/auth/checksignedin';
        fetch(url, {
            method: 'GET',
            credentials: 'include',
        }).then((res) => res.status)
            .then((status) => {
                const signedIn: boolean = status == 200;
                setSigned(signedIn);
                setLoading(false);
            });
    }, []);

    if (isLoading) return <></>

    if (signed) {
        settings = [
            {name: 'Profile', url: '/app/profile'},
            {name: 'Account', url: '/app/account'},
            {name: 'Dashboard', url: '/app/'},
            {name: 'Sign out', url: '/auth/signout'}
        ];
        return (
            <Box sx={{flexGrow: 0}}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{mt: '45px'}}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {settings.map((setting) => (
                        <MenuItem key={setting.name} onClick={() => router.push(setting.url)}>
                            <Typography textAlign="center">{setting.name}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        )
    } else {
        settings = [
            {name: 'Sign in', url: '/auth/signin'},
            {name: 'Sign up', url: '/auth/signup'},
        ];
        return (
            <>
                <Box sx={{flexGrow: 0}}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{p: 0}} size={"large"}>
                            <AccountCircleIcon fontSize={"inherit"}/>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{mt: '45px'}}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting.name} onClick={() => router.push(setting.url)}>
                                <Typography textAlign="center">{setting.name}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </>

        )
    }
}