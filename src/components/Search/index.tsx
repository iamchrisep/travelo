import React, {
    ChangeEvent,
    FormEvent,
    FunctionComponent,
    useState,
} from 'react';
import moment from 'moment';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import {
    IoCalendar,
    IoLocation,
    IoSearch,
} from 'react-icons/io5';
import DatePicker from 'react-datepicker';
import bemPreset from '../../utils/bemPreset';
import Button from '../Button';
import Modal from '../Modal';

import 'react-datepicker/dist/react-datepicker.css';

const Search: FunctionComponent = () => {
    /**
     * The BEM class name generator.
     */
    const cn = withNaming(bemPreset)('search');

    /**
     * The component stylesheet.
     */
    const styleSheet = classNames(
        cn(),
    );

    const errorText = 'Field is empty';

    const [location, setLocation] = useState('');
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    const [locationError, setLocationError] = useState('');
    const [checkInError, setCheckInError] = useState('');
    const [checkOutError, setCheckOutError] = useState('');

    const [isShow, setIsShow] = useState(false);

    const tomorrow = checkInDate && moment(checkInDate).add(1, 'd').toDate();

    /**
     * The handler of hide modal.
     */
    const handleOnHide = () => {
        setIsShow(false);
    };

    /**
     * The handler of location change.
     *
     * @param e
     */
    const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {
            target: {
                value,
            },
        } = e;
        setLocation(value);
        setLocationError('');
    };

    /**
     * The handler of check in date change.
     *
     * @param date
     */
    const handleCheckInDateChange = (date: any) => {
        setCheckInDate(date);
        if (checkOutDate && date >= checkOutDate) {
            setCheckOutDate(null);
        }
        setCheckInError('');
    };

    /**
     * The handler of check out date change.
     *
     * @param date
     */
    const handleCheckOutDateChange = (date: any) => {
        if (setCheckInDate && date <= setCheckInDate) {
            setCheckOutDate(null);
        } else {
            setCheckOutDate(date);
        }
        setCheckOutError('');
    };

    /**
     * The handler of form submit.
     *
     * @param e
     */
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!location || !location.trim()) {
            setLocationError(errorText);
            return false;
        }

        if (!checkInDate) {
            setCheckInError(errorText);
            return false;
        }

        if (!checkOutDate) {
            setCheckOutError(errorText);
            return false;
        }

        if (!locationError && !checkInError && !checkOutError) {
            setIsShow(true);
        }
        return false;
    };

    return (
        <>
            <form className={styleSheet} onSubmit={handleSubmit}>
                <div className={cn('fields')}>
                    <div className={cn('field')}>
                        <h4 className={cn('title')}>Where You Want to go</h4>
                        <div className={cn('input-wrapper')}>
                            <IoSearch className={cn('input-icon')} />
                            <input
                                type="text"
                                placeholder="Search your Location"
                                className={cn('input')}
                                value={location}
                                onChange={handleLocationChange}
                            />
                        </div>
                        {locationError && <span className={cn('error')}>{locationError}</span>}
                    </div>
                    <div className={cn('field')}>
                        <h4 className={cn('title')}>Check-in</h4>
                        <DatePicker
                            className={cn('datepicker')}
                            selected={checkInDate}
                            minDate={moment().toDate()}
                            onChange={handleCheckInDateChange}
                            placeholderText="Add Date"
                            dateFormat="yyyy-MM-dd"
                        />
                        {checkInError && <span className={cn('error')}>{checkInError}</span>}
                    </div>
                    <div className={cn('field')}>
                        <h4 className={cn('title')}>Check-out</h4>
                        <DatePicker
                            className={cn('datepicker')}
                            selected={checkOutDate}
                            minDate={tomorrow}
                            onChange={handleCheckOutDateChange}
                            placeholderText="Add Date"
                            dateFormat="yyyy-MM-dd"
                        />
                        {checkOutError && <span className={cn('error')}>{checkOutError}</span>}
                    </div>
                </div>
                <Button theme="primary" size="large" className={cn('button')} type="submit">Explore Now</Button>
            </form>
            {
                isShow && (
                    <Modal isShow={isShow} onHide={handleOnHide}>
                        <h4 className={cn('modal-title')}>Info</h4>
                        <div className={cn('modal-info')}>
                            <IoLocation className={cn('modal-icon')} />
                            <span className={cn('modal-text')}>{ location }</span>
                        </div>
                        <div className={cn('modal-info')}>
                            <IoCalendar className={cn('modal-icon')} />
                            <span className={cn('modal-text')}>
                                { moment(checkInDate).format('YYYY-MM-DD') }
                                {' '}
                                &mdash;
                                {' '}
                                { moment(checkOutDate).format('YYYY-MM-DD') }
                            </span>
                        </div>
                    </Modal>
                )
            }
        </>
    );
};

export default Search;
