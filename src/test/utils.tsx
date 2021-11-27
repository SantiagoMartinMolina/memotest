import { render as testingRender } from "@testing-library/react";
import type { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { SoundProvider, GameProvider } from "../Context";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            staleTime: Infinity,
        }
    }
});

export const render = (component: ReactElement) => {
    return (
        testingRender(
            <SoundProvider>
                <GameProvider>
                    <QueryClientProvider client={queryClient}>
                        {component}
                    </QueryClientProvider>
                </GameProvider>
            </SoundProvider>
        )
    )
}