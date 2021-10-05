import React, { FunctionComponent } from 'react';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import bemPreset from '../../utils/bemPreset';
import Explore from '../Explore';
import Benefits from '../Benefits';

const Main: FunctionComponent = () => {
    /**
     * The BEM class name generator.
     */
    const cn = withNaming(bemPreset)('main');

    /**
     * The component stylesheet.
     */
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
