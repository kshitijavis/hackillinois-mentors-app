import '../styles/mentor-bio.css';
import '../styles/fonts.css';

function MentorBio(props) {
    const fullName = `${props.mentorData.firstName} ${props.mentorData.lastName}`

    return (
        <li className='bio-card'>
            <img
                src={props.mentorData.profile}
                className='profile-image'
                alt={`Portrait of ${fullName}`}
                
            />
            <div>
                <h2 className='bio-title'>{fullName}</h2>
                <p className='bio-content'>{props.mentorData.description}</p>
            </div>
        </li>
    )
}

export default MentorBio;