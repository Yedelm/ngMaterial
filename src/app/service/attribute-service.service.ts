import { Injectable } from '@angular/core';
import { caseAttributes } from '../model/caseAttributesModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { elementModel } from '../model/elementModel';

import { map } from 'rxjs/operators';

const attributesUrl = 'http://localhost:3000/root';

@Injectable({
  providedIn: 'root'
})
export class AttributeServiceService {

 attributesUrl = 'http://localhost:3000/root';

  private _attributes: BehaviorSubject<caseAttributes[]>;

  private dataStore: {
    attributes: caseAttributes[];
  }

  constructor(private http: HttpClient) {
    this.dataStore = { attributes: [] };
    this._attributes = new BehaviorSubject<caseAttributes[]>([]);
   }

  //  get Attributes(): Observable<caseAttributes[]> {
  //    return this._attributes.asObservable();
  //  }

   getAttributes(): Observable<caseAttributes[]>{
     return this.http.get<caseAttributes[]>(attributesUrl);

   }

   loadAll() {


     return this.http.get<elementModel[]>(attributesUrl)
      .pipe(map(elements => {
        elements.forEach(element => {
          let tempAttribute = new caseAttributes();
          tempAttribute.Attributes = element.Attributes;
          tempAttribute.Documents = element.Documents;
          tempAttribute.RiskScore = element.RiskScore;
          tempAttribute.Value = element.Value;
          tempAttribute.Notes = element.Notes;
          this.dataStore.attributes.push(tempAttribute);
        });
        return this.dataStore.attributes;
      }))
      .subscribe(attributes => {
        this._attributes.next(Object.assign({}, this.dataStore).attributes);
      }, error =>{
        console.log("fail to fetch attributes!");
      })
   }
}
