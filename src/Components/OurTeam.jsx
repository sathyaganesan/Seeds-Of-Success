import React from "react";
import mithra from '../assets/MithraVenkatesan.svg';
import nila from '../assets/NilaLoganathan.svg';
import kavin from '../assets/KavinLoganathan.svg';
import tara from '../assets/TaraVenkatesan.svg';
import seedslogo from '../assets/seeds.svg'
import '../CSS/OurTeam.css';

function OurTeam() {
    return(
    <div>
        <div>
            <h1 className="title"> Meet the Team</h1>
        </div>
        <div className="card-container">   
            <div className="card">
                <img src = {mithra} alt = "card " className="card-image"/>
                <p>Founder, Program Coordinator & Tutor</p>
                <h3> Mithra Venkatesan</h3>
                <p>Mithra is a junior at South Lakes High School in Herndon, Virginia. 
                    She is a gymnast, cheerleader, tennis player and aspires to pursue a career in medicine. 
                    Mithra had the unique privilege of studying for a few years in Tamil Nadu during her formative years, 
                    so she is naturally well-versed in the Tamil language and culture.
                </p>
                <p>Witnessing firsthand the economic and educational doors that English fluency opened for her peers, 
                    especially in rural areas, instilled in her a deep understanding of the need for bilingualism and 
                    a sense of responsibility to the underprivileged by starting 'Seeds of Success'.
                </p>
            </div>

            <div className="card">
                <img src = {nila} alt = "card " className="card-image"/>
                <p>Founder, Program Coordinator & Tutor</p>
                <h3> Nila Loganathan</h3>
                <p>Nila is a rising sophomore at Freedom High School in Chantilly, Virginia. 
                    She is a dedicated gymnast and is notably fluent in Tamil, 
                    possessing strong skills in speaking, reading, and writing the language. 
                    Nila particularly excels at public speaking in both Tamil and English, 
                    a skill she uses to connect with and motivate students. 
                </p>
                <p>The opportunity to work with and assist underprivileged students is what motivated her to co-start 'Seeds of Success'.  
                    Nila recognizes the program's meaningful cause and is confident her involvement will positively impact the kids while maximizing the program's reach.
                </p>
            </div>

            <div className="card">
                <img src = {kavin} alt = "card " className="card-image"/>
                <p>Founder & Technology Innovator</p>
                <h3> Kavin Loganathan</h3>
                <p>Kavin is an eighth-grader at J. Michael Lunsford Middle School in Chantilly, Virginia. 
                    He is a well-versed debater, an enthusiastic public speaker and an athlete who plays lacrosse and volleyball.
                    As an avid technologist who enjoys solving complex problems, Kavin has taken on the vital role of providing technological support for 'Seeds of Success'. 
                </p>
                <p>His responsibilities include building and maintaining the organization's digital solutions. 
                    Furthermore, he plays a key part in digitalizing the curriculum and ensuring the technical 
                    framework is in place to help the organization scale its operations and reach.
                </p>
            </div>

            <div className="card">
                <img src = {seedslogo} alt = "card " className="card-image"/>
                <p>Mentor & Tutor</p>
                <h3> Tara Venkatesan</h3>
                <p>Thara is a second-year student at the College of William & Mary in Williamsburg, Virginia. 
                    She serves as the key mentor to 'Seeds of Success' founders . Drawing on her own leadership experience, 
                    she provides guidance and strategic support to the emerging organization.
                </p>
                <p>Having attended Tamil school for 12 years, she is fluent in the language, 
                    proficient in speaking, reading, and writing. With a passion for teaching children and a goal to teach English abroad, 
                    she is excited to give back to her community of origin and help guide the next generation of program leaders.
                </p>
            </div>
        </div>
    </div>
    );
}
export default OurTeam;