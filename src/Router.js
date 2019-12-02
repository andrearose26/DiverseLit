import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from 'react';
import App from 'react';

const ARouter = () => {
    
    return(
        <Router>
            <Switch>
                <Route path ="/about" component = {About}/>
                <Route path  ="/" exact component = {App}/>
            </Switch>
        </Router>
        
    )
    
}

export default ARouter;