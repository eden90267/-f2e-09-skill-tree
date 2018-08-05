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
    {
      key: 'css-framework',
      name: 'CSS FRAMEWORK',
      items: [
        {key: 'bootstrap', name: 'Bootstrap', recommended: true, optional: false},
        {key: 'uikit', name: 'UIKit', recommended: false, optional: true},
        {key: 'foundation', name: 'Foundation', recommended: false, optional: true},
        {key: 'semantic-ui', name: 'Semantic UI', recommended: false, optional: true}
      ]
    },
    {
      key: 'css-preprocessors',
      name: 'CSS PREPROCESSORS',
      items: [
        {key: 'sass', name: 'Sass', recommended: true, optional: false},
        {key: 'postcss', name: 'PostCSS', recommended: true, optional: false},
        {key: 'less', name: 'Less', recommended: false, optional: true},
        {key: 'stylus', name: 'Stylus', recommended: false, optional: true}
      ]
    },
    {
      key: 'css-architechture',
      name: 'CSS ARCHITECHTURE',
      items: [
        {key: 'oocss', name: 'OOCSS', recommended: true, optional: false},
        {key: 'smacss', name: 'SMACSS', recommended: false, optional: true},
        {key: 'bem', name: 'BEM', recommended: false, optional: true},
      ]
    },
    {
      key: 'css-skills',
      name: 'CSS SKILLS',
      items: [
        {key: 'responsive', name: 'Responsive', recommended: true, optional: false},
        {key: 'flexbox', name: 'Flexbox', recommended: true, optional: false},
      ]
    },
    {
      key: 'css-mastery',
      name: 'CSS MASTERY',
      items: [
        {key: 'grid-layout', name: 'Grid Layout', recommended: false, optional: true},
        {key: 'animation', name: 'Animation', recommended: false, optional: true},
        {key: 'transform-2d-3d', name: 'Transform 2D, 3D', recommended: false, optional: true},
      ]
    }
  ],
  javascript: [
    {
      key: 'basic-dom',
      name: 'BASIC DOM',
      items: [
        {key: 'jquery', name: 'jQuery', recommended: false, optional: true}
      ]
    },
    {
      key: 'web-drawing',
      name: 'WEB DRAWING',
      items: [
        {key: 'svg', name: 'SVG', recommended: false, optional: true},
        {key: 'canvas', name: 'Canvas', recommended: false, optional: true},
        {key: 'd3.js', name: 'D3.js', recommended: false, optional: true}
      ]
    },
    {
      key: 'javascript-skills',
      name: 'JAVASCRIPT SKILLS',
      items: [
        {key: 'es6', name: 'ES6', recommended: true, optional: false},
      ]
    },
    {
      key: 'javascript-framework',
      name: 'JAVASCRIPT FRAMEWORK',
      items: [
        {key: 'vue.js', name: 'Vue.js', recommended: true, optional: false},
        {key: 'angular', name: 'Angular', recommended: true, optional: false},
        {key: 'react.js', name: 'React.js', recommended: true, optional: false},
      ]
    },
    {
      key: 'javascript-preprocessors',
      name: 'JAVASCRIPT PREPROCESSORS',
      items: [
        {key: 'typescript', name: 'TypeScript', recommended: false, optional: true},
        {key: 'babel', name: 'Babel', recommended: false, optional: true},
        {key: 'coffeescript', name: 'CoffeeScript', recommended: false, optional: true}
      ]
    }
  ],
  managers: [
    {
      key: 'package-managers',
      name: 'PACKAGE MANAGERS',
      items: [
        {key: 'npm', name: 'NPM', recommended: true, optional: false},
        {key: 'yarn', name: 'YARN', recommended: true, optional: false},
        {key: 'bower', name: 'Bower', recommended: false, optional: true}
      ]
    },
    {
      key: 'task-runners',
      name: 'TASK RUNNERS',
      items: [
        {key: 'npm-scripts', name: 'npm scripts', recommended: true, optional: false},
        {key: 'gulp', name: 'gulp', recommended: true, optional: false},
        {key: 'grunt', name: 'grunt', recommended: false, optional: true}
      ]
    },
    {
      key: 'build-tools',
      name: 'BUILD TOOLS',
      items: [
        {key: 'webpack', name: 'Webpack', recommended: true, optional: false},
        {key: 'parcel', name: 'Parcel', recommended: false, optional: true}
      ]
    }
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
          <div className="d-flex flex-column align-items-center opacity-p-1">
            <div>
              <img src={require('../../../assets/img-planet-css.png')}/>
            </div>
            <div className="skill-tree-item-arrow" style={{height: 132}}/>
          </div>
          <div className="d-flex flex-column align-items-center opacity-p-1">
            <div>
              <img src={require('../../../assets/img-planet-js.png')}/>
            </div>
            <div className="skill-tree-item-arrow" style={{height: 132}}/>
          </div>
          <div className="d-flex flex-column align-items-center opacity-p-1">
            <div>
              <img src={require('../../../assets/img-planet-managers.png')}/>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column skill-items">
          <div className="d-flex flex-wrap">

            {skillData.basics.map((item, idx) =>
              <div className={'skill-item' + (idx === 0 ? ' active': '')}>
                <div className="skill-item-pic mb-1">
                  <SkillIcon iconName={item.key} style={{width: 40, height: 40}}/>
                </div>
                <ul className="list-unstyled mb-1">
                  <li className="text-center"><SkillIcon iconName="setting" style={{marginBottom: 2}}/> {(idx === 0 ? 1 : 0)}/{item.items.filter((each) => each.recommended).length}</li>
                  <li className="text-center"><SkillIcon iconName="filter-tilt-shift" style={{marginBottom: 2}}/> 0/{item.items.filter((each) => each.optional).length}</li>
                </ul>
              </div>
            )}

          </div>
          <div className="d-flex flex-wrap">

            {skillData.css.map(item =>
              <div className="skill-item disabled">
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

            {skillData.javascript.map(item =>
              <div className="skill-item disabled">
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

            {skillData.managers.map(item =>
              <div className="skill-item disabled">
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
        </div>

      </div>
    )
  }
}

export default connect(
  mapStateToProps,
)(SkillTree)