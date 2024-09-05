import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from './task.service';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, TaskFormComponent, TaskListComponent] 
})
export class AppComponent {
  constructor(private taskService: TaskService) {}
}
