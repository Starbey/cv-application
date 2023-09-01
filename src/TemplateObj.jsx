function TemplateObj(){
    return (
        {
            personalInfo: {
                name:"Benjamin Gavieres",
                email:"benjamin.gavieres@gmail.com",
                location:"Toronto, ON"
            },
            educations:[
                {
                    organization:"University of Waterloo",
                    desc:"Bachelor of Applied Science",
                    startDate:"09/2023",
                    endDate:"08/2028",
                    location:"Waterloo, ON"
                },
                {
                    organization:"School 2",
                    desc:"Bachelor of Rizz",
                    startDate:"09/2028",
                    endDate:"06/2033",
                    location:"Vancouver, BC"
                }
            ],
            professionalExperiences:[
                {
                    organization:"Riot Games",
                    desc:"Game Developer",
                    startDate:"12/2029",
                    endDate:"present",
                    location:"Los Angeles, CA"
                },
                {
                    organization:"Discord",
                    desc:"Keyboard Warrior",
                    startDate:"09/2005",
                    endDate:"present",
                    location:"Earth, Milky Way"
                }
            ]
        }
    )
}

export default TemplateObj;