import SceneHierarchyPanel from './SceneHierarchyPanel';
import { keyBy } from 'lodash';
import { MosaicNode } from 'react-mosaic-component';
import PropertiesPanel from './PropertiesPanel';
import { PanelProps } from '../common';
import ViewPanel from './ViewPanel';

const _SCENE_HIERARCHY_PANEL_ID = 'window:sceneHierarchyPanel';
const _PROPERTIES_PANEL_ID = 'window:propertiesPanel';
const _VIEW_PANEL_ID = 'window:viewPanel';
const _FILE_MANAGER_PANEL_ID = 'window:fileManagerPanel';

const WINDOW_DIRECTIONS = {
    ROW: 'row',
    COLUMN: 'column'
} as const;


const _DEFAULT_WINDOWS = [
    {
        title: 'Hierarchy',
        id: _SCENE_HIERARCHY_PANEL_ID, 
        content: (props: PanelProps) => <SceneHierarchyPanel {...props}/>,
    },
    {
        title: 'Properties',
        id: _PROPERTIES_PANEL_ID,
        content: (props: PanelProps) => <PropertiesPanel {...props}/>,
    },
    {
        title: 'View',
        id: _VIEW_PANEL_ID,
        content: (props: PanelProps) => <ViewPanel {...props}/>,
    },
    {
        title: 'File Manager',
        id: _FILE_MANAGER_PANEL_ID,
        content: (props: PanelProps) => <SceneHierarchyPanel {...props}/>,
    }
];

const DEFAULT_WINDOWS = keyBy(_DEFAULT_WINDOWS, 'id');

const {ROW, COLUMN} = WINDOW_DIRECTIONS;

const DEFAULT_WINDOW_LAYOUT: MosaicNode<string> = {
    direction: ROW,
    first: {
        direction: COLUMN,
        first: _SCENE_HIERARCHY_PANEL_ID,
        second: _PROPERTIES_PANEL_ID,
       splitPercentage: 50 
    },
    second: {
        direction: COLUMN,
        first: _VIEW_PANEL_ID,
        second: _FILE_MANAGER_PANEL_ID,
        splitPercentage: 70
    },
    splitPercentage:20
};



export { DEFAULT_WINDOWS, DEFAULT_WINDOW_LAYOUT, WINDOW_DIRECTIONS };

