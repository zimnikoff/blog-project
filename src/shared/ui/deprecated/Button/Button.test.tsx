import { fireEvent, render } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button component', () => {
    test('renders correctly with default props', () => {
        const { getByText } = render(<Button>Click me</Button>);
        const buttonElement = getByText('Click me');

        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveAttribute('type', 'button');
        expect(buttonElement).not.toHaveClass('clear');
    });

    test('renders with custom class and theme', () => {
        const { getByText } = render(
            <Button className="custom-class" theme={ButtonTheme.CLEAR}>
                Custom Button
            </Button>,
        );
        const buttonElement = getByText('Custom Button');

        expect(buttonElement).toHaveClass('custom-class');
        expect(buttonElement).toHaveClass(ButtonTheme.CLEAR);
    });

    test('onClick handler works', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);
        const buttonElement = getByText('Click me');

        fireEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalled();
    });
});
