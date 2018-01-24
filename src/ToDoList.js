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

    handleItemUpdate(itemIndex) {
        return (item) => {
            const items = this.state.items.slice();
            items.splice(itemIndex, 1, Object.assign(items[itemIndex], item));
            this.setState({items:items});
        }
    }

    handleItemRemove(itemIndex) {
        const items = this.state.items.slice();
        items.splice(itemIndex, 1);
        this.setState({
            items: items
        });
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
                            handleUpdate = {this.handleItemUpdate(index)}
                            handleRemove = {() => this.handleItemRemove(index)}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}