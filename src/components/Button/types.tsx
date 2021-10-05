import { ReactNode, MouseEvent } from 'react';

/**
 |--------------------------------------------------------------------------
 | The button props types.
 |--------------------------------------------------------------------------
 */
export interface IButtonProps {
    /**
     |--------------------------------------------------------------------------
     | The button theme parameter. (Required)
     |--------------------------------------------------------------------------
     */
    theme: 'primary' | 'transparent';

    /**
     |--------------------------------------------------------------------------
     | The button size parameter. (Required)
     |--------------------------------------------------------------------------
     */
    size: 'small' | 'large';

    /**
     |--------------------------------------------------------------------------
     | The button type parameter. (Not required)
     |--------------------------------------------------------------------------
     */
    type?: 'button' | 'submit' | 'reset';

    /**
     |--------------------------------------------------------------------------
     | The button disabled parameter. (Not required)
     |--------------------------------------------------------------------------
     */
    disabled?: boolean | undefined;

    /**
     |--------------------------------------------------------------------------
     | The button className parameter. (Not required)
     |--------------------------------------------------------------------------
     |
     | Note: You can add your own class for this element.
     |
     */
    className?: string | undefined;

    /**
     |--------------------------------------------------------------------------
     | The button children node. (Required)
     |--------------------------------------------------------------------------
     |
     | Note: You need place react node in children parameter.
     |
     */
    children: ReactNode;

    /**
     |--------------------------------------------------------------------------
     | The button on click event. (Not required)
     |--------------------------------------------------------------------------
     */
    onClick?: (e: MouseEvent) => void;

}
