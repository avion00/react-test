import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import StrippedTable from './StrippedTable';

function BasicTable(props) {
  const { intl } = props;
  return (
    <div style={{
      width: '100%',
      flexGrow: '1',
      paddingTop: '1em',
    }}>
      <div>
        <StrippedTable />
      </div>
    </div>
  );
}

BasicTable.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(BasicTable);
