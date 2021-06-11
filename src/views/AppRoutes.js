import React, { Component,Suspense, lazy,useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from "../components/ProtectedRoute";

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
const AddOrderForm = lazy(() => import('./orders/AddOrderForm'));
const EditOrderForm = lazy(() => import('./orders/EditOrderForm'));
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


function AppRoutes() {
  
  return (
    <Suspense fallback={<Spinner/>}>   
      <Switch>
        <Route path="/login" exact component={Login} />
        <ProtectedRoute exact path="/" component={ Dashboard } />
        <ProtectedRoute path="/basic-ui/buttons" component={ Buttons } />
        <ProtectedRoute path="/basic-ui/dropdowns" component={ Dropdowns } />
        <ProtectedRoute path="/basic-ui/typography" component={ Typography } />
        <ProtectedRoute path="/form-Elements/basic-elements" component={ BasicElements } />
        <ProtectedRoute path="/tables/basic-table" component={ BasicTable } />
        <ProtectedRoute path="/icons/mdi" component={ Mdi } />
        <ProtectedRoute path="/charts/chart-js" component={ ChartJs } />
        {/* new routes */}
        <ProtectedRoute path="/products" component={Assets}/>
        <ProtectedRoute path="/warehouse" component={Warehouse}/>
        <ProtectedRoute exact path="/employees/:id" component={EmployeeProfile}/>
        <ProtectedRoute path="/employees" component={Employees}/>
        <ProtectedRoute path="/add-employee" component={AddEmployee}/>
        <ProtectedRoute exact path="/orders" component={ Orders } />
        <ProtectedRoute exact path="/offorders/edit/:id" component={ EditOrderForm } />
        <ProtectedRoute exact path="/offorders/add" component={ AddOrderForm } />
        <ProtectedRoute exact path="/offorders" component={ OfflineOrders } />
        <ProtectedRoute exact path="/logs" component={ Logs } />
        <ProtectedRoute exact path="/invoice" component={ Invoice } />
        <ProtectedRoute exact path="/send-email" component={ Email } />
        <ProtectedRoute path="/error-pages/error-404" component={ Error404 } />
        <ProtectedRoute path="/error-pages/error-500" component={ Error500 } />


        <Redirect to="/error-pages/error-404" component={ Error404 }/>
      </Switch>
    </Suspense>
  );
}

export default AppRoutes
