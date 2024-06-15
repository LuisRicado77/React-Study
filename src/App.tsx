
import React, { useState } from 'react';
import Alert from './components/Alert';
import  { Button } from './components/Button';

function App() {

  const [alertVisible,setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Alerta luis</Alert>}
      <Button color='primary' onClick={() => setAlertVisibility(true)}>ama</Button>
    </div>
  );
}

export default App;
