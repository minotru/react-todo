import React from 'react';
import ToDoListItem from "./ToDoListItem"

export default class ToDoList extends React.Component {
    /**@argument {Array} props.items  */
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            items: props.items.slice()
        }
    }

    handleRemove(itemIndex) {
        const items = this.state.items;
        items.splice(itemIndex, 1);
        this.setState({
            items: items
        });
    }

    handleState(itemIndex) {
        const items = this.state.items;
        items[itemIndex].isDone = !this.state.items[itemIndex].isDone;
        this.setState({
            items: items
        });
    }

    handleEdit(itemIndex) {
        return (description) => {
            const items = this.state.items;
            items[itemIndex].description = description;
            // items[itemIndex].isEditing = false;
            this.setState({
                items: items
            });
        }
    }
    
    render() {
        return (
            <div className = "todo-list-wrapper">
                <h1 className = "todo-list-header">{this.props.header}</h1>
                <ul className = "todo-list">
                    {this.state.items.map((item, index) => (
                        <ToDoListItem 
                            description = {item.description}
                            isDone = {item.isDone}
                            key = {index.toString()}
                            handleRemove = {() => this.handleRemove(index)}
                            handleState = {() => this.handleState(index)}
                            handleEdit = {this.handleEdit(index)}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}