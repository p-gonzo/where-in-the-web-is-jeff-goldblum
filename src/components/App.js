import React from 'react';
import store from '../store/store.js';
import { connect } from 'react-redux';
import changeText from '../actions/currentText';
import handleArticleChange from '../actions/updateArticle.js';
import updateCount from '../actions/updateCount.js'


class App extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  componentDidMount() {
    setTimeout(()=> {
      this.props.changeText("Where in the web is Jeff Goldblum?");
      this.props.handleArticleChange("Independance_Day");
    } , 1000);
  }

  render() {
    return (
      <div>
        <h1 onClick ={ (e) => this.props.changeText("Clicked!") }>
          {this.props.text}
        </h1>
        <h3>Click Count: {this.props.currentClickCount}</h3>
        <ul>
          {this.props.articleList.map((article) => {
            return (<li onClick = {() => {
              this.props.handleArticleChange(article);
              this.props.updateCount(this.props.currentClickCount);
            }}>{article}</li>)
              })}
        </ul>
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    text: state.currentText,
    articleList: state.articleList,
    currentClickCount: state.clickCounter
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    changeText: (text) => dispatch(changeText(text)),
    handleArticleChange: (article) => dispatch(handleArticleChange(article)),
    updateCount: (clickCount) => dispatch(updateCount(clickCount))  
  }
}

var AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;


