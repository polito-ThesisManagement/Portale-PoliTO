import { Container } from 'react-bootstrap';

export default function GeneralNotice(props) {
  return (
    <Container className="notice-container">
      <div className="p-2">
        <div className="mb-1">
          <span className="d-flex">
            <div style={{ marginRight: '6px', fontWeight: '400' }}>{props.data}</div>
            {props.sender ? <div style={{ fontWeight: '400' }}>({props.sender})</div> : null}
          </span>
        </div>

        <span style={{ fontWeight: '600' }}>{props.title}</span>

        <div>{props.body}</div>
      </div>
    </Container>
  );
}
