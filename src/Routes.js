import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import ShoppingList from './pages/Shopping/ShoppingList.js';
import SignUp from './pages/SignUp/SignUp';
import Register from './pages/Register/Register';
import Address from './pages/Address/Address';

import './components/Nav/Nav.scss';
import Mypage from './pages/Mypage/Mypage';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/" component={Main} />
          <Route exact path="/list" component={ShoppingList} />
          <Route exact path="/list/:name" component={ShoppingList} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/detail/:product" component={Detail} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/mypage/:myData" component={Mypage} />
          <Route exact path="/address" component={Address} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
