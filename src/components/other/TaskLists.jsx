import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TaskList = ({ data }) => {

  return (
    <div>
      <h2 className="text-2xl font-semibold mt-2">Task List</h2>
      <Swiper spaceBetween={10} slidesPerView={2.3} className="w-full mt-4">
        {data.tasks?.map((task, index) => (
          <SwiperSlide
            key={index}
            className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-center relative"
          >
            {/* Priority Tag with Dynamic Colors */}
            <div
              className={`absolute top-2 left-2 px-2 py-1 rounded text-xs ${
                task.priority === "High"
                  ? "bg-red-500"
                  : task.priority === "Medium"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              } text-white`}
            >
              {task.priority}
            </div>

            {/* Task Date */}
            <div className="absolute top-2 right-2 text-gray-400 text-xs">
              {task.taskDate}
            </div>

            {/* Task Status Label */}
            <div
              className={`absolute top-10 left-2 px-2 py-1 rounded text-xs font-bold ${
                task.active
                  ? "bg-blue-500"
                  : task.newTask
                  ? "bg-green-500"
                  : task.completed
                  ? "bg-gray-500"
                  : task.failed
                  ? "bg-red-500"
                  : ""
              } text-white`}
            >
              {task.active
                ? "Active"
                : task.newTask
                ? "New"
                : task.completed
                ? "Completed"
                : task.failed
                ? "Failed"
                : ""}
            </div>

            {/* Task Title & Description */}
            <h3 className="text-lg font-bold mt-6">{task.taskTitle}</h3>
            <p className="text-gray-300 text-sm mt-2">{task.taskDescription}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TaskList;
