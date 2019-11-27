import React, { Component } from 'react';
import './App.css';

class ZipForm extends Component{
  constructor(props){
    super(props);
    this.state = {
        zipcode: ''
    };
    this.inputChanged = this.inputChanged.bind(this);
    this.submitZipCode = this.submitZipCode.bind(this);
  }

  inputChanged(e) {
    const {value} = e.target;
    this.setState( {zipcode: value} );
  }

  submitZipCode (e) {
    e.preventDefault(); // don’t submit the form
    const { zipcode } = this.state; // get the zipcode from the state
    const { onSubmit } = this.props; // the method from the App 
    onSubmit(zipcode); // the form calls a method on the App and passes the zipcode
    this.setState( {zipcode : ""} ); // clear the zipcode in the class (and on the web page)
  }

  render(){
    return(
      <div className="zip-form">
        <form onSubmit={this.submitZipCode} id="zipForm">
            <div className="flex-parent">
                <label htmlFor="zipcode">Zip</label>
                <input onChange={this.inputChanged} className="form-control" type="input" id="zipcode" name="zipcode" value={this.state.zipcode} required />
                <button type="submit" className="btn btn-success"> Get the forecast!</button>
            </div>
        </form>
      </div>
    );
  }
}

export default ZipForm;