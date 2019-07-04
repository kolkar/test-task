import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  getTaskList() {

    const body = {
      itemGroup: "e-Label",
      taskStatus: "To Do",
      dbForUserInfo: "HF_CBTbyB_V2SQL",
      itemType: "",
      TabSelected: "MyToDo",
      requestStatus: "Myself",
      userID: 258628,
      organID: -1,
      archive: false
    };

    return this.httpClient.post('https://e-label.org.uk/CBT_API/api/eLabel/GetTaskList', body)
      .pipe(
        map((response: any) => response)
      );
  }
}
