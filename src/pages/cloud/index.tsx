import React, { useEffect } from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

import CourseCard from '../../components/card';
import Header from '../../components/header';

export const Cloud = {
    title: 'CLOUD',
    firebase: [
        {
            name: "'Introduction to Firebase'",
            level: 'Beginner',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0',
            likes: true
        },
        {
            name: 'Intermediate Firebase',
            level: 'Intermediate',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0',
            likes: false
        },
        {
            name: 'Advance Firebase',
            level: 'Advance',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0',
            likes: true
        }
    ],
    azure: [
        {
            name: "'Introduction to Azure'",
            level: 'Beginner',
            likes: true,
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0'
        },
        {
            name: 'Intermediate Azure',
            level: 'Intermediate',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0',
            likes: true
        },
        {
            likes: false,
            name: 'Advance Azure',
            level: 'Advance',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0'
        }
    ],
    aws: [
        {
            name: "'Introduction to AWS'",
            level: 'Beginner',
            likes: true,
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0'
        },
        {
            name: 'Intermediate AWS',
            level: 'Intermediate',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0',
            likes: true
        },
        {
            likes: false,
            name: 'Advance AWS',
            level: 'Advance',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0'
        }
    ]
};

const useStyles = makeStyles(() => ({
    root: {
        flex: 1,
        minHeight: '100vh'
    },
    title: {
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        color: 'pink'
    }
}));

const CloudPage: React.FunctionComponent = () => {
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
    const classes = useStyles();
    return (
        <main className={classes.root}>
            <Container>
                <Header title="CLOUD">
                    <div className={classes.title}>
                        <Typography variant="h6">FIREBASE</Typography>
                    </div>
                    <Grid container spacing={2}>
                        {Cloud.firebase.map((item, index) => {
                            return <CourseCard likes={item.likes} level={item.level} key={index} title={item.name} img="/images/firebase.png" loading={loading} />;
                        })}
                    </Grid>
                    <div className={classes.title}>
                        <Typography variant="h6">AZURE</Typography>
                    </div>
                    <Grid container spacing={2}>
                        {Cloud.azure.map((item, index) => {
                            return <CourseCard likes={item.likes} level={item.level} key={index} title={item.name} img="/images/azure.jpg" loading={loading} />;
                        })}
                    </Grid>
                    <div className={classes.title}>
                        <Typography variant="h6">AWS</Typography>
                    </div>
                    <Grid container spacing={2}>
                        {Cloud.aws.map((item, index) => {
                            return <CourseCard likes={item.likes} level={item.level} key={index} title={item.name} img="/images/aws.png" loading={loading} />;
                        })}
                    </Grid>
                </Header>
            </Container>
        </main>
    );
};

export default CloudPage;
