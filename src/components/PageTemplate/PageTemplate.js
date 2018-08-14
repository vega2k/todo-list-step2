import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
/* 페이지템플릾을위한컴포넌트입니다. 페이지의틀,
그리고타이틀/ 콘텎츠등의속성이설정되어있습니다. */
const PageTemplate= ({children}) => {
    return (
    <div className={cx('page-template')}>
        <h1>일정관리</h1>
        <div className={cx('content')}>
            {children}
        </div>
    </div>
    );
};
export default PageTemplate;