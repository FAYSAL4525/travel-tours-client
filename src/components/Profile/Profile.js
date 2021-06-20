import React, { useContext } from 'react'
import { userContext } from '../../App';

const Profile = () => {
		const [loggedInUser] = useContext(userContext);
	return (
    <>
			<div className="m-0 p-0" style={{
				display: "inline-block",
				color: "tomato",
				fontSize: "16px",
				fontWeight: "700",
				fontFamily: "Lucida Sans" , 
			}}>
        {loggedInUser.name}
      </div>
    </>
  );
}

export default Profile
