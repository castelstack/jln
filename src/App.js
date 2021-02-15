import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../src/pages/homepage/homepage";
import Header from "./containers/header/header";
import Footer from "./containers/footer/footer";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Gallery from "./pages/gallery/gallery";
import ConstructionPage from "./pages/construction-page/construction-page";
import Blog from "./pages/blog/blog";
import AgriculturePage from "./pages/agriculture-page/agriculture";
import AdminAuth from "./pages/admin/admin-auth";
import ScrollToTop from "./containers/scroll-up/scrollup";
import Login from "./containers/login/login";
import { AdminProvider } from './utils/store';

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/construction' component={ConstructionPage} />
          <Route path='/agriculture' component={AgriculturePage} />
          <Route path='/blog' component={Blog} />
          <AdminProvider>
            <Route path='/login' component={Login} />
            <Route path='/admin' component={AdminAuth} />
          </AdminProvider>
          
        </Switch>
        <Footer />
        
      </Router>
    </div>
  );
}

export default App;
