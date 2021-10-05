import React, { FunctionComponent } from 'react';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import bemPreset from '../../utils/bemPreset';
import Search from '../Search';

const Explore: FunctionComponent = () => {
    /**
     * The BEM class name generator.
     */
    const cn = withNaming(bemPreset)('explore');

    /**
     * The component stylesheet.
     */
    const styleSheet = classNames(
        cn(),
    );

    return (
        <div className={styleSheet}>
            <h1 className={cn('title')}>Travel to explore</h1>
            <span className={cn('description')}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ultricies mi eget mauris.
            </span>
            <Search />
        </div>
    );
};

export default Explore;
