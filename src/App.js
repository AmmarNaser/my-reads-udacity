import Provider, { MyContext } from "./Provider";
import { Switch, Route } from "react-router-dom";
import SearchPage from "./Views/Search";
import Home from "./Views/Home";
import "./style/css/App.css";
import React from "react";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Provider>
          <Switch>
            <Route
              exact
              path={"/"}
              render={() => (
                <MyContext.Consumer>
                  {(context) => <Home {...context} />}
                </MyContext.Consumer>
              )}
            />
            <Route
              exact
              path={"/search"}
              render={() => (
                <MyContext.Consumer>
                  {(context) => <SearchPage {...context} />}
                </MyContext.Consumer>
              )}
            />
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default BooksApp;
