

const IdentityCard = (props) => {


    return (
        <div className="card">
            <div class="mb-2">
                <a href={props.credential.seqno} class="mr-2 hover:underline">
                    <i class="fab fa-twitter"></i> User
                </a>
                <a href="https://twitter.com/user/status/someID" class="text-gray-600 hover:underline">proof URL</a>
            </div>
        </div>
    )
}

export default IdentityCard;