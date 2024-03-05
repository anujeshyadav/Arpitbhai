import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import UserList from "components/Pages/UserList";
import PaymentList from "components/Pages/PaymentList";
import CategoryList from "components/Pages/CategoryList";
import Addcategory from "components/Pages/Addcategory";
import UserDetails from "components/Pages/UserDetails";
import PointHistorypage from "components/Pages/PointHistorypage";
import Landing_UserPage from "components/Pages/Landing_UserPage.js";

import PlanList from "components/Pages/PlanList";
import AddPlan from "components/Pages/AddPlan";

import AddProduct from "components/Pages/AddProduct";
import ProductList from "components/Pages/ProductList";

var routes = [
  {
    hidden: false,
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    hidden: true,

    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/admin",
  },

  {
    hidden: false,
    path: "/UserList",
    name: "All Users",
    icon: "ni ni-user-run text-black",
    component: <UserList />,
    layout: "/admin",
  },
  {
    hidden: true,
    path: "/PointHistorypage/0",
    name: "pointhistory",
    icon: "ni ni-user-run text-black",
    component: <PointHistorypage />,
    layout: "/admin",
  },
  {
    hidden: false,
    path: "/LandingUserPage",
    name: "Landing and Setting Page",
    icon: "ni ni-user-run text-black",
    component: <Landing_UserPage />,
    layout: "/admin",
  },
  {
    hidden: true,
    path: "/userDetails/0",
    name: "userDetails",
    name: "userDetails",
    icon: "ni ni-user-run text-black",
    component: <UserDetails />,
    layout: "/admin",
  },

  {
    hidden: false,
    path: "/planlist",
    name: "Plan List",
    icon: "ni ni-collection text-grey",
    component: <PlanList />,
    layout: "/admin",
  },
  {
    hidden: true,
    path: "/addplan/:id",
    name: "Plan List",
    icon: "ni ni-ungroup",
    component: <AddPlan />,
    layout: "/admin",
  },
  {
    hidden: false,
    path: "/CategryList",
    name: "Category List",
    icon: "ni ni-ungroup text-red",
    component: <CategoryList />,
    layout: "/admin",
  },
  {
    hidden: true,
    path: "/addcategory/:id",
    name: "Add Category",
    icon: "ni ni-ungroup",
    component: <Addcategory />,
    layout: "/admin",
  },
  {
    hidden: false,
    path: "/productList",
    name: "Product List",
    icon: "ni ni-books",
    component: <ProductList />,
    layout: "/admin",
  },
  // {
  {
    hidden: true,
    path: "/addproduct/:id",
    name: "Add Product",
    icon: "ni ni-books",
    component: <AddProduct />,
    layout: "/admin",
  },
  // {
  //   path: "/addcategory/:id",
  //   name: "Category List",
  //   icon: "ni ni-ungroup",
  //   component: <Maps />,
  //   layout: "/admin",
  // },
  {
    hidden: false,

    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },

  {
    hidden: false,
    path: "/PaymentList",
    name: "Payment List",
    icon: "ni ni-paper-diploma text-blue",
    component: <PaymentList />,
    layout: "/admin",
  },
  {
    hidden: true,
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },
  {
    hidden: true,
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    hidden: true,
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
];
export default routes;
