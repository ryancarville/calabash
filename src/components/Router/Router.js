import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import House from "../House/House";
import Island from "../Island/Island";
import Defender from "../Defender/Defender";
import Gallery from "../Gallery/Gallery";
import Reservations from "../Reservations/Reservations";
import OurStory from "../OurStory/OurStory";
import NotFound from "../NotFound/NotFound";
import GuestLogin from "../GuestLogin/GuestLogin";
export default function Router(props) {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/the-house" component={House} exact />
      <Route path="/the-defender" component={Defender} exact />
      <Route path="/the-island" component={Island} exact />
      <Route path="/gallery" component={Gallery} exact />
      <Route path="/reservations" component={Reservations} exact />
      <Route path="/login" component={GuestLogin} exact />
      <Route path="/our-story" component={OurStory} exact />
      <Route component={NotFound} />
    </Switch>
  );
}
