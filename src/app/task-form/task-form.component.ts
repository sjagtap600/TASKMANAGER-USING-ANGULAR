import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  imports: [FormsModule, CommonModule] 
})
export class TaskFormComponent {
  title: string = '';

  constructor(private taskService: TaskService) {}

  onSubmit() {
    if (this.title) {
      const newTask: Task = {
        id: Date.now(),
        title: this.title,
        completed: false,
        length: function (length: any): unknown {
          throw new Error('Function not implemented.');
        }
      };
      
      this.taskService.addTask(newTask);
      this.title = '';  
    }
  }
}

