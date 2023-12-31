import React from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";


function App() {
  return (
    <div className="app_header">
      <Header />
      <div className='app_body'>
           <Sidebar />
           <Feed />
           <Widgets />

      </div>
    </div>
  );
}

export default App;
