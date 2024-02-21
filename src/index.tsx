import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { AppRoutes } from "./routes/routes";
import { messages } from './locales';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = (): JSX.Element => {
  const locale = localStorage.getItem("locale") ?? "en";

  // Cast is used to avoid TS error
  const currentMessages =
  messages[locale as keyof typeof messages] ?? messages.en;

  return (
  <React.StrictMode>
    <IntlProvider
      locale={locale}
      messages={currentMessages}
      defaultLocale="en"
    >
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </IntlProvider>
  </React.StrictMode>
  );
}

root.render(<App />);



