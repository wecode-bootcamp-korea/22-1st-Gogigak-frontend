import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import ShoppingList from './pages/Shopping/shoppingList';
import SignUp from './pages/SignUp/SignUp';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/" component={Main} />
          <Route exact path="/List" component={ShoppingList} />
          <Route exact path="/Detail" component={Detail} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
