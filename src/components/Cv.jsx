import "../styles/Cv.css"
import CvCategory from "./CvCategory.jsx"
import CvPersonalInfo from "./CvPersonalInfo.jsx"

function Cv(){

    return(
        <div className="cv-container">
        <CvPersonalInfo
          name="Benjamin Gavieres"
          email="benjamin.gavieres@gmail.com"
          location="Toronto, ON" 
        ></CvPersonalInfo>
          <CvCategory    
            headerText="Education"
            subtitleText="University of Waterloo"
            desc="Bachelor of Applied Science"
            startDate="09/2023"
            endDate="06/2028"
            location="Waterloo, ON"
          ></CvCategory>
        </div>
    )
}

export default Cv;