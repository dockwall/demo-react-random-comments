import React from "react";
import ReactDOM from 'react-dom/client';
import CommentDetail from "./CommentDetail";


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail authorFirstName="Sam" timeAgo="Yesterday at 3:00AM" />
            <CommentDetail commentText="Hello everyone!" />
            <CommentDetail />
            <CommentDetail />
            <CommentDetail authorFirstName="Tailor" timeAgo="Today at 2:30PM" />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
