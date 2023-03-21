import Card from "./Card";

export default function Column({
  title,
  columnTasks,
  id,
  getColumnClass,
  setTasks,
}) {
  return (
    <div className={`h-full min-h-screen w-1/4 rounded border-[1px] p-4`}>
      <h2
        className={`mr-2 mb-4 rounded px-4 py-1.5 text-sm font-medium uppercase text-white ${getColumnClass(
          title
        )}`}
      >
        {title}
      </h2>
      {columnTasks.map((task, index) => (
        <Card
          // key={task.id}
          key={task.taskId}
          taskId={task._id}
          id={id}
          description={task.description}
          title={task.title}
          status={task.status}
          index={index}
          setTasks={setTasks}
          priority={task.priority}
        />
      ))}
    </div>
  );
}
