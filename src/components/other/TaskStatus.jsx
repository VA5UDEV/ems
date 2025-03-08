import React from 'react'


const TaskStatus = ({data}) => {
  return (
    <div className="flex flex-row gap-4">
      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-center flex-1">
        <div className="text-3xl font-bold">{data.taskCount.newTask}</div>
        <div>New Task</div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-center flex-1">
        <div className="text-3xl font-bold">{data.taskCount.completed}</div>
        <div>Completed Task</div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-center flex-1">
        <div className="text-3xl font-bold">{data.taskCount.active}</div>
        <div>Accepted Task</div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-center flex-1">
        <div className="text-3xl font-bold">{data.taskCount.failed}</div>
        <div>Failed Task</div>
      </div>
    </div>
  );
}

export default TaskStatus
