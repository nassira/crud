import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogueComponent } from './dialogue/dialogue.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudyoutube';
  constructor(private dialog: MatDialog) {}
  openDialog() {
     this.dialog.open(DialogueComponent,{
   width:'30%'

     }) ;
    
     
    
    } 
  
  }
