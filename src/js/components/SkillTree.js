import React, {Component} from 'react'
import {connect} from 'react-redux'

import {MdPhonelink, MdSettings, MdFilterTiltShift} from 'react-icons/md'

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

            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <MdPhonelink style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><MdSettings style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><MdFilterTiltShift style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>
            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <MdPhonelink style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><MdSettings style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><MdFilterTiltShift style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>

          </div>
          <div className="d-flex flex-wrap">

            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <MdPhonelink style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><MdSettings style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><MdFilterTiltShift style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>
            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <MdPhonelink style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><MdSettings style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><MdFilterTiltShift style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>
            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <MdPhonelink style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><MdSettings style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><MdFilterTiltShift style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>
            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <MdPhonelink style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><MdSettings style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><MdFilterTiltShift style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>
            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <MdPhonelink style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><MdSettings style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><MdFilterTiltShift style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>

          </div>
          <div className="d-flex flex-wrap">

            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <MdPhonelink style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><MdSettings style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><MdFilterTiltShift style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>
            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <MdPhonelink style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><MdSettings style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><MdFilterTiltShift style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>
            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <MdPhonelink style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><MdSettings style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><MdFilterTiltShift style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>
            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <MdPhonelink style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><MdSettings style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><MdFilterTiltShift style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>
            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <MdPhonelink style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><MdSettings style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><MdFilterTiltShift style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>

          </div>
          <div className="d-flex flex-wrap">

            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <MdPhonelink style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><MdSettings style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><MdFilterTiltShift style={{marginBottom: 2}}/> 0/0</li>
              </ul>
            </div>
            <div className="skill-item">
              <div className="skill-item-pic mb-1">
                <MdPhonelink style={{width: 40, height: 40}}/>
              </div>
              <ul className="list-unstyled mb-1">
                <li className="text-center"><MdSettings style={{marginBottom: 2}}/> 0/3</li>
                <li className="text-center"><MdFilterTiltShift style={{marginBottom: 2}}/> 0/0</li>
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