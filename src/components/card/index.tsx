import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ThreeDRotationIcon from "@material-ui/icons/ThreeDRotation";
import { Box, Container, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  backcard: {
    width: 290,
    height: 310,
    backgroundColor: theme.palette.type === "dark" ? "black" : "grey",
  },
  card: {
    width: 290,
    height: 310,
    backgroundColor: theme.palette.type === "dark" ? "#0a4352" : "light",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  textCard: {
    height: 170,
  },
  textTitle: {
    textAlign: "center",
    fontSize: 19,
    marginTop: 10,
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

interface CardMediaProps {
  title: string;
  level: string;
  likes: boolean;
  img?: string;
  loading?: boolean;
}

const CourseCard: React.FunctionComponent<CardMediaProps> = (props) => {
  const classes = useStyles();
  const [dummyAuth, setDummyAuth] = React.useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const history = useHistory();

  const { title, level, likes, img, loading } = props;
  const handleFlip = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const handleOpenCourse = () => {
    if (dummyAuth === false) {
      history.push(`/login/${"true"}`);
    }
  };

  return (
    <Grid item xs={12} sm={4}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        {!loading ? (
          <Card className={classes.card}>
            <CardMedia
              onClick={handleOpenCourse}
              className={classes.media}
              image={img}
              title="Paella dish"
            />
            <CardContent onClick={handleOpenCourse}>
              <Typography
                className={classes.textTitle}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {title}
              </Typography>
              <Typography
                style={{ textAlign: "center" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {title}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: likes ? "red" : "white" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton className={clsx(classes.expand)} onClick={handleFlip}>
                <ThreeDRotationIcon />
              </IconButton>
            </CardActions>
          </Card>
        ) : (
          <Skeleton variant="rect" width={290} height={310} />
        )}

        {!loading ? (
          <Card className={classes.backcard}>
            <div className={classes.textCard}>
              <Typography
                className={classes.textTitle}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {title}
              </Typography>
              <Container>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 0.5,
                    pr: 0,
                    marginTop: 10,
                  }}
                >
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ fontWeight: "inherit", flexGrow: 1 }}
                  >
                    Level
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {level}
                  </Typography>
                </Box>
                <hr />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 0.5,
                    pr: 0,
                    marginTop: 10,
                  }}
                >
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ fontWeight: "inherit", flexGrow: 1 }}
                  >
                    Duration
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    1:00:00
                  </Typography>
                </Box>

                <hr />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 0.5,
                    pr: 0,
                    marginTop: 10,
                  }}
                >
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ fontWeight: "inherit", flexGrow: 1 }}
                  >
                    Completion
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    0%
                  </Typography>
                </Box>
              </Container>
            </div>
            <CardContent>
              <Typography
                style={{ textAlign: "center" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {title}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: likes ? "red" : "white" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton className={clsx(classes.expand)} onClick={handleFlip}>
                <ThreeDRotationIcon />
              </IconButton>
            </CardActions>
          </Card>
        ) : (
          <Skeleton variant="rect" width={290} height={310} />
        )}
      </ReactCardFlip>
    </Grid>
  );
};

export default CourseCard;
