import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [CommonModule]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  onToggleComplete(task: Task) {
    this.taskService.toggleTaskCompletion(task.id);
  }

  onDeleteTask(task: Task) {
    this.taskService.deleteTask(task.id);
    this.tasks = this.taskService.getTasks();
  }
}
