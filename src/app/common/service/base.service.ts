import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class BaseService {

  public httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  public httpOptionsForm = {
    headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
  };

  public httpOptionsDownload = {
    headers: new HttpHeaders({'Content-Type': 'text/csv'})
  };

  constructor() {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * getServerUrl method
   */
  public getPokeAPIEndpoint(): string {
      return 'https://pokeapi.co';
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  public handleError(operation = 'operation', res: HttpErrorResponse): any {

    if (res.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error(`An error occurred on ${operation}:`, res.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${res.status}, ` +
        `body was: ${res.error}`);
    }

    if (res.error.message) {
      return res.error;
    }

    res.error.message = 'Something very bad happened ;( contact the administrator, and show me to him/her.';

    // return an observable with a user-facing error message
    return res.error;
  };
}
