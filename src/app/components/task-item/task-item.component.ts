import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit{

  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;


  constructor () { 
    this.task = TASKS[0]
  }

  ngOnInit(): void {
    
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }

}
