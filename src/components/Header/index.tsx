import React, { FunctionComponent } from 'react';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import bemPreset from '../../utils/bemPreset';
import Navigation from '../Navigation';
import Button from '../Button';

const Header: FunctionComponent = () => {
    /**
     * The BEM class name generator.
     */
    const cn = withNaming(bemPreset)('header');

    /**
     * The component stylesheet.
     */
    const styleSheet = classNames(
        cn(),
    );

    return (
        <header className={styleSheet}>
            <a href="/travelo" className={cn('link')}>
                <img className={cn('logo')} src="/travelo/images/logo.png" alt="logo" />
            </a>
            <Navigation />
            <Button theme="primary" size="small" type="button">Connect</Button>
        </header>
    );
};

export default Header;
