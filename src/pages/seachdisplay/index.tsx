import React from 'react';
import { Container } from 'reactstrap';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { useSpring, animated } from 'react-spring'; // web.cjs is required for IE 11 support
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            height: 300,
            flexGrow: 1,
            minWidth: 300,
            transform: 'translateZ(0)',
            // The position fixed scoping doesn't work in IE 11.
            // Disable this demo to preserve the others.
            '@media all and (-ms-high-contrast: none)': {
                display: 'none'
            }
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            top: 0,
            transform: 'translateZ(0)'
        },
        paper: {
            marginTop: 50
        }
    })
);

interface FadeProps {
    children?: React.ReactElement;
    in: boolean;
    onEnter?: () => unknown;
    onExited?: () => unknown;
}

export interface ISearchProps {
    openSearch: boolean;
    handleCloseModal?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SearchPage: React.FunctionComponent<ISearchProps> = (props) => {
    const { openSearch } = props;
    const classes = useStyles();

    return (
        <Container>
            <Box className={classes.root}>
                <Fade in={openSearch}>
                    <Container className={classes.paper}>
                        <Typography style={{ textAlign: 'center' }}>No record found</Typography>
                    </Container>
                </Fade>
            </Box>
        </Container>
    );
};

export default SearchPage;

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
