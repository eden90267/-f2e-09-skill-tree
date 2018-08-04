import React from 'react'
import PropTypes from 'prop-types'


import MdWeb from 'react-icons/lib/md/web'
import MdBuild from 'react-icons/lib/md/build'
import MdSetting from 'react-icons/lib/md/settings'
import MdDeveloperBoard from 'react-icons/lib/md/developer-board'
import MdDeveloperMode from 'react-icons/lib/md/developer-mode'
import MdHdrStrong from 'react-icons/lib/md/hdr-strong'
import MdImportContacts from 'react-icons/lib/md/import-contacts'
import MdGradient from 'react-icons/lib/md/gradient'
import MdNfc from 'react-icons/lib/md/nfc'
import MdDevices from 'react-icons/lib/md/devices'
import MdViewQuilt from 'react-icons/lib/md/view-quilt'
import MdTablet from 'react-icons/lib/md/tablet'
import MdFormatQuote from 'react-icons/lib/md/format-quote'
import MdDeviceHub from 'react-icons/lib/md/device-hub'
import MdWidgets from 'react-icons/lib/md/widgets'
import MdFlipToFront from 'react-icons/lib/md/flip-to-front'
import MdFilterTiltShift from 'react-icons/lib/md/filter-tilt-shift'

const SkillIcon = (props) => {
  const {iconName, ...filterProps} = props
  if (iconName === 'basic-skills') {
    return <MdWeb {...filterProps} />
  } else if (iconName === 'basic-tools') {
    return <MdBuild {...filterProps}/>
  } else if (iconName === 'css-framework') {
    return <MdFlipToFront {...filterProps}/>
  } else if (iconName === 'css-preprocessors') {
    return <MdViewQuilt {...filterProps}/>
  } else if (iconName === 'css-architechture') {
    return <MdDeveloperBoard {...filterProps}/>
  } else if (iconName === 'css-skills') {
    return <MdDevices {...filterProps}/>
  } else if (iconName === 'css-mastery') {
    return <MdWidgets {...filterProps}/>
  } else if (iconName === 'basic-dom') {
    return <MdHdrStrong {...filterProps}/>
  } else if (iconName === 'web-drawing') {
    return <MdGradient {...filterProps}/>
  } else if (iconName === 'javascript-skills') {
    return <MdFormatQuote {...filterProps}/>
  } else if (iconName === 'javascript-framework') {
    return <MdDeveloperMode {...filterProps}/>
  } else if (iconName === 'javascript-preprocessors') {
    return <MdNfc {...filterProps}/>
  } else if (iconName === 'package-managers') {
    return <MdDeviceHub {...filterProps}/>
  } else if (iconName === 'task-runners') {
    return <MdImportContacts {...filterProps}/>
  } else if (iconName === 'build-tools') {
    return <MdTablet {...filterProps}/>
  } else if (iconName === 'setting') {
    return <MdSetting {...filterProps}/>
  } else if (iconName === 'filter-tilt-shift') {
    return <MdFilterTiltShift {...filterProps}/>
  }
  return <svg/>
}

SkillIcon.propTypes = {
  iconName: PropTypes.string.isRequired
}

export default SkillIcon