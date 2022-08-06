import react from 'react';
import style from './Sidebar.module.css';
import SideBarLinks from './SideBarLinks';
import tableColumns from '../../asset/table-columns-solid.svg';
import chartLine from '../../asset/chart-line-solid.svg';
import customersLogo from '../../asset/user-group-solid.svg';
import calenderLogo from '../../asset/calendar-days-solid.svg';
import supportLogo from '../../asset/circle-question-regular.svg';
import settingLogo from '../../asset/gear-solid.svg';
import profileImage from '../../asset/img.jpeg';
import logoutLogo from '../../asset/arrow-right-from-bracket-solid.svg';
import sideImg from '../../asset/design.png';

const Sidebar = ()=>{
    return(
            <div className={style.sidebar}>
                    <div className={style.profileContainer}>
                        <div className={style.pic}>
                            <img src={profileImage}/>
                        </div>
                        <div className={style.profile}>
                            <h6 className={style.name}>Angela Grey</h6>
                            <p className={style.email}>angela@gmail.com</p>
                        </div>
                    </div>
                    <div className={style.linksContainer + " " + style.links}>
                        <SideBarLinks img={tableColumns} text='Overview'/>
                        <SideBarLinks img={chartLine} text='Analytics'/>
                        <SideBarLinks img={customersLogo} text='Customers'/>
                        <SideBarLinks img={calenderLogo} text='Calender'/>
                        <SideBarLinks img={supportLogo} text='Support'/>
                        <SideBarLinks img={settingLogo} text='Setting'/>
                    </div>
                    {/* <div className={style.side}> 
                        <SideBarLinks img={sideImg} text=''/>
                    </div> */}
                    <div className={style.linksContainer + " " + style.Logout}>
                        <SideBarLinks img={logoutLogo} text='Logout'/>
                    </div>
            </div>
    )
}

export default Sidebar;