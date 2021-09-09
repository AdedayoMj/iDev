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

export const Database = {
  title: "DATABASE",
  mysql: [
    {
      name: "'Introduction to MySQL'",
      level: "Beginner",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
      likes: true,
    },
    {
      name: "Intermediate MySQL",
      level: "Intermediate",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
      likes: false,
    },
    {
      name: "Advance MySQL",
      level: "Advance",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
      likes: true,
    },
  ],
  mongodb: [
    {
      name: "'Introduction to MongoDB'",
      level: "Beginner",
      likes: true,
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
    },
    {
      name: "Intermediate MongoDB",
      level: "Intermediate",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
      likes: true,
    },
    {
      likes: false,
      name: "Advance MongoDB",
      level: "Advance",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
    },
  ],
  firestore: [
    {
      name: "'Introduction to Firestore'",
      level: "Beginner",
      likes: true,
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
    },
    {
      name: "Intermediate Firestore",
      level: "Intermediate",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
      likes: true,
    },
    {
      likes: false,
      name: "Advance Firestore",
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
    color: "#753a88",
  },
}));

const DatabasePage: React.FunctionComponent<IPageProps> = (props) => {
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
        <Header title="DATABASE">
          <div className={classes.title}>
            <Typography variant="h6">MYSQL</Typography>
          </div>
          <Grid container spacing={2}>
            {Database.mysql.map((item, index) => {
              return (
                <CourseCard
                  likes={item.likes}
                  level={item.level}
                  key={index}
                  title={item.name}
                  img="/images/mysql.jpg"
                  loading={loading}
                />
              );
            })}
          </Grid>
          <div className={classes.title}>
            <Typography variant="h6">MONGODB</Typography>
          </div>
          <Grid container spacing={2}>
            {Database.mongodb.map((item, index) => {
              return (
                <CourseCard
                  likes={item.likes}
                  level={item.level}
                  key={index}
                  title={item.name}
                  img="/images/mongo.jpg"
                  loading={loading}
                />
              );
            })}
          </Grid>
          <div className={classes.title}>
            <Typography variant="h6">FIRESTORE</Typography>
          </div>
          <Grid container spacing={2}>
            {Database.firestore.map((item, index) => {
              return (
                <CourseCard
                  likes={item.likes}
                  level={item.level}
                  key={index}
                  title={item.name}
                  img="/images/firestore.png"
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

export default DatabasePage;
