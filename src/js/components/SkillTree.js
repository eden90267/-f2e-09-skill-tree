import React, {Component} from 'react'
import {connect} from 'react-redux'

import SkillIcon from "./SkillIcon";

const skillData = {
  basics: [
    {
      key: 'basic-skills',
      name: 'BASIC SKILLS',
      items: [
        {key: 'learn-html', name: 'Learn HTML', recommended: true, optional: false},
        {key: 'basics-of-css', name: 'Basics of CSS', recommended: true, optional: false},
        {key: 'basics-of-javascript', name: 'Basics of JavaScript', recommended: true, optional: false},
      ]
    },
    {
      key: 'basic-tools',
      name: 'BASIC TOOLS',
      items: [
        {key: 'git-version-control', name: 'Git - Version Control', recommended: true, optional: false},
        {key: 'basic-terminal-usage', name: 'Basic Terminal Usage', recommended: true, optional: false},
        {key: 'text-editor', name: 'Text Editor', recommended: true, optional: false},
        {key: 'a-heart-of-researching', name: 'A Heart of Researching', recommended: true, optional: false},
      ]
    }
  ],
  css: [

  ],
  javascript: [

  ],
  managers: [

  ]
}

function mapStateToProps(state) {
  return {}
}

class SkillTree extends Component {
  render() {
    return (
      <div className="d-flex flex-grow-1 skill-tree">

        <div className="d-flex flex-column mr-3 skill-tree-items">
          <div className="d-flex flex-column align-items-center">
            <div>
              <img src={require('../../../assets/img-planet-basics.png')}/>
            </div>
            <div className="skill-tree-item-arrow" style={{height: 20}}/>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <img src={require('../../../assets/img-planet-css.png')}/>
            </div>
            <div className="skill-tree-item-arrow" style={{height: 132}}/>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <img src={require('../../../assets/img-planet-js.png')}/>
            </div>
            <div className="skill-tree-item-arrow" style={{height: 132}}/>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <img src={require('../../../assets/img-planet-managers.png')}/>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column skill-items">
          <div className="d-flex flex-wrap">

            {skillData.basics.map(item =>
              <div className="skill-item">
                <div className="skill-item-pic mb-1">
                  <SkillIcon iconName={item.key} style={{width: 40, height: 40}}/>
                </div>
                <ul className="list-unstyled mb-1">
                  <li className="text-center"><SkillIcon iconName="setting" style={{marginBottom: 2}}/> 0/{item.items.filter((each) => each.recommended).length}</li>
                  <li className="text-center"><SkillIcon iconName="filter-tilt-shift" style={{marginBottom: 2}}/> 0/{item.items.filter((each) => each.optional).length}</li>
                </ul>
              </div>
            )}

          </div>
          <div className="d-flex flex-wrap">

            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <SkillIcon iconName="basic-skills" style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><SkillIcon iconName="setting" style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><SkillIcon iconName="filter-tilt-shift" style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>
            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <SkillIcon iconName="basic-skills" style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><SkillIcon iconName="setting" style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><SkillIcon iconName="filter-tilt-shift" style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>
            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <SkillIcon iconName="basic-skills" style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><SkillIcon iconName="setting" style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><SkillIcon iconName="filter-tilt-shift" style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>
            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <SkillIcon iconName="basic-skills" style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><SkillIcon iconName="setting" style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><SkillIcon iconName="filter-tilt-shift" style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>
            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <SkillIcon iconName="basic-skills" style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><SkillIcon iconName="setting" style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><SkillIcon iconName="filter-tilt-shift" style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>

          </div>
          <div className="d-flex flex-wrap">

            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <SkillIcon iconName="basic-skills" style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><SkillIcon iconName="setting" style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><SkillIcon iconName="filter-tilt-shift" style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>
            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <SkillIcon iconName="basic-skills" style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><SkillIcon iconName="setting" style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><SkillIcon iconName="filter-tilt-shift" style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>
            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <SkillIcon iconName="basic-skills" style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><SkillIcon iconName="setting" style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><SkillIcon iconName="filter-tilt-shift" style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>
            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <SkillIcon iconName="basic-skills" style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><SkillIcon iconName="setting" style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><SkillIcon iconName="filter-tilt-shift" style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>
            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <SkillIcon iconName="basic-skills" style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><SkillIcon iconName="setting" style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><SkillIcon iconName="filter-tilt-shift" style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>

          </div>
          <div className="d-flex flex-wrap">

            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <SkillIcon iconName="basic-skills" style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><SkillIcon iconName="setting" style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><SkillIcon iconName="filter-tilt-shift" style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>
            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <SkillIcon iconName="basic-skills" style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><SkillIcon iconName="setting" style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><SkillIcon iconName="filter-tilt-shift" style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default connect(
  mapStateToProps,
)(SkillTree)