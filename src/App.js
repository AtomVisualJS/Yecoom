import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Navbar from "./app/Navbar";
import { PostsList } from "./Utils/posts/PostsList";

import { SinglePostPage } from "./Utils/posts/SinglePostPage";

import UserForm from "./Utils/client/UserForm";


function App() {
  return (
    <Router>
      <Navbar />

      <div className="container">
        <br /> <br /> <br />
      </div>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route path="/users" component={UserForm} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
