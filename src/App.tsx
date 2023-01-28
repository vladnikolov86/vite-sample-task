import { QueryClient, QueryClientProvider } from 'react-query';
import { QUERY_CACHE_TIME_MINUTES, QUERY_STALE_TIME_MINUTES } from '~/config/global.config';
import { ThemeProvider } from 'styled-components';
import { BaseTheme } from '~/config/theme';
import Layout from '~/components/layout/Layout.component';
import { GlobalStyles } from '~/config/globalStyles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: QUERY_STALE_TIME_MINUTES,
      cacheTime: QUERY_CACHE_TIME_MINUTES
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={BaseTheme}>
        <GlobalStyles />
        <Layout />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
