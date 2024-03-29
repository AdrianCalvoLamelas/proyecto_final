import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { AppRoutes } from "./routes/routes";
import { messages } from './locales';
import { QueryClient, QueryClientProvider } from 'react-query'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = (): JSX.Element => {
  const locale = localStorage.getItem("locale") ?? "en";

  const queryClient = new QueryClient()
  // Cast is used to avoid TS error
  const currentMessages =
  messages[locale as keyof typeof messages] ?? messages.en;

  return (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <IntlProvider
        locale={locale}
        messages={currentMessages}
        defaultLocale="en"
      >
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </IntlProvider>
    </QueryClientProvider>
  </React.StrictMode>
  );
}

root.render(<App />);



