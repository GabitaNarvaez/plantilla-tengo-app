// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssignmentIcon from '@material-ui/icons/Assignment';

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
import Productos from "views/Producto/Productos";
import Pedidos from "views/Pedido/Pedidos";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Panel",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Productos",
    icon: AssignmentIcon,
    component: Productos,
    layout: "/admin"
  },
  {
    path: "/pedidos",
    name: "Pedidos",
    icon: ShoppingCartIcon,
    component: Pedidos,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Perfil",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  
];

export default dashboardRoutes;
