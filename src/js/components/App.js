import React from 'react'
import {Route} from 'react-router-dom'

import 'components/App.scss'


const App = () =>
  <Route path="/" component={() => <h1>哈囉！哩後～</h1>} />


export default App