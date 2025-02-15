import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, PageNotFound } from "./pages";
import GeneralLayout from "./layouts/GeneralLayout";
import Solution from "./pages/Solution";
import Insights from "./pages/Insights";

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

        {/* Solutions Page */}
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
        {/* End of Solutions Page */}

        {/* Insights page */}
        <Route
          path="insights"
          element={
            <GeneralLayout>
              <Insights />
            </GeneralLayout>
          }
        />
        {/* End of Insights page */}

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

