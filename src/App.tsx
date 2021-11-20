import './App.css';
import { Suspense, lazy } from 'react';
import SelectionModal from './components/SelectionModal';
import useGameContext from './hooks/useGameContext';
import useRequests from './hooks/useRequests';
import SoundButton from './components/SoundButton';

const Main = lazy(() => import(/* webpackPrefetch: true */ './components/Main'));

function App() {

  const { game } = useGameContext();
  useRequests();

  console.log('render');

  return (
    <div className="App">
      <SoundButton />
      {
        !game
          ?
          <SelectionModal />
          :
          <Suspense fallback={<div>cargando.......</div>}>
            <Main />
          </Suspense>
      }
    </div>
  );
}

export default App;
