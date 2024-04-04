import React from "react";
import IconButton from "@mui/material/IconButton";
import {useTheme} from "@mui/system";
import {ColorModeContext} from "@/components/layout/ThemedLayout";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuItem from "@mui/material/MenuItem";

export default function ToggleColorModeButton() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <MenuItem key="Toggle color mode" onClick={colorMode.toggleColorMode}>
            <IconButton  color="inherit">
                {theme.palette.mode === 'dark' ? <DarkModeIcon/> : <LightModeIcon/>}
            </IconButton>
        </MenuItem>
    );
}