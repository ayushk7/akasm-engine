import './App.css'
import Editor from './ui/editor/Editor'
import classNames from 'classnames';
import {Classes} from '@blueprintjs/core';

function App() {
  return (
    <div className={classNames('apps', {
      [Classes.DARK]: true,
    })}
    style={{
      height: '100vh',
    }} 
    >
      <Editor />
    </div>
  )
}

export default App
