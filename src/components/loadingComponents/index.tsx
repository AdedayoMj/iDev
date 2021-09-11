import React, { useEffect } from 'react';
import { Card, CardBody } from 'reactstrap';
import CenterPiece from '../centerpiece';

import LinearProgress from '@material-ui/core/LinearProgress';

const LoadingComponent: React.FunctionComponent = () => {
    const [progress, setProgress] = React.useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 50 : prevProgress + 50));
        }, 500);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <CenterPiece>
            <Card className="text-center">
                <CardBody>
                    <LinearProgress variant="determinate" value={progress} />
                </CardBody>
            </Card>
        </CenterPiece>
    );
};

LoadingComponent.defaultProps = {
    card: true,
    dotType: 'dot-bricks'
};

export default LoadingComponent;
