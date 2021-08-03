import { useState, useEffect } from 'react';
import MentorBio from './mentor-bio';
import '../styles/mentors-list.css'

function MentorsList() {
    const [mentors, setMentors] = useState([])
    const [error, setError] = useState(null)

    useEffect (() => {
        fetch("https://api.hackillinois.org/upload/blobstore/mentors/")
            .then(result => result.json())
            .then(
                (result) => {
                    setMentors(result.data);
                },
                (error) => {setError(error)}
            )
    });

    const mentorBios = mentors.map((mentor) =>
        <li>
            <MentorBio
                mentorData={mentor}
            />
        </li>
    );

    // Rendering
    if (error) {
        return (<div>Error: {error.message}</div>)
    } else {
        return (
            <div>
                <h1>Meet our Mentors</h1>
                <ul className='mentor-list'>
                    {mentorBios}
                </ul>
            </div>
        )
    }
}

export default MentorsList;