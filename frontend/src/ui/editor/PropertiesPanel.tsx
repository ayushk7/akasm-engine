import { Tree, TreeNodeInfo, NumericInput } from '@blueprintjs/core';
import { FC } from 'react';
import { Panel, PanelProps } from '../common';



const PropertiesPanel: FC<PanelProps> = (props) => {
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

export default PropertiesPanel;


const INITIAL_STATE: TreeNodeInfo[] = [
    {
        id: 1,
        icon: 'truck',
        label: 'Transform',
        isSelected: false,
        isExpanded: true,
        hasCaret: false,
        childNodes: [
            {
                id: 2,
                icon: "move",
                label: "Translate",
                isExpanded: true,
                hasCaret: false,
            },
            {
                id: 3,
                icon: "circle",
                label: "Rotation",
                isExpanded: true,
                hasCaret: false,
            },
            {
                id: 4,
                icon: "expand-all",
                label: "Scale",
                isExpanded: true,
                hasCaret: false,
            },
        ],
    },
    {
        id: 5,
        icon: 'variable',
        label: 'Velocity',
        hasCaret: false,
        secondaryLabel: <NumericInput small />,
    },
];
