import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos)
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient p-[5px] w-full h-full rounded-xl">
        {/* <div className="bg-white text-2xl font-bold p-5 text-center rounded-2xl">
            <p>There is no task pending</p>
        </div> */}
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-4">
          { todos.map((item) => (
            <TodoCard key={item.id}  {...item}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
