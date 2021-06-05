import './Sidebar.css'
import logo from '../../assets/avatar.svg'


const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo"/>
                    <h1>Agasthi Sankalana</h1>
                </div>
                <i 
                    className="fa fa-times"
                    id="sidebarIcon"
                    onClick={() => closeSidebar()}
                ></i>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>
                <h2>MNG</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <a href="#">Admin management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building"></i>
                    <a href="#">Company management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-wrench"></i>
                    <a href="#">Employee management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Ware house</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-handshake-o"></i>
                    <a href="#">Contacts</a>
                </div>
                <h2>Leave</h2>
                <div className="sidebar__link">
                    <i className="fa fa-question"></i>
                    <a href="#">Requests</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-sign-out"></i>
                    <a href="#">Leave policy</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-calendar-check-o"></i>
                    <a href="#">Special days</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-file"></i>
                    <a href="#">Apply for leaves</a>
                </div>
                <h2>PAYROL</h2>

                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="#">Payrol</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-briefcase"></i>
                    <a href="#">Paygrade</a>
                </div>

                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Log out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar