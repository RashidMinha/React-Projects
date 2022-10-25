import React from 'react';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
     <Dashboard 
     Name="RashidMinhas" 
     age={23} 
     occupation="Font-End Developer" 
     color="red"
      />
    </div>
  );
}

export default App;
