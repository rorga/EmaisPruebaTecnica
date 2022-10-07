import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonsEnum } from 'src/app/enums/general-enums';
import { ButtonModel } from '../../models/buttons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private _router: Router) { }

  buttons: ButtonModel[] = [ { label: 'SIDEBAR.BUTTONS.HOME', active: false}, { label: 'SIDEBAR.BUTTONS.FAVORITES', active: false} ]

  ngOnInit(): void {
    this.buttons[0].active = true;
  }

  checkButton(event: any){
    if(event.label === ButtonsEnum.HOME){
      this.buttons[0].active = true;
      this.buttons[1].active = false;
      this.navigateToHome();
    }else{
      this.buttons[1].active = true;
      this.buttons[0].active = false;
      this.navigateToFavorites();
    }
  }

  navigateToFavorites(){
    this._router.navigate(['favorites'])
  }

  navigateToHome(){
    this._router.navigate([''])
  }

}
