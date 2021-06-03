import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse, Dropdown } from 'react-bootstrap';
import { Trans } from 'react-i18next';

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true}); 
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/icons', state: 'userMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  }

  render () {
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
                  <h5 className="mb-0 font-weight-normal"><Trans>Henry Klein</Trans></h5>
                  <span><Trans>Gold Member</Trans></span>
                </div>
              </div>
              <Dropdown alignRight>
                <Dropdown.Toggle as="a" className="cursor-pointer no-caret">
                  <i className="mdi mdi-dots-vertical"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="sidebar-dropdown preview-list">
                  <a href="!#" className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
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
                  <a href="!#" className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
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
                  <a href="!#" className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
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
          <li className={ this.isPathActive('/') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/">
              <span className="menu-icon"><i className="mdi mdi-speedometer"></i></span>
              <span className="menu-title"><Trans>Dashboard</Trans></span>
            </Link>
          </li>
          <li className={ this.isPathActive('/products') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/products">
              <span className="menu-icon"><i className="mdi mdi-speedometer"></i></span>
              <span className="menu-title"><Trans>All Products</Trans></span>
            </Link>
          </li>
          
          <li className={ this.isPathActive('/orders') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/orders">
              <span className="menu-icon"><i className="mdi mdi-speedometer"></i></span>
              <span className="menu-title"><Trans>Orders</Trans></span>
            </Link>
          </li>
          
        
          <li className="nav-item nav-category">
            <span className="nav-link"><Trans>More</Trans></span>
          </li>
          <li className={ this.isPathActive('/warehouse') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/warehouse">
              <span className="menu-icon"><i className="mdi mdi-speedometer"></i></span>
              <span className="menu-title"><Trans>Warehouse</Trans></span>
            </Link>
          </li>
          <li className={ this.isPathActive('/logs') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/logs">
              <span className="menu-icon"><i className="mdi mdi-speedometer"></i></span>
              <span className="menu-title"><Trans>Log User Access</Trans></span>
            </Link>
          </li>
          <li className={ this.isPathActive('/invoice') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/invoice">
              <span className="menu-icon"><i className="mdi mdi-speedometer"></i></span>
              <span className="menu-title"><Trans>Invoice</Trans></span>
            </Link>
          </li>

          {/*<li className={ this.isPathActive('/tables') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.tablesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('tablesMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-table-large"></i>
              </span>
              <span className="menu-title"><Trans>Privileges Roles</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.tablesMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/tables/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>Add new Privilege</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/tables/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>List Privilege</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>*/}

          <li className={ this.isPathActive('/tablvssses') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.userMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('userMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-table-large"></i>
              </span>
              <span className="menu-title"><Trans>User Management</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.userMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/tables/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>Add new Employee</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/employees') ? 'nav-link active' : 'nav-link' } to="/employees"><Trans>List Employees</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>
          
          <li className={ this.isPathActive('/tablvssses') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.chartsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('chartsMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-table-large"></i>
              </span>
              <span className="menu-title"><Trans>Email</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.chartsMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/tables/basic-table') ? 'nav-link active' : 'nav-link' } to="/send-email"><Trans>Send Email</Trans></Link></li>
                  {/*<li className="nav-item"> <Link className={ this.isPathActive('/tables/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>Billing</Trans></Link></li>*/}
                </ul>
              </div>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/gfydch') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/vgc">
              <span className="menu-icon"><i className="mdi mdi-speedometer"></i></span>
              <span className="menu-title"><Trans>Tickets</Trans></span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);