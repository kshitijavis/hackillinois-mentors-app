import '../styles/mentor-bio.css'
import '../styles/common.css'

function MentorBio(props) {
    return (
        <div className='bio-card'>
            <img 
                src={props.mentorData.profile}
                className='profile-image'
            />
            <div>
                <h2>{props.mentorData.firstName} {props.mentorData.lastName}</h2>
                <p>{props.mentorData.description}</p>
            </div>
        </div>
    )
}

export default MentorBio;