import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS for styling
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import InsightsIcon from '@mui/icons-material/Insights'; // Assuming you have an Insights icon
import AddBoxIcon from '@mui/icons-material/AddBox'; // Placeholder for other icons
import WindowIcon from '@mui/icons-material/Window';
import { Divider } from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import RouteIcon from '@mui/icons-material/Route';
import SettingsIcon from '@mui/icons-material/Settings';
import HubIcon from '@mui/icons-material/Hub';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HailIcon from '@mui/icons-material/Hail';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SwitchAccessShortcutIcon from '@mui/icons-material/SwitchAccessShortcut';
import LogoutIcon from '@mui/icons-material/Logout';
// ...import other Material-UI icons

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src="logo.png" alt="Finanshels" />
      </div>
      <nav className="nav-section">
        <NavLink exact to="/chat-now" className="nav-link" activeClassName="active">
          <ChatBubbleIcon className="nav-icon" />
          Chat Now
        </NavLink>
        <NavLink to="/insights" className="nav-link" activeClassName="active">
          <InsightsIcon className="nav-icon" />
          Insights
        </NavLink>
        <NavLink to="/analytics" className="nav-link" activeClassName="active">
          <WindowIcon className="nav-icon" />
          Analytics
        </NavLink>  
        <NavLink to="/receivable" className="nav-link" activeClassName="active">
          <ArrowCircleDownIcon className="nav-icon" />
          Receivable
        </NavLink>
        <NavLink to="/payable" className="nav-link" activeClassName="active">
          <ArrowCircleUpIcon className="nav-icon" />
          Payable
        </NavLink>
        <NavLink to="/financialStatements" className="nav-link" activeClassName="active">
          <AssessmentIcon className="nav-icon" />
          Financial Statements
        </NavLink>
        <NavLink to="/invoicing" className="nav-link" activeClassName="active">
          <ReceiptIcon className="nav-icon" />
          Invoicing
        </NavLink>
      </nav>
      <Divider></Divider>
      <nav className="nav-section">
        <h4>ADDITIONAL</h4>
        <NavLink to="/integrations" className="nav-link" activeClassName="active">
          <RouteIcon className="nav-icon" />
          Integrations
        </NavLink>
        <NavLink to="/setting" className="nav-link" activeClassName="active">
          <SettingsIcon className="nav-icon" />
          Setting
        </NavLink>
        <NavLink to="/companyHub" className="nav-link" activeClassName="active">
          <HubIcon className="nav-icon" />
          CompanyHub
        </NavLink>
        <NavLink to="/finBooks" className="nav-link" activeClassName="active">
          <LibraryBooksIcon className="nav-icon" />
          FinBooks
        </NavLink>
        <NavLink to="/finTax" className="nav-link" activeClassName="active">
          <HailIcon className="nav-icon" />
          FinTax
        </NavLink>
        <NavLink to="/fractionalCFO" className="nav-link" activeClassName="active">
          <SentimentVerySatisfiedIcon className="nav-icon" />
          Fractional CFO
        </NavLink>
      </nav>
      <Divider></Divider>
      <nav className="nav-section">
        <h4>Change Entity</h4>
        <NavLink to="/SwitchCompany" className="nav-link" activeClassName="active">
        <SwitchAccessShortcutIcon className="nav-icon" />
          Switch Company
        </NavLink>
        <NavLink to="/logout" className="nav-link" activeClassName="active">
        <LogoutIcon className="nav-icon" />
          Log-out
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
