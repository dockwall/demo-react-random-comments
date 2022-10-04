import React from "react";
import ReactDOM from 'react-dom/client';
import CommentDetail from "./CommentDetail";


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
