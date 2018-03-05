import React, { Component } from 'react';

class Todo extends Component {
  constructor(items) {
    super();
    this.state({
      completed: false,
    })

  }
  toggleState = () => {
    this.setState({
      completed: !this.state.completed
      
    })
  }

  render() {

    if (this.state.completed) {
      const styles = { textDecoration: 'line-through' };
    } else {
      const styles = { textDecoration: 'none' };
    };


    return (
      <div style={styles} onClick={this.toggleState}>
        {this.props.thing}
      </div>
    )
  }
}