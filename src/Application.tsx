import React, { useEffect, useReducer, useState } from 'react';
import { Paper, ThemeProvider } from '@material-ui/core';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { initialUserState, UserContextProvider, userReducer } from './context/user';
import { Validate } from './modules/auth';
import AuthRoute from './components/authroute';
import NavPage from './components/navigation';
import routes from './config/routes';
import { isMobile } from 'react-device-detect';
import { Typography } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import LoadingComponent from './components/loadingComponents';
import logging from './config/logging';

const Application: React.FunctionComponent = () => {
    const [darkMode, setDartMode] = useState(true);
    const theme = createTheme({
        palette: {
            primary: { main: darkMode ? '#0f85a3' : '#04b542' },
            type: darkMode ? 'dark' : 'light'
        }
    });

    const handletoggleTheme = () => {
        setDartMode(!darkMode);
    };

    const paperStyle = {
        backgroundColor: theme.palette.type === 'dark' ? '#073642' : 'light'
    };

    const [userState, userDispatch] = useReducer(userReducer, initialUserState);
    /**Used for debugging */

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            CheckLocalStorageForCredentials();
        }, 1000);

        // eslint-disable-next-line
    }, []);

    /**
     * check to use if we have a token
     * if we do, verify it with the backend
     * if not, we are logged out initially
     */

    const CheckLocalStorageForCredentials = () => {
        const fire_token = localStorage.getItem('fire_token');

        if (fire_token === null) {
            userDispatch({ type: 'logout', payload: initialUserState });
            setTimeout(() => {
                setLoading(false);
            }, 500);
        } else {
            return Validate(fire_token, (error, user) => {
                if (error) {
                    logging.error(error);
                    userDispatch({ type: 'logout', payload: initialUserState });
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                } else if (user) {
                    userDispatch({ type: 'login', payload: { user, fire_token } });
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                }
            });
        }
    };

    const userContextValues = {
        userState,
        userDispatch
    };

    if (loading) {
        return <LoadingComponent />;
    }

    if (isMobile) {
        return (
            <ThemeProvider theme={theme}>
                <Paper style={{ marginTop: 20 }}>
                    <Typography> This content of this website is available only on Desktop</Typography>
                </Paper>
            </ThemeProvider>
        );
    }
    return (
        <UserContextProvider value={userContextValues}>
            <ThemeProvider theme={theme}>
                <Paper style={paperStyle}>
                    <NavPage homeThem={theme.palette.type} handletoggleTheme={() => handletoggleTheme()}>
                        <Switch>
                            {/* <Route exact path="/" component={HomePage} /> */}
                            {routes.map((route, index) => {
                                if (route.auth) {
                                    return (
                                        <Route
                                            path={route.path}
                                            exact={route.exact}
                                            key={index}
                                            render={(routeProps: RouteComponentProps) => (
                                                <AuthRoute>
                                                    <route.component {...routeProps} />
                                                </AuthRoute>
                                            )}
                                        />
                                    );
                                }
                                return <Route key={index} exact={route.exact} path={route.path} render={(routeProps: RouteComponentProps) => <route.component {...routeProps} />} />;
                            })}
                        </Switch>
                    </NavPage>
                </Paper>
            </ThemeProvider>
        </UserContextProvider>
    );
};

export default Application;
