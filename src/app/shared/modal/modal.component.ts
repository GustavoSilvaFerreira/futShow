import { FormAddPlayerComponent } from './../forms/form-add-player/form-add-player.component';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { throwError } from 'rxjs';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() id = '';
  @Input() messageText? = '';
  @Input() nameConfirm = 'Sim';
  @Input() nameClose = 'Não';
  @Input() title = '';
  @Input() modalType = 'message';

  @Output() emitOk = new EventEmitter();
  @Output() emitClose = new EventEmitter();

  @ViewChild(FormAddPlayerComponent, {static: false}) formAdd: FormAddPlayerComponent;

  /*
    Add no botão:
    // o data-target é o id do modal
    data-toggle="modal" data-target="#removerTarefa"
  */

  constructor() { }

  ngOnInit() {
  }

  isValid() {
    switch(this.modalType) {
      case 'addPlayer':
        return this.formAdd !== undefined ? this.formAdd.formAddPlayer.valid : false;
      default:
        return true;
    }
  }

  close() {
    this.emitClose.emit();
    this.formAdd.formAddPlayer.reset();
  }

  ok() {
    try {
      switch(this.modalType) {
        case 'addPlayer':
          if(this.formAdd.formAddPlayer.invalid) {
            throw "Preencha os campos!";
          }
          this.emitOk.emit(this.formAdd.formAddPlayer);
          break;
        default:
          this.emitOk.emit();
      }
    } catch (error) {
      console.error(error);
    }
  }

}
