import { render, fireEvent } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

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
            <Button className="custom-class" theme={ThemeButton.CLEAR}>
                Custom Button
            </Button>,
        );
        const buttonElement = getByText('Custom Button');

        expect(buttonElement).toHaveClass('custom-class');
        expect(buttonElement).toHaveClass(ThemeButton.CLEAR);
    });

    test('onClick handler works', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);
        const buttonElement = getByText('Click me');

        fireEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalled();
    });
});
