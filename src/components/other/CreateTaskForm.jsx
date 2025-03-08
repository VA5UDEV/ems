import React, { useState } from "react";

const CreateTaskForm = (props) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
    assignTo: "",
    priority: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("employees")) || [];

    data.forEach(function (employee) {
      if (employee.firstName === task.assignTo) {
        employee.tasks.push({
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          title: task.title,
          description: task.description,
          taskDate: task.date,
          priority: task.priority,
        });
        employee.taskCount.newTask++;
        console.log(employee.tasks);
      }
    });

    localStorage.setItem("employees", JSON.stringify(data));

    setTask({
      title: "",
      description: "",
      date: "",
      assignTo: "",
      priority: "",
    });
  };

  return (
    <div className="p-6 mx-auto bg-gray-900 text-white shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Create Task</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="col-span-1 flex flex-col gap-2">
          <label className="text-sm">Task Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="p-2 bg-gray-800 rounded-md"
          />
          <label className="text-sm">Assign To</label>
          <input
            type="text"
            name="assignTo"
            value={task.assignTo}
            onChange={handleChange}
            className="p-2 bg-gray-800 rounded-md"
          />
        </div>

        {/* Middle Column */}
        <div className="col-span-1 flex flex-col gap-2">
          <label className="text-sm">Date</label>
          <input
            type="date"
            name="date"
            value={task.date}
            onChange={handleChange}
            className="p-2 bg-gray-800 rounded-md"
          />
          <label className="text-sm">Priority</label>
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="p-2 bg-gray-800 rounded-md"
          >
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {/* Right Column */}
        <div className="col-span-1 flex flex-col gap-2">
          <label className="text-sm">Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            className="p-2 bg-gray-800 rounded-md h-29"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-3 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-[#00d4ff] text-black py-2 px-6 rounded-md"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTaskForm;
