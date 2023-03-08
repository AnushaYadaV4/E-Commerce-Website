import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/layouts/Header";
import { CartContextProvider } from "./components/store/CartContext";
import Cart from "./components/cart/Cart";
import { useState } from "react";
import LoginContext from "./components/store/LoginContext";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import { useContext } from "react";

const About = React.lazy(() => import("./components/pages/About"));
const Home = React.lazy(() => import("./components/pages/Home"));
const Login = React.lazy(() => import("./components/pages/Login"));
const AvailableProducts = React.lazy(() =>import("./components/products/AvailableProduct"));
const UserProfile = React.lazy(() =>import("./components/profile/UserProfile"));
const ProductDetails = React.lazy(() => import("./components/pages/ProductDetails"));


const App = () => {
  const authCtx = useContext(LoginContext);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  async function addUserDataHandler(details) {
    const response = await fetch(
      "https://react-ecommerce-4b392-default-rtdb.firebaseio.com/userData.json",
      {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <CartContextProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <BrowserRouter>
        <Header onShowCart={showCartHandler} />

        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route path="/store">
              {authCtx.isLoggedIn && <AvailableProducts />}
              {!authCtx.isLoggedIn && <Redirect to="/login" />}
            </Route>

            <Route exact path="/about" component={About} />
            <Route exact path="/home" component={Home} />
            {!authCtx.isLoggedIn && (
              <Route exact path="/login">
                <Login onAddUserData={addUserDataHandler} />
              </Route>
            )}

            <Route exact path="/login" component={Login} />

            <Route path="/products/:productId">
              <ProductDetails />
            </Route>

            <Route path="/profile">
              {authCtx.isLoggedIn && <UserProfile />}
              {!authCtx.isLoggedIn && <Redirect to="/login" />}
            </Route>

            <Route path="*">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
