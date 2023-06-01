import React, { useState } from 'react';

function DeviceData({ backendURL }) {
    const [getDeviceRsp, setGetDeviceRsp] = useState('');
    const [getRealtimeDataRsp, setRealtimeDataRsp] = useState('');
    const [getHistoricDataRsp, setHistoricDataRsp] = useState('');
    const [deviceName, setDeviceName] = useState('');
    const handleDeviceNameChange = (event) => {
        setDeviceName(event.target.value);
    };

    function handleGetDeviceClick() {
        setGetDeviceRsp("Getting Data...");
        const url = `${backendURL}/homii/devices`;
        console.log(`url: ${url}`)
        const headers = new Headers();
        headers.append('ngrok-skip-browser-warning', true); // TODO: temp for ngrok purposes
        fetch(url, { headers: headers })
            .then(response => response.json())
            .then(data => setGetDeviceRsp(data))
            .catch(error => alert(error));
    }
    function handleGetRealtimeDataClick() {
        setRealtimeDataRsp("Getting Data...");
        const url = `${backendURL}/homii/realtimeData?deviceName=${deviceName}`;
        console.log(`url: ${url}`)
        const headers = new Headers();
        headers.append('ngrok-skip-browser-warning', true);  // TODO: temp for ngrok purposes
        fetch(url, { headers: headers })
            .then(response => response.json())
            .then(data => setRealtimeDataRsp(data))
            .catch(error => alert(error));
    }
    function handleGetHistoricDataClick() {
        setHistoricDataRsp("Getting Data...");
        const url = `${backendURL}/homii/historicData?deviceName=${deviceName}`;
        console.log(`url: ${url}`)
        const headers = new Headers();
        headers.append('ngrok-skip-browser-warning', true);  // TODO: temp for ngrok purposes
        fetch(url, { headers: headers })
            .then(response => response.json())
            .then(data => setHistoricDataRsp(data))
            .catch(error => alert(error));
    }
    return (
        <div style={{ textAlign: 'left' }}>
            <button onClick={handleGetDeviceClick}>Get Devices</button>
            <div style={{ fontSize: '12px' }}>
                <pre>{JSON.stringify(getDeviceRsp, null, 2)}</pre>
            </div>

            <label>Device Name: </label>
            <input
                id="my-input"
                type="text"
                value={deviceName}
                onChange={handleDeviceNameChange}
            />
            <br />
            <button onClick={handleGetRealtimeDataClick}>Start Getting real-time data</button>
            <div style={{ fontSize: '12px' }}>
                <pre>{JSON.stringify(getRealtimeDataRsp, null, 2)}</pre>
            </div>
            <button onClick={handleGetHistoricDataClick}>Get Historic Data</button>
            <div style={{ fontSize: '12px' }}>
                <pre>{JSON.stringify(getHistoricDataRsp, null, 2)}</pre>
            </div>
        </div>
    );
}

export default DeviceData;