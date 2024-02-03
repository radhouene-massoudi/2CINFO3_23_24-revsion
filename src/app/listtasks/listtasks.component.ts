import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../service/examen.service';

@Component({
  selector: 'app-listtasks',
  templateUrl: './listtasks.component.html',
  styleUrls: ['./listtasks.component.css']
})
export class ListtasksComponent implements OnInit{
  tasks:any;
constructor(private s:ExamenService){}
ngOnInit(){
this.s.fetchTasks().subscribe(
  (d)=>{
    //console.log(d);
this.tasks=d;
  }
);
}
}
