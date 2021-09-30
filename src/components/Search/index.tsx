import React, { FunctionComponent, useState } from 'react';
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import { IoSearch } from 'react-icons/io5';
import DatePicker from 'react-datepicker';
import bemPreset from '../../utils/bemPreset';
import Button from '../Button';

import 'react-datepicker/dist/react-datepicker.css';

const Search: FunctionComponent = () => {
    const cn = withNaming(bemPreset)('search');
    const styleSheet = classNames(
        cn(),
    );
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    const handleCheckInDate = (date: any) => {
        setCheckInDate(date);
        if (checkOutDate && date > checkOutDate) {
            setCheckOutDate(null);
        }
    };

    const handleCheckOutDate = (date: any) => {
        setCheckOutDate(date);
    };

    return (
        <div className={styleSheet}>
            <div className={cn('fields')}>
                <div className={cn('field')}>
                    <h4 className={cn('title')}>Where You Want to go</h4>
                    <div className={cn('input-wrapper')}>
                        <IoSearch className={cn('input-icon')} />
                        <input
                            type="text"
                            placeholder="Search your Location"
                            className={cn('input')}
                        />
                    </div>
                </div>
                <div className={cn('field')}>
                    <h4 className={cn('title')}>Check-in</h4>
                    <DatePicker
                        className={cn('datepicker')}
                        selected={checkInDate}
                        minDate={new Date()}
                        onChange={handleCheckInDate}
                        placeholderText="Add Date"
                        dateFormat="yyyy-MM-dd"
                    />
                </div>
                <div className={cn('field')}>
                    <h4 className={cn('title')}>Check-out</h4>
                    <DatePicker
                        className={cn('datepicker')}
                        selected={checkOutDate}
                        minDate={checkInDate}
                        onChange={handleCheckOutDate}
                        placeholderText="Add Date"
                        dateFormat="yyyy-MM-dd"
                    />
                </div>
            </div>
            <Button theme="primary" size="large" className={cn('button')}>Explore Now</Button>
        </div>
    );
};

export default Search;
