import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toproot: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'hidden',
            position: 'fixed',
            display: 'flex',
            width: '100%'
        },
        root: {
            flexGrow: 1,
            minHeight: '100vh',
            zIndex: 1,
            overflow: 'hidden',
            backgroundColor: theme.palette.type === 'dark' ? '#073642' : 'white'
        },
        iconToolBar: {
            marginTop: 20
        },
        appBar: {
            position: 'absolute',
            backgroundColor: theme.palette.type === 'dark' ? '#073642' : 'white',
            marginLeft: drawerWidth,
            [theme.breakpoints.up('sm')]: {
                width: '100%'
            },
            [theme.breakpoints.up('lg')]: {
                display: 'none'
            },
            [theme.breakpoints.up('md')]: {
                display: 'none'
            }
        },
        navIconHide: {
            [theme.breakpoints.up('md')]: {
                display: 'none'
            }
        },
        toolbar: theme.mixins.toolbar,
        menu: {
            '& .MuiPaper-root': {
                backgroundColor: theme.palette.type === 'dark' ? '#073642' : 'white'
            }
        },
        drawerPaper: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),

            overflowX: 'hidden',
            backgroundColor: theme.palette.type === 'dark' ? '#073642' : 'white',
            width: drawerWidth,
            [theme.breakpoints.up('md')]: {
                position: 'absolute',

                // backgroundColor: theme.palette.type === "dark" ? "#073642" : "light",
                width: theme.spacing(7) + 1
            }
        },

        iconMargin: {
            [theme.breakpoints.up('md')]: {
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 0
            },
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10
        },

        content: {
            flexGrow: 1,
            padding: theme.spacing(3)
        },
        paper: {
            backgroundColor: theme.palette.type === 'dark' ? '#073642' : 'light',
            position: 'absolute',
            width: '100%',
            minHeight: '100vh'
        },
        bottomPush: {
            position: 'fixed',
            bottom: 30
            // textAlign: "center",
            // paddingBottom: 10,
        }
    })
);
