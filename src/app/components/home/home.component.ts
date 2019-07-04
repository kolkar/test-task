import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { HomeService } from './home.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface ITaskLists {
  TaskListID: number,
  ItemType: string,
  ItemTypeLogo: string,
  ItemID: number,
  TaskTitle: string,
  Organisation: string,
  OrgLog: string,
  SchedulerID: number,
  TaskStatus: string,
  ActionStatus: string,
  Priority: string,
  AssignedByUserID: number,
  Assigned_By: string,
  AssigneeUserID: number,
  Assignee: string,
  Due_Date: string,
  Submitted_Date: string,
  ELabel_RID: string,
  Source: string,
  Date_Created: Date,
  Created_By: number,
  Date_Modified: Date,
  Modified_By: number,
  Submitted_Date_OrderBy: Date,
  Due_Date_OrderBy: Date,
  Date_Created_OrderBy: Date,
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  private unsubscriber: Subject<void> = new Subject<void>();
  displayedColumns: string[] = ['Title', 'Status', 'Due Date', 'Submission Date'];
  dataSource = new MatTableDataSource();

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.getTasksList();
  }

  getTasksList() {
    this.homeService.getTaskList()
      .pipe(
        takeUntil(this.unsubscriber)
      )
      .subscribe(( {TaskList} ) => {
        this.dataSource = new MatTableDataSource(TaskList);
      })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource);
    this.dataSource.data.forEach((data: ITaskLists, i) => this.dataSource.data[i]['indices'] = this.searchIndexes(data.TaskTitle));

  }

  searchIndexes(str) {
    let searchStrLen = this.dataSource.filter.length;
    if (searchStrLen == 0) {
      return [];
    }
    let startIndex = 0, index, indices = [];
    while ((index = str.indexOf(this.dataSource.filter, startIndex)) > -1) {
      indices.push(index);
      startIndex = index + searchStrLen;
    }
    return indices;
  }
}
