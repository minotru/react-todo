import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoApp from './ToDoApp';

const items = [
    {
        description: "Study economics",
        isDone: true
    },
    {
        description: "Study programming",
        isDone: true
    },
    {
        description: "Study matan",
        isDone: true
    },
    {
        description: "Study discrete math",
        isDone: true
    },
    {
        description: "Study vma",
        isDone: false
    }
];

ReactDOM.render(<ToDoApp header = "Session list" items = {items}/>, document.getElementById('root'));
