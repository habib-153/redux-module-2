/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

type TodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority?: string;
};

const TodoContainer = () => {
  //const { todos } = useAppSelector((state) => state.todos)

  const { data: todo, isLoading, isError } = useGetTodosQuery(undefined);
  const todos = todo?.data;
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
          {todos ? (
            todos.map((item: TodoCardProps) => (
              <TodoCard key={item.id} {...item} />
            ))
          ) : (
            <div className="bg-white text-2xl font-bold p-5 text-center rounded-2xl">
              <p>There is no task pending</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
