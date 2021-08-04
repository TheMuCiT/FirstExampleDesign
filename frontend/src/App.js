import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Sidebar from './components/sidebar/Sidebar'
import Dashboard from './pages/dashboard/Dashboard'

import back from './images/Background.png'

const App = () => {
     return (
          <Router>
               <Sidebar />
               <div className='main'>
                    <img src={back} alt='' className='mainIMG' />
                    <Switch>
                         <Route exact path='/' component={Dashboard} />
                         <Route path='/about' component={Dashboard} />
                         <Route path='/product' component={Dashboard} />
                    </Switch>
               </div>
          </Router>
     )
}

export default App
