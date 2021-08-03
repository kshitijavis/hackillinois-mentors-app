import { useState, useEffect } from 'react';

function MentorsList() {
    const fixedMentorData = [
        {
           "description":"Pablo is a computer scientist working as a lead software engineer at MindYourRights, where he's co-authoring a disruptive, common platform for global music rights management. He's passionate about computer programming, cycling, and coffee. He's been an active open source contributor for at least 15 years, writing mostly in Python, Go, and JavaScript. For the last few years, he found himself in love with Elixir and Rust. He's very excited to return to HackIllinois as a mentor for the 4th consecutive year!",
           "firstName":"Pablo",
           "lastName":"Aguiar",
           "profile":"https://hackillinois-upload.s3.amazonaws.com/photos/mentors/pablo_aguiar.png"
        },
        {
           "description":"Gino Corrales is a developer team lead for Caterpillar Inc. in the Cybersecurity Division. Gino was always passionate for mobile wearables, security and software development technologies. Prior to joining Caterpillar, Gino was a mobile developer for State Farm at the University of Illinois Research Park and was responsible for leading a group of interns for almost two years. Gino earned a Computer Science degree from Illinois State University and realized studies of Systems Engineering back at his hometown's university - Universidad Catolica de Santa Maria - in Arequipa, Peru.",
           "firstName":"Gino",
           "lastName":"Corrales",
           "profile":"https://hackillinois-upload.s3.amazonaws.com/photos/mentors/gino_corrales.jpg"
        },
    ]
    
    const [mentors, setMentors] = useState(fixedMentorData)

    const mentorBios = mentors.map((mentor) =>
        <li>{mentor.firstName}</li>
    );

    return (
        <div>
            <h1>Meet our Mentors</h1>
            <ul>{mentorBios}</ul>
        </div>
    )
}

export default MentorsList;