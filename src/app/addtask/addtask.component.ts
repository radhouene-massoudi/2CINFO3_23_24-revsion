import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ExamenService } from '../service/examen.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../models/task';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {
task:any;
  constructor(
    private s:ExamenService
    ,private ac:ActivatedRoute){

  }
fg=new FormGroup(
 {
  title:new FormControl(''),
  dated:new FormControl(new Date()),
  Datef:new FormControl(new Date()),
 } 
)
addTask(){
  this.s.findProjectById(this.ac.snapshot.params['idofproject']).subscribe(
(d)=>{
  //console.log(d)
  this.task=this.fg.value;
  this.task.project=d;
  this.task.status=false;
this.s.addTask(this.task).subscribe(
  ()=>{
    alert("added")
  }
)
}
  )

}
status(){
  if (this.fg.get('dated')?.value > this.fg.get('Datef')?.value){
return true
  }
  return false;
}
}
