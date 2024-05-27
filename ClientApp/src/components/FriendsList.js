import React from 'react';

const FriendsList = () => {
    const friends = ['Alice', 'Bob', 'Charlie', 'Dave'];

    return (
        <div className="col-md-2 bg-light sidebar">
            <h5>Friends</h5>
            <ul className="list-group list-group-flush">
                {friends.map(friend => (
                    <li key={friend} className="list-group-item">{friend}</li>
                ))}
            </ul>
        </div>
    );
};

export default FriendsList;