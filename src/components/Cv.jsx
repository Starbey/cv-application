import "../styles/Cv.css"
import CvCategory from "./CvCategory.jsx"
import CvPersonalInfo from "./CvPersonalInfo.jsx"

function Cv({ personalInfo, educations, professionalExperiences }){
    return(
        <div className="cv-container">
        <CvPersonalInfo
          name={personalInfo.name}
          email={personalInfo.email}
          location={personalInfo.location}
        ></CvPersonalInfo>
        <CvCategory    
          headerText="Education"
          entries={educations}
        ></CvCategory>
        <CvCategory
          headerText="Professional Experience"
          entries={professionalExperiences}
        ></CvCategory>
        </div>
    )
}

export default Cv;