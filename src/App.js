import React from 'react';
import { Content } from './Content';
import { Header } from './components/Header';
import { Login } from './Login';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/inicial" component={Login} />
        <Redirect from="/" to="/inicial" />
      </Switch>
      <Content />
    </div>
  );
}

export default App;
