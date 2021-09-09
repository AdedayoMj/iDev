import React, { useState } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  useTheme,
} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring"; // web.cjs is required for IE 11 support
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { KeyboardArrowRightSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 300,
      },
    },
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: "block",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      height: "70%",
      backgroundColor: theme.palette.type === "dark" ? "#073642" : "light",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);
const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props,
  ref
) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});
interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

interface IModalProps {
  openModal: boolean;
  img?: string;
  title?: string;
  content?: string;
  defaultName?: string;
  handleLogout?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleCloseModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SpringModal: React.FunctionComponent<IModalProps> = (props) => {
  const classes = useStyles();
  const {
    handleCloseModal,
    openModal,
    img,
    title,
    handleLogout,
    content,
    defaultName,
  } = props;
  const [displayName, setDisplayName] = useState("");
  const [displayError, setDisplayError] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    // e.preventDefault();
    console.log(displayName.length);

    if (displayName === "") {
      setDisplayError(true);
    }
    console.log(displayError);
    if (displayName) {
      setDisplayError(false);
      console.log(displayName);
    }
  };
  const theme = useTheme();
  const imgPaper = {
    minHeight: "60vh",
    width: "60vh",
    backgroundColor: "white",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "cover",
    boxShadow: theme.shadows[5],
  };

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          {!img ? (
            <Card className={classes.paper}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {title}
                  </Typography>
                  {content === "" ? (
                    <form
                      className={classes.root}
                      autoComplete="off"
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <TextField
                          className={classes.field}
                          label="Display Name"
                          color="primary"
                          variant="outlined"
                          fullWidth
                          required
                          defaultValue={defaultName}
                          error={displayError}
                          onChange={(e) => setDisplayName(e.target.value)}
                        />
                      </div>
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignContent="flex-center"
                        style={{
                          justifyContent: "center",
                          alignContent: "center",
                        }}
                      >
                        <Button
                          endIcon={<KeyboardArrowRightSharp />}
                          type="submit"
                          style={{
                            marginTop: 30,
                          }}
                          variant="contained"
                          color="primary"
                        >
                          Submit
                        </Button>
                      </Box>
                    </form>
                  ) : (
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {content}
                    </Typography>
                  )}
                </CardContent>
              </CardActionArea>
              {content === "" ? (
                ""
              ) : (
                <CardActions>
                  <Button
                    onClick={handleCloseModal}
                    size="small"
                    color="primary"
                  >
                    Cancel
                  </Button>
                  <Button onClick={handleLogout} size="small" color="secondary">
                    {title}
                  </Button>
                </CardActions>
              )}
            </Card>
          ) : (
            <Card>
              <CardActionArea>
                <CardMedia
                  style={imgPaper}
                  image={img}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          )}
        </Fade>
      </Modal>
    </div>
  );
};
export default SpringModal;
