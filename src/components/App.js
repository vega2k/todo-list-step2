import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const initialTodos = new Array(500).fill(0).map(
    (foo,index) => ({id:index,text:`일정${index}`,done:false})
);

class App extends Component {
    state = {
        input: '',
        todos:initialTodos
        // todos: [
        //     { id: 0, text: '리액트공부하기', done: true },
        //     { id: 1, text: '컴포넌트스타일릿해보기', done: false }
        // ]
    }
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }
    //Item 추가 id는 일정데이터에 들어가는 고유한 id
    id = 1;
    getId = () => {
        return ++this.id;
    }

    handleInsert = () => {
        const { input, todos } = this.state;
        //새로운 item 생성
        const newTodo = {
            id: this.getId(),
            done: false,
            text: input
        }
        //todos 배열에 새로운 item 추가
        this.setState({
            todos: [...todos, newTodo],
            input: ''
        });
    }
    //체크박스 토글링 이벤트 처리
    handleToggle = (id) => {
        console.log('handleToggle 호출됨');
        // id 로배열의인덱스를찾습니다.
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);
        // 찾은데이터의done 값을 토클링시킵니다.
        const toggled = {
            ...todos[index],
            done: !todos[index].done
        };
        // slice 를통하여우리가찾은index 전후의데이터들을복사합니다
        // 그리고그사이에는변경된To do 객체를넣어줍니다.
        this.setState({
            todos: [
                ...todos.slice(0, index),
                toggled,
                ...todos.slice(index + 1, todos.length)
            ]
        });
    }
    //지우기 버튼 클릭이벤트 처리(item 삭제)
    hadleRemove = (id) => {
        console.log('hadleRemove 호출됨');
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);
        // slice 후 데이터들을 복사하고, 우리가 찾은index는제외시킵니다.
        this.setState({
            todos: [
                ...todos.slice(0, index),
                ...todos.slice(index + 1, todos.length)
            ]
        });
    }

    render() {
        const { input, todos } = this.state;
        const { handleChange, handleInsert, handleToggle, hadleRemove } = this;
        return (
            <PageTemplate>
                <TodoInput handleChange={handleChange}
                    handleInsert={handleInsert} value={input} />
                <TodoList todos={todos} onToggle={handleToggle}
                    onRemove={hadleRemove} />
            </PageTemplate>
        );
    }
}
export default App;