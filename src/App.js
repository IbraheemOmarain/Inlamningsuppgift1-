import React from "react"
import { Routing } from './routes/Routing'
import {NavigationBar} from './components/myFirstComponent/NavigationBar/NavigationBar'
import {UserProvider} from './shared/global/Provider/UserPrvider'

function App() {
  return (
     <UserProvider>

     <Routing>
       
<NavigationBar/>
     </Routing>
     </UserProvider>

    
  );
}

export default App;
