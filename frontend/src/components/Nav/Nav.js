import React from "react";

export default class Nav extends React.Component{
    render(){
        return( 
            <>
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
            </>
        )
    }
}