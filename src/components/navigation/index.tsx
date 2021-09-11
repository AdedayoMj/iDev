import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CodeIcon from '@material-ui/icons/Code';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { AppBar, Hidden, IconButton, Tooltip, Grid, Box, ListItemIcon, Paper } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import StorageIcon from '@material-ui/icons/Storage';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import CloudIcon from '@material-ui/icons/Cloud';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import { useStyles } from './nav';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import INavProps from '../../interface/navigation';
import { useHistory } from 'react-router-dom';

const NavPage: React.FunctionComponent<INavProps> = (props) => {
    const { homeThem, handletoggleTheme, children } = props;
    const fire_token = localStorage.getItem('fire_token');
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const icon = homeThem === 'dark' ? <Brightness7Icon /> : <Brightness3Icon />;
    const history = useHistory();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const iconArray = [
        {
            title: 'Version Control',
            icon: <AccountTreeIcon />,
            navlink: '/version',
            color: 'green'
        },
        {
            title: 'Data Format',
            icon: <PermDataSettingIcon />,
            navlink: '/dataformat',
            color: '#9c8cdb'
        },
        {
            title: 'Client',
            icon: <CodeIcon />,
            navlink: '/client',
            color: 'aqua'
        },

        {
            title: 'Server',
            icon: <StorageIcon />,
            navlink: '/server',
            color: '#ab6393'
        },
        {
            title: 'Database',
            icon: <i className="fas fa-database"></i>,
            navlink: '/database',
            color: '#753a88'
        },

        {
            title: 'Cloud',
            icon: <CloudIcon />,
            navlink: '/cloud',
            color: 'pink'
        }
    ];

    const settingsArray = [
        {
            title: 'About',
            icon: <InfoIcon />,
            navlink: '',
            color: '#8b352a'
        },
        {
            title: 'Support',
            icon: <HelpIcon />,
            navlink: '',
            color: 'orange'
        }
    ];

    const drawer = (
        <Box>
            <Grid container direction="column" alignItems="center" justifyContent="center">
                <Box display={{ xs: 'none', md: 'block' }}>
                    <div className={classes.iconToolBar} />

                    <Tooltip title="Home">
                        <img onClick={() => history.push('/')} style={{ height: 50, width: 50 }} src="/idev.png" alt="logo" />
                    </Tooltip>

                    {iconArray.map((item, index) => {
                        return (
                            <Tooltip key={index} title={item.title}>
                                <ListItemText key={index} className={classes.iconMargin}>
                                    <IconButton onClick={() => history.push(item.navlink)} style={{ color: item.color ?? item.color, height: '10' }}>
                                        {item.icon}
                                    </IconButton>
                                </ListItemText>
                            </Tooltip>
                        );
                    })}
                    <Divider />
                    {settingsArray.map((item, index) => {
                        return (
                            <Tooltip key={index} title={item.title}>
                                <ListItemText key={index} className={classes.iconMargin}>
                                    <IconButton style={{ color: item.color ?? item.color, height: '10' }}>{item.icon}</IconButton>
                                </ListItemText>
                            </Tooltip>
                        );
                    })}
                    <div className={classes.bottomPush}>
                        <Divider />
                        <ListItemText>
                            {fire_token !== null ? (
                                <Tooltip title="Account">
                                    <IconButton onClick={() => history.push('/account')}>
                                        <AccountCircleIcon fontSize="medium" />
                                    </IconButton>
                                </Tooltip>
                            ) : (
                                <Tooltip title="Login">
                                    <IconButton onClick={() => history.push('/login')}>
                                        <LockOpenIcon fontSize="medium" />
                                    </IconButton>
                                </Tooltip>
                            )}
                        </ListItemText>
                        <Tooltip title="Change Theme">
                            <IconButton onClick={handletoggleTheme}>{icon}</IconButton>
                        </Tooltip>
                    </div>
                </Box>
            </Grid>
            <Box display={{ xs: 'block', md: 'none' }}>
                <div className={classes.iconToolBar} />
                <Grid container direction="column" alignItems="center" justifyContent="center">
                    <IconButton style={{ marginBottom: 10 }} onClick={handletoggleTheme}>
                        {icon}
                    </IconButton>
                </Grid>

                <Divider />
                {iconArray.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <ListItemIcon className={classes.iconMargin} style={{ color: item.color ?? item.color, height: '10' }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItem>
                    );
                })}
            </Box>
        </Box>
    );

    return (
        <Box className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="Open drawer" onClick={handleDrawerToggle} className={classes.navIconHide}>
                        <MenuIcon />
                    </IconButton>
                    <img style={{ height: 70, width: 70 }} alt="logo" src="/idev.png" />
                    <Typography style={{ flex: 1 }} variant="h6" color="inherit" noWrap>
                        iDev
                    </Typography>
                    <IconButton edge="end" aria-label="account of current user" color="inherit">
                        <AccountCircleIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Hidden mdUp>
                <Box style={{ position: 'fixed' }}>
                    <Drawer
                        variant="temporary"
                        anchor={'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Hidden>
            <Hidden smDown implementation="css">
                <Box className={classes.toproot}>
                    <Drawer
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Hidden>

            <Paper className={classes.root}>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {children}
                </main>
            </Paper>
        </Box>
    );
};

export default NavPage;
