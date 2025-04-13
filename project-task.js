/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

const todos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
  ];
  
  // ============================================
  // 🔍 Tasks
  // ============================================
  
  /*
  🔹 Task 1: Filter Incomplete Tasks
  
  Step-by-Step:
  1. Use the `filter()` method on the todos array.
  2. Use an anonymous function as the callback.
  3. Return only the tasks that are not completed.
  */
// I used .filter() with an anonymous function to return !todo.completed which creates a new array containing only the tasks that are not yet marked as completed.

  const incompleteTasks = todos.filter(function(todo) {
    return !todo.completed;
  });
  
  /*
  🔹 Task 2: Sort Tasks by Priority
  
  Step-by-Step:
  1. Use the `sort()` method on the todos array.
  2. Use an anonymous function as the comparison function.
  3. Sort tasks in ascending order of priority (1 = highest).
  */
 // I used .sort() with an anonymous comparison function to return a.priority - b.priority to arrange the tasks in ascending order with the highest priority (1) appearing first.

  const sortedByPriority = [...todos].sort(function(a, b) {
    return a.priority - b.priority;
  });
  
  /*
  🔹 Task 3: Mark All Tasks as Completed
  
  Step-by-Step:
  1. Use the `map()` method to return a new array.
  2. Use an anonymous function to modify each object.
  3. Change the `completed` property to `true` for every task.
  */
 // I used .map() with an anonymous function that returns a new object for each task, copying all properties but it sets completed to true so the result is a new array where every task is marked as completed.

  const allCompletedTasks = todos.map(function(todo) {
    return { ...todo, completed: true };
  });
  
    /*
  🔹 Task 4: Combine Filters
  
  Step-by-Step:
  1. First, filter the todos to get only incomplete tasks.
  2. Then, sort the filtered results by priority using `sort()`.
  3. Use method chaining to perform both steps together.
  */
  // I used method chaining with .filter() and .sort() in an anonymous function chain to first select only incomplete tasks and then arrange them by ascending priority.
  
  const sortedIncompleteTasks = todos
  .filter(function(todo) {
    return !todo.completed;
  })
  .sort(function(a, b) {
    return a.priority - b.priority;
  });

  // ============================================
  // 🧪 Console Test Your Work
  // ============================================
  
  // console.log("Incomplete Tasks:", ...);
  // console.log("Sorted by Priority:", ...);
  // console.log("All Tasks Completed:", ...);
  // console.log("Sorted Incomplete Tasks:", ...);
  // Here's Kevin testing his code la la la
console.log("Incomplete Tasks:", incompleteTasks);
console.log("Sorted by Priority:", sortedByPriority);
console.log("All Tasks Completed:", allCompletedTasks);
console.log("Sorted Incomplete Tasks:", sortedIncompleteTasks);