import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, PageNotFound } from "./pages";
import GeneralLayout from "./layouts/GeneralLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <GeneralLayout>
              <Home />
            </GeneralLayout>
          }
        />

        {/* Undocumented routes */}
        <Route
          path="*"
          element={
            <GeneralLayout>
              <PageNotFound />
            </GeneralLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

