import React, { useState,useEffect } from 'react'
import { withRouter,useLocation } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import Footer from './shared/Footer';
import { withTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "../actions/authActions";


const App=(props)=>{
  let location = useLocation()
  const [state,setState]=useState({});
  
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.isauthenticated) {
      props.history.push('/login');
      dispatch(isUserLoggedIn());
    }
    if (auth.isauthenticated) {
      props.history.push('/');
    }
  }, [auth.isauthenticated, dispatch]);

  useEffect(() => {
    if (props.location !== location.pathname) {
        onRouteChanged();
      }
  }, [location.pathname])

  const onRouteChanged=()=> {
    console.log("ROUTE CHANGED");
    const body = document.querySelector('body');
    if(props.location.pathname === '/layout/RtlLayout') {
      body.classList.add('rtl');
    }
    else {
      body.classList.remove('rtl')
    }
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/login', '/user-pages/login-2', '/register', '/error-404', '/error-500'];
    for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ) {
      if (props.location.pathname === fullPageLayoutRoutes[i]) {
        setState({
          isFullPageLayout: true
        })
        document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
        break;
      } else {
        setState({
          isFullPageLayout: false
        })
        document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
      }
    }
  }
  let navbarComponent = !state.isFullPageLayout ? <Navbar/> : '';
  let sidebarComponent = !state.isFullPageLayout ? <Sidebar/> : '';
  let footerComponent = !state.isFullPageLayout ? <Footer/> : '';

  return (
    <div className="container-scroller">
      { sidebarComponent }
      <div className="container-fluid page-body-wrapper">
        { navbarComponent }
        <div className="main-panel">
          <div className="content-wrapper">
            <AppRoutes/>
          </div>
          { footerComponent }
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(withRouter(App));