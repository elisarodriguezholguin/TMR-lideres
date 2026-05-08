import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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