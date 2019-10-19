import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { render } from '@testing-library/react';
import { useModel } from '../../src/commons/hooks';

describe('test custom hooks', () => {
    test('test useModel hooks', () => {
        const { result } = renderHook(() => useModel('test', () => {
            console.log('test');
        }));

        const { container } = render(<result.current.ModelBox />);

        expect(container.firstChild).toMatchSnapshot();

        act(() => {
            result.current.showModal();
        });

        expect(result.current.isShown).toBe(true);

        act(() => {
            result.current.hideModal();
        });

        expect(result.current.isShown).toBe(false);
    });
});
