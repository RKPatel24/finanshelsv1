import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Chatnow from './Components/Pages/Chatnow/Chatnow';
import Insights from './Components/Pages/Insights/Insights';
import Analytics from './Components/Pages/Analytics/Analytics';
import Receivable from './Components/Pages/Receivable/Receivable';
import Payable from './Components/Pages/Payable/Payable';
import FinancialStatements from './Components/Pages/FinancialStatements/FinancialStatements';
import Invoicing from './Components/Pages/Invoicing/Invoicing';
import Integrations from './Components/Pages/Integrations/Integrations';
import Settings from './Components/Pages/Settings/Settings';
import CompanyHub from './Components/Pages/CompanyHub/CompanyHub';
import FinBooks from './Components/Pages/FinBooks/FinBooks';
import FinTax from './Components/Pages/FinTax/FinTax';
import FractionalCFO from './Components/Pages/FractionalCFO/FractionalCFO';
import SwitchCompany from './Components/Pages/SwitchCompany/SwitchCompany';

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/chat-now" element={<Chatnow />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Insights" element={<Insights />} />
          <Route path="/Receivable" element={<Receivable />} />
          <Route path="/Payable" element={<Payable />} />
          <Route path="/FinancialStatements" element={<FinancialStatements />} />
          <Route path="/Invoicing" element={<Invoicing />} />
          <Route path="/Integrations" element={<Integrations />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/CompanyHub" element={<CompanyHub />} />
          <Route path="/FinBooks" element={<FinBooks />} />
          <Route path="/FinTax" element={<FinTax />} />
          <Route path="/FractionalCFO" element={<FractionalCFO />} />
          <Route path="/SwitchCompany" element={<SwitchCompany />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
