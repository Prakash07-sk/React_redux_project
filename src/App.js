import { useEffect } from 'react';
import './App.scss';
import {AppNavigation} from './Components/AppNavigation';
import ClearConsole from './Components/Constent/ClearConsole';

function App() {

  useEffect(() => {
    ClearConsole()
  });

  return (
    <div>
      <main>
        <AppNavigation />
      </main>
    </div>
  );
}

export default App;
