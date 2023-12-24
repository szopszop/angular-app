import { Component } from '@angular/core';
import {Szymek} from "../shared/interfaces/szymek.interface";

@Component({
  selector: 'app-szymek',
  templateUrl: './szymek.component.html',
  styleUrls: ['./szymek.component.css']
})

export class SzymekComponent {

  szymki: Szymek[] = [];

  addSzymka(name: string, surname: string) {
    this.szymki.push({name: name, surname: surname, okay: true})
  }

  protected readonly Math = Math;

  changeSzymek(szymek: Szymek) {
    szymek.okay = !szymek.okay;
  }
}
