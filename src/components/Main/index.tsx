import React, { FunctionComponent } from 'react';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import bemPreset from '../../utils/bemPreset';
import Explore from '../Explore';
import Benefits from '../Benefits';

const Main: FunctionComponent = () => {
    const cn = withNaming(bemPreset)('main');
    const styleSheet = classNames(
        cn(),
    );
    return (
        <main className={styleSheet}>
            <Explore />
            <Benefits />
        </main>
    );
};

export default Main;
