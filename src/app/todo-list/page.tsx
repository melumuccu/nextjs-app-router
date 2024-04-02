import TodoList from '@/app/_db/mock/todo-list';
import { revalidatePath } from 'next/cache';
import styles from './_styles/page.module.css';

const todoInstance = new TodoList();

export default async function TodoListPage() {
  const todoList = await todoInstance.getTodoList();

  /**
   * Server Action
   * (練習のため。本来はtodo追加を行うclient componentを作成して当メソッド相当の処理をフロントで行わせるべき。)
   */
  async function createTask(formData: FormData) {
    'use server';
    const title = formData.get('title');
    if (typeof title !== 'string') {
      console.error("todo item's title is not string!");
      return;
    }
    await todoInstance.addTodoItem(title);
    revalidatePath('/todo-list');
  }

  /**
   * Server Action
   */
  async function deleteTask(id: number) {
    'use server';
    await todoInstance.deleteTodoItem(id);
    revalidatePath('/todo-list');
  }

  return (
    <>
      <div className={styles.main}>
        <div>
          <h2>タスク追加</h2>
          <form action={createTask}>
            <input type="text" name="title" />
            <button type="submit">追加</button>
          </form>
        </div>
        <hr />
        <div>
          <h2>タスク一覧</h2>
          <ul className={styles.todoList}>
            {todoList.map(item => (
              <li key={item.id}>
                <form action={deleteTask.bind(null, item.id)}>
                  <button>削除</button>
                </form>
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
