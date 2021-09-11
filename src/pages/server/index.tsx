import React, { useEffect } from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

import CourseCard from '../../components/card';
import Header from '../../components/header';

export const Server = {
    title: 'SERVER',
    node: [
        {
            name: "'Introduction to NODE'",
            level: 'Beginner',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0',
            likes: true
        },
        {
            name: 'Intermediate NODE',
            level: 'Intermediate',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0',
            likes: false
        },
        {
            name: 'Advance NODE',
            level: 'Advance',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0',
            likes: true
        }
    ],
    next: [
        {
            name: "'Introduction to NEXT'",
            level: 'Beginner',
            likes: true,
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0'
        },
        {
            name: 'Intermediate NEXT',
            level: 'Intermediate',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0',
            likes: true
        },
        {
            likes: false,
            name: 'Advance NEXT',
            level: 'Advance',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0'
        }
    ],
    express: [
        {
            name: "'Introduction to EXPRESS'",
            level: 'Beginner',
            likes: true,
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0'
        },
        {
            name: 'Intermediate EXPRESS',
            level: 'Intermediate',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0',
            likes: true
        },
        {
            likes: false,
            name: 'Advance EXPRESS',
            level: 'Advance',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0'
        }
    ],
    graphql: [
        {
            name: "'Introduction to GRAPQL'",
            level: 'Beginner',
            likes: true,
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0'
        },
        {
            name: 'Intermediate GRAPQL',
            level: 'Intermediate',
            beginnerPercentage: '0',
            intermediatePercentage: '0',
            advancePercentage: '0',
            likes: true
        },
        {
            likes: false,
            name: 'Advance GRAPHQL',
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
        color: '#ab6393'
    }
}));

const ServerPage: React.FunctionComponent = () => {
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
                <Header title="SERVER">
                    <div className={classes.title}>
                        <Typography variant="h6">NODE</Typography>
                    </div>
                    <Grid container spacing={2}>
                        {Server.node.map((item, index) => {
                            return <CourseCard likes={item.likes} level={item.level} key={index} title={item.name} img="/images/node.png" loading={loading} />;
                        })}
                    </Grid>
                    <div className={classes.title}>
                        <Typography variant="h6">NEXT</Typography>
                    </div>
                    <Grid container spacing={2}>
                        {Server.next.map((item, index) => {
                            return <CourseCard likes={item.likes} level={item.level} key={index} title={item.name} img="/images/next.png" loading={loading} />;
                        })}
                    </Grid>
                    <div className={classes.title}>
                        <Typography variant="h6">EXPRESS</Typography>
                    </div>
                    <Grid container spacing={2}>
                        {Server.express.map((item, index) => {
                            return <CourseCard likes={item.likes} level={item.level} key={index} title={item.name} img="/images/express.jpeg" loading={loading} />;
                        })}
                    </Grid>
                    <div className={classes.title}>
                        <Typography variant="h6">GRAPHQL</Typography>
                    </div>
                    <Grid container spacing={2}>
                        {Server.graphql.map((item, index) => {
                            return <CourseCard likes={item.likes} level={item.level} key={index} title={item.name} img="/images/graphql.png" loading={loading} />;
                        })}
                    </Grid>
                </Header>
            </Container>
        </main>
    );
};

export default ServerPage;
