import { Component, OnInit } from '@angular/core';
import { ButtonsEnum } from 'src/app/enums/general-enums';
import { ButtonModel } from '../../models/buttons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  buttons: ButtonModel[] = [ { label: 'SIDEBAR.BUTTONS.HOME', active: false}, { label: 'SIDEBAR.BUTTONS.FAVORITES', active: false} ]

  ngOnInit(): void {
    this.buttons[0].active = true;
  }

  checkButton(event: any){
    if(event.label === ButtonsEnum.HOME){
      this.buttons[0].active = true;
      this.buttons[1].active = false;
    }else{
      this.buttons[1].active = true;
      this.buttons[0].active = false;
    }
  }

}
