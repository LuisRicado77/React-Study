
import React from 'react';
import Alert from './components/Alert';
import  { Button } from './components/Button';

function App() {
  return (
    <div>
      <Button color='primary' onClick={() => console.log('Clicked')}>ama</Button>
    </div>
  );
}

export default App;
