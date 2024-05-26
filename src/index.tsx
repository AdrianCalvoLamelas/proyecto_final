import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/Routes";
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from './context/auth/AuthProvider';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = (): JSX.Element => {
  
  const queryClient = new QueryClient()

  return (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
  );
}

root.render(<App />);



