export default function Title(props) {

    return(
    <div className="title reduced">
        {props.icon}
        <span className="section-title" style={{ marginLeft: '5px', marginTop: '8px', marginBottom:'8px' }}>{props.sectionName}</span>
    </div>
    )
}