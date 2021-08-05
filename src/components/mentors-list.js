import { useState, useEffect } from 'react';
import MentorBio from './mentor-bio';
import '../styles/mentors-list.css';
import '../styles/fonts.css';

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

    const mentorBios = mentors.map((mentor, idx) =>
        // Currently using index of mentor array as key since mentor array is static
        // If we want to alter array, this key needs to be changed
        // Maybe use mentor id if retrieving from database
        <MentorBio 
            key={idx}
            mentorData={mentor}
        />
    );

    // Rendering
    if (error) {
        return (<div>Error: {error.message}</div>)
    } else {
        return (
            <div className='mentor-page'>
                <h1 id='mentor-page-intro'>Meet our Mentors</h1>
                <div 
                    id='mentor-list' 
                    className= 'flex-row-wrap mentor-list'
                >
                    {mentorBios}
                </div>
            </div>
        )
    }
}

export default MentorsList;