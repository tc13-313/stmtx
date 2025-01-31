import * as React from "react";
import { Application } from "@nativescript/core";
import { registerElement } from "react-nativescript";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppContainer } from "./navigation";

// Register elements
registerElement("stackLayout", () => require("@nativescript/core").StackLayout);
registerElement("label", () => require("@nativescript/core").Label);
registerElement("button", () => require("@nativescript/core").Button);
registerElement("textField", () => require("@nativescript/core").TextField);

const rootApp = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

Application.run({ create: rootApp });