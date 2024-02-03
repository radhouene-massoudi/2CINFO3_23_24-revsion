import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http:HttpClient) { }
  fetchprojects():Observable<Project[]> {
    return this.http.get<Project[]>("http://localhost:3000/project")
  }

  addTask(data:any){
    return this.http.post("http://localhost:3000/task",data)
  }
  findProjectById(id:any){
    return this.http.get("http://localhost:3000/project/"+id)
  }
  fetchTasks(){
    return this.http.get("http://localhost:3000/task")
  }
}
