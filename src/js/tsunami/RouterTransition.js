export default class RouterTransition {
    constructor(router, name, onComplete) {
        this.router = router;
        this.name = name;
        this.onComplete = onComplete;
        this.branches = [];
        this.tasks = [];
    }

    start() {
        if (this.branches.length > 0) {
            let nextTask;
            for (let i = this.tasks.length - 1; i > -1; i--) {
                const task = this.tasks[i];
                task.router = this.router;
                task.branches = this.branches.slice();
                if (nextTask) {
                    task.onComplete = nextTask.start.bind(nextTask);
                } else {
                    task.onComplete = this.tasksComplete.bind(this);
                }
                nextTask = task;
            }
            const firstTask = this.tasks[0];
            firstTask.start();
        } else {
            this.tasksComplete();
        }
    }

    tasksComplete() {
        this.onComplete();
    }
}