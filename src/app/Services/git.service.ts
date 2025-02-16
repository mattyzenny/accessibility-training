import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  private apiUrl = environment.apiUrl;  // apiUrl from environment config

  constructor(private http: HttpClient) {}

  getLastUpdated(filePath: string, startLine: number, endLine: number): Observable<{ updated: string }> {
    const params = new HttpParams()
      .set('filePath', filePath)
      .set('startLine', startLine.toString())
      .set('endLine', endLine.toString());

    return this.http.get<{ updated: string }>(`${this.apiUrl}`, { params });
  }
}