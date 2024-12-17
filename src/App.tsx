import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpreadsheetProvider } from "./context/SpreadsheetContext";
import routes from "./routes/routes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <SpreadsheetProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map(({ path, element: Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
          </Routes>
        </Suspense>
      </SpreadsheetProvider>
    </BrowserRouter>
  );
}

export default App;
