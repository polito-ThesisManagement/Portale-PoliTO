import { Container } from 'react-bootstrap';

export default function CourseNotice(props) {
  return (
    <Container className="notice-container">
      <div className="p-2">
        <div className="mb-1">
          <span className="d-flex">
            <div style={{ marginRight: '6px', fontWeight: '400' }}>{props.data} -</div>
            <div style={{ marginRight: '4px', fontWeight: '500' }}>{props.course}</div>
            <div style={{ fontWeight: '400' }}>({props.sender})</div>
          </span>
        </div>

        <span style={{ fontWeight: '600' }}>{props.title}</span>

        <div>{props.body}</div>
      </div>
    </Container>
  );
}
