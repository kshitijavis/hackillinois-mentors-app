import '../styles/mentor-bio.css'
import '../styles/common.css'

function MentorBio(props) {
    return (
        <div className='bio-group flex-row flex-center'>
            <div className='flex-col'>
                <h2>{props.mentorData.firstName} {props.mentorData.lastName}</h2>
                <p className='profile-text'>{props.mentorData.description}</p>
            </div>
            <img 
                src={props.mentorData.profile}
                className='profile-image'
            />
        </div>
    )
}

export default MentorBio;