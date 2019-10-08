import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div>
      <div className='ui container comments'>
        <CommentDetail
          author='Sam'
          timeAgo='Today at 4:45PM'
          blogText='Awesome'
          avatar={faker.image.avatar()}
        />
        <CommentDetail
          author='Alex'
          timeAgo='Today at 3:00PM'
          blogText='Great post'
          avatar={faker.image.avatar()}
        />
        <CommentDetail
          author='Jane'
          timeAgo='Yesterday at 6:45PM'
          blogText='WWWOOOOWWWW'
          avatar={faker.image.avatar()}
        />
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
