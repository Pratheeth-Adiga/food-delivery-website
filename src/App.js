import {useEffect} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Layout from './hocs/Layout';
import { load_user } from './actions/auth';
import { Provider } from 'react-redux';
import store from './store';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import ResetPass from './containers/Resetpass';
import Activate from './containers/Activate';

import Checkout2 from './Components/CheckOut/Addr';
import Checkout3 from './Components/CheckOut/Revie';
import Checkout4 from './Components/CheckOut/final';
import NewCartCard from './Components/Cart/Newcartcard';
import Blog from './Components/Blog/blog';
import Dashboard from './Components/Dashboard/Dashboard';
import FirstPage from './Components/Pages/FirstPage';
import CustomerPage from './Components/Pages/CustomerPage';
import Menu from './Components/Pages/Menu';
import RestaurantPage from './Components/Pages/RestuarantPage';
import InvalidPage from './Components/Pages/InvalidPage';
import RestuarantProfile from './Components/Pages/RestuarantProfile';
import CustomerProfile from './Components/Pages/CustomerProfile';
import Report from './Components/Pages/Report';
import SignUp from './Components/Pages/signup';
import Login from './Components/Pages/login';
import Checkout from './Components/Pages/CheckOutFinal';
import Role from './Components/Pages/role';
import RestuarantOrderItems from './Components/Pages/OrderItems';
import Browse from './Components/Pages/Browse';
import NotRegistered from './Components/Pages/NotRegistered';
import UserProfile from './Components/Pages/UserProfile';
import MyOrders from './Components/Pages/MyOrders';
import Aboutus from './Components/Pages/AboutUs';
import Wallet from './Components/Pages/Wallet';

export default function App() {
  useEffect(() => { 
    store.dispatch(load_user())
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
      <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/role/:id" element={<Role />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/checkout2/:id" element={<Checkout2 />} />
          <Route path="/checkout3/:id" element={<Checkout3 />} />
          <Route path="/checkoutfinal/:id" element={<Checkout4/>} />
          <Route path="/customerpage" element={<CustomerPage />} />
          <Route path="/wallet/:id" element={<Wallet />} />
          <Route path="/restaurantpage/:id" element={<Dashboard />} />
          <Route path="/blog/:resid" element={<Menu />} />
          <Route path="/rxyz/:id" element={<RestaurantPage />} />
          <Route path="/restaurantorders/:id" element={<RestuarantOrderItems />} />
          <Route path="/restaurantorders/:id/:oid" element={<RestuarantOrderItems />} />
          <Route path="/editmenu" element={<RestaurantPage />} />
          <Route path="/rprofile/:id" element={<RestuarantProfile/>} />
          <Route path="/cprofile/:id" element={<UserProfile />} />
          <Route path="/myorders/:id" element={<MyOrders />} />
          <Route path="/savecprofile/:id" element={<CustomerProfile/>} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/reset-password" element={<ResetPass />} />
          <Route path="/login" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/restricted" element={<NotRegistered />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/menu/:resid" element={<Blog />} />
          <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
          <Route path="/activate/:uid/:token" element={<Activate />} />
          <Route path="/cart/:id" element={<NewCartCard />} />
          <Route path="/report" element={<Report />} />
          <Route path="*" element={<InvalidPage />} />
          </Routes>
          </Layout>
      </BrowserRouter>
    </Provider>
  );
}

