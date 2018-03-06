import React, { Component } from "react";
import { connect } from "react-redux";
import {addItem} from '../actions/index';


class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category_id:"",
      condition_id:"",
      name: "",
      description: "",
      price: "",
      make: "",
      model: "",
      dimensions: "",
      image: "",
      notes: "",
      image: ""
    };
  }
  
  handleChangeCategories(event){
    
    const data = this.props.categories.filter(category=>{
       return category.name === event.target.value
      })
      this.setState({category_id: data[0].id});
    }

    handleChangeCondition(event){
      console.log(event.target.value)
      const data = this.props.conditions.filter(condition=>{
        return condition.name ===event.target.value
      })
      
      this.setState({condition_id: data[0].id})
     }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeDescription(event) {
    this.setState({ description: event.target.value });
  }
  handleChangePrice(event) {
    this.setState({ price: event.target.value });
  }
  handleChangeMake(event) {
    this.setState({ make: event.target.value });
  }
  handleChangeModel(event) {
    this.setState({ model: event.target.value });
  }
  handleChangeDimensions(event) {
    this.setState({ dimensions: event.target.value });
  }
  handleChangeImage(event) {
    this.setState({ image: event.target.value });
  }
  handleChangeNotes(event) {
    this.setState({ notes: event.target.value });
  }
  handleChangeImg(event) {

    this.setState({image:event.target.value})
  }
  handleSubmit(event){
   event.preventDefault()
   const newItem = {
    category_id:parseFloat(this.state.category_id),
    condition_id:this.state.condition_id,
    name: this.state.name,
    description: this.state.description,
    price: parseFloat(this.state.price),
    make: this.state.make,
    model: this.state.model,
    dimensions: this.state.dimensions,
    image: this.state.image,
    notes: this.state.notes
   }
   
   this.props.addItem(newItem)

}

  render() {

    
    return (
      <div>
      
        <div className= 'add-form'>

          <form onSubmit = {this.handleSubmit.bind(this)}>
          <select name="cars"
          onChange={this.handleChangeCategories.bind(this)}>
             <option value="Auto">Auto</option>
             <option value="Clothes">Clothes</option>
              <option value="Furniture">Furniture</option>
              <option value="Electronics">Electronics</option>
              <option value="Misc...">Misc...</option>
          </select>
            <br /><br /><br /><br /><br />
            <select 
          onChange={this.handleChangeCondition.bind(this)}>
             <option value="new">New</option>
              <option value="fair">Fair</option>
              <option value="used">Used</option>
          </select>
            <br /><br /><br /><br /><br />
            Name
            <br />
            <input type="text" 
            onChange={this.handleChangeName.bind(this)}/>
            <br />
            Price
            <br />
            <input type="text"
            onChange={this.handleChangePrice.bind(this)} />
            <br />
            Description
            <br />
            <input type="text"
            onChange={this.handleChangeDescription.bind(this)} />
            <br />
            Make
            <br />
            <input type="text"
            onChange={this.handleChangeMake.bind(this)} />
            <br />
            Model
            <br />
            <input type="text"
            onChange={this.handleChangeModel.bind(this)} />
            <br />
            Dimensions
            <br />
            <input type="text" 
            onChange={this.handleChangeDimensions.bind(this)}/>
            <br />
            Notes
            <br />
            <input type="text"
            onChange={this.handleChangeNotes.bind(this)} />
            <br />
            Image
            <br />
            <input type="text"
            onChange={this.handleChangeImg.bind(this)} />
            <br />
            <br />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
 
  return {
    categories:state.items.categories,
    conditions:state.items.conditions

    

  }
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: (item)=>{
      dispatch(addItem(item))
    } 
  };
};

const ConnectedApp = connect(mapStatetoProps, mapDispatchToProps)(AddItem);

export default ConnectedApp;


