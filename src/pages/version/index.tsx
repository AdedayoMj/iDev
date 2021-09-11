import React, { useEffect } from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

import CourseCard from '../../components/card';
import Header from '../../components/header';

export const Version = {
    title: 'VERSION CONTROL',
    git: [
        {
            name: "'Introduction to Git'",
            level: 'Beginner',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0',
            likes: true
        },
        {
            name: 'Intermediate Git',
            level: 'Intermediate',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0',
            likes: false
        },
        {
            name: 'Advance Git',
            level: 'Advance',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0',
            likes: true
        }
    ],
    github: [
        {
            name: "'Introduction to GitHub'",
            level: 'Beginner',
            likes: true,
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0'
        },
        {
            name: 'Intermediate GitHub',
            level: 'Intermediate',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0',
            likes: true
        },
        {
            likes: false,
            name: 'Advance GitHub',
            level: 'Advance',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0'
        }
    ],
    bitbucket: [
        {
            name: "'Introduction to BitBucket'",
            level: 'Beginner',
            likes: true,
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0'
        },
        {
            name: 'Intermediate BitBucket',
            level: 'Intermediate',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0',
            likes: true
        },
        {
            likes: false,
            name: 'Advance BitBucket',
            level: 'Advance',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0'
        }
    ],
    auzre: [
        {
            name: "'Introduction to Azure Devops'",
            level: 'Beginner',
            likes: true,
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0'
        },
        {
            name: 'Intermediate Azure Devops',
            level: 'Intermediate',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0',
            likes: true
        },
        {
            likes: false,
            name: 'Advance Azure Devops',
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
        color: 'green'
    }
}));

const VersionPage: React.FunctionComponent = () => {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
    return (
        <main className={classes.root}>
            <Container>
                <Header title="VERSION CONTROL">
                    <div className={classes.title}>
                        <Typography variant="h6">GIT</Typography>
                    </div>
                    <Grid container spacing={2}>
                        {Version.git.map((item, index) => {
                            return <CourseCard likes={item.likes} level={item.level} key={index} title={item.name} img="/images/git.png" loading={loading} />;
                        })}
                    </Grid>
                    <div className={classes.title}>
                        <Typography variant="h6">GITHUB</Typography>
                    </div>
                    <Grid container spacing={2}>
                        {Version.github.map((item, index) => {
                            return <CourseCard likes={item.likes} level={item.level} key={index} title={item.name} img="/images/github.jpg" loading={loading} />;
                        })}
                    </Grid>
                    <div className={classes.title}>
                        <Typography variant="h6">BITBUCKET</Typography>
                    </div>
                    <Grid container spacing={2}>
                        {Version.bitbucket.map((item, index) => {
                            return <CourseCard likes={item.likes} level={item.level} key={index} title={item.name} img="/images/bitbucket.jpg" loading={loading} />;
                        })}
                    </Grid>
                    <div className={classes.title}>
                        <Typography variant="h6">AZURE DEVOPS</Typography>
                    </div>
                    <Grid container spacing={2}>
                        {Version.auzre.map((item, index) => {
                            return <CourseCard likes={item.likes} level={item.level} key={index} title={item.name} img="/images/azure.png" loading={loading} />;
                        })}
                    </Grid>
                </Header>
            </Container>
        </main>
    );
};

export default VersionPage;
