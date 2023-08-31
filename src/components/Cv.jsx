import "../styles/Cv.css"
import CvCategory from "./CvCategory.jsx"
import CvPersonalInfo from "./CvPersonalInfo.jsx"

function Cv({ cvInfo }){
    return(
        <div className="cv-container">
        <CvPersonalInfo
          name={cvInfo.personalInfo.name}
          email={cvInfo.personalInfo.email}
          location={cvInfo.personalInfo.location}
        ></CvPersonalInfo>
        <CvCategory    
          headerText="Education"
          entries={cvInfo.educations}
        ></CvCategory>
        <CvCategory
          headerText="Professional Experience"
          entries={cvInfo.professionalExperiences}
        ></CvCategory>
        </div>
    )
}

export default Cv;