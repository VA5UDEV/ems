import React from "react";
import TaskStatus from "./TaskStatus";
import ProfileContent from "./ProfileContent";
import TaskList from "./TaskLists";

const MainContent = ({ data }) => {

  console.log(data);
  
  return (
    <div className="m-8 flex flex-col gap-6">
      <ProfileContent data={data} />
      <TaskStatus data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default MainContent;
