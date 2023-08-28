import { classNames } from './classNames';

describe('classNames function', () => {
    test('should return the original class name when no mods and additional classes are provided', () => {
        const result = classNames('original-class');
        expect(result).toBe('original-class');
    });

    test('should add additional classes when they are provided', () => {
        const result = classNames('original-class', {}, ['additional-class1', 'additional-class2']);
        const expected = 'original-class additional-class1 additional-class2';
        expect(result).toBe(expected);
    });

    test('should add classes based on mods with boolean values', () => {
        const mods = {
            active: true,
            disabled: false,
        };
        const result = classNames('original-class', mods);
        expect(result).toBe('original-class active');
    });

    test('should combine all types of classes', () => {
        const mods = {
            active: true,
            theme: 'light',
        };
        const result = classNames('original-class', mods, ['additional-class1', 'additional-class2']);
        const expected = 'original-class additional-class1 additional-class2 active theme';
        expect(result).toBe(expected);
    });
});
