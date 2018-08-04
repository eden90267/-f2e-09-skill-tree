import React from 'react'
import {Route} from 'react-router-dom'

import 'components/App.scss'
import SkillHeader from "./SkillHeader"
import SkillTree from "./SkillTree"
import SkillDetail from "./SkillDetail"


const App = () =>
  <Route path="/" component={() => {
    return (
      <div className="d-flex justify-content-between wrap">
        <SkillHeader/>
        <SkillTree/>
        <SkillDetail/>
      </div>
    )
  }} />


export default App