import { Injectable } from '@angular/core';
import { UserService } from 'src/app/login/services/user.service';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable()
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private userService: UserService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.userService.getUser(username,password);
  }

  logout() {
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);

    return of({});
  }
}
