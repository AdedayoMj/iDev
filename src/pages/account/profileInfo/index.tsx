import React, { useContext, useEffect } from 'react';
import { createStyles, Grid, makeStyles, Typography, Theme, Box, IconButton, Avatar, Tooltip } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';
import SpringModal from '../../../components/modal';
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Skeleton } from '@material-ui/lab';
import UserContext from '../../../context/user';
import { useHistory } from 'react-router';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mrg: {
            marginBottom: 1
        },
        large: {
            width: theme.spacing(17),
            height: theme.spacing(17)
        }
    })
);

const ProfileSection: React.FunctionComponent = () => {
    const classes = useStyles();
    const history = useHistory();
    const [openModal, setModalOpen] = React.useState(false);
    const [openAvatar, setAvatar] = React.useState(false);
    const [openLogout, setModalOpenLogout] = React.useState(false);
    const [openEdit, setModalEdit] = React.useState(false);
    const [emailNotification, setEmailNot] = React.useState(true);
    const userContext = useContext(UserContext);
    const { user } = userContext.userState;
    useEffect(() => {
        setAvatar(true);
        setEmailNot(false);
        setTimeout(() => {
            setAvatar(false);
            setEmailNot(true);
        }, 1000);
    }, []);

    const handleOpenEdit = () => {
        setModalEdit(true);
    };

    const handleCloseEdit = () => {
        setModalEdit(false);
    };
    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
    const handleOpenModalLogout = () => {
        setModalOpenLogout(true);
    };

    const handleCloseModalLogout = () => {
        setModalOpenLogout(false);
    };
    const handleLogout = async () => {
        await userContext.userDispatch({ type: 'logout', payload: userContext.userState });
        history.push('/login');
        setModalOpenLogout(false);
    };

    return (
        <Grid className={classes.mrg} item xs={10} lg={3}>
            <Box display="flex" flexDirection="row" alignContent="flex-center" style={{ justifyContent: 'center', alignContent: 'center' }} onClick={handleOpenModal}>
                {!openAvatar ? (
                    <Avatar alt="All Things Entertainment" src="/pp.jpg" className={classes.large} />
                ) : (
                    //   <AccountCircleIcon className={classes.large} />

                    <Skeleton variant="circle" className={classes.large} />
                )}
            </Box>

            <Box p={1} alignContent="center" alignItems="center">
                <Tooltip title="Change Picture">
                    <IconButton>
                        <CameraEnhanceIcon style={{ width: 30, height: 30, color: 'burlywood' }} />
                    </IconButton>
                </Tooltip>
            </Box>

            <SpringModal handleCloseModal={handleCloseModal} openModal={openModal} img="/pp.jpg" />
            <Box p={1} display="flex" flexDirection="row">
                <Box p={1} flexGrow={1} alignContent="flex-start">
                    <Typography style={{ fontSize: 20 }}>{user.name} </Typography>
                </Box>

                <Box alignContent="flex-end">
                    <Tooltip title="Edit Name">
                        <IconButton onClick={handleOpenEdit}>
                            <EditIcon style={{ width: 15, height: 15 }} />
                        </IconButton>
                    </Tooltip>
                </Box>

                <SpringModal handleCloseModal={handleCloseEdit} openModal={openEdit} title="Edit" content="" />
            </Box>
            <Box display="flex" flexDirection="row">
                <Box flexGrow={1} alignItems="flex-center">
                    <Typography style={{ fontSize: 13, textAlign: 'center' }}>
                        <p>{user.email} </p>
                    </Typography>
                </Box>
            </Box>

            <Box display="flex" flexDirection="row" alignContent="flex-center" style={{ justifyContent: 'center', alignContent: 'center' }}>
                <Tooltip title="Logout">
                    <IconButton onClick={handleOpenModalLogout}>
                        <ExitToAppIcon style={{ color: 'red', width: 40, height: 40 }} />
                    </IconButton>
                </Tooltip>
            </Box>

            <SpringModal handleCloseModal={handleCloseModalLogout} handleLogout={() => handleLogout()} openModal={openLogout} title="Logout" content="Are you sure you want to logout?" />
            <Typography>
                <p>NOTIFICATIONS</p>
            </Typography>
            {emailNotification ? (
                <Box pt={0.5}>
                    <Skeleton />
                    <Skeleton width="100%" />
                    <Skeleton />
                    <Skeleton width="100%" />
                </Box>
            ) : (
                ''
            )}
            <Typography>
                <p>EMAILS</p>
            </Typography>
            {emailNotification ? (
                <Box pt={0.5}>
                    <Skeleton />
                    <Skeleton width="100%" />
                    <Skeleton />
                    <Skeleton width="100%" />
                </Box>
            ) : (
                ''
            )}
        </Grid>
    );
};

export default ProfileSection;
