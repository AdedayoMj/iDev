import React from 'react';

import SearchBar from 'material-ui-search-bar';
import { Box, Container, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { alpha, createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SearchPage from '../seachdisplay';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%'
        },
        search: {
            // position: "relative",
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.type === 'dark' ? alpha(theme.palette.common.white, 0.15) : grey[500],
            '&:hover': {
                backgroundColor: theme.palette.type === 'dark' ? alpha(theme.palette.common.white, 0.25) : grey[700]
            },
            marginLeft: 0,

            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 500
            }
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        inputRoot: {
            color: 'inherit'
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch'
                }
            }
        }
    })
);
const HomePage: React.FunctionComponent = () => {
    const classes = useStyles();
    // const [search, setSearch] = React.useState('');
    const [openSearch, setOpenSearch] = React.useState(false);

    const hadleOpenSearch = () => {
        setOpenSearch(true);
    };
    const hadleCancel = () => {
        setOpenSearch(false);
    };
    const handleChange = (value: unknown) => {
        if (value === '') {
            hadleCancel();
        }
        // setSearch(value);
    };
    return (
        <Box className={classes.root}>
            <Typography style={{ textAlign: 'center', marginTop: 30 }} variant="h1">
                i<span style={{ color: '#ff1694' }}>Dev</span>
            </Typography>
            <SearchBar
                // dataSource={state.dataSource}
                onChange={(value) => handleChange(value)}
                onRequestSearch={() => hadleOpenSearch()}
                style={{
                    margin: '0 auto',
                    maxWidth: 800
                }}
                className={classes.search}
                onCancelSearch={() => hadleCancel()}
            />
            {openSearch ? (
                <SearchPage openSearch={openSearch} />
            ) : (
                <Box>
                    <Container>
                        <Typography style={{ textAlign: 'center' }}>Welcome to the full stach guide</Typography>
                    </Container>
                </Box>
            )}
        </Box>
    );
};

export default HomePage;
