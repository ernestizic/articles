import React from 'react';
import Navbar from './components/layout/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import PostDetail from './components/posts/PostDetail';
import AddPostPage from './components/pages/AddPostPage';

const App =()=> {
  return ( 
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/addPost" component={ AddPostPage } />
          <Route path="/:post_id" component={ PostDetail } />
        </Switch>
      </div>
    </BrowserRouter>
    );
}
 
export default App;

