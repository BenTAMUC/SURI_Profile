

const IdentityCard = (props) => {


    return (
        <div className="card">
            <h5>{props.credential.serviceName}</h5>
            <p>{props.credential.link}</p>
        </div>
    )
}

export default IdentityCard;