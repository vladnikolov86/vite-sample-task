
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { BaseTheme } from "~/config/theme";

const renderWithMockProviders = (children: JSX.Element) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });
    return <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={BaseTheme}>
            {children}
        </ThemeProvider>

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