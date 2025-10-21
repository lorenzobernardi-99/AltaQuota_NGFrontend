import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { BaitaService } from './baita.service';
import { Baita } from './model/baita.model';
import { Observable } from 'rxjs'; // Importa Observable

@Component({
  selector: 'app-root',
  standalone: true,
  // Aggiungi CommonModule per usare *ngFor e | async
  imports: [CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { // Implementa OnInit
  public readonly title = 'AltaQuota Gestionale';

  protected readonly baitaService = Inject(BaitaService);
  // Creiamo un Observable per la lista delle baite
  // Il $ alla fine è una convenzione per gli Observable
  public baite$!: Observable<Baita[]>;

  // Questo metodo viene chiamato all'avvio del componente
  ngOnInit(): void {
    this.baite$ = this.baitaService.getBaite();
  }
}
