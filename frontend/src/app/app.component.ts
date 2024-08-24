import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  // Importer CommonModule pour *ngFor
import { FormsModule } from '@angular/forms';  // Importer FormsModule pour ngModel
import { RestaurationService } from './services/restauration.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Kervin Connection BDD';
  restaurations: any[] = [];
  departement: string = '';  // Variable pour stocker le numéro du département

  // Injecter le service dans le constructeur
  constructor(private restaurationService: RestaurationService) {}

  // Récupérer les données au démarrage (ici vide pour l'instant)
  ngOnInit() {}

  // Méthode pour afficher toute la table
  afficherTable() {
    this.restaurationService.getRestaurations().subscribe(data => {
      this.restaurations = data;
    });
  }

  // Méthode pour afficher les résultats filtrés par département
  afficherParDepartement() {
    if (this.departement) {
      this.restaurationService.getRestaurationsByDepartement(this.departement).subscribe(data => {
        this.restaurations = data;
      });
    }
  }
}
