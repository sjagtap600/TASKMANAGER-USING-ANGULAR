import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskFormComponent } from './task-form.component';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';
import { Task } from '../task.model';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;
  let taskServiceSpy: jasmine.SpyObj<TaskService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('TaskService', ['addTask']);

    await TestBed.configureTestingModule({
      imports: [TaskFormComponent, FormsModule],
      providers: [
        { provide: TaskService, useValue: spy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    taskServiceSpy = TestBed.inject(TaskService) as jasmine.SpyObj<TaskService>;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty title initially', () => {
    expect(component.title).toBe('');
  });

  it('should not call addTask when title is empty', () => {
    component.title = '';
    component.onSubmit();
    expect(taskServiceSpy.addTask).not.toHaveBeenCalled();
  });
});
