import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';  
import Cart from './Components/Cart/Cart';
import EmptyCart from './Components/EmptyCart/EmptyCart';
import NothingCart from './Components/NothingCart/NothingCart';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import AboutUs from './Components/AboutUs/AboutUs';
import Account from './Components/Account/Account';
import Appliances from './Components/Appliances/Appliances';
import BuyNow from './Components/BuyNow/BuyNow';
import Electronics from './Components/Electronics/Electronics';
import Furniture from './Components/Furniture/Furniture';
import Kitchen from './Components/Kitchen/Kitchen';
import Mobiles from './Components/Mobiles/Mobiles';
import Offers from './Components/Offers/Offers';
import Privacy from './Components/Privcey/Privacy';
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions';
import NotFound from './Components/NotFound/NotFound';
import Layout from './Components/Layout';
import ProductReviews from './Components/ProductReviews/ProductReviews';
import ProductDetails from './Components/ProductDetails/ProdductDetails';
import MainElectronics from './Components/MainElectronics/MainElectronics';
import MainOffer from './Components/MainOffer/MainOffer';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import AuthContextProvider from './Contexts/AuthContext';
import CartContextProvider from './Contexts/CartContext';
import CartThree from './Components/CartThree/CartThree';
import HomeDashboard from './Dashboard/HomeDashboard/HomeDashboard';
import CounterInDashboard from './Dashboard/ComponantDashboard/CounterInDashboard';
import UserDashboard from './Dashboard/UserDashboard/UserDashboard';
import AddUserDashboard from './Dashboard/UserDashboard/AddUserDashboard';
// import Orders from './Components/Orders/Orders';
import TrackingMyOrders from './Components/TrackingMyOrders/TrackingMyOrders';
import { WishlistProvider } from './Contexts/WishlistContext';
import CheckoutSuccess from './Components/auth/CheckoutSuccess';
import SearchFound from './Components/SearchFound/SearchFound';
import SearchNotFound from './Components/SearchNotFound/SearchNotFound';
import ResetPassword from './Components/ResetPassword/ResetPassword'; 
import Categories from './Components/Categories/Categories';
import UpdateUserDashboard from './Dashboard/UserDashboard/UpdateUserDashboard';
import CategoryDashboard from './Dashboard/CategoryDashboard/CategoryDashboard';
import AddCategoryDashboard from './Dashboard/CategoryDashboard/AddCategoryDashboard';
import UpdateCategoryDashboard from './Dashboard/CategoryDashboard/UpdateCategoryDashboard';
import ProductDashboard from './Dashboard/ProductDashboard/ProductDashboard';
import AddProduct from './Dashboard/ProductDashboard/AddProduct';
import UpdateProduct from './Dashboard/ProductDashboard/UpdateProduct';
import OrderDashboard from './Dashboard/OrderDashboard/OrderDashbord';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import AuthProtectedRoute from './Components/ProtectedRoute/AuthProtectedRoute';
import ProtectedDashboard from './Components/ProtectedRoute/ProductedDashboard';
import Footer from './Components/Footer/Footer';
import MyOrders from './Components/Orders/Orders';

export default function App() {
  const routers = createBrowserRouter([
    { path: "",element: <Layout />, children: [
        { index: true, element:  <HomePage />  },

        { path: "signup", element: <AuthProtectedRoute> <SignUp /> </AuthProtectedRoute> },
        { path: "login", element: <AuthProtectedRoute> <Login /> </AuthProtectedRoute> },

        { path: "privacy", element:   <Privacy/>  },
        { path: "home", element:  <HomePage />  },
        { path: "cart", element: <Cart/>   },
        { path: "CheckoutSuccess", element: <CheckoutSuccess/>   },
        { path: "resetPassword/:id", element:  <ResetPassword/>  },
        { path: "searchFound", element: <SearchFound/> },
        { path: "searchNotFound", element: <SearchNotFound/> },
        { path: "cartthree", element: <CartThree /> },
        { path: "EmptyCart", element: <EmptyCart /> },
        { path: "ForgetPassword", element: <ForgetPassword /> },
        { path: "NothingCart", element: <NothingCart /> },
        { path: "ProductDetails/:id", element: <ProductDetails /> },
        { path: "aboutUs", element: <AboutUs /> },

        { path: "account", element:  <ProtectedRoute> <Account/> </ProtectedRoute> },
        { path: "orders", element: <ProtectedRoute> <MyOrders /> </ProtectedRoute> },

        { path: "appliances", element: <Appliances /> },
        { path: "buyNow", element: <BuyNow /> },
        { path: "Electronics", element: <Electronics /> },
        { path: "furniture", element: <Furniture /> },
        { path: "kitchen", element: <Kitchen /> },
        { path: "mobiles", element: <Mobiles /> },
        { path: "offers", element: <Offers /> },
        { path: "TermsAndConditions", element: <TermsAndConditions /> },
        { path: "productReviews", element: <ProductReviews /> },
        { path: "mainElectronics", element: <MainElectronics /> },
        { path: "mainOffer", element: <MainOffer /> },
        { path: "TrackingMyOrders", element: <TrackingMyOrders /> },
        { path: "Categories", element: < Categories/> },

        { path: "*", element: <NotFound /> },
      ],
        

    },
           { path: "footer", element: <Footer /> },
    {
      path: "/dashboard",
      element: 
      <ProtectedDashboard> <HomeDashboard /> </ProtectedDashboard>,
      children: [
        {
          path: "/dashboard",
          element: <CounterInDashboard />,
        },
        {
          path: "userdashboard",
          element: <UserDashboard />,
        },
        {
          path: "adduserdashboard",
          element: <AddUserDashboard />,
        },
        {
          path: "updateuserdashboard/:id",
          element: <UpdateUserDashboard />,
        },
        {
          path: "categorydashboard",
          element: <CategoryDashboard />,
        },
        {
          path: "addcategorydashboard",
          element: <AddCategoryDashboard />,
        },
        {
          path: "updatecategorydashboard/:id",
          element: <UpdateCategoryDashboard />,
        },
        {
          path: "productdashboard",
          element: <ProductDashboard />,
        },
        {
          path: "addproductdashboard",
          element: <AddProduct />,
        },
        {
          path: "updateproductdashboard/:id",
          element: <UpdateProduct/>,
        },
        {
          path: "orderDashboard",
          element: <OrderDashboard/>,
        },
      ],
    },
  ]);
  let queryClient = new QueryClient();

  return (
    <>
  <ToastContainer position="top-center" />
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <CartContextProvider>
          <WishlistProvider>
            <RouterProvider router={routers}></RouterProvider>
          </WishlistProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
    </>
  );
}
