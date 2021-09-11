import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        background: '#0a4352',
        minHeight: '100vh'
    },
    card: {
        width: 180,
        height: 160,
        backgroundColor: theme.palette.type === 'dark' ? '#0a4352' : 'light'
    },
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    }
}));

const CenterPiece: React.FunctionComponent = (props) => {
    const classes = useStyles();
    const { children } = props;

    return (
        <Grid container justify="center" alignItems="center" direction="column" className={classes.root}>
            <Box display="flex" flexDirection="row" alignContent="flex-center" style={{ justifyContent: 'center', alignContent: 'center' }}>
                <Card className={classes.card}>
                    <CardMedia className={classes.media} image="/idev.png" />

                    <CardContent>{children}</CardContent>
                </Card>
            </Box>
        </Grid>
    );
};

export default CenterPiece;
