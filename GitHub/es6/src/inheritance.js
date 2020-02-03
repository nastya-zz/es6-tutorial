class Task {
    constructor(title = getDefaultTitle()) {
        this._title = title;
        this.done = false;
        Task.count++;
        console.log('Создание задач');
    }

    get title() {
        return this._title;
    }

    set title(value) {
        return this._title = value;
    }

    static getDefaultTitle() {
        return 'New Task';
    }

    complete() {
        this.done = true;
        console.log(`Здача "${this.title}" выполнена`);
        
    }
}

Task.count = 0;

class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this.parent = parent;
        console.log('Создание подзадачи');

    }

    complete() {
        super.complete();
        console.log(`Подзадача "${this.title}" выполнена`);

    }
}

let task = new Task('Изучить js');
let subTask = new SubTask('Изучить es6', task);

task.complete();
subTask.complete();


console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);


console.log(task);
console.log(subTask);
