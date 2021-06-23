import React,{Suspense} from 'react';
import {   BrowserRouter ,Switch,Redirect,Link,Route  } from 'react-router-dom';

import './App.css';
import NotFound from './components/NotFound';


const Photo = React.lazy(() => import('./features/Photo'))


function App() {
  return (
   <div className="photo-app">
     <Suspense fallback={<div>Loading.....</div>}>
       <BrowserRouter>
        <ul>
          <li><Link to="/photos"> Go photo</Link></li>
          <li><Link to="/photos/add"> Go addd</Link></li>
          <li><Link to="/photos/123"> Go p123hoto</Link></li>
        </ul>
       <Switch>
         <Redirect exact from="/" to="/photos"/>
        <Route path="/photos" component={Photo}/>
        <Route component={NotFound}/>
       </Switch>
       </BrowserRouter>
     </Suspense>
   </div>
  );
}

export default App;
