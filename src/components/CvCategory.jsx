import uniqid from "uniqid";

function CvCategory ({ headerText, entries })
{
    const entriesArray=[...entries];
    const entriesComponents=entriesArray.map((entry)=>
        <Entry 
            key={uniqid()}//NOT A PROP
            organization={entry.organization}
            desc={entry.desc}
            startDate={entry.startDate}
            endDate={entry.endDate}
            location={entry.location}
        ></Entry> 
    )

    return(
        <div className="cv-category">
            <Header text={headerText}>
            </Header>
            {entriesComponents}
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

function Entry({ organization, desc, startDate, endDate, location }){
    return (
      <div className="cv-category-entry">
        <div className="entry-left-aligned">
            <div className="entry-header">{organization}</div>
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