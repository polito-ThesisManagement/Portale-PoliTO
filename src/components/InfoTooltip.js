import { QuestionCircleFill } from 'react-bootstrap-icons';

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
