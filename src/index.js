// TaskRunner.js

class TaskRunner {
  constructor() {
    this.tasks = [];
  }

  addTask(name, fn) {
    this.tasks.push({ name, fn });
  }

  runTask(name) {
    const task = this.tasks.find(task => task.name === name);
    if (task) {
      console.log(`Running task: ${task.name}`);
      task.fn();
    } else {
      console.error(`Task '${name}' not found.`);
    }
  }

  runAllTasks() {
    console.log('Running all tasks:');
    this.tasks.forEach(task => {
      console.log(`- ${task.name}`);
      task.fn();
    });
  }
}

// Export the TaskRunner class
module.exports = TaskRunner;