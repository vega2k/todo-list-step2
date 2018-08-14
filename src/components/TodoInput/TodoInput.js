import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoInput = ({value,handleChange,handleInsert}) => {
    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleInsert();
        }
    }
    return(
        <div className={cx('todo-input')}>
            <input value={value} onChange={handleChange} 
                onKeyPress={handleKeyPress} />
            <div className={cx('add-button')} onClick={handleInsert}>
            추가</div>
        </div>    
    );
}

export default TodoInput;
