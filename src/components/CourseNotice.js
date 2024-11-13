import { Container } from 'react-bootstrap';

export default function CourseNotice(props) {
  return (
    <Container className="notice-container">
      <div className="p-2">
        <div className="mb-1">
          <span className="d-flex">
            <div className="regular-weight" style={{ marginRight: '6px' }}>{props.data} -</div>
            <div className="medium-weight" style={{ marginRight: '4px' }}>{props.course}</div>
            <div className='regular-weight'>({props.sender})</div>
          </span>
        </div>

        <span className="semibold-weight">{props.title}</span>

        <div>{props.body}</div>
      </div>
    </Container>
  );
}
