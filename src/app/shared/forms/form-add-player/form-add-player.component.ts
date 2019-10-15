import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add-player',
  templateUrl: './form-add-player.component.html',
  styleUrls: ['./form-add-player.component.css']
})
export class FormAddPlayerComponent implements OnInit {

  formAddPlayer: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formAddPlayer = new FormGroup({
      name: new FormControl('', {validators: [Validators.required]}),
      position: new FormControl('', {validators: [Validators.required]})
    });
  }

}
