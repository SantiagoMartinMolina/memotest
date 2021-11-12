import './App.css';
import { Suspense, lazy } from 'react';
import SelectionModal from './components/SelectionModal';
import useGameContext from './hooks/useGameContext';
import useRequests from './hooks/useRequests';
import SoundButton from './components/SoundButton';

const Board = lazy(() => import(/* webpackPrefetch: true */ './components/Board'));

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
            <Board />
          </Suspense>
      }
    </div>
  );
}

export default App;
