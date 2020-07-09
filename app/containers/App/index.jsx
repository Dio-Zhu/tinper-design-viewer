import React, { Component } from 'react';
import connectReactViewer from 'ide-sdk-viewer';
import CreateView from 'ide-sdk-render-react';
const WrappedCreateView = connectReactViewer(CreateView,React);
import './index.css';
import GlobalParser from "./GlobalParser";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return <WrappedCreateView globalParser={GlobalParser}/>
  }
}

export default App;
