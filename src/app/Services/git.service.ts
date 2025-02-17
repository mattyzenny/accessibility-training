import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GitService {
  private apiUrl = environment.apiUrl;  // apiUrl from environment config

  constructor(private http: HttpClient) {}
  
  getLastUpdated(filePath: string, startLine: number, endLine: number): Observable<any> {
    const params = new HttpParams()
      .set('filePath', filePath)
      .set('startLine', startLine.toString())
      .set('endLine', endLine.toString());
  
    return this.http.get<any>(`${this.apiUrl}`, { params }).pipe(
      map(response => {
        console.log('Full API Response:', response); // Add this to inspect the full response
        // Check if the `updated` field is available in the response
        return {
          updated: response.updated || 'Unknown',  // Directly access `updated` field from response
          term: response.term || 'Unknown Term',    // If available, otherwise use 'Unknown Term'
        };
      })
    );
  }
};