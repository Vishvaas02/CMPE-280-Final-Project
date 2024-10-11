import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'; 
import { DialogComponent } from '../dialog/dialog.component';
import { platform } from 'os';


@Component({
  selector: 'app-choose-content',
  templateUrl: './choose-content.component.html',
  styleUrl: './choose-content.component.scss'
})
export class ChooseContentComponent {

  constructor(private router: Router, public dialog: MatDialog) { }

  redirect(path: any) {
    this.router.navigate([path]);
  }

  openDialog(selectedOption: any) {
    console.log(selectedOption);
    let dialogRef = this.dialog.open(DialogComponent, { 
      panelClass: 'custom-dialog-container',
      width: '50%', 
      height: '241px',
      data: selectedOption
    }); 
  
    dialogRef.afterClosed().subscribe(result => { 
      // this.animal = result; 
    }); 
  }

}
