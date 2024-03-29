import React, { useState,useEffect } from 'react';
import { Link, withRouter,useLocation } from 'react-router-dom';
import { Collapse, Dropdown } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { useSelector } from "react-redux";

// Icons for Sidebar
import {
  DashboardRounded,
  ShopRounded,
  ShopTwoRounded,
  LocalOfferRounded,
  Receipt,
  Group,
  Email,
  ConfirmationNumber,
  TrendingUp,
  HomeWork
} from '@material-ui/icons';
// Colors for Icons
import { green, lightBlue, red, purple, blue, orange, amber, yellow } from '@material-ui/core/colors';


const Sidebar=(props)=> {
let location = useLocation()
const [state,setState]=useState({});
const auth = useSelector((state) => state.auth);

const isPathActive=(path)=>{
    return props.location.pathname.startsWith(path);
  }

const onRouteChanged=()=>{
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(state).forEach(i => {
      setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: '/apps', state: 'appsMenuOpen' },
      { path: '/basic-ui', state: 'basicUiMenuOpen' },
      { path: '/form-elements', state: 'formElementsMenuOpen' },
      { path: '/tables', state: 'tablesMenuOpen' },
      { path: '/icons', state: 'userMenuOpen' },
      { path: '/charts', state: 'chartsMenuOpen' },
      { path: '/user-pages', state: 'userPagesMenuOpen' },
      { path: '/error-pages', state: 'errorPagesMenuOpen' },
    ];
    dropdownPaths.forEach((obj => {
      if (isPathActive(obj.path)) {
        setState({ [obj.state]: true })
      }
    }));
  }
  
useEffect(() => {
    onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {

      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
}, [])

useEffect(() => {
    if (props.location !== location.pathname) {
        onRouteChanged();
      }
}, [location])

const toggleMenuState=(menuState)=> {
    if (state[menuState]) {
      setState({ [menuState]: false });
    } else if (Object.keys(state).length === 0) {
      setState({ [menuState]: true });
    } else {
      Object.keys(state).forEach(i => {
        setState({ [i]: false });
      });
      setState({ [menuState]: true });
    }
  }

    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <a className="sidebar-brand brand-logo" href="index.html">{/*<img src={require('../../assets/images/logo.svg')} alt="logo" />*/}</a>
          <a className="sidebar-brand brand-logo-mini" href="index.html">{/*<img src={require('../../assets/images/logo-mini.svg')} alt="logo" />*/}</a>
        </div>
        <ul className="nav">
          <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">
                  <img className="img-xs rounded-circle " src={require('../../assets/images/faces/face15.jpg')} alt="profile" />
                  <span className="count bg-success"></span>
                </div>
                <div className="profile-name">
                  {auth.isauthenticated?<h5 className="mb-0 font-weight-normal"><Trans>{auth.employee.name}</Trans></h5>:<h5 className="mb-0 font-weight-normal"><Trans>Loading.</Trans></h5>}
                  {auth.isauthenticated?<span><Trans>{auth.employee.role}</Trans></span>:<span><Trans>Loading.</Trans></span>}
                </div>
              </div>
              <Dropdown alignRight>
                <Dropdown.Toggle as="a" className="cursor-pointer no-caret">
                  <i className="mdi mdi-dots-vertical"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="sidebar-dropdown preview-list">
                 <a href="!#" className="dropdown-item preview-item" onClick={evt => evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-settings text-primary"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small"><Trans>Account settings</Trans></p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="!#" className="dropdown-item preview-item" onClick={evt => evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-onepassword  text-info"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small"><Trans>Change Password</Trans></p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="!#" className="dropdown-item preview-item" onClick={evt => evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-calendar-today text-success"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small"><Trans>To-do list</Trans></p>
                    </div>
                  </a>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link"><Trans>Navigation</Trans></span>
          </li>
          <li className={isPathActive('/') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <Link className="nav-link" to="/">
              <span className="menu-icon"><DashboardRounded style={{ color: lightBlue[600],fontSize:"14px" }} /></span>
              <span className="menu-title"><Trans>Dashboard</Trans></span>
            </Link>
          </li>
          <li className={isPathActive('/products') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <Link className="nav-link" to="/products">
              <span className="menu-icon"><LocalOfferRounded style={{ color: orange[900],fontSize:"14px" }} /></span>
              <span className="menu-title"><Trans>All Products</Trans></span>
            </Link>
          </li>

          <li className={isPathActive('/orders') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <Link className="nav-link" to="/orders">
              <span className="menu-icon"><ShopRounded style={{ color: purple[400],fontSize:"14px" }} /></span>
              <span className="menu-title"><Trans>Orders</Trans></span>
            </Link>
          </li>

          <li className={isPathActive('/offorders') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <div className={state.orderMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => toggleMenuState('orderMenuOpen')} data-toggle="collapse">
              <span className="menu-icon"><ShopTwoRounded style={{ color: purple[500],fontSize:"14px"}} /></span>
              <span className="menu-title"><Trans>Offline Orders</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={state.orderMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={isPathActive('/offorders/add') ? 'nav-link active' : 'nav-link'} to="/offorders/add"><Trans>Add an Order</Trans></Link></li>
                  <li className="nav-item"> <Link className={isPathActive('/offorders') ? 'nav-link active' : 'nav-link'} to="/offorders"><Trans>All Offline Orders</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>
          {/* <li className={this.isPathActive('/offorders') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <Link className="nav-link" to="/offorders">
              <span className="menu-icon"><i className="mdi mdi-speedometer"></i></span>
              <span className="menu-title"><Trans>Offline Orders</Trans></span>
            </Link>
          </li> */}


          <li className="nav-item nav-category">
            <span className="nav-link"><Trans>More</Trans></span>
          </li>
          <li className={isPathActive('/warehouse') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <Link className="nav-link" to="/warehouse">
              <span className="menu-icon"><HomeWork style={{ color: green[900],fontSize:"14px" }} /></span>
              <span className="menu-title"><Trans>Warehouse</Trans></span>
            </Link>
          </li>
          <li className={isPathActive('/logs') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <Link className="nav-link" to="/logs">
              <span className="menu-icon"><TrendingUp style={{ color: blue[500],fontSize:"14px" }} /></span>
              <span className="menu-title"><Trans>Activity Logs</Trans></span>
            </Link>
          </li>
          <li className={isPathActive('/invoice') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <Link className="nav-link" to="/invoice">
              <span className="menu-icon"><Receipt style={{ color: red[700],fontSize:"14px" }} /></span>
              <span className="menu-title"><Trans>Invoice</Trans></span>
            </Link>
          </li>

          <li className={isPathActive('/tablvssses') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <div className={state.userMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => toggleMenuState('userMenuOpen')} data-toggle="collapse">
              <span className="menu-icon"><Group style={{ color: yellow[900],fontSize:"14px" }} /></span>
              <span className="menu-title"><Trans>User Management</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={state.userMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={isPathActive('/add-employee') ? 'nav-link active' : 'nav-link'} to="/add-employee"><Trans>Add new Employee</Trans></Link></li>
                  <li className="nav-item"> <Link className={isPathActive('/employees') ? 'nav-link active' : 'nav-link'} to="/employees"><Trans>List Employees</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>

          <li className={isPathActive('/tablvssses') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <div className={state.chartsMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => toggleMenuState('chartsMenuOpen')} data-toggle="collapse">
              <span className="menu-icon"><Email  style={{ color: green[500],fontSize:"14px" }} /></span>
              <span className="menu-title"><Trans>Email</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={state.chartsMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={isPathActive('/send-email') ? 'nav-link active' : 'nav-link'} to="/send-email"><Trans>Send Email</Trans></Link></li>
                  {/*<li className="nav-item"> <Link className={ this.isPathActive('/add-employee') ? 'nav-link active' : 'nav-link' } to="/add-employee"><Trans>Add Employee</Trans></Link></li>*/}
                </ul>
              </div>
            </Collapse>
          </li>
          <li className={isPathActive('/gfydch') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <Link className="nav-link" to="/vgc">
              <span className="menu-icon"><ConfirmationNumber  style={{ color: amber[500],fontSize:"14px" }} /></span>
              <span className="menu-title"><Trans>Tickets</Trans></span>
            </Link>
          </li>
        </ul>
      </nav>
    )
}

export default withRouter(Sidebar)
