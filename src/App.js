import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "./components/header";
import NavBar from "./components/navBar";
import Body from "./components/body";
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import ChangePassword from "./pages/changePassword";
import Profile from "./pages/profile";
import Contract from "./pages/contract";
import Signature from "./pages/signature";
import DocumentSign from "./pages/documentSign";
import Login from "./pages/login";
import Register from "./pages/register";
import ResetPass from "./pages/resetPass";
import Tasks from "./pages/tasks";
import Ticket from "./pages/tickets";

//import Footer from './components/footer';
import Policy from "./pages/policy";
import AboutUs from "./pages/aboutUs";
import TestArticle1 from "./blog/testArticle1";
import TestArticle2 from "./blog/testArticle2";
import TestArticle3 from "./blog/testArticle3";
import TestArticle4 from "./blog/testArticle4";
import TestArticle5 from "./blog/testArticle5";
import TestArticle6 from "./blog/testArticle6";
import TestArticle7 from "./blog/testArticle7";
import TestArticle8 from "./blog/testArticle8";
import TestArticle9 from "./blog/testArticle9";

import DevelopArticle1 from "./blog/developArticle1";
import DevelopArticle2 from "./blog/developArticle2";
import DevelopArticle3 from "./blog/developArticle3";
import DevelopArticle4 from "./blog/developArticle4";
import DevelopArticle5 from "./blog/developArticle5";
import DevelopArticle6 from "./blog/developArticle6";
import Search from "./components/search";
import NotFound from "./pages/notFound";
import Downloads from "./pages/downloads";

import AuthContextProvider from "./contexts/authContext";
import ThemeContextProvider from "./contexts/themeContext";
import NavContextProvider from "./contexts/navContext";

import VisibilityContextProvider from "./contexts/visibilityContext";

function App() {
  ////const[, setDocTitle] = useDocTitle("SofTesting");
  ///let {path, url} = useRouteMatch();

  // const [documentUrl, setDocumentUrl] = useState(null);

  // useEffect(() => {
  //   setDocumentUrl(localStorage.getItem('documentUrl'));
  // }, []);


  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>SofTesting</title>
          <meta
            name="Description"
            content="Software Design, Development & Testing "
          />
          <meta
            name="Software Design, Development & Testing"
            content="SofTesting offers a full range of on-demand QA software testing services.."
          />
          <meta
            property="Progressive Web Apps (PWA)"
            content="Custom Development Services"
          />
          <meta property="Email" content="hello@SofTestingCa.com" />
        </Helmet>
        {/* <ReactTitle title="SofTesting"/> */}
      </HelmetProvider>

      <CookiesProvider>
        <AuthContextProvider>
          <VisibilityContextProvider>
            <ThemeContextProvider>
              <NavContextProvider>
                <BrowserRouter>
                  <main className="App">
                    <Header />
                    <NavBar />
                    <Switch>
                      <Route path="/" exact>
                        <Body />
                      </Route>

                      <Route path="/dashboard">
                        <Body />
                      </Route>

                      <Route path="/src/pages/profile">
                        <Body />
                        <Profile />
                      </Route>

                      <Route path="/src/pages/contract">
                        <Body />
                        <Contract />
                      </Route>
                     
                      <Route path="/src/pages/tasks">
                        <Body />
                        <Tasks />
                      </Route>

                      <Route path="/src/pages/tickets">
                        <Body />
                        <Ticket />
                      </Route>
                  
                      <Route path="/signin">
                        <Body />
                        <SignIn/>
                      </Route>

                      <Route path="/signup">
                        <Body />
                        <SignUp/>
                      </Route>

                      <Route path="/resetpassword">
                        <Body />
                      </Route>

                      <Route path="/user/changepassword" exact>
                        <ChangePassword />
                      </Route>

                      <Route path="/user/changepassword/:token">
                        <ChangePassword />
                      </Route>

                      <Route path="/contract/signature" exact>
                        <Signature />
                      </Route>
                      <Route path="/contract/signature/:token">
                        <Signature />
                      </Route>
                      <Route path="/contract/documentsign">
                         {localStorage.getItem('documentUrl')?<DocumentSign url={localStorage.getItem('documentUrl')} />:null}
                      </Route>
                      <Route path="/contract/login">
                        <Login />
                      </Route>
                      <Route path="/contract/register">
                        <Register />
                      </Route>
                      <Route path="/contract/resetpass">
                        <ResetPass />
                      </Route>
                      <Route path="/onLineChat">
                        <Body />
                      </Route>
                      <Route path="/onLineChatLogin">
                        <Body />
                      </Route>

                      <Route path="/src/pages/policy" exact>
                        <Policy />
                      </Route>

                      <Route path="/src/pages/aboutus" exact>
                        <AboutUs />
                      </Route>

                      <Route path="/src/blog/testarticle1" exact>
                        <TestArticle1 />
                      </Route>

                      <Route path="/src/blog/testarticle2" exact>
                        <TestArticle2 />
                      </Route>

                      <Route path="/src/blog/testarticle3" exact>
                        <TestArticle3 />
                      </Route>

                      <Route path="/src/blog/testarticle4" exact>
                        <TestArticle4 />
                      </Route>

                      <Route path="/src/blog/testarticle5" exact>
                        <TestArticle5 />
                      </Route>

                      <Route path="/src/blog/testarticle6" exact>
                        <TestArticle6 />
                      </Route>

                      <Route path="/src/blog/testarticle7" exact>
                        <TestArticle7 />
                      </Route>

                      <Route path="/src/blog/testarticle8" exact>
                        <TestArticle8 />
                      </Route>

                      <Route path="/src/blog/testarticle9" exact>
                        <TestArticle9 />
                      </Route>

                      <Route path="/src/blog/developarticle1" exact>
                        <DevelopArticle1 />
                      </Route>
                      <Route path="/src/blog/developarticle2" exact>
                        <DevelopArticle2 />
                      </Route>
                      <Route path="/src/blog/developarticle3" exact>
                        <DevelopArticle3 />
                      </Route>

                      <Route path="/src/blog/developarticle4" exact>
                        <DevelopArticle4 />
                      </Route>
                      <Route path="/src/blog/developarticle5" exact>
                        <DevelopArticle5 />
                      </Route>
                      <Route path="/src/blog/developarticle6" exact>
                        <DevelopArticle6 />
                      </Route>
                      <Route path="/src/components/search" exact>
                         <Search />
                      </Route>
                      <Route path = "/downloads" exact>
                        <Downloads/>
                      </Route>

                      <Route component={NotFound} exact></Route>
                    
                    </Switch>
                  </main>
                </BrowserRouter>
              </NavContextProvider>
            </ThemeContextProvider>
          </VisibilityContextProvider>
        </AuthContextProvider>
      </CookiesProvider>
    </>
  );
}

export default App;
