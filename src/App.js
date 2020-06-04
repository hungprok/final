import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import CreateUser from "./components/CreateUser";
import EmployersPage from "./components/EmployersPage";
import Profile from "./components/Profile";
import PostJob from "./components/PostJob";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  // const user = useSelector(state => state.user);
  // const dispatch = useDispatch();

  let [user, setUser] = useState(null)

  useEffect(() => {
    checkUser();
  }, []);

  let checkUser = async () => {
    let urlToken = window.location.href ? window.location.href : null;
    // .split('token=')[1].split('#')[0]
    let localToken = window.localStorage.getItem("token");
    let token = urlToken || localToken;
    if (!token) return;
    try {
      // token = token.split('token=')[1].split('#')[0]
      const res = await fetch(`${process.env.REACT_APP_SERVER}` + "users/me", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token.split("token=")[1].split("#")[0],
        },
      });
      console.log(token.split("token=")[1].split("#")[0]);
      const data = await res.json();
      console.log(data);
      // if we get user object from response, it means token is correct, we save it back to storage, as well as setState our user to the value we just got from the response
      if (data.status === "ok") {
        localStorage.setItem("token", token.split("token=")[1].split("#")[0]);
        // dispatch({ type: "SETUSER", payload: data.data })
        setUser(data.data)

      } else {
        // token is not valid, clear the token so that we don't have to check again
        localStorage.removeItem("token");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login user={user} setUser={setUser} />
        </Route>
        <Route path="/sign-up">
          <CreateUser user={user} setUser={setUser} />
        </Route>
        <Route path="/jobseekers">
          <EmployersPage user={user} />
        </Route>
        <Route path="/profile">
          <Profile user={user} />
        </Route>
        <Route path="/post-job">
          <PostJob user={user} />
        </Route>
        <Route path="/">
          <Home user={user} />
        </Route>
      </Switch>
    </Router>
  );
}
