import React from 'react';
import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto'
import FullName from './component/profile/FullName'
import FullAdress from './component/profile/Address'

function App() {
  return (
  <div>
     <div className="header"><a href="#"><ProfilePhoto/></a></div>
     <FullName/>
     <h4>Full Address</h4>
     <FullAdress/>
     </div>
  );
}

export default App;
