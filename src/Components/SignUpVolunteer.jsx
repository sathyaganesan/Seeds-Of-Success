import '../CSS/SignUpVolunteer.css';

export default function SignUpVolunteer() {
  return(
    <>
      <div>
        <h1 className="page-title"> Volunteers with us </h1>
      </div>
      <div>
        <p className="bottom-container">If any of the roles interests you or if you just want to talk to us to get more information, please fill out the
          <span className='inline-link'><a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeemfGdLa44UiEIL6KzeVsewcro3tYuK9eeoCgxFHg7yoU_Zg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            > 
              Google Form</a> 
          </span> and we will get in touch with you soon.
        </p>
      </div>
    </>
  );
}