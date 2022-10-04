import React from "react";
import ReactDOM from 'react-dom/client';
import CommentDetail from "./CommentDetail";


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail authorFirstName="Sam" />
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
            <CommentDetail authorFirstName="Tailor" />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
