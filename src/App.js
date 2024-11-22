import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";

import { setCurrentUserAction } from "./store/user/user.action";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  const dispatch = useDispatch();

  // Open the Listener after the component was mounted
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);

      if (user) {
        dispatch(setCurrentUserAction(user));
      } else {
        dispatch(setCurrentUserAction(null));
      }
    });

    // Destroy the listener after the component was unmounted
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
