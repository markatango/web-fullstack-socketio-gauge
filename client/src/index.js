import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import  {io} from 'socket.io-client';
import { SOCKET_URL } from './config';

var socket = io(SOCKET_URL);
console.log(`at index: connected: ${socket.connected}`)
if (socket.disconnected){
    console.log("but disconnected right after")
}

const container = document.getElementById('root')

// React 17:
// import ReactDom from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));

// React 18:
// import { createRoot } from 'react-dom/client';
// const root = createRoot(container); // createRoot(container!) if you use TypeScript

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App socket={socket}/>);
