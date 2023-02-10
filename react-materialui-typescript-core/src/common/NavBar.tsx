import React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
//import AdbIcon from '@mui/icons-material/Adb';
import YourSVG from '../core_icons/CoreCapitalSAF_logo.svg'
//import { makeStyles } from "@mui/material";
//import { minWidth, padding, width } from "@mui/system";
//import SearchIcon from '@mui/icons-material/Search';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
//import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ListItemIcon from '@mui/material/ListItemIcon';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
//import { pink } from "@mui/material/colors";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
//import { Link } from 'react-router-dom';
import { redirect, Link, useNavigate } from "react-router-dom";
export const NavBar: React.FunctionComponent<{}> = () => {
    
    // const pages = ['Actualizar', 'Busqueda', 'Carga Archivo'];
    const navigate = useNavigate();
    const pages = [
        {
            name: 'Actualizar',
            ruta: '/user',
            sticon: <SensorOccupiedIcon />,
        },
        {
            name: 'Busqueda',
            ruta: '/search',
            sticon: <ManageSearchIcon />,
        },
        {
            name: 'Carga Archivo',
            ruta: '/file',
            sticon: <CloudUploadOutlinedIcon />,
        }
    ]
    // const routs = ['/usuarios','/busqueda', '/archivos'];
    // const settings = ['Profile', 'Account', 'Logout'];
    const settings = [
        {
            name: 'Profile',
            ruta: '/profile',
            sticon: <AccountBoxOutlinedIcon />,
        },
        // {
        //     name: 'Account',
        //     ruta: '/account',
        //     sticon: < BadgeOutlinedIcon />,
        // },
        {
            name: 'Logout',
            ruta: '/login',
            sticon: <LogoutIcon />,
        }
    ]
    
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    };

    return (
    <AppBar position="static">
        <Container maxWidth="lg">
        <Toolbar disableGutters sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'space-between',
            //backgroundColor: 'red',
        }}>
            <Box color='info' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img id="img_logo"
              src={YourSVG} alt="No Result"
            />
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
            }}
            >
            LOGO
            </Typography> */}

            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="info"
            >
                <MenuIcon />
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
                display: { xs: 'block', md: 'none' },
                }}
            >
                {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => navigate(page.ruta)}>
                    <ListItemIcon>
                        {page.sticon}
                    </ListItemIcon>
                    <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
                ))}
            </Menu>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' },
                     mr: 1,
                     minWidth: '57px',
                     padding: '1em', }}>
            <img id="img_logo"
              src={YourSVG} alt="No Result"
            />
            </Box>
            {/*<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}></AdbIcon>*/}
            {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
            }}
            >
            LOGO 
            </Typography> */}
            <Box sx={{ 
                // display: 'flex',
                // width: '55%',
                // alignContent:'center',
                // alignItems: 'center',
                // justifyContent: 'space-around'
                flexGrow: 2,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                minWidth: '10em',
                }}>
            {pages.map((page) => (
                <Button
                startIcon={page.sticon}
                color='info'
                variant='contained'
                key={page.name}
                value={page.ruta}
                onClick={() => navigate(page.ruta)}
                sx={{ 
                    my: 2,
                    color: 'white', 
                    display: 'flex',
                    padding: '0.5 em 2em',
                    margin: '0em 0.5em',
                    maxWidth: '20em',
                    
                    minWidth: '5em'
                }}
                >
                {page.name}
                </Button> 
            ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton  onClick={handleOpenUserMenu} sx={{ p: 0}}>
                <Avatar  alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
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
                <MenuItem key={setting.name} onClick={() => navigate(setting.ruta)}>
                    <ListItemIcon>
                        {setting.sticon}
                    </ListItemIcon>
                    <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
                ))}
            </Menu>
            </Box>
        </Toolbar>
        </Container>
    </AppBar>
    );
    
    
}