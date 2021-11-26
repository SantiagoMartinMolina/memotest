import { render } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query";
import App from './App'
import { GameProvider, SoundProvider } from "./Context";

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

test('should render App', () => {
    const { getByRole, queryByRole, getAllByRole, getByAltText } = render(
        <SoundProvider>
            <GameProvider>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </GameProvider>
        </SoundProvider>
    );
    const soundButtonOff = getByRole('button', { name: 'turn sound off' });
    const soundButtonOn = queryByRole('button', { name: 'turn sound on' });
    expect(soundButtonOff).toBeVisible();
    expect(soundButtonOn).not.toBeInTheDocument();



    //clickear boton de sonido y testear que este el otro

    const images = getAllByRole('img');
    // que esten las imagenes, verificar que esten los iconos en footer (poner aria laberl (visitar mi...) en cada link y agarrarlos por aria laber)


    expect(images).toHaveLength(3);




});
