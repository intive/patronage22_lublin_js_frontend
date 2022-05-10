import React from 'react';

interface BackdropProps {
    show: boolean
}

const Backdrop = (props: BackdropProps) => {
    const classes = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed'];

    return <div className={classes.join(' ')}></div>;
};

export default Backdrop;