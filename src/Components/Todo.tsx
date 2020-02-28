import React from "react";
import ItemList from "./ItemList";
import { Iitem } from '../Model/ITodo'
import {  connect } from 'react-redux'
import { addDefaultListToStore,
  deleteItemFromList,
  addItemToList,
handleDone}  from '../Actions/todoAction'
import { bindActionCreators } from "redux"

interface ItodoProps {
  addDefaultList?: (param:Iitem[]) => {}
  itemList?:Iitem[]
  addItemToList?:any
  deleteItemFromList?:any
  handleDone?:any
}
interface ItodoStates {
  text: string;
  items: Iitem[];
}
export class Todo extends React.Component<ItodoProps, ItodoStates> {

  public componentWillReceiveProps(nextProps:ItodoProps){
    console.log('component will receive')
    if (this.state.items !== nextProps.itemList && nextProps.itemList  ) {
      this.setState({...this.state, items:nextProps.itemList});
    }
  }
  
  public componentDidMount (){
    // add default list to store 
    console.log('did mount')
  this.props.addDefaultList && this.props.addDefaultList(this.state.items)
  }
  
  constructor(props: ItodoProps) {
    super(props);
    this.state = {
      text: "",
      items: [
        { title: "Eggg", isChecked: false, key: "1" },
        { title: "Apple", isChecked: false, key: "2" },
        { title: "Banana", isChecked: false, key: "3" }
      ]
    };
  }
  render() {
    let doneItem: number = this.state.items.filter(i => {
      return i.isChecked === true;
    }).length;
    console.log('state : ',this.state.items )
    console.log('done : ', doneItem)
    return (
      <div>
        <p>TODO</p>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input
            onChange={this.handleInputChange.bind(this)}
            value={this.state.text}
          />
          <button onClick={this.onButtonClick.bind(this)}> Submit </button>
        </form>
        <p>Number of Total item : {this.state.items.length}</p>
        <p>Done: {doneItem}</p>
        <p>Incomplete:{this.state.items.length - doneItem}</p>
        <p>
          <ItemList
            itemlist={this.state.items}
            deleteItem={this.deleteItem.bind(this)}
            handleDone={this.handleDone.bind(this)}
          />
        </p>
      </div>
    );
  }

  handleDone(key: string) {
    this.props.handleDone(key)
  }

  deleteItem(key: string) {
    this.props.deleteItemFromList(key);
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    let newItem = {
      title: this.state.text,
      isChecked: false,
      key: Math.random().toString()
    };
     this.props.addItemToList(newItem)
     this.setState({text:''})

  }
  onButtonClick(e: any) {}
  handleInputChange(event: any) {
    let entertext = event.target.value;
    this.setState({ text: entertext });
  }
}




const mapStateToProps = (state:any) =>{
  return {
     itemList:state.todo.itemList
    
}
}


const mapDispatchToProps = (dispatch:any) =>{
  return {
     ...bindActionCreators({
       addDefaultList:addDefaultListToStore,
       addItemToList:addItemToList,
       deleteItemFromList:deleteItemFromList,
       handleDone:handleDone
      }, dispatch)
          
}
}

// export default App;

export default connect(mapStateToProps, mapDispatchToProps, null,{ pure: false })(Todo)