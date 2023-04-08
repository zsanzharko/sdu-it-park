import React, {useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import defaultAvatar from "../../assets/images/blank.svg";
import './google-button.scss';
// import CLIENT_ID from "./token";

const GoogleButton = () => {

    const [user, setUser] = useState({});

    function handleCallbackResponse(response) {
        let userObject = jwt_decode(response.credential);
        setUser(userObject);
        document.getElementById('sign-in').hidden = true;
    }

    function handleSignOut(event) {
        setUser({});
        document.getElementById('sign-in').hidden = false;
    }

    function menuVisibility() {
        document.getElementsByClassName('dropdown-menu')[0].hidden =
            !document.getElementsByClassName('dropdown-menu')[0].hidden;
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            // client_id: CLIENT_ID,
            callback: handleCallbackResponse,
        });

        google.accounts.id.renderButton(
            document.getElementById('sign-in'),
            { theme: 'outline', size: 'large' }
        );
    }, []);

    return (
        <div className="google-button">

            <div id='sign-in'></div>

            {Object.keys(user).length !== 0 &&
                <div className="mini-profile">
                    <b>{user.name.split(' ')[0]}</b>
                    <div className="avatar-frame" onClick={(e) => menuVisibility()}>
                        <img src={defaultAvatar} alt="logo" loading="lazy" />
                        <div className="dropdown-menu" hidden>
                            <a href="/#">Profile</a>
                            <a href="/#">Settings</a>
                            <a href="/#" onClick={(e) => handleSignOut(e)}>Sign out</a>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default GoogleButton;