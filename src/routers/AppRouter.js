import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Work from "../components/Work";
import Contact from "../components/Contact";
import NotFound from "../components/NotFound";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path="/portfolio/:id" component={Work} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

// Portfolio Router
// Show header/nav bar on all page including 404

// /                -> Home page (in nav)
// /portfolio       -> Portfolio home page with links to items (in nav)
// /portfolio/123   -> Individual portfolio item page that shows the ID
// /contact         -> Contact page (in nav)
