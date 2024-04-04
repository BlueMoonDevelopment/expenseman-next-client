import * as React from "react";
import {useRouter} from "next/navigation";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logoIcon from "../../../public/img/newlogo.svg";
import SvgIcon from "@mui/material/SvgIcon";

export default function PageMenu() {
    const pages: MenuEntry[] = [
        {name: 'Products', url: '/products'},
        {name: 'Pricing', url: '/pricing'},
        {name: 'Blog', url: '/Blog'},
    ];
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);


    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const router = useRouter();

    return (
        <>
            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: {xs: 'block', md: 'none'},
                    }}
                >
                    {pages.map((page) => (
                        <MenuItem key={page.name} onClick={() => router.push(page.url)}>
                            <Typography textAlign="center">{page.name}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            <SvgIcon component={logoIcon} sx={{display: {xs: 'flex', md: 'none'}, mr: 1, width: "2em", height: "2em"}}/>
            <Typography
                variant="h5"
                noWrap
                component="a"
                onClick={() => router.push('/')}
                sx={{
                    mr: 2,
                    display: {xs: 'flex', md: 'none'},
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                EXPENSEMAN
            </Typography>
            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                {pages.map((page) => (
                    <Button
                        key={page.name}
                        onClick={() => router.push(page.url)}
                        sx={{my: 2, color: 'white', display: 'block'}}
                    >
                        {page.name}
                    </Button>
                ))}
            </Box>
        </>
    )
}