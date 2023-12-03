import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { QuestionCircle } from 'react-bootstrap-icons';

function TriggerExample(props) {

    const testo = props.text;

    const renderTooltip = (props) => (
        <Tooltip 
        id="button-tooltip" 
        placement='top-end'
        {...props}>
            {testo}
        </Tooltip>
    );

    return (
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <QuestionCircle> </QuestionCircle>
        </OverlayTrigger>
    );
}

export default TriggerExample;