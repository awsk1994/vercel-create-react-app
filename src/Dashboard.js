import React, { useState } from 'react';
import BackendURLModule from './BackendURLModule';
import DeviceData from './DeviceData';

function Dashboard() {
    const [backendURL, setBackendURL] = useState('');

    return (
    <div>
        <h1>Fall Detection System</h1>
        <hr/>
        <BackendURLModule backendURL={backendURL} setBackendURL={setBackendURL}/>
        <hr/>
        <DeviceData backendURL={backendURL}/>
    </div>
    )
}

export default Dashboard;