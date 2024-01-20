import React, { useState, useContext, useEffect } from 'react';
import { Route, BrowserRouter, Switch, Link, useHistory, withRouter, useRouteMatch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { ThemeContext } from '../contexts/themeContext';
//import { AuthContext } from '../contexts/authContext';
import { NavContext } from '../contexts/navContext';
import { VisibilityContext } from '../contexts/visibilityContext';
import styles from '../styles/navBar.module.scss';
import ContactUs from '../pages/contactUs';

////import NotFound from '../pages/notFound';
///import AboutUs from '../pages/aboutUs';
//import Policy from '../pages/policy';
import SignIn from '../pages/signIn';
//import SignUp from '../pages/signUp';

// import AboutUs from '../pages/aboutUs';
// import TestArticle1 from '../blog/testArticle1';
// import TestArticle2 from '../blog/testArticle2';
// import TestArticle3 from '../blog/testArticle3';
// import TestArticle4 from '../blog/testArticle4';
// import Profile from '../pages/profile';

///import ResetPassword from '../pages/resetPassword';

import { useMediaQuery } from 'react-responsive';
import { Desktop, Tablet, Mobile, MobileX } from '../contexts/breakPoints';
import iconUp from '../assets/Icon/Arrow/394261031540882610.svg'
import iconDown from '../assets/Icon/Arrow/19299514501540882611.svg'
import Downloads from '../pages/downloads';

const NavBar = () => {

  ///const { isLight, dark, light } = useContext(ThemeContext);
 // const theme = isLight ? light : dark;
  /////const {states} = useContext(AuthContext);
 //// const isAuthorized = [states.authorized]? states.isLoading : false;
  const { showMenu, activeMenu1, activeMenu2, setShowMenu, setActiveMenu1, setActiveMenu2, setOffMenu } = useContext(NavContext);
  const { setBodyFrmShow, loginFrmShow,  registerFrmShow, resetPassFrmShow, contactFrmShow, setContactFrmShow, setFormsHide} = useContext(VisibilityContext);



  const isTabletMid = useMediaQuery({ query: '(max-width: 768px)' });
  
  useEffect(() => {
    if (isTabletMid) { setShowMenu() }
  }, [])


 
  const menuActive1 = activeMenu1 ? true : '';
  const menuActive2 = activeMenu2 ? true : '';
  let burgerActive = showMenu ? true : '';

  /// const BackButtonListener =({children}) => {
  // const [pressed, setPressed] = useState(false);
  // useEffect(() => {
  //   window.onpopstate = () => { setPressed(true) }

  // }, [false])
  /// };

  // useEffect(() => {
  //   ////window.history.pushState(null, null, window.location.pathname);//or//
  //   window.history.pushState(null, null, window.location.href);

  //   window.addEventListener('popstate', () => {
  //     if (!bodyFrmShow) { setBodyFrmShow() }
  //     if (aboutFrmShow) { setBodyFrmShow() } if (policyFrmShow) { setBodyFrmShow() }
  //   })
  // }, [false]);
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
  const [locationKeys, setLocationKeys] = useState([]);
  const [inHoverLink1, setInHoverLink1] = useState(false);
  const [inHoverLink2, setInHoverLink2] = useState(false);
  
  useEffect(() => {
    setActiveMenu1();
  }, [inHoverLink1]);

  useEffect(() => {
    setActiveMenu2();
  }, [inHoverLink2]);


  const history = createBrowserHistory();
  let {path, url} = useRouteMatch();

  // useEffect(() => {
  //   return () => {
  //     // && history.location.pathname === "any specific path")

  //     if (history.action === "POP") {
  //       history.replace(history.location.pathname, /* the new state */);
  //     if (!bodyFrmShow) { setBodyFrmShow() }
  //     if (aboutFrmShow) { setBodyFrmShow() } if (policyFrmShow) { setBodyFrmShow() }
  //     }
  //   };
  // }, [history])

  useEffect(() => {
    return history.listen(location => {
      if (history.action === 'PUSH') {
        setLocationKeys([location.key])
      }

      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys)
          // Handle forward event
          setBodyFrmShow()
        } else {
          setLocationKeys((keys) => [location.key, ...keys])
          // Handle back event
          setBodyFrmShow()
        }
      }
    })
  }, [locationKeys,])

  return (
    <BrowserRouter basename="/" >
      <nav >
        <Desktop>
          <ul id={styles.container} >

            <div id={styles.shape} onMouseEnter={setOffMenu} >
              <a id={styles.link0} href="/" >

                <div className={styles.shape1} />
                <div className={styles.shape2} />
                <div className={styles.shape3} />
                <div className={styles.shape4} />
                <div className={styles.shape5} />
                <div className={styles.shape6} />
                <div className={styles.shape7} />

                <h1 className={styles.logo} ><strong>S</strong>of<strong>Testing</strong>  </h1>

              </a>
            </div>

            <div id={styles.menu} className={styles.hamburger_menu} onClick={setShowMenu} role='presentation'>  
                 
              <span id={styles.span1} className={`${burgerActive ? styles.rotate1 : ''}`}></span>
              <span id={styles.span2} className={`${burgerActive ? styles.hide : ''}`}></span>
              <span id={styles.span3} className={`${burgerActive ? styles.rotate3 : ''}`}></span>
            </div>



            <ul id={styles.link1} className={`${burgerActive ? styles.active : styles.inactive}`} >
              <a id={styles.a} className={`${burgerActive ? styles.active : styles.inactive}`} onMouseEnter={() => setInHoverLink1(true)} onMouseLeave={() => setInHoverLink1(false)} onMouseDown={setFormsHide}   >Testing & QA Services <img src={menuActive1 ? iconDown : iconUp} alt="iconDown" width="15" height="15" /></a>

              <li id={styles.sublink1} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} role='presentation'>Manual Testing</li>
              <li id={styles.sublink2} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} role='presentation'>Automated Testing</li>
              <li id={styles.sublink3} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} role='presentation'>Web Applications Testing</li>
              <li id={styles.sublink4} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} role='presentation'>Web Security Testing</li>
              <li id={styles.sublink5} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}  role='presentation'>Mobile Applications Testing</li>
              <li id={styles.sublink6} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`}  onClick = {setOffMenu} role='presentation'>Integaration Testing</li>
            </ul>

            <ul id={styles.link2} className={`${burgerActive ? styles.active : styles.inactive}`} >
              <a id={styles.a} className={`${burgerActive ? styles.active : styles.inactive}`} onMouseEnter={() => setInHoverLink2(true)} onMouseLeave={() => setInHoverLink2(false)} onMouseDown={setFormsHide}  > Development Services  <img src={menuActive2 ? iconDown : iconUp} alt="iconDown" width="15" height="15" /></a>

              <li id={styles.sublink1} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>Custom Web Development</li>
              <li id={styles.sublink2} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>Custom Software Development</li>
              <li id={styles.sublink3} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>PWA Development</li>
              <li id={styles.sublink4} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>Mobile App Development</li>
              <li id={styles.sublink5} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>UI/UX Design</li>
              <li id={styles.sublink6} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>Technical SEO Services</li>
            </ul>

            <ul className={`${burgerActive ? styles.active : styles.inactive} `} onMouseEnter={setOffMenu}  >
              <Link id={styles.link3} to="/contactD" onClick={setContactFrmShow}   >Let&apos;s discuss your project</Link>
            </ul>
            <ul className={`${burgerActive ? styles.active : styles.inactive} `} onMouseEnter={setOffMenu}  >
              <Link id={styles.link4} to="/contactJ" onClick={setContactFrmShow}   >Join our team</Link>
            </ul>
            <ul className={`${burgerActive ? styles.active : styles.inactive} `} onMouseEnter={setOffMenu}  >
              <Link id={styles.link5} target="_blank" to="/downloads" onClick={setContactFrmShow} >Downloads</Link>
            </ul>
            {/* <Link  to ="/aboutUs"   onMouseDown={setFormsHide } onClick={setAboutUsFrmShow}>WHO WE ARE</Link>  */}
            {/* <Link onClick={setChangePassFrmShow} to="/changePassword" >changePassword</Link> */}

            <Switch>
                     
              <Route path="/contactD" exact >
                 {contactFrmShow ? <ContactUs src="Let's discuss your project" /> : null}
              </Route>

              <Route path="/contactJ" exact>
                  {contactFrmShow ? <ContactUs src="Join our team" /> : null}
              </Route>
             
              {/* <Route path="/signup" exact>
                <SignUp />
              </Route> */}
               

              {/* <Route path="/signin" exact>
                {loginFrmShow ? <SignIn /> : null}
              </Route>
                 */}
            
               {/* <Route path='/src/pages/policy'  exact>
                     <Policy />
                  </Route> */}

                  {/* <Route path='/src/pages/aboutUs' exact>
                     <AboutUs />
                  </Route>    */}

                  {/* <Route path='/src/blog/testarticle1' exact>
                     <TestArticle1 />
                  </Route> */}


              {/* <Route  path={path}  >
                <Policy src="signUp" />
              </Route>  */}

              {/* <Route  path={path}  >
                <Profile />
              </Route>  */}

           

              <Route path="/" exact >
                {/* <Body/>  */}
              </Route>
              {/* <Route component={NotFound} exact>
              </Route> */}

              {/* render={() => ( loggedIn ? ( <Redirect to="/dashboard" /> ) : (  <SignIn />  )  )}></Route>  */}

            </Switch>
          </ul>

        </Desktop>
        <Tablet>
          <ul id={styles.container} >

            <div id={styles.shape} onMouseEnter={setOffMenu} >
              <a id={styles.link0} href="/"  >

                <div className={styles.shape1} />
                <div className={styles.shape2} />
                <div className={styles.shape3} />
                <div className={styles.shape4} />
                <div className={styles.shape5} />
                <div className={styles.shape6} />
                <div className={styles.shape7} />

                <h1 className={styles.logo} ><strong>S</strong>of<strong>Testing</strong>  </h1>

              </a>
            </div>

            <div id={styles.menu} className={styles.hamburger_menu} onClick={setShowMenu}>
              <span id={styles.span1} className={`${burgerActive ? styles.rotate1 : ''}`}></span>
              <span id={styles.span2} className={`${burgerActive ? styles.hide : ''}`}></span>
              <span id={styles.span3} className={`${burgerActive ? styles.rotate3 : ''}`}></span>
            </div>



            <ul id={styles.link1} className={`${burgerActive ? styles.active : styles.inactive}`} >
              <a id={styles.a} className={`${burgerActive ? styles.active : styles.inactive}`} onMouseEnter={() => setInHoverLink1(true)} onMouseLeave={() => setInHoverLink1(false)} onMouseDown={setFormsHide}   >Testing & QA Services <img src={menuActive1 ? iconDown : iconUp} alt="iconDown" width="15" height="15" /></a>

              <li id={styles.sublink1} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} >Manual Testing</li>
              <li id={styles.sublink2} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} >Automated Testing</li>
              <li id={styles.sublink3} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>Web Applications Testing</li>
              <li id={styles.sublink4} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} >Web Security Testing</li>
              <li id={styles.sublink5} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} >Mobile Applications Testing</li>
              <li id={styles.sublink6} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} >Integaration Testing</li>
            </ul>

            <ul id={styles.link2}  className={`${burgerActive ? styles.active : styles.inactive}`} >
              <a id={styles.a} className={`${burgerActive ? styles.active : styles.inactive}`} onMouseEnter={() => setInHoverLink2(true)} onMouseLeave={() => setInHoverLink2(false)} onMouseDown={setFormsHide}  > Development Services  <img src={menuActive2 ? iconDown : iconUp} alt="iconDown" width="15" height="15" /></a>

              <li id={styles.sublink1} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>Custom Web Development</li>
              <li id={styles.sublink2} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>Custom Software Development</li>
              <li id={styles.sublink3} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>PWA Development</li>
              <li id={styles.sublink4} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>Mobile App Development</li>
              <li id={styles.sublink5} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>UI/UX Design</li>
              <li id={styles.sublink6} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>Technical SEO Services</li>
            </ul>

            <ul className={`${burgerActive ? styles.active : styles.inactive} `} onMouseEnter={setOffMenu}  >
              <Link id={styles.link3} to="/contactD" onClick={setContactFrmShow}   >Let&apos;s discuss your project</Link>
            </ul>
            <ul className={`${burgerActive ? styles.active : styles.inactive} `} onMouseEnter={setOffMenu}  >
              <Link id={styles.link4} to="/contactJ" onClick={setContactFrmShow}   >Join our team</Link>
            </ul>
            <ul className={`${burgerActive ? styles.active : styles.inactive} `} onMouseEnter={setOffMenu}  >
              <Link id={styles.link5} target="_blank" to="/downloads" onClick={setContactFrmShow}   >Downloads</Link>
            </ul>
            {/* <Link  to ="/aboutUs"   onMouseDown={setFormsHide } onClick={setAboutUsFrmShow}>WHO WE ARE</Link>  */}
            {/* <Link onClick={setChangePassFrmShow} to="/users/changePassword" >changePassword</Link> */}


            <Switch>

             <Route path="/contactD" exact >
                 {contactFrmShow ? <ContactUs src="Let's discuss your project" /> : null}
              </Route>

              <Route path="/contactJ" exact>
                 {contactFrmShow ? <ContactUs src="Join our team" /> : null}
              </Route>

              <Route path="/signin" exact>
                {loginFrmShow ? <SignIn /> : null}
              </Route>

{/*               
              <Route  path={path}  >
                <Policy src="signUp" />
              </Route>  */}
              
       

              <Route path="/" exact >
                {/* <Body/>  */}
              </Route>
              {/* <Route component={NotFound} exact>
              </Route> */}

              {/* render={() => ( loggedIn ? ( <Redirect to="/dashboard" /> ) : (  <SignIn />  )  )}></Route>  */}

            </Switch>
          </ul>
        </Tablet>
        <Mobile>
          <ul id={styles.container} >

            <div id={styles.shape} onMouseEnter={setOffMenu} >
              <a id={styles.link0} href="/"  >

                <div className={styles.shape1} />
                <div className={styles.shape2} />
                <div className={styles.shape3} />
                <div className={styles.shape4} />
                <div className={styles.shape5} />
                <div className={styles.shape6} />
                <div className={styles.shape7} />

                <h1 className={styles.logo} ><strong>S</strong>of<strong>Testing</strong>  </h1>

              </a>
            </div>

            <div id={styles.menu} className={styles.hamburger_menu} onClick={setShowMenu}>
              <span id={styles.span1} className={`${burgerActive ? styles.rotate1 : ''}`}></span>
              <span id={styles.span2} className={`${burgerActive ? styles.hide : ''}`}></span>
              <span id={styles.span3} className={`${burgerActive ? styles.rotate3 : ''}`}></span>
            </div>


            <div className={showMenu ? styles.subMenu : styles.inactive} >

              <span id={styles.closeBtn} onClick={setShowMenu} className={styles.closeBtn}  >
                <svg id={styles.svg}>
                  <line id={styles.line1} x1="0" y1="0" x2="20" y2="20" />
                  <line id={styles.line2} x1="20" y1="0" x2="0" y2="20" />
                </svg>
              </span>

              <ul id={styles.link1} className={`${burgerActive ? styles.active : styles.inactive}`}  >
                <a id={styles.a} className={`${burgerActive ? styles.active : styles.inactive}`} onMouseEnter={() => setInHoverLink1(true)} onMouseLeave={() => setInHoverLink1(false)} onMouseDown={setFormsHide}   >Testing & QA Services <img src={menuActive1 ? iconDown : iconUp} alt="iconDown" width="15" height="15" /></a>

                <li id={styles.sublink1} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} >Manual Testing</li>
                <li id={styles.sublink2} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} >Automated Testing</li>
                <li id={styles.sublink3} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} >Web Applications Testing</li>
                <li id={styles.sublink4} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} >Web Security Testing</li>
                <li id={styles.sublink5} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} >Mobile Applications Testing</li>
                <li id={styles.sublink6} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} >Integaration Testing</li>
              </ul>

              <ul id={styles.link2}  className={`${burgerActive ? styles.active : styles.inactive}`} >
                <a id={styles.a} className={`${burgerActive ? styles.active : styles.inactive}`} onMouseEnter={() => setInHoverLink2(true)} onMouseLeave={() => setInHoverLink2(false)} onMouseDown={setFormsHide}  > Development Services  <img src={menuActive2 ? iconDown : iconUp} alt="iconDown" width="15" height="15" /></a>

                <li id={styles.sublink1} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>Custom Web Development</li>
                <li id={styles.sublink2} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>Custom Software Development</li>
                <li id={styles.sublink3} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>PWA Development</li>
                <li id={styles.sublink4} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>Mobile App Development</li>
                <li id={styles.sublink5} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>UI/UX Design</li>
                <li id={styles.sublink6} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>Technical SEO Services</li>
              </ul>

              <ul className={`${burgerActive ? styles.active : styles.inactive} `} onMouseEnter={setOffMenu}  >
                <Link id={styles.link3} to="/contactD" onClick={setContactFrmShow}   >Let&apos;s discuss your project</Link>
              </ul>
              <ul className={`${burgerActive ? styles.active : styles.inactive} `} onMouseEnter={setOffMenu}  >
                <Link id={styles.link4} to="/contactJ" onClick={setContactFrmShow}   >Join our team</Link>
              </ul>
              <ul className={`${burgerActive ? styles.active : styles.inactive} `} onMouseEnter={setOffMenu}  >
                <Link id={styles.link5} target="_blank" to="/downloads" onClick={setContactFrmShow}   >Downloads</Link>
              </ul>
              {/* <Link  to ="/aboutUs"   onMouseDown={setFormsHide } onClick={setAboutUsFrmShow}>WHO WE ARE</Link>  */}
              {/* <Link onClick={setChangePassFrmShow} to="/users/changePassword" >changePassword</Link> */}

            </div>
            <Switch>

              <Route path="/contactD" exact >
                 {contactFrmShow ? <ContactUs src="Let's discuss your project" /> : null}
              </Route>

              <Route path="/contactJ" exact>
                  {contactFrmShow ? <ContactUs src="Join our team" /> : null}
              </Route>

              <Route path="/signin" exact>
                {loginFrmShow ? <SignIn /> : null}
              </Route>

            {/* 
              <Route  path={path}  >
                <Policy src="signUp" />
              </Route> 
 */}
          

              <Route path="/" exact >
                {/* <Body/>  */}
              </Route>
              {/* <Route component={NotFound} exact>
              </Route> */}

              {/* render={() => ( loggedIn ? ( <Redirect to="/dashboard" /> ) : (  <SignIn />  )  )}></Route>  */}

            </Switch>
          </ul>
        </Mobile>
        <MobileX>
          <ul id={styles.container} >

            <div id={styles.shape} onMouseEnter={setOffMenu} >
              <a id={styles.link0} href="/"  >

                <div className={styles.shape1} />
                <div className={styles.shape2} />
                <div className={styles.shape3} />
                <div className={styles.shape4} />
                <div className={styles.shape5} />
                <div className={styles.shape6} />
                <div className={styles.shape7} />

                <h1 className={styles.logo} ><strong>S</strong>of<strong>Testing</strong>  </h1>

              </a>
            </div>

            <div id={styles.menu} className={styles.hamburger_menu} onClick={setShowMenu}>
              <span id={styles.span1} className={`${burgerActive ? styles.rotate1 : ''}`}></span>
              <span id={styles.span2} className={`${burgerActive ? styles.hide : ''}`}></span>
              <span id={styles.span3} className={`${burgerActive ? styles.rotate3 : ''}`}></span>
            </div>

            <div className={showMenu ? styles.subMenu : styles.inactive} >

              <span id={styles.closeBtn} onClick={setShowMenu} className={styles.closeBtn}  >
                <svg id={styles.svg}>
                  <line id={styles.line1} x1="0" y1="0" x2="20" y2="20" />
                  <line id={styles.line2} x1="20" y1="0" x2="0" y2="20" />
                </svg>
              </span>

              <ul id={styles.link1} className={`${burgerActive ? styles.active : styles.inactive}`}  >
                <a id={styles.a} className={`${burgerActive ? styles.active : styles.inactive}`} onMouseEnter={() => setInHoverLink1(true)} onMouseLeave={() => setInHoverLink1(false)} onMouseDown={setFormsHide}   >Testing & QA Services <img src={menuActive1 ? iconDown : iconUp} alt="iconDown" width="15" height="15" /></a>

                <li id={styles.sublink1} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} >Manual Testing</li>
                <li id={styles.sublink2} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} >Automated Testing</li>
                <li id={styles.sublink3} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} >Web Applications Testing</li>
                <li id={styles.sublink4} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} >Web Security Testing</li>
                <li id={styles.sublink5} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} >Mobile Applications Testing</li>
                <li id={styles.sublink6} className={`${burgerActive ? menuActive1 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu} >Integaration Testing</li>
              </ul>

              <ul id={styles.link2} className={`${burgerActive ? styles.active : styles.inactive}`} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow }>
                <a id={styles.a} className={`${burgerActive ? styles.active : styles.inactive}`} onMouseEnter={() => setInHoverLink2(true)} onMouseLeave={() => setInHoverLink2(false)} onMouseDown={setFormsHide}  > Development Services  <img src={menuActive2 ? iconDown : iconUp} alt="iconDown" width="15" height="15" /></a>

                <li id={styles.sublink1} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>Custom Web Development</li>
                <li id={styles.sublink2} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>Custom Software Development</li>
                <li id={styles.sublink3} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>PWA Development</li>
                <li id={styles.sublink4} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>Mobile App Development</li>
                <li id={styles.sublink5} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>UI/UX Design</li>
                <li id={styles.sublink6} disabled={loginFrmShow} className={`${burgerActive ? menuActive2 ? styles.active : styles.inactive : styles.inactive}`} onClick = {setOffMenu}>Technical SEO Services</li>
              </ul>
            </div>

            <ul className={`${burgerActive ? styles.active : styles.inactive} `} onMouseEnter={setOffMenu}  >
              <Link id={styles.link3} to="/contactD" onClick={setContactFrmShow}   >Let&apos;s discuss your project</Link>
            </ul>
            
            <ul className={`${burgerActive ? styles.active : styles.inactive} `} onMouseEnter={setOffMenu}  >
              <Link id={styles.link5} target="_blank" to="/downloads" onClick={setContactFrmShow}   >Downloads</Link>
            </ul>
            {/* <Link  to ="/aboutUs"   onMouseDown={setFormsHide } onClick={setAboutUsFrmShow}>WHO WE ARE</Link>  */}
            {/* <Link onClick={setChangePassFrmShow} to="/users/changePassword" >changePassword</Link> */}


            <Switch>
          
              <Route path="/contactD" exact >
                {contactFrmShow ? <ContactUs src="Let's discuss your project" /> : null}
              </Route>

              <Route path="/contactJ" exact>
                {contactFrmShow ? <ContactUs src="Join our team" /> : null}
              </Route>

              <Route path="/signin" exact>
                {loginFrmShow ? <SignIn /> : null}
              </Route>

           {/* 
              <Route  path={path}  >
                <Policy src="signUp" />
              </Route>  */}

          

              <Route path="/" exact >
                {/* <Body/>  */}
              </Route>
              {/* <Route component={NotFound} exact>
              </Route> */}

              {/* render={() => ( loggedIn ? ( <Redirect to="/dashboard" /> ) : (  <SignIn />  )  )}></Route>  */}

            </Switch>
          </ul>
        </MobileX>

      </nav>
    </BrowserRouter>

  )
}

export default NavBar;



