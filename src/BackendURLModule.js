function BackendURLModule(props) {
    const handleBackendURLChange = (event) => {
        props.setBackendURL(event.target.value);
    };

   return (
   <div>
        <label htmlFor="my-input">Backend URL:</label>
        <input
            id="my-input"
            type="text"
            value={props.backendURL}
            onChange={handleBackendURLChange}
        />
    </div>
   );
}

export default BackendURLModule;