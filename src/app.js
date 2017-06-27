import React, { Component, PropTypes } from 'react';
import Item from './item.jsx'
import ReactDOM from 'react-dom';
import './themes/init.css'
import { Comment, CommentAvatarList, CommentForm } from './components';
import axios from 'axios';


const defaultAvatarUrl = 'images/cool.svg'
const commentUrl = '/api/comments';

class CommentBox extends React.Component {
    constructor() {
        super();

        this.state = {
            showComments: false,
            comments: []
        };
    }

    componentWillMount() {
        this._fetchComments();
    }

    render() {
        const comments = this._getComments();
        return (
            <div className="comment-box">
                <CommentForm addComment={this._addComment.bind(this)} />
                <CommentAvatarList avatars={this._getAvatars()} />
                {this._getPopularMessage(comments.length)}
                <h3 className="comment-count">{this._getCommentsTitle(comments.length)}</h3>
                <div className="comment-list">
                    {comments}
                </div>
            </div>
        );
    }

    _getAvatars() {
        return this.state.comments.map(comment => {return {author:comment.author, avatarUrl:comment.avatarUrl || defaultAvatarUrl}});
    }

    _getPopularMessage(commentCount) {
        const POPULAR_COUNT = 10;
        if (commentCount > POPULAR_COUNT) {
            return (
                <div>This post is getting really popular, don't miss out!</div>
            );
        }
    }

    _getComments() {
        return this.state.comments.map((comment) => {
            return (<Comment
                id={comment._id}
                author={comment.author}
                body={comment.text}
                avatarUrl={comment.avatarUrl || defaultAvatarUrl}
                onDelete={this._deleteComment.bind(this)}
                key={comment._id} />);
        });
    }

    _getCommentsTitle(commentCount) {
        if (commentCount === 0) {
            return 'No comments yet';
        } else if (commentCount === 1) {
            return '1 comment';
        } else {
            return `${commentCount} comments`;
        }
    }

    _addComment(commentAuthor, commentBody) {
        let comment = {
            _id: Math.floor(Math.random() * (9999 - this.state.comments.length + 1)) + this.state.comments.length,
            author: commentAuthor,
            text: commentBody,
            avatarUrl: 'images/cool.svg'
        };

        this.setState({
            comments: this.state.comments.concat([comment])
        });

        axios.post(commentUrl, comment).then(res => {
            // debugger;
        })
            .catch(err => {
                console.error(err);
                // this.setState({ comments: comments });
                this._fetchComments();
            });

    }

    _fetchComments() {
        // $.ajax({
        //     method: 'GET',
        //     url: 'comments.json',
        //     success: (comments) => {
        //         this.setState({ comments });
        //     }
        // });

        axios.get(commentUrl).then((a) => {
            this.setState({ comments: a.data });
        })
    }

    _deleteComment(commentID) {

        const comments = this.state.comments.filter(
            comment => comment._id !== commentID
        );

        this.setState({ comments });

        axios.delete(`${commentUrl}/${commentID}`)
            .then(res => {
                console.log('Comment deleted');
            })
            .catch(err => {
                console.error(err);
            });

    }
}



ReactDOM.render(<CommentBox />, document.getElementById('root'));

