import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Model from '../../src/components/model';

describe('test <Model /> component', () => {
    let modelRoot = document.getElementById('model');
    if (!modelRoot) {
        modelRoot = document.createElement('div');
        modelRoot.setAttribute('id', 'model');
        document.body.appendChild(modelRoot);
    }

    it('test <Model /> isShow', () => {
        cleanup();

        const { getByText } = render(
            <Model isShow>
                <div>test</div>
            </Model>,
        );

        expect(getByText('test')).toBeTruthy();
    });

    it('test <Model /> isShow to be false', () => {
        cleanup();

        const { container } = render(
            <Model isShow={false}>
                <div>test</div>
            </Model>,
        );

        expect(container.innerHTML).toEqual('');
    });
});