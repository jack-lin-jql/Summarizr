import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import logo from './logo.svg';

import Splash from './views/Splash';
import Home from './views/Home';

export default class App extends React.Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path='/' component={Splash} />
          <Route exact={true} path='/home' component={Home} />
        </Switch>
      </Router>
    );
  }
}
