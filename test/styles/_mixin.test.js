import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import styled from 'styled-components';
import { respondTo } from '../../src/styles/_mixin';

const Button = styled.button`
  ${respondTo.xs`
    color: red;
  `};
  ${respondTo.sm`
    color: red;
  `};
  ${respondTo.md`
    color: red;
  `};
  ${respondTo.lg`
    color: red;
  `};
`;

describe('test mixin function', () => {
    it('test response', () => {
        const { container } = render(<Button />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('color', 'red', {
            media: '(min-width:480px)'
        });

        expect(tree).toHaveStyleRule('color', 'red', {
            media: '(min-width:768px)'
        });

        expect(tree).toHaveStyleRule('color', 'red', {
            media: '(min-width:992px)'
        });

        expect(tree).toHaveStyleRule('color', 'red', {
            media: '(min-width:1200px)'
        });
    });
});
