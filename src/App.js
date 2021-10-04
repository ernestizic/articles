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

import Footer from './components/layout/Footer';
import PostDetail from './components/posts/PostDetail';
import Just from "./components/pages/Just";

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='content-wrap'>
          <Switch>
            {/* General routes */}
            <Route exact path='/' component={Home} />
            <Route path='/technology' component={TechnologyPage} />
            <Route path='/sport' component={SportPage} />
            <Route path='/entertainment' component={EntertainmentPage} />
            <Route path='/politics' component={PoliticsPage} /> 
            <Route path='/about' component={About} />
            <Route path="/:post_id" component={ PostDetail } />
            <Route path='/just' component={Just}/>

            {/* Admin routes */}
            <Route exact path='/admin'>
              <Overview />
            </Route>
            <Route path='/admins/articles' component={ArticlesPage} />
            <Route path='/admins/add-article' component={ArticleAddPage} />
            <Route path='/admins/edit-article/:post_id' component={EditArticlePage} />
            <Route path='/admins/widget' component={WidgetPage} />
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
