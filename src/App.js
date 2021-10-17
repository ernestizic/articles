import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import TechnologyPage from "./components/pages/TechnologyPage";
import SportPage from "./components/pages/SportPage";
import { EntertainmentPage } from "./components/pages/EntertainmentPage";
import PoliticsPage from "./components/pages/PoliticsPage";
import About from "./components/pages/About";
import Overview from "./components/admin/Overview";
import WidgetPage from "./components/admin/pages/WidgetPage";
import ArticlesPage from "./components/admin/pages/ArticlesPage";
import ArticleAddPage from "./components/admin/pages/ArticleAddPage";
import EditArticlePage from "./components/admin/pages/EditArticlePage";
import NotFound from "./components/pages/NotFound";

// import Footer from './components/layout/Footer';
import PostDetail from './components/posts/PostDetail';
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { loadUser } from "./redux/slices/users";
import PrivateRoutes from "./PrivateRoutes";
import SearchModal from "./components/layout/SearchModal";
import SearchPage from "./components/pages/SearchPage";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className='App'>
        <SearchModal />
        <div className='content-wrap'>
          <Switch>
            {/* General routes */}
            <Route exact path='/'> <Home /> </Route>
            <Route path='/technology'> <TechnologyPage /> </Route>
            <Route path='/sport' component={SportPage} />
            <Route path='/entertainment'> <EntertainmentPage /> </Route>
            <Route path='/politics'> <PoliticsPage /> </Route> 
            <Route path='/about'> <About /> </Route>
            <Route path='/search' component={SearchPage} />
            
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />

            {/* Admin routes */}
            <PrivateRoutes path='/admin' component={Overview} />
            <PrivateRoutes path='/admins/articles' component={ArticlesPage} />
            <PrivateRoutes path='/admins/add-article' component={ArticleAddPage} />
            <PrivateRoutes path='/admins/widget' component={WidgetPage} />

            {/* Details page */}
            <PrivateRoutes path='/admins/edit-article/:post_id'> <EditArticlePage /> </PrivateRoutes>
            <Route path="/:post_id"> <PostDetail /> </Route>
            <Route path='*' exact component={NotFound} />
          </Switch>

        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
