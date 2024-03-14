import React, { Component } from 'react';
import "./Layout.css";

class Layout extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: `hey`
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    return `hey`;
  };

  render() {
    return (
      <div className='frame'>
        <div className='calculator'>
          <br></br>
          <img />
          <div className='keys'>
            <input type='button' value={'C'} className='button clear' onClick={this.handleClick}></input>
            <input type='button' value={'DEL'} className='button clear' onClick={this.handleClick}></input>
            <input type='button' value={'%'} className='button operator' onClick={this.handleClick}></input>
            <input type='button' value={'/'} className='button operator' onClick={this.handleClick}></input>

            <input type='button' value={'7'} className='button' onClick={this.handleClick}></input>
            <input type='button' value={'8'} className='button' onClick={this.handleClick}></input>
            <input type='button' value={'9'} className='button' onClick={this.handleClick}></input>
            <input type='button' value={'*'} className='button operator' onClick={this.handleClick}></input>

            <input type='button' value={'4'} className='button' onClick={this.handleClick}></input>
            <input type='button' value={'5'} className='button' onClick={this.handleClick}></input>
            <input type='button' value={'6'} className='button' onClick={this.handleClick}></input>
            <input type='button' value={'-'} className='button operator' onClick={this.handleClick}></input>

            <input type='button' value={'1'} className='button' onClick={this.handleClick}></input>
            <input type='button' value={'2'} className='button' onClick={this.handleClick}></input>
            <input type='button' value={'3'} className='button' onClick={this.handleClick}></input>
            <input type='button' value={'+'} className='button operator' onClick={this.handleClick}></input>

            <input type='button' value={'0'} className='button' onClick={this.handleClick}></input>
            <input type='button' value={'.'} className='button' onClick={this.handleClick}></input>
            <input type='button' value={'='} className='button equal-sign' onClick={this.handleClick}></input>
          </div>

        </div>
      </div>
    );
  };
}

export default Layout;