import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss',
  host: { '(document:keydown.escape)': 'cerrar()' }
})
export class Galeria {
  fotos = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'];
  seleccionada = signal<string | null>(null);

  abrir(f: string) { this.seleccionada.set(f); }
  cerrar() { this.seleccionada.set(null); }
}
