import '../styles/mentor-bio.css';
import '../styles/fonts.css';

function MentorBio(props) {
    return (
        <div className='bio-card'>
            <img 
                src={props.mentorData.profile}
                className='profile-image'
            />
            <div>
                <h2 className='bio-title'>{props.mentorData.firstName} {props.mentorData.lastName}</h2>
                <p className='bio-content'>{props.mentorData.description}</p>
            </div>
        </div>
    )
}

export default MentorBio;