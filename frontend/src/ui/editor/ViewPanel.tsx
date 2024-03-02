import React from 'react'
import { Panel, PanelProps } from '../common'
import Renderer from './renderer/Renderer'

const ViewPanel: React.FC<PanelProps> = (props) => {
  return (
    <Panel {...props}>
        <Renderer />
    </Panel>
  )
}

export default ViewPanel