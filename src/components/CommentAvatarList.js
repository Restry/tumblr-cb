import React, { Component, PropTypes } from 'react';

export default class CommentAvatarList extends React.Component {
    render() {
        const { avatars = [] } = this.props;
        return (
            <div className="comment-avatars">
                <h4>Authors</h4>
                <ul>
                    {avatars.map((item, i) => (
                        <li key={i}>
                            <img title={item.author} src={item.avatarUrl} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
