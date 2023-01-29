
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

const renderWithMockProviders = (children: JSX.Element) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });
    return <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
}

const customRender = (ui: JSX.Element, options = {}) =>
    render(renderWithMockProviders(ui), {
        wrapper: ({ children }) => children,
        ...options,
    });

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };