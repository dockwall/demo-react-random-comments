import React from "react";
import { faker } from '@faker-js/faker';

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.authorFirstName || faker.name.firstName()}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo || "Today at 7:00PM"}</span>
                </div>
                <div className="text">
                    {props.commentText || faker.hacker.phrase()}
                </div>
            </div>
        </div>
    )
};

export default CommentDetail;
