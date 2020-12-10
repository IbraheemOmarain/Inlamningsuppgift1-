import React from "react"
import { Routing } from './routes/Routing'

import {MyFirstComponent} from "./components/myFirstComponent/myFirstComponent"

function App() {
  return (
     
     <Routing>
         <h1>Hello from React app</h1>
      <MyFirstComponent name="Ebi" age="32"/>

     </Routing>
    
  );
}

export default App;
