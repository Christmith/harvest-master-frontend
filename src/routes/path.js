import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NotFoundPage from "../pages/404";
import LoginPage from "../pages/auth/admin/login";
import FinancialManagerDashboard from "./section/financial-manager-dashboard";
import FinancialManagerPayment from "../pages/financial-manager/financial-manager-payment";
import { InventoryAddProduct } from "../pages/inventory manager/inventory-add-product";
import { AddPostPlan } from "../pages/post-harvest/addPostPlan";
import InventoryManagerDashboard from "./section/Inventory-dashboard";
import { CurrentPostHarvestPlans } from "../pages/post-harvest/currentPostHarvestPlans";
import { PostHarvestDetails } from "../pages/post-harvest/postHarvestDetails";
import { CommunityMarket } from "../pages/paddy-inventory/community-market";
import LogisticHandlerDashboard from "./section/logistic-handler-dashboard";
import LogisticHandlerAccount from "../pages/logistic-handler/logistic-handler-account";
import InventoryManagerDashboardPage from "../pages/inventory manager/inventory-manager-dashboard";
import FinancialManagerAccount from "../pages/financial-manager/financial-manager-account";
import FinancialManagerTranstraction from "../pages/financial-manager/financial-manager-transtraction";
import Maintenance from "../pages/maintenance";
import Cart from "../pages/cart/Cart";
import CartItem from "../components/cart/CartItem";
import LogisticHandlerPendingOrders from "../pages/logistic-handler/logistic-handler-pending-orders";
import FinancialManagerManageOrder from "../pages/financial-manager/financial-manager-manage-order";
import SupportDesk from "../pages/support-desk/support-desk-main";
import InstructorDashboard from "./section/instructor-dashboard";
import InstructorAccount from "../pages/instructor/instructor-account";
import AdminDashboard from "./section/admin-dashboard";
import AdminAccount from "../pages/admin/admin-account";
import Inquiries from "src/pages/instructor/inquiries";
import Solution from "src/pages/instructor/solution";
import LogisticHandlerLogActivity from "src/pages/logistic-handler/logistic-handler-log-activity";
import { MainView } from "./section/main-view";
import SupportDashboard from "./section/support-dashboard";
import SupportTableView from "src/section/support-desk/support-table";
import SupportDeskSolutions from "src/pages/support-desk/support-solutions-main";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainView,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "communitymarket",
        Component: CommunityMarket,
      },
      {
        path: "supportdesk",
        Component: SupportDesk,
      },
    
      {
        path: "postharvestplans",
        Component: CurrentPostHarvestPlans,
      },
    ],
      },
      {
        path: "my-requests",
        Component: SupportDeskSolutions,
      },]
  },
  // {
  //     path: "/farmer",
  //     children: [
  //         {
  //             index: true,
  //             Component: Home,
  //         },

  //     ]
  // },
  // {
  //     path: "/buyer",
  //     children: [
  //         {
  //             index: true,
  //             Component: Home,
  //         },
  //     ]
  // },
  // {
  //     path: "/admin",
  //     children: [
  //         {
  //             index: true,
  //             Component: Home,
  //         },
  //     ]
  // },
  {
    path: "/admin",
    Component: AdminDashboard,
    children: [
      {
        index: true,
        Component: AdminAccount,
      },
    ],
  },
  {
    path: "/financial-manager",
    Component: FinancialManagerDashboard,
    children: [
      {
        index: true,
        Component: FinancialManagerAccount,
      },
      {
        path: "payment",
        Component: FinancialManagerPayment,
      },
      {
        path: "transtraction",
        Component: FinancialManagerTranstraction,
      },
      {
        path: "manage-order",
        Component: FinancialManagerManageOrder,
      },
      {
        path: "support",
        Component: Maintenance,
      },
      {
        path: "profile-setting",
        Component: Maintenance,
      },
      {
        path: "log-activity",
        Component: Maintenance,
      },
      {
        path: "analytics",
        Component: Maintenance,
      },
    ],
  },

  {
    path: "/logistic-handler",
    Component: LogisticHandlerDashboard,
    children: [
      {
        index: true,
        Component: LogisticHandlerAccount,
      },
      {
        path: "analytics",
        Component: Maintenance,
      },
      {
        path: "stocks",
        Component: Maintenance,
      },
      {
        path: "pending-order",
        Component: LogisticHandlerPendingOrders,
      },
      {
        path: "support",
        Component: Maintenance,
      },
      {
        path: "log-activity",
        Component: LogisticHandlerLogActivity,
      },
      {
        path: "profile-setting",
        Component: Maintenance,
      },
    ],
  },

  {
    path: "/inventory-manager",
    Component: InventoryManagerDashboard,
    children: [
      {
        index: true,
        Component: InventoryManagerDashboardPage,
      },
      {
        path: "add-product",
        Component: InventoryAddProduct,
      },
    ],
  },
  {
    path: "/support-dashboard",
    Component: SupportDashboard,
    children: [
      {
        index: true,
        Component: SupportTableView,
      },
      {
        path: "add-product",
        Component: InventoryAddProduct,
      },
    ],
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
  {
    path: "/postharvest",
    Component: AddPostPlan,
  },

  {
    path: "/cart",
    Component: Cart,
  },

  {
    path: "/postharvestdetail",
    Component: PostHarvestDetails,
  },

  {
    path: "/instructor",
    Component: InstructorDashboard,
    children: [
      {
        index: true,
        Component: InstructorAccount,
      },
      {
        path: "inquiries",
        Component: Inquiries,
      },
      {
        path: "solutions",
        Component: Solution,
      },
    ],
  },
]);
