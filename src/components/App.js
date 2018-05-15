import React from 'react';
import store from '../store/store.js';
import { connect } from 'react-redux';
import changeText from '../actions/currentText';


class App extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  componentDidMount() {
    setTimeout(()=> this.props.changeText("Goodbye!") , 2000);
  }

  render() {
    return (
      <div>
        <h1 onClick ={ (e) => this.props.changeText("Clicked!") }>
          {this.props.text}
        </h1>
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    text: state.currentText
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    changeText: (text) => dispatch(changeText(text))
  }
}

var AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;


