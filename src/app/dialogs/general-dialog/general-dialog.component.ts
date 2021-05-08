import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-general-dialog',
  templateUrl: './general-dialog.component.html',
  styleUrls: ['./general-dialog.component.scss']
})
export class GeneralDialogComponent implements OnInit {
  public onOk = new EventEmitter();
  public onCancel = new EventEmitter();
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<GeneralDialogComponent>) { }

  ngOnInit() {
  }

  public renunt() {
    this.dialogRef.close();
    this.onCancel.emit();
    }

public da() {
    this.dialog.closeAll();
    this.onOk.emit();
}

}
