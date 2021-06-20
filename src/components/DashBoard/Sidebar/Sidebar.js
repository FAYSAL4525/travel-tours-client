import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import {
	faBox, faCommentDots, faPlus, faSignOutAlt, faThLarge, faUserPlus
} from "@fortawesome/free-solid-svg-icons";
//create initial menuCollapse state using useState hook
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import {
	FiArrowLeftCircle,
	FiArrowRightCircle, FiHome
} from "react-icons/fi";
import {
	Menu,
	MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
	Link
} from "react-router-dom";
import { userContext } from "../../../App";
import "./Sidebar.css";




const Sidebar = ({isHome}) => {
	const [loggedInUser, setLoggedInUser] = useContext(userContext);
	 const [isAdmin, setIsAdmin] = useState(true);

   useEffect(() => {
     fetch(`https://afternoon-savannah-22003.herokuapp.com/isAdmin?email=${loggedInUser?.email}`)
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         setIsAdmin(data);
        //  setAdminLoading(false);
       });
	 }, [loggedInUser?.email]);
	
console.log(isAdmin);
// console.log(setLoggedInUser);
	const [menuCollapse, setMenuCollapse] = useState(false);
	
	const menuLinkClick = () => {
	 setMenuCollapse(true)
	}

  const menuIconClick = () => {

    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                <Link onClick={isHome} to="/home">
                  Home
                </Link>
              </MenuItem>

              {isAdmin ? (
                <>
                  <MenuItem icon={<FontAwesomeIcon icon={faUserPlus} />}>
                    <Link onClick={menuLinkClick} to="/dashboard/addAdmin">
                      Add Admin
                    </Link>
                  </MenuItem>

                  <MenuItem icon={<FontAwesomeIcon icon={faUserPlus} />}>
                    <Link onClick={menuLinkClick} to="/dashboard/AddGuided">
                      Add Guided
                    </Link>
                  </MenuItem>

                  <MenuItem icon={<FontAwesomeIcon icon={faPlus} />}>
                    <Link onClick={menuLinkClick} to="/dashboard/addPlaces">
                      Add Places
                    </Link>
                  </MenuItem>

                  <MenuItem icon={<FontAwesomeIcon icon={faFileAlt} />}>
                    <Link
                      onClick={menuLinkClick}
                      to="/dashboard/Admin/booklist"
                    >
                      Manage Order List
                    </Link>
                  </MenuItem>

                  <MenuItem icon={<FontAwesomeIcon icon={faThLarge} />}>
                    <Link
                      onClick={menuLinkClick}
                      to="/dashboard/ManageServices"
                    >
                      Manage Services
                    </Link>
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem icon={<FontAwesomeIcon icon={faBox} />}>
                    <Link onClick={menuLinkClick} to="/dashboard/userBooking">
                      Booking list
                    </Link>
                  </MenuItem>

                  <MenuItem icon={<FontAwesomeIcon icon={faCommentDots} />}>
                    <Link onClick={menuLinkClick} to="/dashboard/review">
                      Review
                    </Link>
                  </MenuItem>
                </>
              )}
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FontAwesomeIcon icon={faSignOutAlt} />}>
                <Link
                  to="/home"
                  onClick={() => {
                    setLoggedInUser({});
                    isHome();
                  }}
                >
                  > Logout
                </Link>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
