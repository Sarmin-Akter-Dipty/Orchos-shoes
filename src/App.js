import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AuthProvider from './Pages/Context/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import DashBoard from './Pages/DashBoard/DashBoard';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import MoreItems from './Pages/Items/MoreItems/MoreItems';
import OrderNow from './Pages/OrderNow/OrderNow';
import AdminRoute from './Pages/Login/Login/AdminRoute/AdminRoute';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin';
import AddItems from './Pages/Admin/AddItems/AddItems';
import MyOrder from './Pages/OrderNow/MyOrder';
import ManageAllOrders from './Pages/Admin/ManageAllOrders/ManageAllOrders';
import ManageProducts from './Pages/Admin/ManageProducts/ManageProducts';
import AddReview from './Pages/Reveiw/AddReview';
import Payment from './Pages/Payment/Payment';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Routes>

            <Route path="/home" element={<Home />}>
            </Route>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route exact path="/moreitems" element={<MoreItems />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            <Route path="/dashboard" element={<PrivateRoute>
              <DashBoard />
            </PrivateRoute>}>
              <Route path={`/dashboard/payment/:itemId`} element={<Payment></Payment>}>

              </Route>
              <Route path={`/dashboard/manageproducts`} element={<AdminRoute>
                <ManageProducts></ManageProducts>
              </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/manageallorders`} element={<AdminRoute>
                <ManageAllOrders></ManageAllOrders>
              </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/additems`} element={<AdminRoute>
                <AddItems></AddItems>
              </AdminRoute>}>
              </Route>
            </Route>

            <Route path="/ordernow/:itemId" element={<PrivateRoute>
              <OrderNow />
            </PrivateRoute>}></Route>
            <Route path="/myorders" element={<PrivateRoute>
              <MyOrder />
            </PrivateRoute>}></Route>
            <Route path="/addReview" element={<PrivateRoute>
              <AddReview />
            </PrivateRoute>}></Route>
          </Routes>

        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
