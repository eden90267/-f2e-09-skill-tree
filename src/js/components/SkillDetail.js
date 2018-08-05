import React, {Component} from 'react'
import {connect} from 'react-redux'

import SkillIcon from "./SkillIcon";

function mapStateToProps(state) {
  return {};
}

class SkillDetail extends Component {
  render() {
    return (
      <div className="skill-detail">
        <div className="skill-title">
          <div className="text-center">
            <SkillIcon iconName="basic-skills" style={{width: 120, height: 120}}/>
          </div>
          <h3>BASIC<br/>SKILLS</h3>
        </div>
        <div className="skill-content">
          <div className="text-center mb-2">
            <SkillIcon iconName="setting" style={{width: 40, height: 40}} />
          </div>
          <h4 className="mb-3">RECOMMENDED</h4>
          <ul className="list-unstyled d-flex flex-column align-items-center">
            <li className="completed">Learn HTML</li>
            <li>Basics of CSS</li>
            <li>Basics of JavaScript</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
)(SkillDetail)