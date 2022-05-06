


import { AppRouter } from "./Routes/AppRouter";

import { Provider } from 'react-redux'
import { Store } from "./store/Store";





function App() {
  return (
    //con el provider le damos el contexto del store a nuestro app
    <Provider store={Store}> 
        <AppRouter/>
    </Provider>
  );
}

export default App;
