import React from 'react';

import SampleComponent from '../components/SampleComponent';

const SamplePage = () => (
    <div>
        <SampleComponent value={0} />
        <SampleComponent value={20} />
        <SampleComponent value={31} />
        <SampleComponent value={52} />
        <SampleComponent value={111} />
    </div>
);

export default SamplePage;
