class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        this._done = false;
        Task.count ++;
    }

    get done() {
        return this._done === true ? "Completed" : "Not compliteted";
    }

    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;
        } else {
            console.error('Error! Specify value true or false!');
        }
    }

    complete() {
        this.done  = true;
        console.log(`Task "${this.title}" completed`);
    }

    static getDefaultTitle() {
        return 'задача';
    }
}

Task.count = 0;

let task1 = new Task();

console.log(task1.done, task1._done);
task1.complete();
console.log(task1.done, task1._done);



