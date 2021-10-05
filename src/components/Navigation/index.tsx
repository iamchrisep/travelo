import React, { FunctionComponent } from 'react';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import bemPreset from '../../utils/bemPreset';

const Navigation: FunctionComponent = () => {
    /**
     * The BEM class name generator.
     */
    const cn = withNaming(bemPreset)('navigation');

    /**
     * The component stylesheet.
     */
    const styleSheet = classNames(
        cn(),
    );

    return (
        <nav className={styleSheet}>
            <ul className={cn('list')}>
                <li className={cn('item')}>
                    <a href="/travelo" className={cn('link active')}>Home</a>
                </li>
                <li className={cn('item')}>
                    <a href="/travelo" className={cn('link')}>About</a>
                </li>
                <li className={cn('item')}>
                    <a href="/travelo" className={cn('link')}>Places</a>
                </li>
                <li className={cn('item')}>
                    <a href="/travelo" className={cn('link')}>Careers</a>
                </li>
                <li className={cn('item')}>
                    <a href="/travelo" className={cn('link')}>Blog</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
