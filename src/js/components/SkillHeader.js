import React, {Component} from 'react'
import {connect} from 'react-redux'

function mapStateToProps(state) {
  return {}
}

class SkillHeader extends Component {
  render() {
    return (
      <div className="skill-header">
        <h1>FRONT-END SKILL TREE</h1>
        <small className="mb-3">CURRENT RANK</small>
        <h3 className="skill-level-title">FRONT-END</h3>
        <br/>
        <h3 className="skill-level-title mb-3">NOOB</h3>
        <div className="d-flex justify-content-center">
          <div className="skill-level-pic">
            <img src={require('../../../assets/img-ship-beginner.png')}/>
          </div>
        </div>
        <div className="skill-level-dialog">
          <img src={require('../../../assets/dialog.svg')}/>
        </div>
        <p className="skill-level-detail">
          Welcome aboard. Your mission is: <span className="important">Collect the resources and learn the skills to upgrade the ship.</span> Good luck, captain!
        </p>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
)(SkillHeader)