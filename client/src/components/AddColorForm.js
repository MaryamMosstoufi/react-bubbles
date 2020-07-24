import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddColorForm extends React.Component {
  state = {
    newColor: {
      color: '',
      code: {
        hex: ''
      }
    },
  };


  handleChange = e => {
    this.setState({
      newColor: {
        ...this.state.newColor,
        color: e.target.value,
      }
    });
  };
  handleChangeHex = e => {
    this.setState({
      newColor: {
        ...this.state.newColor,
        code: {
          hex: e.target.value
        }
      }
    });
  };
  addColor = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/colors", this.state.newColor)
      .then(res => {
        this.setState({ getColors: res.data });
        this.setState({ newColor: { color: '', code:{hex: ''}} });
        console.log({ res })
      })
      .catch(err => console.log({ err }))
  }
  render() {
    return (
      <div className='uk-width-medium uk-card uk-card-default uk-card-body'>
        <form onSubmit={this.addColor}>
          <fieldset className='uk-fieldset'>
            <legend className='uk-legend uk-text-center'>Add Color</legend>
            <div className='uk-margin'>
              <input
                className='uk-input'
                type='text'
                name='color'
                onChange={this.handleChange}
                value={this.state.newColor.color}
                placeholder='Color' />
            </div>
            <div className='uk-margin'>
              <input
                className='uk-input'
                type='text'
                name='code'
                onChange={this.handleChangeHex}
                value={this.state.newColor.code.hex}
                placeholder='Code' />
            </div>
            <div className='uk-margin'>
              <button className='uk-button uk-button-primary uk-width-1-1'>Submit</button>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default AddColorForm;