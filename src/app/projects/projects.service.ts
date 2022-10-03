import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Projects } from './projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  apiLink: string;

  constructor(
    private http: HttpClient
  ) {
    this.apiLink = environment.baseURL;
  }

  public getTitle(): Observable<Projects[]> {
    return this.http.get<Projects[]>(`${this.apiLink}/projectTitle`)
  }

  public addTitle(form: Projects): Observable<Projects> {
    return this.http.post<Projects>(`${this.apiLink}/projectTitle`, form)
  }

  // public getMentorById(id: string): Observable<Projects> {
  //   return this.http.get<Projects>(`${this.apiLink}/projectTitle/${id}`);
  // }

  // public editMentor(form: any, id: string): any {
  //   return this.http.put<any>(`${this.apiLink}/projectTitle/${id}`, form)
  // }

  // public deleteMentor(id: number): any {
  //   return this.http.delete<any>(`${this.apiLink}/projectTitle/${id}`)
  // }
}
