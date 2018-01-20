import React from 'react';

const ProgressBar = ({label, value}) => (
    <div className="progress">
        <strong className="progress__label">{label}</strong>
        <div className="progress__bar">
            <div className="progress__bar__value" style={{width: `${value}`}}></div>
        </div>
    </div>
);

export default ProgressBar;
