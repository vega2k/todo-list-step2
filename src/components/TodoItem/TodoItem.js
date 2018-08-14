import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
class TodoItem extends Component {
    
    shouldComponentUpdate(nextProps,nextState) {
        return this.props.done !== nextProps.done;
    }

    render() {
        const{done, children, onToggle, onRemove} = this.props;
        /* 위코드에선비구조화할당을통하여this.props앆에있는
        done, children, onToggle, onRemove에대한레퍼런스를만들어주었습니다. */
        return (
        <div className={cx('todo-item')} onClick={onToggle}>
            <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
            <div className={cx('text', { done })}>{children}</div>
            <div className={cx('delete')} onClick={ (e) => {
                    onRemove();
                    //자식엘리먼트에서 발생한 이벤트를 부모엘리멘트에게 전파되지 않도록
                    e.stopPropagation();
                }
            }>[지우기]</div>
        </div>
        );
    }
}
export default TodoItem;