import React from "react";
import ReactDOM from 'react-dom/client';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";


const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <CommentDetail authorFirstName="Sam" timeAgo="Yesterday at 3:00AM" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail commentText="Hello everyone!" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail authorFirstName="Tailor" timeAgo="Today at 2:30PM" />
            </ApprovalCard>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
