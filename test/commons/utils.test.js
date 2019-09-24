import { lazy } from 'react';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createActionCreator, waitingRouteComponent } from '../../src/commons/utils';

describe('test utils', () => {
    it('test createActionCreator type', () => {
        const actionCreator = createActionCreator('@@NAMESPACE');
        const test = actionCreator('TEST');

        expect(test.type).toEqual('@@NAMESPACE/TEST');
    });

    it('test createActionCreator func', () => {
        const actionCreator = createActionCreator('@@NAMESPACE');
        const test = actionCreator('TEST');

        const fakeTestCreator = () => ({
            type: '@@NAMESPACE/TEST',
            payload: {}
        });

        expect(JSON.stringify(test())).toEqual(JSON.stringify(fakeTestCreator()));
    });

    it('rendered lazily fallback', async () => {
        const LazyComponent = lazy(() => import('../lazy-component'));

        const { container } = render(
            waitingRouteComponent(LazyComponent)()
        );

        const lazyElement = await waitForElement(() => container);

        expect(lazyElement).toMatchSnapshot();
    });

    it('rendered lazily', async () => {
        const LazyComponent = lazy(() => import('../lazy-component'));

        const { getByText } = render(
            waitingRouteComponent(LazyComponent)()
        );

        const lazyElement = await waitForElement(() => getByText(/i am lazy/i));
        expect(lazyElement).toBeInTheDocument();
    });
});
