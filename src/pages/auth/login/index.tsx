import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Redirect, useHistory } from 'react-router-dom';
import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import logging from '../../../config/logging';
import UserContext from '../../../context/user';
import { Authenticate } from '../../../modules/auth';
import { auth } from '../../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Button color="inherit" href="https://imak-tech.netlify.app/">
                iMak-Tech
            </Button>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const LoginPage: React.FunctionComponent = () => {
    const classes = useStyles();
    const history = useHistory();
    const [snackBarOpen, setSnackBarOpen] = useState<boolean>(false);

    const [authenticating, setAuthenticating] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const userContext = useContext(UserContext);

    const fire_token = localStorage.getItem('fire_token');

    const signInWithEmailPassword = () => {
        if (error !== '') setError('');

        setAuthenticating(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(async (result) => {
                logging.info(result);
                const user = result.user;
                if (user) {
                    const uid = user.uid;
                    const name = user.displayName;
                    const email = user.email;
                    const verify = user.emailVerified;
                    if (verify === true) {
                        if (name) {
                            try {
                                const fire_token = await user.getIdToken();

                                /**if we get a token, auth with the backup */

                                Authenticate(uid, name, email, fire_token, (error, _user) => {
                                    if (error) {
                                        setError(error);
                                        setSnackBarOpen(true);
                                        setAuthenticating(false);
                                    } else if (_user) {
                                        userContext.userDispatch({ type: 'login', payload: { user: _user, fire_token } });
                                        history.push('/');
                                    }
                                });
                            } catch (error) {
                                setError('Invalid token.');
                                setSnackBarOpen(true);
                                logging.error(error);
                                setAuthenticating(false);
                            }
                        }
                        setAuthenticating(false);
                    } else {
                        setError('Please verify your email address');
                        setAuthenticating(false);
                        setSnackBarOpen(true);
                    }
                } else {
                    setError('Oops!!! Something went wrong please try again');
                    setAuthenticating(false);
                    setSnackBarOpen(true);
                }
            })
            .catch((error) => {
                logging.error(error);
                setAuthenticating(false);
                setSnackBarOpen(true);
                if (error.code === 'auth/invalid-email') {
                    setError('Invalid email, please try again!');
                } else if (error.code === 'auth/user-not-found') {
                    setError('User does not exist, please try again!');
                } else if (error.code === 'auth/invalid-password') {
                    setError('Incorrect password, please try again!');
                } else if (error.code === 'auth/wrong-password') {
                    setError('Incorrect password, please try again!');
                }
            });
    };

    const handleCloseSnack = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackBarOpen(false);
    };
    if (fire_token !== null) return <Redirect to="/" />;
    return (
        <Container component="main" maxWidth="xs">
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                open={snackBarOpen}
                autoHideDuration={6000}
                onClose={handleCloseSnack}
            >
                <Alert onClose={handleCloseSnack} severity="error">
                    {error}
                </Alert>
            </Snackbar>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form
                    className={classes.form}
                    onSubmit={(e) => {
                        e.preventDefault();
                        signInWithEmailPassword();
                    }}
                >
                    <TextField
                        variant="outlined"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />

                    <TextField
                        variant="outlined"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                    <Button disabled={authenticating} type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link onClick={() => history.push('/forgot')} variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link onClick={() => history.push('/register')} variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    {/* <ErrorText error={error} /> */}
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
};
export default LoginPage;
