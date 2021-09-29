import React, { FunctionComponent } from 'react';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import bemPreset from './utils/bemPreset';

const App: FunctionComponent = () => {
    const cn = withNaming(bemPreset)('app');
    const styleSheet = classNames(
        cn(),
    );
    return (
        <div className={styleSheet}>
            <header className={cn('header')}>
                Header
            </header>
            <main className={cn('main')}>
                Main
            </main>
        </div>
    );
};

export default App;
