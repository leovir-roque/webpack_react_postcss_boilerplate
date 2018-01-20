import React from 'react';

const Speech = ({speech}) => (
    <div className="speech">
        {speech.speaker &&
            <span className="speech__speaker">{speech.speaker}</span>
        }
        <div>
            {speech.message.map((msg, index) => (
                <span key={index} className="speech__text">{msg}</span>
            ))}
        </div>
    </div>
);

export default Speech;
