/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import classNames from 'classnames';
import { withNaming } from '@bem-react/classname';
import { IoClose } from 'react-icons/io5';
import bemPreset from '../../utils/bemPreset';
import { blockBody, unblockBody } from '../../utils/uiUtils';
import { IModalProps as Props } from './types';
import Button from '../Button';

class Modal extends Component<Props> {
    componentWillUnmount() {
        unblockBody();
    }

    /**
     * The handler of click component.
     *
     * @param e
     */
    private handleHide = (e: React.MouseEvent) => {
        const {
            onHide,
        } = this.props;

        if (onHide) {
            onHide(e);
        }
    };

    render() {
        const {
            isShow,
            children,
        } = this.props;

        /**
         * The BEM class name generator.
         */
        const cn = withNaming(bemPreset)('modal');

        /**
         * The component stylesheet.
         */
        const styleSheet = classNames(
            cn(),
        );

        if (!isShow) return null;

        if (document.body.style.position !== 'fixed') {
            blockBody();
        }

        return (
            <>
                <div className={cn('overlay')} onClick={this.handleHide} />
                <div className={styleSheet}>
                    <Button
                        theme="transparent"
                        size="small"
                        type="button"
                        className={cn('close')}
                        onClick={this.handleHide}
                    >
                        <IoClose className={cn('icon')} />
                    </Button>
                    <div className={cn('content')}>
                        {children}
                    </div>
                </div>
            </>
        );
    }
}

export default Modal;
