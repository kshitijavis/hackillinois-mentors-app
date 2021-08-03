function MentorBio(props) {
    return (
        <div>
            <h2>{props.mentorData.firstName} {props.mentorData.lastName}</h2>
            <p>{props.mentorData.description}</p>
            <img src={props.mentorData.profile}/>
        </div>
    )
}

export default MentorBio;