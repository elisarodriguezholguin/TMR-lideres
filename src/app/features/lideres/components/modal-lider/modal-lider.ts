import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-lider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-lider.html',
  styleUrl: './modal-lider.scss'
})
export class ModalLider {

  @Input() mostrarFormulario = false;

  @Input() modoEdicion = false;

}