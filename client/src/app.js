import * as React from 'react';
import ButtonUsage from './components/button';
import TextPointer from './components/ej2Gauge';
import {SocketContext, socket} from './context/socket';

export default function App(props) {

  return (
    <SocketContext.Provider value={socket}>
        <ButtonUsage />
        <TextPointer socket={props.socket}/>
    </SocketContext.Provider >
  )
}