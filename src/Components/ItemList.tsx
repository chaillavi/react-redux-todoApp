import React from "react";
import DisplayItem from "./DisplayItem";
import { Iitem } from "../Model/ITodo"

interface IitemListProps {
  itemlist: Iitem[];
  deleteItem: (key: string) => void;
  handleDone: (key: string) => void;
}
interface IitemListState {}

export default class ItemList extends React.Component<
  IitemListProps,
  IitemListState
> {
  constructor(props: IitemListProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.itemlist.map(item => {
            return (
              <DisplayItem
                item={item}
                deleteItem={this.props.deleteItem.bind(null, item.key)}
                handleDone={this.props.handleDone.bind(null, item.key)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
