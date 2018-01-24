import React from "react";

export default class ToDoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            isEditing: this.props.isEditing | false,
            description: props.description
        };
    }

    render() {
        const DONE_ICON = "\u2713";
        const UNDONE_ICON = "\u2718";
        const EDIT_BUTTON = (
            <button className="todo-button todo-button--edit"
                onClick={() => {
                    this.setState({ 
                        isEditing: true, 
                        description: this.props.description })
                }}>
                <i className="material-icons">create</i>
            </button>
        );
        const SAVE_BUTTON = (
            <button className="todo-button todo-button--save"
                onClick={() => this.props.handleEdit(this.state.description)}>
                <i className="material-icons">save</i>
            </button>
        );

        return (
            <li className="todo-list-item">
                <i className={"todo-done-state " +
                    (this.props.isDone ? "todo-done-state--done" : "todo-done-state--undone")}
                    onClick={() => this.props.handleState()}>
                    {this.props.isDone ? DONE_ICON : UNDONE_ICON}
                </i>
                <input
                    type="text"
                    className="todo-description"
                    readOnly={!this.state.isEditing}
                    onChange={(event) => { this.setState({ description: event.value }) }}
                    value={this.state.isEditing ? this.state.description : this.props.description}
                />
                <div className="todo-button-panel">
                    {this.state.isEditing ? SAVE_BUTTON : EDIT_BUTTON}
                    <button className="todo-button todo-button--remove"
                        onClick={() => this.props.handleRemove()}>
                        <i className="material-icons">delete</i>
                    </button>
                </div>
            </li>
        );
    }
}