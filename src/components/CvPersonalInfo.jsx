function CvPersonalInfo( {name, email, location } ){
    return (
        <div className="cv-personal-info">
         <div className="cv-personal-info-name">{name}</div>
         <div className="cv-personal-info-others">{email+" | "+location}</div>
        </div>
    )
}

export default CvPersonalInfo;