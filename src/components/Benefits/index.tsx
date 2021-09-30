import React, { FunctionComponent } from 'react';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import bemPreset from '../../utils/bemPreset';

const Benefits: FunctionComponent = () => {
    const cn = withNaming(bemPreset)('benefits');
    const styleSheet = classNames(
        cn(),
    );
    const benefits = [{
        title: 'Get Best Prices',
        description: 'Pay through our application and save thousands and get amazing rewards',
        icon: '/travelo/images/prices.svg',
    }, {
        title: 'Covid Safe',
        description: 'We have all the curated hotels that have all the precaution for a corvid safe environment',
        icon: '/travelo/images/covid.svg',
    }, {
        title: 'Flexible Payment',
        description: 'Enjoy the flexible payment through our app and get rewards on every payment',
        icon: '/travelo/images/payment.svg',
    }, {
        title: 'Find The Best Near You',
        description: 'Find the best hotels and places to visit near you in a single click',
        icon: '/travelo/images/nearby.svg',
    }];
    return (
        <div className={styleSheet}>
            {
                benefits.map((item) => (
                    <div className={cn('benefit')} key={item.title}>
                        <div className={cn('icon')}>
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <h3 className={cn('title')}>{item.title}</h3>
                        <span className={cn('description')}>{item.description}</span>
                    </div>
                ))
            }
        </div>
    );
};

export default Benefits;
