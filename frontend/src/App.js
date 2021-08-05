import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { Sidebar } from './components/sidebar/Sidebar'
import Dashboard from './pages/dashboard/Dashboard'

const App = () => {
     return (
          <Router>
               <Sidebar />
               <div className='main'>
                    <Switch>
                         <Route exact path='/'>
                              <Redirect to='/dashboard' />
                         </Route>
                         <Route path='/dashboard' component={Dashboard} />
                         <Route path='/percent' component={Dashboard} />
                         <Route path='/people' component={Dashboard} />
                         <Route path='/notification' component={Dashboard} />
                         <Route path='/stats' component={Dashboard} />
                         <Route path='/settings' component={Dashboard} />
                    </Switch>
               </div>
          </Router>
     )
}

export default App
