import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from "./components/header";
import Home from "./views/home"
import About from "./views/about"
import Contact from "./views/contact"
import Footer from "./components/footer"

function App() {
  return (
    <div>
      <Router>
        <Header />

          <div className='p-3'>
            {/* Switch and Routes inside the Router Tag show the Actual Page your links refer to */}
            <Switch>
              {/* Adding an 'Exact' prop means that the single slash alone can link us to the home page */}
                <Route exact path='/'>
                  <Home/>
                </Route>

                <Route path='/about'>
                  <About/>
                </Route>

                <Route path='/contact'>
                  <Contact/>
                </Route>
            </Switch>
          </div>

        <Footer/>
      </Router>
    </div>

  );
}

export default App;
