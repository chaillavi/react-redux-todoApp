import React from "react";
import { Iitem } from "../Model/ITodo";
interface IDisplayItemState {
  // isChecked: boolean;
}

interface IDisplayItemProps {
  item: Iitem;
  deleteItem: (key: string) => void;
  handleDone: (key: string) => void;
}

export default class DisplayItem extends React.Component<
  IDisplayItemProps,
  IDisplayItemState
> {
  render() {
    let item = this.props.item;
    return (
      <div>
        <li key={item.key}>
          <input
            type="checkbox"
            onChange={this.props.handleDone.bind(null, item.key)}
          />
          {item.title}
          <a href="#" onClick={this.props.deleteItem.bind(null, item.key)}>
            [x]
          </a>
        </li>
      </div>
    );
  }
}
