import { ConfigProvider, Spin } from "antd";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import App from "./App";
import "./index.css";
import store, { persistor } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <ConfigProvider>
                    <App />
                </ConfigProvider>
            </BrowserRouter>
        </PersistGate>
    </Provider>
);
