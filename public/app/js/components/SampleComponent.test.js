import React from 'react';
import renderer from 'react-test-renderer';

import SampleComponent from './SampleComponent';

describe('SampleComponent Test', () => {
    test('Renders the component', () => {
        const component = renderer.create(
            <SampleComponent value={0} />,
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
