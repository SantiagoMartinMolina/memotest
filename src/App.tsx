import './App.css';
import { Suspense, lazy } from 'react';
import SelectionModal from './components/SelectionModal';
import useGameContext from './hooks/useGameContext';
import useRequests from './hooks/useRequests';
import SoundButton from './components/SoundButton';
import Loader from './components/Loader';

const Main = lazy(() => import(/* webpackPrefetch: true */ './components/Main'));

function App() {

  const { game } = useGameContext();
  useRequests();

  return (
    <div className="App">
      <SoundButton />
      {
        !game
          ?
          <SelectionModal />
          :
          <Suspense fallback={<Loader />}>
            <Main />
          </Suspense>
      }
    </div>
  );
}

export default App;
