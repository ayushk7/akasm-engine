import { Mosaic, MosaicNode } from "react-mosaic-component";
import Toolbar from "./Toolbar";
import { useState } from "react";
import { DEFAULT_WINDOWS, DEFAULT_WINDOW_LAYOUT } from "./config.tsx";
import classNames from "classnames";
import {Classes} from '@blueprintjs/core'



const Editor = () => {
    return (
        <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* <Toolbar /> */}
            <WindowContainer />
        </div>
    )
}

const WindowContainer = () => {
    const [mosaicArrangement, setMosaicArrangement] = useState(DEFAULT_WINDOW_LAYOUT);
    return (
        <div style={{
            height: '100%',
            width: '100%',
        }}>
            <Mosaic<string>
                renderTile={(id, path) => {
                    const {content, title} = DEFAULT_WINDOWS[id];
                    return content({id, path, title});
                }}
                value={mosaicArrangement}
                onChange={(node) => setMosaicArrangement(node as MosaicNode<string>)}
                blueprintNamespace="bp5"
                className={classNames('mosaic-blueprint-theme', {
                    [Classes.DARK]: true,
                })}
            />
        </div>
    );
};





export default Editor