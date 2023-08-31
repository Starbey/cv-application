function CvCategory ({ headerText, subtitleText, desc, startDate, endDate, location })
{
    return(
        <div className="cv-category">
            <Header text={headerText}>
            </Header>
            <Entry 
                subtitleText={subtitleText}
                desc={desc}
                startDate={startDate}
                endDate={endDate}
                location={location}
            ></Entry> 
         </div> 
    )
}

function Header( {text} ) {
    return (
        <div className="cv-category-header">
            {text}
        </div>
    )
}

function Entry({ subtitleText, desc, startDate, endDate, location }){
    return (
      <div className="cv-category-entry">
        <div className="entry-left-aligned">
            <div className="entry-header">{subtitleText}</div>
            <div className="entry-desc">{desc}</div>
        </div>
        <div className="entry-right-aligned">
            <div className="date">{startDate+" - "+endDate}</div>
            <div className="entry-location">{location}</div>      
        </div>
      </div>
    )
}

export default CvCategory;