import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Loader from './components/Includes/Loader/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
  
  {/* END HEAD */}
  {/* BEGIN BODY */}
  {/* <Loader type='page-loader'/> */}
  {/* START navigation */}
  <nav className="fixedtop topbar navigation" role="navigation">
    <div className="nav-wrapper container">
      <a id="logo-container" href="index-2.html" className=" brand-logo ">
        <i className="mdi mdi-ring" />
        ZAK
      </a>
      {/* <ul class="right hide-on-med-and-down">
  <li><a href="#">Navbar Link</a></li>
</ul> */}
      {/* <ul id="nav-mobile" class="sidenav">
  <li><a href="#">Navbar Link</a></li>
</ul> */}
      <a
        href="#"
        data-target=""
        className="waves-effect waves-circle navicon back-button htmlmode show-on-large "
      >
        <i className="mdi mdi-chevron-left" data-page="" />
      </a>
      <a
        href="#"
        data-target="slide-nav"
        className="waves-effect waves-circle navicon sidenav-trigger show-on-large"
      >
        <i className="mdi mdi-menu" />
      </a>
      <a
        href="#"
        data-target="slide-settings"
        className="waves-effect waves-circle navicon right sidenav-trigger show-on-large pulse"
      >
        <i className="mdi mdi-tune" />
      </a>
      <a
        href="#"
        data-target=""
        className="waves-effect waves-circle navicon right nav-site-mode show-on-large"
      >
        <i className="mdi mdi-invert-colors mdi-transition1" />
      </a>
      {/* <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
    </div>
  </nav>
  <ul id="slide-nav" className="sidenav sidemenu">
    <li className="menu-close">
      <i className="mdi mdi-close" />
    </li>
    <li className="user-wrap">
      <div className="user-view row">
        {/* <div class="background">
  <img src="/theme/images/office.jpg">
</div> */}
        <div className="col s3 imgarea">
          <a href="#user">
            <img className="circle" src="/theme/images/user-37.jpg" />
          </a>
        </div>
        <div className="col s9 infoarea">
          <a href="#name">
            <span className="name">Cherry Smith</span>
          </a>
          <a href="#email">
            <span className="email">cherrysmith@gmail.com</span>
          </a>
        </div>
      </div>
    </li>
    <li className="menulinks">
      <ul className="collapsible">
        {/* SIDEBAR - START */}
        {/* MAIN MENU - START */}
        <li className="sh-wrap">
          <div className="subheader">Navigation</div>
        </li>
        <li className="lvl1 ">
          <div className=" waves-effect ">
            <a href="ui-pages-home.html">
              <i className="mdi mdi-home-outline" />
              <span className="title">Welcome</span>
            </a>
          </div>
        </li>
        <li className="lvl1 ">
          <div className=" waves-effect ">
            <a href="sub-apps.html">
              <i className="mdi mdi-open-in-app" />
              <span className="title">APPS</span>
              <span className="badge blue-grey lighten-3 badge-rounded">
                NEW
              </span>
            </a>
          </div>
        </li>
        <li className="lvl1 ">
          <div className=" waves-effect ">
            <a href="sub-uielements.html">
              <i className="mdi mdi-laptop" />
              <span className="title">UI Elements</span>
            </a>
          </div>
        </li>
        <li className="lvl1 ">
          <div className=" waves-effect ">
            <a href="sub-utilities-components.html">
              <i className="mdi mdi-flask-outline" />
              <span className="title">Components</span>
            </a>
          </div>
        </li>
        <li className="lvl1 ">
          <div className=" waves-effect ">
            <a href="sub-forms.html">
              <i className="mdi mdi-textbox" />
              <span className="title">Forms</span>
            </a>
          </div>
        </li>
        <li className="lvl1 ">
          <div className=" waves-effect ">
            <a href="sub-charts.html">
              <i className="mdi mdi-chart-line" />
              <span className="title">Charts</span>
              <span className="badge blue-grey lighten-3 badge-rounded">
                HOT
              </span>
            </a>
          </div>
        </li>
        <li className="lvl1 ">
          <div className=" waves-effect ">
            <a href="sub-pages.html">
              <i className="mdi mdi-shape-outline" />
              <span className="title">Pages</span>
            </a>
          </div>
        </li>
        <li className="lvl1 ">
          <div className=" waves-effect ">
            <a href="sub-access.html">
              <i className="mdi mdi-access-point" />
              <span className="title">Site Access</span>
            </a>
          </div>
        </li>
        <li className="lvl1 ">
          <div className=" waves-effect ">
            <a href="sub-portfolio.html">
              <i className="mdi mdi-grid-large" />
              <span className="title">Portfolio</span>
            </a>
          </div>
        </li>
        <li className="lvl1 ">
          <div className=" waves-effect ">
            <a href="sub-blogs.html">
              <i className="mdi mdi-square-edit-outline" />
              <span className="title">Blogs</span>
            </a>
          </div>
        </li>
        <li className="sep-wrap">
          <div className="divider" />
        </li>
        <li className="sh-wrap">
          <div className="subheader">Reach Us</div>
        </li>
        <li className="lvl1 ">
          <div className="waves-effect ">
            <a href="tel:+1 234 567 890">
              <i className="mdi mdi-cellphone-basic" />
              <span className="title">Phone</span>
            </a>
          </div>
        </li>
        <li className="lvl1 ">
          <div className="waves-effect ">
            <a href="mailto:email@example.com">
              <i className="mdi mdi-email-outline" />
              <span className="title">Email</span>
            </a>
          </div>
        </li>
        <li className="lvl1 ">
          <div className="waves-effect ">
            <a href="sms:+1 234 567 890">
              <i className="mdi mdi-message-text-outline" />
              <span className="title">Message</span>
            </a>
          </div>
        </li>
        <li className="sep-wrap">
          <div className="divider" />
        </li>
        <li className="lvl1 ">
          <div className="waves-effect ">
            <a
              href="#"
              data-target="slide-settings"
              className="sidenav-trigger"
            >
              <i className="mdi mdi-settings-outline" />
              <span className="title">Settings</span>
            </a>
          </div>
        </li>
        {/* MAIN MENU - END */}
        {/*  SIDEBAR - END */}
      </ul>
    </li>
    <li className="copy-spacer" />
    <li className="copy-wrap">
      <div className="copyright">© Copyright @ themepassion</div>
    </li>
  </ul>
  {/* END navigation */}
  <ul id="slide-settings" className="sidenav sidesettings right fixed">
    <li className="menulinks">
      <ul className="collapsible">
        {/* SIDEBAR - START */}
        {/* MAIN MENU - START */}
        <li className="sh-wrap">
          <div className="subheader">Themes</div>
        </li>
        <li className="lvl1  theme">
          <div
            className="waves-effect appsettings "
            data-type="theme"
            data-value="red"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-intermediate red-text text-lighten-2" />
              <span className="title">Red</span>
            </a>
          </div>
        </li>
        <li className="lvl1  theme">
          <div
            className="waves-effect appsettings "
            data-type="theme"
            data-value="orange"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline deep-orange-text text-lighten-2" />
              <span className="title">Orange</span>
            </a>
          </div>
        </li>
        <li className="lvl1  theme">
          <div
            className="waves-effect appsettings "
            data-type="theme"
            data-value="blue"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline blue-text text-lighten-2" />
              <span className="title">Blue</span>
            </a>
          </div>
        </li>
        <li className="lvl1  theme">
          <div
            className="waves-effect appsettings "
            data-type="theme"
            data-value="green"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline green-text text-lighten-2" />
              <span className="title">Green</span>
            </a>
          </div>
        </li>
        <li className="lvl1  theme">
          <div
            className="waves-effect appsettings active"
            data-type="theme"
            data-value="deep-purple"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline deep-purple-text text-lighten-2" />
              <span className="title">Purple</span>
            </a>
          </div>
        </li>
        <li className="lvl1  theme">
          <div
            className="waves-effect appsettings "
            data-type="theme"
            data-value="amber"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline amber-text" />
              <span className="title">Yellow</span>
            </a>
          </div>
        </li>
        <li className="lvl1  theme">
          <div
            className="waves-effect appsettings "
            data-type="theme"
            data-value="teal"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline teal-text text-lighten-2" />
              <span className="title">Teal</span>
            </a>
          </div>
        </li>
        <li className="lvl1  theme">
          <div
            className="waves-effect appsettings "
            data-type="theme"
            data-value="pink"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline pink-text text-lighten-2" />
              <span className="title">Pink</span>
            </a>
          </div>
        </li>
        <li className="lvl1  theme">
          <div
            className="waves-effect appsettings "
            data-type="theme"
            data-value="indigo"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline indigo-text text-lighten-2" />
              <span className="title">Indigo</span>
            </a>
          </div>
        </li>
        <li className="lvl1  theme">
          <div
            className="waves-effect appsettings "
            data-type="theme"
            data-value="blue-grey"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline blue-grey-text text-lighten-2" />
              <span className="title">Blue Grey</span>
            </a>
          </div>
        </li>
        <li className="lvl1  theme">
          <div
            className="waves-effect appsettings "
            data-type="theme"
            data-value="brown"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline brown-text text-lighten-2" />
              <span className="title">Brown</span>
            </a>
          </div>
        </li>
        <li className="lvl1  theme">
          <div
            className="waves-effect appsettings "
            data-type="theme"
            data-value="cyan"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline cyan-text text-lighten-2" />
              <span className="title">Cyan</span>
            </a>
          </div>
        </li>
        <li className="lvl1  theme">
          <div
            className="waves-effect appsettings "
            data-type="theme"
            data-value="light-green"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline light-green-text text-lighten-2" />
              <span className="title">Light Green</span>
            </a>
          </div>
        </li>
        <li className="lvl1  theme">
          <div
            className="waves-effect appsettings "
            data-type="theme"
            data-value="purple"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline purple-text text-lighten-2" />
              <span className="title">Violet</span>
            </a>
          </div>
        </li>
        <li className="lvl1  theme">
          <div
            className="waves-effect appsettings "
            data-type="theme"
            data-value="grey"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline grey-text text-darken-2" />
              <span className="title">Black</span>
            </a>
          </div>
        </li>
        <li className="sep-wrap">
          <div className="divider" />
        </li>
        <li className="sh-wrap">
          <div className="subheader">Site Mode</div>
        </li>
        <li className="lvl1  site_mode">
          <div
            className="waves-effect appsettings active"
            data-type="site_mode"
            data-value="light"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-intermediate" />
              <span className="title">Light Mode</span>
            </a>
          </div>
        </li>
        <li className="lvl1  site_mode">
          <div
            className="waves-effect appsettings "
            data-type="site_mode"
            data-value="dark"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline" />
              <span className="title">Dark Mode</span>
            </a>
          </div>
        </li>
        <li className="sep-wrap">
          <div className="divider" />
        </li>
        <li className="sh-wrap">
          <div className="subheader">Header Style</div>
        </li>
        <li className="lvl1  header">
          <div
            className="waves-effect appsettings active"
            data-type="header"
            data-value="light"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-intermediate" />
              <span className="title">Light Header</span>
            </a>
          </div>
        </li>
        <li className="lvl1  header">
          <div
            className="waves-effect appsettings "
            data-type="header"
            data-value="dark"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline" />
              <span className="title">Dark Header</span>
            </a>
          </div>
        </li>
        <li className="lvl1  header">
          <div
            className="waves-effect appsettings "
            data-type="header"
            data-value="colored"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline" />
              <span className="title">Colored Header</span>
            </a>
          </div>
        </li>
        <li className="sep-wrap">
          <div className="divider" />
        </li>
        <li className="sh-wrap">
          <div className="subheader">Header Alignment</div>
        </li>
        <li className="lvl1  header_align">
          <div
            className="waves-effect appsettings "
            data-type="header_align"
            data-value="left"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-intermediate" />
              <span className="title">Left Align Header</span>
            </a>
          </div>
        </li>
        <li className="lvl1  header_align">
          <div
            className="waves-effect appsettings active"
            data-type="header_align"
            data-value="center"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline" />
              <span className="title">Center Align Header</span>
            </a>
          </div>
        </li>
        <li className="lvl1  header_align">
          <div
            className="waves-effect appsettings "
            data-type="header_align"
            data-value="right"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline" />
              <span className="title">Right Align Header</span>
            </a>
          </div>
        </li>
        <li className="lvl1  header_align">
          <div
            className="waves-effect appsettings "
            data-type="header_align"
            data-value="app"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline" />
              <span className="title">App Based Align Header</span>
            </a>
          </div>
        </li>
        <li className="sep-wrap">
          <div className="divider" />
        </li>
        <li className="sh-wrap">
          <div className="subheader">Menu Style</div>
        </li>
        <li className="lvl1  menu">
          <div
            className="waves-effect appsettings active"
            data-type="menu"
            data-value="light"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-intermediate" />
              <span className="title">Light Menu</span>
            </a>
          </div>
        </li>
        <li className="lvl1  menu">
          <div
            className="waves-effect appsettings "
            data-type="menu"
            data-value="dark"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline" />
              <span className="title">Dark Menu</span>
            </a>
          </div>
        </li>
        <li className="lvl1  menu">
          <div
            className="waves-effect appsettings "
            data-type="menu"
            data-value="colored"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline" />
              <span className="title">Colored Menu</span>
            </a>
          </div>
        </li>
        <li className="sep-wrap">
          <div className="divider" />
        </li>
        <li className="sh-wrap">
          <div className="subheader">Menu Type</div>
        </li>
        <li className="lvl1  menu_type">
          <div
            className="waves-effect appsettings active"
            data-type="menu_type"
            data-value="left"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-intermediate" />
              <span className="title">Left Menu</span>
            </a>
          </div>
        </li>
        <li className="lvl1  menu_type">
          <div
            className="waves-effect appsettings "
            data-type="menu_type"
            data-value="center"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline" />
              <span className="title">Centered Menu</span>
            </a>
          </div>
        </li>
        <li className="sep-wrap">
          <div className="divider" />
        </li>
        <li className="sh-wrap">
          <div className="subheader">Menu Icons</div>
        </li>
        <li className="lvl1  menu_icons">
          <div
            className="waves-effect appsettings active"
            data-type="menu_icons"
            data-value="on"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-intermediate" />
              <span className="title">Menu Icons Show</span>
            </a>
          </div>
        </li>
        <li className="lvl1  menu_icons">
          <div
            className="waves-effect appsettings "
            data-type="menu_icons"
            data-value="off"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline" />
              <span className="title">Menu Icons Hide</span>
            </a>
          </div>
        </li>
        <li className="lvl1  menu_icons">
          <div
            className="waves-effect appsettings "
            data-type="menu_icons"
            data-value="colored"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline" />
              <span className="title">Menu Icons Colored</span>
            </a>
          </div>
        </li>
        <li className="sep-wrap">
          <div className="divider" />
        </li>
        <li className="sh-wrap">
          <div className="subheader">Page Footer Style</div>
        </li>
        <li className="lvl1  footer">
          <div
            className="waves-effect appsettings "
            data-type="footer"
            data-value="light"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-intermediate" />
              <span className="title">Light Footer</span>
            </a>
          </div>
        </li>
        <li className="lvl1  footer">
          <div
            className="waves-effect appsettings active"
            data-type="footer"
            data-value="dark"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline" />
              <span className="title">Dark Footer</span>
            </a>
          </div>
        </li>
        <li className="lvl1  footer">
          <div
            className="waves-effect appsettings "
            data-type="footer"
            data-value="colored"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline" />
              <span className="title">Colored Footer</span>
            </a>
          </div>
        </li>
        <li className="sep-wrap">
          <div className="divider" />
        </li>
        <li className="sh-wrap">
          <div className="subheader">Page Footer Type</div>
        </li>
        <li className="lvl1  footer_type">
          <div
            className="waves-effect appsettings "
            data-type="footer_type"
            data-value="minimal"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-intermediate" />
              <span className="title">Minimal Footer</span>
            </a>
          </div>
        </li>
        <li className="lvl1  footer_type">
          <div
            className="waves-effect appsettings active"
            data-type="footer_type"
            data-value="left"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline" />
              <span className="title">Left Aligned Footer</span>
            </a>
          </div>
        </li>
        <li className="lvl1  footer_type">
          <div
            className="waves-effect appsettings "
            data-type="footer_type"
            data-value="center"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline" />
              <span className="title">Centered Footer</span>
            </a>
          </div>
        </li>
        <li className="sep-wrap">
          <div className="divider" />
        </li>
        <li className="sh-wrap">
          <div className="subheader">Fixed Footer Menu</div>
        </li>
        <li className="lvl1  footer_menu">
          <div
            className="waves-effect appsettings active"
            data-type="footer_menu"
            data-value="show"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-intermediate" />
              <span className="title">Show Fixed Footer Menu</span>
            </a>
          </div>
        </li>
        <li className="lvl1  footer_menu">
          <div
            className="waves-effect appsettings "
            data-type="footer_menu"
            data-value="hide"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline" />
              <span className="title">Hide Fixed Footer Menu</span>
            </a>
          </div>
        </li>
        <li className="sep-wrap">
          <div className="divider" />
        </li>
        <li className="sh-wrap">
          <div className="subheader">Fixed Footer Menu Style</div>
        </li>
        <li className="lvl1  footer_menu_style">
          <div
            className="waves-effect appsettings active"
            data-type="footer_menu_style"
            data-value="light"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-intermediate" />
              <span className="title">Light Fixed Menu</span>
            </a>
          </div>
        </li>
        <li className="lvl1  footer_menu_style">
          <div
            className="waves-effect appsettings "
            data-type="footer_menu_style"
            data-value="dark"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline" />
              <span className="title">Dark Fixed Menu</span>
            </a>
          </div>
        </li>
        <li className="lvl1  footer_menu_style">
          <div
            className="waves-effect appsettings "
            data-type="footer_menu_style"
            data-value="colored"
          >
            <a href="#!">
              <i className="mdi mdi-checkbox-blank-outline" />
              <span className="title">Colored Fixed Menu</span>
            </a>
          </div>
        </li>
        {/* MAIN MENU - END */}
        {/*  SIDEBAR - END */}
      </ul>
    </li>
  </ul>
  <div className="carousel carousel-fullscreen carousel-slider home_carousel">
    <div className="carousel-item" href="#one!">
      <div
        className="bg"
        style={{ backgroundImage: 'url("/theme/images/slider-1.jpg")' }}
      />
      <div className="item-content center-align white-text">
        <div className="spacer-large" />
        <h3>ZAK is multi purpose Mobile App</h3>
        <h5 className="light white-text">The best mobile app template ever.</h5>
      </div>
    </div>
    <div className="carousel-item" href="#two!">
      <div
        className="bg"
        style={{ backgroundImage: 'url("/theme/images/slider-4.jpg")' }}
      />
      <div className="item-content left-align white-text">
        <div className="spacer-large" />
        <h3>ZAK is premium Mobile UI App template!</h3>
        <h5 className="light white-text">The best mobile app template ever.</h5>
      </div>
    </div>
    <div className="carousel-item" href="#three!">
      <div
        className="bg"
        style={{ backgroundImage: 'url("/theme/images/slider-2.jpg")' }}
      />
      <div className="item-content center-align white-text">
        <div className="spacer-large" />
        <h3>ZAK has tons of features &amp; functionalities</h3>
        <h5 className="light white-text">The best mobile app template ever.</h5>
      </div>
    </div>
    <div className="carousel-item" href="#four!">
      <div
        className="bg"
        style={{ backgroundImage: 'url("/theme/images/slider-3.jpg")' }}
      />
      <div className="item-content right-align white-text">
        <div className="spacer-large" />
        <h3>ZAK is super fast and ultra light</h3>
        <h5 className="light white-text">The best mobile app template ever.</h5>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="section">
      {/*   Icon Section   */}
      <div className="row">
        <div className="col s12 m12 l3">
          <div className="icon-block">
            <h2 className="center primary-text">
              <i className="mdi mdi-trophy-outline" />
            </h2>
            <h6 className="center">Super Fast</h6>
            <p className="center">
              Zak is designed to be super fast and light in weight. It speeds
              your development and helps smooth user interation.
            </p>
          </div>
        </div>
        <div className="col s12 m12 l3">
          <div className="icon-block">
            <h2 className="center primary-text">
              <i className="mdi mdi-shape-outline" />
            </h2>
            <h6 className="center">Tons of Features</h6>
            <p className="center">
              By utilizing elements and principles of Material Design, Zak is
              designed with unique set of features and functionalities.
            </p>
          </div>
        </div>
        <div className="col s12 m12 l3">
          <div className="icon-block">
            <h2 className="center primary-text">
              <i className="mdi mdi-code-tags-check" />
            </h2>
            <h6 className="center">Quality Code</h6>
            <p className="center">
              Zak follows black box level coding standard. All the code is well
              formatted and commented.
            </p>
          </div>
        </div>
        <div className="col s12 m12 l3">
          <div className="icon-block">
            <h2 className="center primary-text">
              <i className="mdi mdi-toolbox-outline" />
            </h2>
            <h6 className="center">Multi Purpose</h6>
            <p className="center">
              Zak can be customized and used for any niche. The vast
              possibilities of this template makes it multi purpose.
            </p>
          </div>
        </div>
      </div>
      <div className="spacer" />
    </div>
  </div>
  <div className="row primary-bg">
    <div className="spacer" />
    <div className="spacer" />
    <h5 className="center bot-0 sec-tit white-text pad-15">Get Zak Today</h5>
    <p className="center-align white-text pad-30">
      ZAK is premium and multi purpose Mobile UI APP with tons of features and
      functionalities. Try it now.
    </p>
    <div className="center">
      <a
        className="btn-large waves-effect white black-text"
        target="_blank"
        href="https://themeforest.net/user/themepassion/portfolio"
      >
        Buy Now
      </a>
    </div>
    <div className="spacer" />
    <div className="spacer" />
  </div>
  <div className="container">
    <div className="section">
      <div className="row ">
        <div className="col s12 pad-0">
          <h5 className="bot-20 sec-tit center ">Premium Features</h5>{" "}
          <div className="row settings-row">
            <div className="col s6">
              <div className="setting-box z-depth-1 center">
                <a href="#!">
                  <i className="mdi mdi-book-open-page-variant" />
                  <h6>150+ Pages</h6>
                </a>
              </div>
            </div>
            <div className="col s6">
              <div className="setting-box z-depth-1 center">
                <a href="#!">
                  <i className="mdi mdi-midi-port" />
                  <h6>Color Themes</h6>
                </a>
              </div>
            </div>
            <div className="col s6">
              <div className="setting-box z-depth-1 center">
                <a href="#!">
                  <i className="mdi mdi-invert-colors" />
                  <h6>Light &amp; Dark Mode</h6>
                </a>
              </div>
            </div>
            <div className="col s6">
              <div className="setting-box z-depth-1 center">
                <a href="#!">
                  <i className="mdi mdi-flask-outline" />
                  <h6>Utility Components</h6>
                </a>
              </div>
            </div>
            <div className="col s6">
              <div className="setting-box z-depth-1 center">
                <a href="#!">
                  <i className="mdi mdi-folder-multiple-outline" />
                  <h6>Documentation</h6>
                </a>
              </div>
            </div>
            <div className="col s6">
              <div className="setting-box z-depth-1 center">
                <a href="#!">
                  <i className="mdi mdi-laptop" />
                  <h6>Material UI</h6>
                </a>
              </div>
            </div>
            <div className="col s6">
              <div className="setting-box z-depth-1 center">
                <a href="#!">
                  <i className="mdi mdi-open-in-app" />
                  <h6>Inbuilt Apps</h6>
                </a>
              </div>
            </div>
            <div className="col s6">
              <div className="setting-box z-depth-1 center">
                <a href="#!">
                  <i className="mdi mdi-grid-large" />
                  <h6>Portfolios</h6>
                </a>
              </div>
            </div>
            <div className="col s6">
              <div className="setting-box z-depth-1 center">
                <a href="#!">
                  <i className="mdi mdi-square-edit-outline" />
                  <h6>Blogs</h6>
                </a>
              </div>
            </div>
            <div className="col s6">
              <div className="setting-box z-depth-1 center">
                <a href="#!">
                  <i className="mdi mdi-menu" />
                  <h6>Menu Styles</h6>
                </a>
              </div>
            </div>
            <div className="col s6">
              <div className="setting-box z-depth-1 center">
                <a href="#!">
                  <i className="mdi mdi-chart-line" />
                  <h6>Graphical Charts</h6>
                </a>
              </div>
            </div>
            <div className="col s6">
              <div className="setting-box z-depth-1 center">
                <a href="#!">
                  <i className="mdi mdi-cards-variant" />
                  <h6>Fixed Bottom Menu</h6>
                </a>
              </div>
            </div>
            <div className="col s6">
              <div className="setting-box z-depth-1 center">
                <a href="#!">
                  <i className="mdi mdi-border-top-variant" />
                  <h6>Headers</h6>
                </a>
              </div>
            </div>
            <div className="col s6">
              <div className="setting-box z-depth-1 center">
                <a href="#!">
                  <i className="mdi mdi-border-bottom-variant" />
                  <h6>Footers</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row primary-bg">
    <div className="spacer" />
    <div className="spacer" />
    <h5 className="center bot-0 sec-tit white-text pad-15">
      Built with <i className="mdi mdi-heart" style={{ fontSize: 20 }} />
    </h5>
    <p className="center-align white-text pad-30">
      ZAK is built by elite author with utmost care and perfection. We pour love
      in our work.
    </p>
    <div className="center">
      <a
        className="btn-large waves-effect white black-text"
        target="_blank"
        href="https://themeforest.net/user/themepassion/portfolio"
      >
        Buy Now
      </a>
    </div>
    <div className="spacer" />
    <div className="spacer" />
  </div>
  <div className="container">
    <div className="section">
      <div className="spacer" />
      <h5 className="center bot-20 sec-tit">Our Customer's Say</h5>
      <div className="slider slider3 ">
        <ul className="slides transparent testimonials">
          <li>
            <p className="center">
              <i className="mdi mdi-format-quote-open" /> We are so pleased with
              the purchase of this product. Zak has tons of components and
              features to deal with. You can really create anything you like.
              <i className="mdi mdi-format-quote-close" />{" "}
            </p>
            <div className=" center-align">
              <div className="row userinfo">
                <img
                  src="/theme/images/user-5.jpg"
                  alt=""
                  className="circle responsive-img"
                />
                <div className="left-align">
                  <span className="">
                    <strong>Somer Tincher</strong>
                    <br />
                    <span className="small">CEO, Ink Ltd.</span>
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <p className="center">
              <i className="mdi mdi-format-quote-open" /> We highly recommend
              using Zak for your next project. It is super quality and premium
              template that you can ask for. Just go for it.
              <i className="mdi mdi-format-quote-close" />{" "}
            </p>
            <div className=" center-align">
              <div className="row userinfo">
                <img
                  src="/theme/images/user-10.jpg"
                  alt=""
                  className="circle responsive-img"
                />
                <div className="left-align">
                  <span className="">
                    <strong>Randell Sinkler</strong>
                    <br />
                    <span className="small">Manager, Zed Ind.</span>
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <p className="center">
              <i className="mdi mdi-format-quote-open" /> A perfect template to
              get you going for your next project. A full loaded feature packed
              template. It is multi purpose and super fast. Thank you for such a
              wonderful template.
              <i className="mdi mdi-format-quote-close" />{" "}
            </p>
            <div className=" center-align">
              <div className="row userinfo">
                <img
                  src="/theme/images/user-40.jpg"
                  alt=""
                  className="circle responsive-img"
                />
                <div className="left-align">
                  <span className="">
                    <strong>Antone Leclerc</strong>
                    <br />
                    <span className="small">Sr. Designer</span>
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <footer className="page-footer">
    <div className="container footer-content">
      <div className="row">
        <div className="">
          <h5 className="logo">ZAK</h5>
          <p className="text">
            ZAK is a super fast, premium and multi purpose Mobile APP UI
            template, with tons of features and functionalities.
          </p>
        </div>
        <div className="link-wrap">
          <ul className="link-ul">
            <li>
              <a className="" href="#!">
                <i className="mdi mdi-phone" /> +1 234 567 890
              </a>
            </li>
            <li>
              <a className="" href="#!">
                <i className="mdi mdi-email" /> email@example.com
              </a>
            </li>
            <li>
              <a className="" href="#!">
                <i className="mdi mdi-map-marker" /> FF 1, Sector-8, Tech
                Street, NY, USA
              </a>
            </li>
          </ul>
          <ul className="social-wrap">
            <li className="social">
              <a className="" href="#!">
                <i className="mdi mdi-facebook" />
              </a>
              <a className="" href="#!">
                <i className="mdi mdi-twitter" />
              </a>
              <a className="" href="#!">
                <i className="mdi mdi-dribbble" />
              </a>
              <a className="" href="#!">
                <i className="mdi mdi-google-plus" />
              </a>
              <a className="" href="#!">
                <i className="mdi mdi-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        © Copyright{" "}
        <a
          className=""
          href="https://themeforest.net/user/themepassion/portfolio"
        >
          Themepassion
        </a>
        . All rights reserved.
      </div>
    </div>
  </footer>
  <div className="backtotop">
    <a className="btn-floating btn primary-bg">
      <i className="mdi mdi-chevron-up" />
    </a>
  </div>
  <div className="footer-menu">
    <ul>
      <li>
        <a href="sub-apps.html">
          {" "}
          <i className="mdi mdi-open-in-app" />
          <span>Apps</span>
        </a>{" "}
      </li>
      <li>
        <a href="sub-pages.html">
          {" "}
          <i className="mdi mdi-shape-outline" />
          <span>Pages</span>
        </a>{" "}
      </li>
      <li>
        <a href="ui-pages-home.html" className=" active">
          {" "}
          <i className="mdi mdi-home-outline" />
          <span>Home</span>
        </a>{" "}
      </li>
      <li>
        <a href="sub-uielements.html">
          {" "}
          <i className="mdi mdi-laptop" />
          <span>UI</span>
        </a>{" "}
      </li>
      <li>
        <a href="sub-utilities-components.html">
          {" "}
          <i className="mdi mdi-flask-outline" />
          <span>Components</span>
        </a>{" "}
      </li>
    </ul>
  </div>
  
  
</>

  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
