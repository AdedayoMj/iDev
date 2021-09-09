import React, { useEffect, useState } from "react";
import IPageProps from "../../interface/pages";
import {
  Container,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";

import CourseCard from "../../components/card";
import Header from "../../components/header";

export const Client = {
  title: "CLIENT",
  html: [
    {
      name: "'Introduction to HTML'",
      level: "Beginner",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
      likes: true,
    },
    {
      name: "Intermediate HTML",
      level: "Intermediate",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
      likes: false,
    },
    {
      name: "Advance HTML",
      level: "Advance",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
      likes: true,
    },
  ],
  css: [
    {
      name: "'Introduction to CSS'",
      level: "Beginner",
      likes: true,
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
    },
    {
      name: "Intermediate CSS",
      level: "Intermediate",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
      likes: true,
    },
    {
      likes: false,
      name: "Advance CSS",
      level: "Advance",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
    },
  ],
  javascript: [
    {
      name: "'Introduction to JavaScript'",
      level: "Beginner",
      likes: true,
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
    },
    {
      name: "Intermediate JavaScript",
      level: "Intermediate",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
      likes: true,
    },
    {
      likes: false,
      name: "Advance JavaScript",
      level: "Advance",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
    },
  ],
  react: [
    {
      name: "'Introduction to React'",
      level: "Beginner",
      likes: true,
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
    },
    {
      name: "Intermediate React",
      level: "Intermediate",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
      likes: true,
    },
    {
      likes: false,
      name: "Advance React",
      level: "Advance",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
    },
  ],
  redux: [
    {
      name: "'Introduction to Redux'",
      level: "Beginner",
      likes: true,
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
    },
    {
      name: "Intermediate Redux",
      level: "Intermediate",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
      likes: true,
    },
    {
      likes: false,
      name: "Advance Redux",
      level: "Advance",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
    },
  ],
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flex: 1,
    minHeight: "100vh",
  },
  title: {
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "aqua",
  },
}));

const ClientPage: React.FunctionComponent<IPageProps> = (props) => {
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
        <Header title="CLIENT">
          <div className={classes.title}>
            <Typography variant="h6">HTML</Typography>
          </div>
          <Grid container spacing={2}>
            {Client.html.map((item, index) => {
              return (
                <CourseCard
                  likes={item.likes}
                  level={item.level}
                  key={index}
                  title={item.name}
                  img="/images/html.jpg"
                  loading={loading}
                />
              );
            })}
          </Grid>
          <div className={classes.title}>
            <Typography variant="h6">CSS</Typography>
          </div>
          <Grid container spacing={2}>
            {Client.css.map((item, index) => {
              return (
                <CourseCard
                  likes={item.likes}
                  level={item.level}
                  key={index}
                  title={item.name}
                  img="/images/css.jpg"
                  loading={loading}
                />
              );
            })}
          </Grid>
          <div className={classes.title}>
            <Typography variant="h6">JAVASCRIPT</Typography>
          </div>
          <Grid container spacing={2}>
            {Client.javascript.map((item, index) => {
              return (
                <CourseCard
                  likes={item.likes}
                  level={item.level}
                  key={index}
                  title={item.name}
                  img="/images/java.jpg"
                  loading={loading}
                />
              );
            })}
          </Grid>
          <div className={classes.title}>
            <Typography variant="h6">REACT</Typography>
          </div>
          <Grid container spacing={2}>
            {Client.react.map((item, index) => {
              return (
                <CourseCard
                  likes={item.likes}
                  level={item.level}
                  key={index}
                  title={item.name}
                  img="/images/react.png"
                  loading={loading}
                />
              );
            })}
          </Grid>
          <div className={classes.title}>
            <Typography variant="h6">REDUX</Typography>
          </div>
          <Grid container spacing={2}>
            {Client.redux.map((item, index) => {
              return (
                <CourseCard
                  likes={item.likes}
                  level={item.level}
                  key={index}
                  title={item.name}
                  img="/images/redux.png"
                  loading={loading}
                />
              );
            })}
          </Grid>
        </Header>
      </Container>
    </main>
  );
};

export default ClientPage;
