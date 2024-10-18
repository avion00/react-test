import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import { ThemeContext } from './ThemeWrapper';
import {
  DashboardPage,
  BlankPage,
  Error,
  NotFound,
  Form,
  Table,
  Parent,
  MedicareAdminDashboard,
  MedicareAdminClient,
  MedicareAdminBot,
  MedicareAdminBilling,
  MedicareAdminSupport,
  MedicareAdminReports,
} from '../pageListAsync';

function Application(props) {
  const { history } = props;
  const changeMode = useContext(ThemeContext);

  return (
    <Dashboard history={history} changeMode={changeMode}>
      <Switch>
        { /* Home */ }
        <Route exact path="/app" component={MedicareAdminDashboard} />
        <Route path="/app/pages/dashboard" component={DashboardPage} />
        <Route path="/app/pages/form" component={Form} />
        <Route path="/app/pages/table" component={Table} />
        <Route path="/app/pages/page-list" component={Parent} />
        <Route path="/app/pages/pages/not-found" component={NotFound} />
        <Route path="/app/pages/pages/error" component={Error} />
        <Route path="/app/dashboard" component={MedicareAdminDashboard} />
        <Route path="/app/client" component={MedicareAdminClient} />
        <Route path="/app/bot" component={MedicareAdminBot} />
        <Route path="/app/billing" component={MedicareAdminBilling} />
        <Route path="/app/support" component={MedicareAdminSupport} />
        <Route path="/app/reports" component={MedicareAdminReports} />
        <Route component={NotFound} />
      </Switch>
    </Dashboard>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired
};

export default Application;
