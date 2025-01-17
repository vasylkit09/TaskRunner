# Task Runner

The Task Runner is a simple JavaScript class that allows you to define tasks with names and corresponding functions, and then run individual tasks or all tasks at once.

## Installation

You can install the Task Runner via npm:

```bash
npm install task-runner
```

## Usage

First, include the `TaskRunner` class in your project:

```javascript
const TaskRunner = require('task-runner');
```

Then, create a new instance of `TaskRunner` and add tasks using the `addTask` method:

```javascript
const taskRunner = new TaskRunner();

taskRunner.addTask('task1', () => {
  console.log('Task 1 executed.');
});

taskRunner.addTask('task2', () => {
  console.log('Task 2 executed.');
});
```

You can then run individual tasks using the `runTask` method:

```javascript
taskRunner.runTask('task1');
```

Or run all tasks at once using the `runAllTasks` method:

```javascript
taskRunner.runAllTasks();
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.#   T a s k R u n n e r  
 