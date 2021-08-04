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
        <MentorBio mentorData={mentor}/>
    );

    // Rendering
    if (error) {
        return (<div>Error: {error.message}</div>)
    } else {
        return (
            <div>
                <h1>Meet our Mentors</h1>
                <div className= 'flex-row-wrap mentor-list'>
                    {mentorBios}
                </div>
            </div>
        )
    }
}

export default MentorsList;