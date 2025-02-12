import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, PageNotFound } from "./pages";
import GeneralLayout from "./layouts/GeneralLayout";
import Solution from "./pages/Solution";

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
        <Route
          path="solutions/investmentBanking"
          element={
            <GeneralLayout>
              <Solution />
            </GeneralLayout>
          }
        />
        <Route
          path="solutions/investmentManagement"
          element={
            <GeneralLayout>
              <Solution />
            </GeneralLayout>
          }
        />
        <Route
          path="solutions/securitiesTrading"
          element={
            <GeneralLayout>
              <Solution />
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

