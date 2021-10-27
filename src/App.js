import React from "react";
import GlobalStyle from "@alef/theme/global";
import Routes from "@alef/Routes";
import { Provider } from "react-redux";
import initialStore from "@alef/store";
import "../src/translate/i18";

const App = () => {
    const store =initialStore();
  return (
    <Provider store={store}>
      <GlobalStyle />
        <Routes />
    </Provider>
  );
}

export default App;
