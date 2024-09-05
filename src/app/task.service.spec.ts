import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { Task } from './task.model';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return an empty task list initially', () => {
    const tasks = service.getTasks();
    expect(tasks.length).toBe(0);
  });
  it('should add a task', () => {
    const newTask: Task = {
      id: 1, title: 'Test Task', completed: false,
      length: function (length: any): unknown {
        throw new Error('Function not implemented.');
      }
    };
    service.addTask(newTask);

    const tasks = service.getTasks();
    expect(tasks.length).toBe(1);
    expect(tasks[0]).toEqual(newTask);
  });
  it('should delete a task by id', () => {
    const task1: Task = {
      id: 1, title: 'Task 1', completed: false,
      length: function (length: any): unknown {
        throw new Error('Function not implemented.');
      }
    };
    const task2: Task = {
      id: 2, title: 'Task 2', completed: true,
      length: function (length: any): unknown {
        throw new Error('Function not implemented.');
      }
    };

    service.addTask(task1);
    service.addTask(task2);
    service.deleteTask(1);

    const tasks = service.getTasks();
    expect(tasks.length).toBe(1);
    expect(tasks[0].id).toBe(2);
  });
  it('should toggle task completion', () => {
    const task: Task = {
      id: 1, title: 'Test Task', completed: false,
      length: function (length: any): unknown {
        throw new Error('Function not implemented.');
      }
    };
    service.addTask(task);

    service.toggleTaskCompletion(1);

    const tasks = service.getTasks();
    expect(tasks[0].completed).toBe(true);

    service.toggleTaskCompletion(1);
    expect(tasks[0].completed).toBe(false);
  });


});
