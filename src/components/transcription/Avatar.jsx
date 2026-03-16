import React from "react";
import headPhone from "../../assets/headphone.png";
import callerIcon from "../../assets/caller-user.png";
function Avatar({ type }){
    const avatarIcon = type === "agent" ? headPhone : callerIcon;
    return (
        <div className={`avatar ${type}`}>
            <img src={avatarIcon} alt="avatar" />
        </div>
    );
}
export default Avatar;