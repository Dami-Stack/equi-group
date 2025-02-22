import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Careers, Home, PageNotFound } from "./pages";
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

        {/* Careers Page */}
        <Route
          path="/careers"
          element={
            <GeneralLayout>
              <Careers />
            </GeneralLayout>
          }
        />
        {/* End of careers Page */}

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

