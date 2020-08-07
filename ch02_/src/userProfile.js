import React from 'react'
import PropTypes from 'prop-types'

const UserProfile = props => {
    return <img src={`https://source.unpslash.com/user/${props.username}`} />;
};
UserProfile.propTypes = {
    pagename: PropTypes.string
};
UserProfile.defaultProps = {
    pagename: "erondu"
};

const UserProfileLink = props => {
    return <a href={`https://ifelse.io/${props.username}`}>{props.username}</a>;
};

const UserCard = props => {
    return (
        <div>
            <UserProfile username={props.username}/>
            <UserProfileLink username={props.username}/>
        </div>
    );
};

export default UserCard;