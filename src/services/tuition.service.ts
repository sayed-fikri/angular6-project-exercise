import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subject} from '../app/tuition/subject.model';
import {Staff} from '../app/tuition/staff.model';
import {Instructor} from '../app/tuition/instructor-model';
import {Student} from '../app/tuition/student.model';
import {StudentSession} from '../app/tuition/studentSession.model';
import {Posts} from '../app/tuition/post.model';

import {Todos} from '../app/tuition/todos/todos.model';
import {Post} from '../app/tuition/jason-backend-model';



@Injectable()
export class TuitionService {

  constructor(private http: HttpClient) {
  }

  findSubjects(): Observable<Subject[]> {
    console.log('This is inside findSubjects');
    return this.http.get<Subject[]>('data/subjects.json');
  }

  findSubject(id: number): Observable<Subject> {
    console.log('This is inside findSubject');
    return this.http.get<Subject>('data/subject.json');
  }

  findStaffs(): Observable<Staff[]> {
    console.log('This is inside findStaffs');
    console.log('Get data from JSON file');
    return this.http.get<Staff[]>('data/staffs.json');

  }

  findStaff(id:number): Observable<Staff> {
    console.log('This is inside findStaff');
    return this.http.get<Staff>('data/staff.json');
  }

  findInstructors(): Observable<Instructor[]> {
    console.log('This is inside findInstructors');
    return this.http.get<Instructor[]>('data/instructors.json');
  }

  findInstructorsbyId(id: number): Observable<Instructor> {
    console.log('This is inside findInstructor');
    return this.http.get<Instructor>('data/instructor.json');

  }

  findStudents(): Observable<Student[]> {
    console.log('This is inside findStudents');
    return this.http.get<Student[]>('data/students.json');
  }

  findStudent(): Observable<Student> {
    console.log('This is inside findStudent');
    return this.http.get<Student>('data/student.json');
  }

  findStudentSession(): Observable<StudentSession> {
    console.log('This is inside findStudentSession');
    return this.http.get<StudentSession>('data/studentSession.json');
  }

  findStudentSessions(): Observable<StudentSession[]> {
    console.log('This is inside findStudentSession');
    return this.http.get<StudentSession[]>('data/studentSessions.json');
  }
  findPosts(): Observable<Posts[]> {
    console.log('This is inside Post');
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }

  findPosted(id:number): Observable<Posts> {
    console.log('This is inside Post');
    return this.http.get<Posts>('https://jsonplaceholder.typicode.com/posts/'+ id);
  }




  findTodos():Observable<Todos[]>{
    return this.http.get<Todos[]>('https://jsonplaceholder.typicode.com/todos');
  }

  findTodosById(id:number):Observable<Todos>{
    return this.http.get<Todos>('https://jsonplaceholder.typicode.com/todos/' + id);
  }



}
