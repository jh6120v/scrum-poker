import React from 'react';
import { Provider } from 'react-redux';
import { render, waitForElement } from '@testing-library/react';
import { ConfigureStore } from '../../src/store';
import App from '../../src/containers/app';

const renderWithRedux = (ui, { initialState, store = ConfigureStore(initialState), } = {}) => ({
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
});

describe('test <App />', () => {
    it('render direct.', async () => {
        const { getByTestId, } = renderWithRedux(<App />);

        const lazyElement = await waitForElement(() => getByTestId('display_header'));

        expect(lazyElement.textContent).toBe('Scrum Poker');
    });
});
