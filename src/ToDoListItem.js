import React from "react";

export default class ToDoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            isEditing: this.props.isEditing | false
        };
    }

    render() {
        const DONE_ICON = "\u2713";
        const UNDONE_ICON = "\u2718";
        // const REMOVE_ICON = "\uD83D\uDDD1";

        return (
        <li className = "todo-list-item"> 
            <i className = {"todo-done-state " + 
                            (this.props.isDone ? "todo-done-state--done" : "todo-done-state--undone")}
                onClick = {() => this.props.handleState()}>
                    {this.props.isDone ? DONE_ICON : UNDONE_ICON}
            </i>
            <span className = "todo-description"><input type = "text" value = {this.props.description}/></span>
            <div className = "todo-button-panel"> 
                <button className="todo-button todo-button--edit">
                    <i className = "material-icons">create</i>
                </button>
                <button className = "todo-button todo-button--remove"
                    onClick = {() => {this.props.handleRemove(); console.log("kek")}}>
                    <i className = "material-icons">delete</i>
                </button>
            </div>
        </li>  
        );
    }
}