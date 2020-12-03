import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StepService } from '../../services/step.service';

@Component({
  selector: 'app-scan-indications',
  templateUrl: './scan-indications.component.html',
  styleUrls: ['./scan-indications.component.scss']
})
export class ScanIndicationsComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public stepService: StepService
  ) { }

  ngOnInit(): void {
  }

  initScann() {
    console.log('init scan');
    this.stepService.setStep('prev-dni');
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}
