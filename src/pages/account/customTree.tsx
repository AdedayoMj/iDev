import React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { alpha, makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem, { TreeItemProps } from '@material-ui/lab/TreeItem';
import Collapse from '@material-ui/core/Collapse';
import { useSpring, animated } from 'react-spring'; // web.cjs is required for IE 11 support
import { TransitionProps } from '@material-ui/core/transitions';
import ITreeViewProps from '../../interface/treeview';
import { Box, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

function MinusSquare(props: SvgIconProps) {
    return (
        <ChevronRightIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
            {/* tslint:disable-next-line: max-line-length */}
            <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
        </ChevronRightIcon>
    );
}

function PlusSquare(props: SvgIconProps) {
    return (
        <ExpandMoreIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
            {/* tslint:disable-next-line: max-line-length */}
            <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
        </ExpandMoreIcon>
    );
}

function TransitionComponent(props: TransitionProps) {
    const style = useSpring({
        from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
        to: {
            opacity: props.in ? 1 : 0,
            transform: `translate3d(${props.in ? 0 : 20}px,0,0)`
        }
    });

    return (
        <animated.div style={style}>
            <Collapse {...props} />
        </animated.div>
    );
}

const StyledTreeItem = withStyles((theme: Theme) =>
    createStyles({
        iconContainer: {
            '& .close': {
                opacity: 0.3
            }
        },
        group: {
            marginLeft: 7,
            paddingLeft: 18,
            borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`
        }
    })
)((props: TreeItemProps) => <TreeItem {...props} TransitionComponent={TransitionComponent} />);

const useStyles = makeStyles(
    createStyles({
        root: {
            height: 'auto',
            flexGrow: 1,
            maxWidth: 400,
            marginBottom: 40
        }
    })
);

const CustomizedTreeView: React.FunctionComponent<ITreeViewProps> = (props) => {
    const { title, subtitle, color, loading } = props;

    const classes = useStyles();

    return (
        <TreeView
            className={classes.root}
            defaultExpanded={['1']}
            defaultCollapseIcon={<MinusSquare />}
            defaultExpandIcon={<PlusSquare />}
            //   defaultEndIcon={<CloseSquare />}
        >
            {loading === false ? (
                <StyledTreeItem nodeId="1" label={<Typography style={{ color: color }}>{title}</Typography>}>
                    {subtitle?.map((item, index) => {
                        return (
                            <LabelInfo key={index} subtitle={item.name} index={index} beginner={item.beginnerPercentage} intermediate={item.intermediatePercentage} advance={item.advancePercentage} />
                        );
                    })}
                </StyledTreeItem>
            ) : (
                <Box pt={0.5}>
                    <Skeleton />
                    <Skeleton width="100%" />
                    <Skeleton />
                    <Skeleton width="100%" />
                </Box>
            )}
        </TreeView>
    );
};

export default CustomizedTreeView;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function LabelInfo(props: { subtitle: any; index: any; beginner: string; intermediate: string; advance: string }) {
    const { subtitle, index, beginner, intermediate, advance } = props;
    return (
        <StyledTreeItem style={{ marginTop: 15, marginBottom: 15 }} nodeId={index} label={subtitle}>
            <StyledTreeItem
                nodeId="1"
                label={
                    <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                        <Typography variant="body2" style={{ fontWeight: 'inherit', flexGrow: 1 }}>
                            Beginner
                        </Typography>
                        <Typography variant="caption" color="inherit">
                            {beginner}%
                        </Typography>
                    </Box>
                }
            />
            <StyledTreeItem
                nodeId="2"
                label={
                    <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                        <Typography variant="body2" style={{ fontWeight: 'inherit', flexGrow: 1 }}>
                            Intermediate
                        </Typography>
                        <Typography variant="caption" color="inherit">
                            {intermediate}%
                        </Typography>
                    </Box>
                }
            />
            <StyledTreeItem
                nodeId="2"
                label={
                    <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                        <Typography variant="body2" style={{ fontWeight: 'inherit', flexGrow: 1 }}>
                            Advance
                        </Typography>
                        <Typography variant="caption" color="inherit">
                            {advance}%
                        </Typography>
                    </Box>
                }
            />
        </StyledTreeItem>
    );
}
