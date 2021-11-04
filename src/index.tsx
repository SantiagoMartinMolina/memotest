import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GameProvider } from './Context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, // Cantidad de intentos que queremos que la libreria realice antes de lanzar un error en caso de que la request falle.
      staleTime: Infinity, // Cantidad de tiempo para que la libreria considere "stale" la query.
      // notifyOnChangePropsExclusions: ['isStale'], // Notifica que la data cacheada esta "stale", esto produce un re-render.
      // refetchOnWindowFocus: false, // Para desactivar el refetch cuando cambiamos de ventana.
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </GameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
