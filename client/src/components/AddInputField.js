import React, { Component } from 'react';

const styles = {
  position: 'fixed',
  zIndex: '1',
  height: '110px'
}

class AddInputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: '180px',
      left: '989px',
      height: '30px',
      width: '180px',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.addInputField('input_3', this.state)
  }
  render() {
    return (
      <>
        <button>Add Input Field</button>
        <div style={styles}>
          <button
            onClick={this.handleClick}
          >
          Add Input Field
          </button>
        </div>
      </>
    );
  }
}

export default AddInputField;
