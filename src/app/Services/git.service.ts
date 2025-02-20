import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getLastUpdated(filePath: string): Observable<any> {
    const params = new HttpParams().set('filePath', filePath);

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      tap(response => {
        if (!environment.production) {
          console.log('API RESPONSE:', response);
        }
      })
    );
  }
}