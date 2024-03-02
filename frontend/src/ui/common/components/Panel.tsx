import { FC } from 'react';
import {MosaicWindow, MosaicWindowProps} from 'react-mosaic-component';

export type PanelProps = MosaicWindowProps<string> & {id: string} 

const Panel: FC<PanelProps> = (props) => {
  return (
    <div style={{
        border: '1px solid gray',
        height: '100%',
        width: '100%',
    }}>
        <MosaicWindow 
            {...props}
        >
            {props.children}
        </MosaicWindow>
    </div>
  )
}

export {Panel};