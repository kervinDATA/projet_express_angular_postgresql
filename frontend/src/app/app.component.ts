import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  // Importer CommonModule pour *ngFor
import { RestaurationService } from './services/restauration.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Kervin Connection BDD';
  restaurations: any[] = [];

  // Injecter le service dans le constructeur
  constructor(private restaurationService: RestaurationService) {}

  // Utiliser le service dans ngOnInit pour récupérer les données
  ngOnInit() {
    this.restaurationService.getRestaurations().subscribe(data => {
      console.log('Données reçues:', data);  // Ajouter un console.log ici
      this.restaurations = data;
    });
  }
}
