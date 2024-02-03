import { Component } from '@angular/core';
import { ExamenService } from '../service/examen.service';
import { Project } from '../models/project';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-listproject',
  templateUrl: './listproject.component.html',
  styleUrls: ['./listproject.component.css']
})
export class ListprojectComponent {
  projects!:Project[];
  constructor(private s:ExamenService,private router:Router){}
  ngOnInit(){
    this.s.fetchprojects().subscribe(
      (data)=>{
        console.log(data)
        this.projects=data;
      }
    )
  }
goToAddTask(id:any){
  this.router.navigate(['addtask/',id])
}
}
