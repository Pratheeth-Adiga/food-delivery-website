import * as React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Checkout from './Components/Pages/CheckOut';
import FirstPage from './Components/Pages/FirstPage';
import CustomerPage from './Components/Pages/CustomerPage';
import Cart from './Components/Pages/Cart';
import DeliveryAgent from './Components/Pages/DeliveryAgent';
import Menu from './Components/Pages/Menu';
import RestaurantPage from './Components/Pages/RestuarantPage';
import InvalidPage from './Components/Pages/InvalidPage';
import RestuarantProfile from './Components/Pages/RestuarantProfile';
import DeliveryProfile from './Components/Pages/DeliveryProfile';
import CustomerProfile from './Components/Pages/CustomerProfile';
import MenuEdit from './Components/RestuarantPage/MenuEdit';
import NewItem from './Components/RestuarantPage/newitem';
import Activate from './containers/Activate';
import Report from './Components/Pages/Report';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import ResetPass from './containers/Resetpass';
import { Provider } from 'react-redux';
import store from './store';
import SignUp from './Components/Pages/signup';
import Login from './Components/Pages/login';
import Layout from './hocs/Layout';
import { useEffect } from 'react';
import { load_user } from './actions/auth';
export default function App() {
  useEffect(() => { 
    store.dispatch(load_user())
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
      <Routes>
          <Route path="/" element={<FirstPage/>}/>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/customerpage" element={<CustomerPage />} />
          <Route path="/cart/:id" element={<Cart />} />
          <Route path="/delivery" element={<DeliveryAgent />} />
          <Route path="/menu/:resid" element={<Menu />} />
          <Route path="/restuarant" element={<RestaurantPage />} />
          <Route path="/editmenu" element={<RestaurantPage />} />
          <Route path="/rprofile" element={<RestuarantProfile/>} />
          <Route path="/cprofile" element={<CustomerProfile />} />
          <Route path="/dprofile" element={<DeliveryProfile />} />
          <Route path="/newitem" element={<NewItem />} />
          <Route path="/menuedit" element={<MenuEdit />} />
          <Route path="/reset-password" element={<ResetPass />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
          <Route path="/activate/:uid/:token" element={<Activate />} />
          <Route path="/report" element={<Report />} />
          <Route path="*" element={<InvalidPage />} />
          </Routes>
          </Layout>
      </BrowserRouter>
    </Provider>
  );
}

