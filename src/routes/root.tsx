import { QueryClient, QueryClientProvider } from 'react-query';

import Header from '../features/header';
import { Outlet } from 'react-router-dom';
import Sidebar from '../features/sidebar';
import ThemeSwitch from '../features/themeSwitch';
import { useTheme } from '../common/hooks/useTheme';

// Create a client
const queryClient = new QueryClient();

export default function Root() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={theme}>
      <Sidebar />
      <ThemeSwitch toggleTheme={toggleTheme} theme={theme} />
      <QueryClientProvider client={queryClient}>
        <div>
          {/* <Header /> */}
          <main id='outlet'>
            <Outlet />
          </main>
        </div>
      </QueryClientProvider>
    </div>
  );
}
