import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { cn } from '@bem-react/classname';
import { IButtonProps as Props } from './types';

const Button: FunctionComponent<Props> = ({
    theme,
    size,
    disabled,
    className,
    children,
    onClick,
}) => {
    /**
     * Tha handler of click component.
     *
     * @param e
     */
    function handleClick(e: React.MouseEvent) {
        if (onClick) {
            onClick(e);
        }
    }

    /**
     * The component stylesheet.
     */
    const styleSheet = classNames(
        cn('button')({
            theme,
            size,
            disabled,
        }),
        className,
    );

    return (
        <button
            type="button"
            disabled={disabled}
            onClick={handleClick}
            className={styleSheet}
        >
            {children}
        </button>
    );
};

export default Button;
