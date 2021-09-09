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

export const DataFormat = {
  title: "DATA FORMAT",
  json: [
    {
      name: "'Introduction to JSON'",
      level: "Beginner",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
      likes: true,
    },
    {
      name: "Intermediate JSON",
      level: "Intermediate",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
      likes: false,
    },
    {
      name: "Advance JSON",
      level: "Advance",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
      likes: true,
    },
  ],
  yaml: [
    {
      name: "'Introduction to YAML'",
      level: "Beginner",
      likes: true,
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
    },
    {
      name: "Intermediate YAML",
      level: "Intermediate",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
      likes: true,
    },
    {
      likes: false,
      name: "Advance YAML",
      level: "Advance",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
    },
  ],
  xml: [
    {
      name: "'Introduction to XML'",
      level: "Beginner",
      likes: true,
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
    },
    {
      name: "Intermediate XML",
      level: "Intermediate",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
      likes: true,
    },
    {
      likes: false,
      name: "Advance XML",
      level: "Advance",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
    },
  ],
  csv: [
    {
      name: "'Introduction to CSV'",
      level: "Beginner",
      likes: true,
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
    },
    {
      name: "Intermediate CSV",
      level: "Intermediate",
      beginnerPercentage: "0",
      intermediatePercentage: "0",
      advancePercentage: "0",
      likes: true,
    },
    {
      likes: false,
      name: "Advance CSV",
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
    color: "#9c8cdb",
  },
}));

const DataFormatPage: React.FunctionComponent<IPageProps> = (props) => {
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
        <Header title="DATA FORMAT">
          <div className={classes.title}>
            <Typography variant="h6">JSON</Typography>
          </div>
          <Grid container spacing={2}>
            {DataFormat.json.map((item, index) => {
              return (
                <CourseCard
                  likes={item.likes}
                  level={item.level}
                  key={index}
                  title={item.name}
                  img="/images/json.png"
                  loading={loading}
                />
              );
            })}
          </Grid>
          <div className={classes.title}>
            <Typography variant="h6">YAML</Typography>
          </div>
          <Grid container spacing={2}>
            {DataFormat.yaml.map((item, index) => {
              return (
                <CourseCard
                  likes={item.likes}
                  level={item.level}
                  key={index}
                  title={item.name}
                  img="/images/yaml.jpg"
                  loading={loading}
                />
              );
            })}
          </Grid>
          <div className={classes.title}>
            <Typography variant="h6">XML</Typography>
          </div>
          <Grid container spacing={2}>
            {DataFormat.xml.map((item, index) => {
              return (
                <CourseCard
                  likes={item.likes}
                  level={item.level}
                  key={index}
                  title={item.name}
                  img="/images/xml.png"
                  loading={loading}
                />
              );
            })}
          </Grid>
          <div className={classes.title}>
            <Typography variant="h6">CSV</Typography>
          </div>
          <Grid container spacing={2}>
            {DataFormat.csv.map((item, index) => {
              return (
                <CourseCard
                  likes={item.likes}
                  level={item.level}
                  key={index}
                  title={item.name}
                  img="/images/csv.png"
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

export default DataFormatPage;
