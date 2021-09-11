import React, { useContext, useState } from 'react';
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring'; // web.cjs is required for IE 11 support
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Box, Button, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import ErrorText from '../error_text';
import { KeyboardArrowRightSharp } from '@material-ui/icons';
import axios from 'axios';
import UserContext from '../../context/user';
import SuccessText from '../success_text';
import config from '../../config/config';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: 300
            }
        },
        field: {
            marginTop: 20,
            marginBottom: 20,
            display: 'block'
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        paper: {
            height: '70%',
            backgroundColor: theme.palette.type === 'dark' ? '#073642' : 'light',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3)
        }
    })
);
const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
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
        }
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
    onEnter?: () => unknown;
    onExited?: () => unknown;
}

interface IModalProps {
    openModal: boolean;
    img?: string;
    title?: string;
    content?: string;

    handleLogout?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleCloseModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SpringModal: React.FunctionComponent<IModalProps> = (props) => {
    const classes = useStyles();
    const { handleCloseModal, openModal, img, title, handleLogout, content } = props;
    const [displayName, setDisplayName] = useState('');
    const [displayError, setDisplayError] = useState(false);
    const [error, setError] = useState<string>('');
    const [saving, setSaving] = useState<boolean>(false);
    const [success, setSuccess] = useState<string>('');
    const userContext = useContext(UserContext);
    const { user } = userContext.userState;
    const { _id, email, name, picture } = user;
    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        if (displayName === '') {
            setDisplayError(true);
            return null;
        }
        setDisplayError(false);

        setSaving(true);

        try {
            const response = await axios({
                method: 'PATCH',
                url: `${config.server.url}/users/update/${_id}`,
                data: {
                    _id,
                    picture,
                    email,
                    name
                }
            });

            if (response.status === 201) {
                setSuccess('User name updated.');
            } else {
                setError(`Unable to save blog.`);
            }
        } catch (error) {
            setError('Unable to update user');
        } finally {
            setSaving(false);
        }
    };
    const theme = useTheme();
    const imgPaper = {
        minHeight: '60vh',
        width: '60vh',
        backgroundColor: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'cover',
        boxShadow: theme.shadows[5]
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
                    timeout: 500
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
                                    {content === '' ? (
                                        <form className={classes.root} autoComplete="off">
                                            <div>
                                                <TextField
                                                    className={classes.field}
                                                    label="Display Name"
                                                    color="primary"
                                                    variant="outlined"
                                                    fullWidth
                                                    required
                                                    defaultValue={name}
                                                    error={displayError}
                                                    onChange={(e) => setDisplayName(e.target.value)}
                                                />
                                            </div>
                                            <Box
                                                display="flex"
                                                flexDirection="row"
                                                alignContent="flex-center"
                                                style={{
                                                    justifyContent: 'center',
                                                    alignContent: 'center'
                                                }}
                                            >
                                                <Button
                                                    endIcon={<KeyboardArrowRightSharp />}
                                                    type="submit"
                                                    style={{
                                                        marginTop: 30
                                                    }}
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={handleSubmit}
                                                    disabled={saving}
                                                >
                                                    Submit
                                                </Button>
                                                <ErrorText error={error} />
                                                <SuccessText success={success} />
                                            </Box>
                                        </form>
                                    ) : (
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {content}
                                        </Typography>
                                    )}
                                </CardContent>
                            </CardActionArea>
                            {content === '' ? (
                                ''
                            ) : (
                                <CardActions>
                                    <Button onClick={handleCloseModal} size="small" color="primary">
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
                                <CardMedia style={imgPaper} image={img} title="Contemplative Reptile" />
                            </CardActionArea>
                        </Card>
                    )}
                </Fade>
            </Modal>
        </div>
    );
};
export default SpringModal;
