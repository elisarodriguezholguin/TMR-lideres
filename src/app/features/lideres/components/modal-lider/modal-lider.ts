import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal-lider',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './modal-lider.html',
  styleUrl: './modal-lider.scss'
})
export class ModalLider {
  @Input() mostrarFormulario = false;
  @Input() modoEdicion = false;
  @Output() cerrarModal = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<void>();

  cerrar() {
    this.cerrarModal.emit();
  }

  onGuardar() {
    this.guardar.emit();
    this.cerrarModal.emit();
  }
}