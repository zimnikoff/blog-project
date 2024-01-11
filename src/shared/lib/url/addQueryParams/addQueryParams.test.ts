import { getQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });

    test('test with multiple params', () => {
        const params = getQueryParams({
            test: 'value',
            qwe: '123',
        });
        expect(params).toBe('?test=value&qwe=123');
    });

    test('test with undefined', () => {
        const params = getQueryParams({
            test: 'value',
            qwe: undefined,
        });
        expect(params).toBe('?test=value');
    });
});
