import React from 'react';

const Gauge = ({label, value}) => (
    <div className="gauge">
        <span className="gauge__label">{label}</span>
        <div className="gauge__bar">
            <div className="gauge__pointer" style={{left: `${value}`}}></div>
        </div>
    </div>
);

export default Gauge;
