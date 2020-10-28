import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { TokenService } from '../core/authentication/token.service';
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { }

  card(tenantId):Observable<any> {
    return this.http.get('machines?tenant_id='+tenantId)
  }
  vendor(tenantId):Observable<any>{
    return this.http.get('tenants?tenant_id='+tenantId)
  }
}
