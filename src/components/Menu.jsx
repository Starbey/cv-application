import "../styles/Menu.css"

function Menu({ handleSavePersonalInfo }){
    return(
        <div className="menu-container">
            <button
                className="save-personal-info"
                onClick={handleSavePersonalInfo}
            >Save Personal Info</button>
        </div>
    )
}

export default Menu;