import React, { QuestionCircleFill } from 'react-bootstrap-icons';

import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TriggerExample(props) {
  const testo = props.text;

  const renderTooltip = props => (
    <Tooltip id="button-tooltip" placement="top-end" {...props}>
      {testo}
    </Tooltip>
  );

  return (
    <OverlayTrigger placement="bottom" delay={{ show: 150, hide: 400 }} overlay={renderTooltip}>
      <QuestionCircleFill className="zooming-icon" size={24} color="var(--primary)" />
    </OverlayTrigger>
  );
}

export default TriggerExample;

TriggerExample.propTypes = {
  text: PropTypes.string.isRequired,
};
