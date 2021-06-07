import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import ProtectedRoute from "../components/ProtectedRoute";

import Spinner from './shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
// new components added
const Assets = lazy(() => import('./products/Assets'));
const Warehouse = lazy(() => import('./warehouse/Warehouse'));
const Employees = lazy(() => import('./employee/Employees'));
const AddEmployee = lazy(() => import('./employee/AddEmployee'));

const EmployeeProfile = lazy(() => import('./employee/EmployeeProfile'));
const Orders = lazy(() => import('./orders/orders'));
const OfflineOrders = lazy(() => import('./orders/OfflineOrders'));
const OfflineOrderForm = lazy(() => import('./orders/OfflineOrderForm'));
const Logs = lazy(() => import('./logs/Logs'));
const Invoice = lazy(() => import('./invoice/Invoice'));
const Email = lazy(() => import('./email/Email'));
const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>   
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register1} />

          {/*<Route path="/forgetPassword" component={ForgetPassword} />
          <Route path="/resetPassword" component={ResetPassword} />*/}

          <Route exact path="/" component={ Dashboard } />

          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />

          <Route path="/form-Elements/basic-elements" component={ BasicElements } />

          <Route path="/tables/basic-table" component={ BasicTable } />

          <Route path="/icons/mdi" component={ Mdi } />

          <Route path="/charts/chart-js" component={ ChartJs } />
          {/* new routes */}
          <Route path="/products" component={Assets}/>
          <Route path="/warehouse" component={Warehouse}/>
          <Route exact path="/employees/:id" component={EmployeeProfile}/>
          <Route path="/employees" component={Employees}/>
          <Route path="/add-employee" component={AddEmployee}/>

          <Route exact path="/orders" component={ Orders } />
          <Route exact path="/offorders/edit/:id" component={ OfflineOrderForm } />
          <Route exact path="/offorders/add" component={ OfflineOrderForm } />
          <Route exact path="/offorders" component={ OfflineOrders } />
          <Route exact path="/logs" component={ Logs } />
          <Route exact path="/invoice" component={ Invoice } />
          <Route exact path="/send-email" component={ Email } />
          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />


          <Redirect to="/error-pages/error-404" component={ Error404 }/>
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;