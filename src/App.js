import "./App.css";
import Checkout from "./checkout";
import WelcomeForm from "./WelcomeForm";
import AgreementForm from "./AgreementForm";
import GlobalState from "./GlobalState";
import React, { useEffect } from "react";
import BookService from "./services/BookService";
import theme from "./theme";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { SANDBOX, SANDBOX_CLIENT_ID, LIVE_CLIENT_ID } from "./Constants";


const getPackageName = () => {
  const packageName = window.location.search.toLowerCase().substr(3);
  console.log(packageName);
  return packageName;
};

function App() {
  const [state, setState] = React.useState({
    activeStep: 0,
    bookingDate: null,
    persons: [],
    indivisualTests: [],
    indivisualCombos: [],
    getStarted: true,
    smsPush: true,
  });

  useEffect(() => {
    const packageName = getPackageName();
    if (packageName && packageName.length > 0) {
      setState((state) => ({ ...state, urlPackageName: packageName }));
    }
  }, []);

  return (
    // <PayPalScriptProvider options={{"client-id": SANDBOX ? SANDBOX_CLIENT_ID : LIVE_CLIENT_ID, currency: "GBP"}}>

      <GlobalState.Provider value={[state, setState]}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />

          <div className="App">
            {!state.getStarted && !state.urlPackageName && <WelcomeForm />}
            {state.getStarted && !state.agreed && !state.urlPackageName && (
              <AgreementForm />
            )}
            {((state.getStarted && state.agreed) || state.urlPackageName) && (
              <Checkout />
            )}
          </div>
        </MuiThemeProvider>
      </GlobalState.Provider>

        //  {/* // </PayPalScriptProvider> */}

  );
}

export default App;
