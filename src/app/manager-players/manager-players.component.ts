import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-players',
  templateUrl: './manager-players.component.html',
  styleUrls: ['./manager-players.component.css']
})
export class ManagerPlayersComponent implements OnInit {

  playerRemove: any;

  constructor() { }

  ngOnInit() {
  }

  addPlayer(event: FormGroup) {
    console.log('ok');
    console.log(event.value);
    // event.reset();
  }

  modalPlayerRemove(player: any) {
    this.playerRemove = player;
  }

  clearForm() {
    console.log('clear');

  }

}
