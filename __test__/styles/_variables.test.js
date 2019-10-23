import { breakpoints } from '../../src/styles/_variables';

describe('test variables', () => {
    it('breakpoint variable.', () => {
        const testObj = {
            xs: '480px',
            sm: '768px',
            md: '992px',
            lg: '1200px'
        };

        expect(JSON.stringify(breakpoints)).toEqual(JSON.stringify(testObj));
    });
});
