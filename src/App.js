import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import History from './components/History';
import Search from './components/Search';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h5>RTS_LABS_ASSESSMENT</h5>
        <Provider store={store}>
          <Router>
            <Fragment>
              <Switch>
                <Route exact path='/' component={Search} />
                <Route exact path='/history' component={History} />
              </Switch>
            </Fragment>
          </Router>
        </Provider>
      </header>
    </div>
  );
}

export default App;
