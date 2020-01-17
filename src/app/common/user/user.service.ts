import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {from, Observable, ObservedValueOf} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
// @ts-ignore
import {UserEntity} from './user.entity';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  public $user$: Observable<any>;
  url = 'http://127.0.0.1:3000/users';

  constructor(private http: HttpClient) {}

  // @ts-ignore
  public getUser(): Observable<UserEntity> {
    if (!this.$user$) {
      this.$user$ = this.http.get(this.url).pipe(
        map(
          (response) => {
            return response; // response.data
          },
        ),
        shareReplay(),
      );
    }
    return this.$user$;
  }

  public isAdmin(): Observable<boolean> {
    return this.getUser().pipe(
      map((data) => {
        // tslint:disable-next-line:triple-equals
        return (data.role == 'admin');
      }),
    );
  }

  public isIntervenant(): Observable<boolean> {
    return this.getUser().pipe(
      map((data) => {
        // tslint:disable-next-line:triple-equals
        return (data.role == 'student');
      }),
    );
  }
}
