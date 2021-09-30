import React, { FunctionComponent } from 'react';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import bemPreset from '../../utils/bemPreset';
import Navigation from '../Navigation';
import Button from '../Button';

const Header: FunctionComponent = () => {
    const cn = withNaming(bemPreset)('header');
    const styleSheet = classNames(
        cn(),
    );
    return (
        <header className={styleSheet}>
            <img className={cn('logo')} src="/travelo/images/logo.png" alt="logo" />
            <Navigation />
            <Button theme="primary" size="small">Connect</Button>
        </header>
    );
};

export default Header;
