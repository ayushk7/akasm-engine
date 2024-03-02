import {Tree, ContextMenu, Tooltip, Icon, TreeNodeInfo} from '@blueprintjs/core';
import { FC } from 'react';
import { Panel, PanelProps } from '../common';



const SceneHierarchyPanel:FC<PanelProps> = (props) => {
  return (
    <Panel {...props}>
        <Tree
            compact
            contents={INITIAL_STATE}
            // onNodeClick={handleNodeClick}
            // onNodeCollapse={handleNodeCollapse}
            // onNodeExpand={handleNodeExpand}
        />
    </Panel>
  )
}

export default SceneHierarchyPanel;


const INITIAL_STATE: TreeNodeInfo[] = [
    {
        id: 0,
        hasCaret: true,
        icon: "box",
        isExpanded: true,
        label: (
            <ContextMenu content={<div>Hello there!</div>}>
                Collection
            </ContextMenu>
        ),
        childNodes: [
            {
                id: '1',
                icon: 'camera',
                label: 'Camera',
                isSelected: true
            },
            {
                id: 2,
                icon: "shapes",
                label: "Collision",
                isExpanded: true,
                secondaryLabel: (
                    <Tooltip content="Toggle">
                        <Icon icon="eye-open" />
                    </Tooltip>
                ),
                childNodes: [
                    {
                        id: 4,
                        icon: 'cube',
                        label: 'Body'
                    }
                ]
            },
        ],
    },
];