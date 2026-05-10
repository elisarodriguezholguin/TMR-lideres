import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ModalConfirmacion } from '../modal-confirmacion/modal-confirmacion';

@Component({
  selector: 'app-modal-lider',
  standalone: true,
  imports: [CommonModule, MatIconModule, ModalConfirmacion],
  templateUrl: './modal-lider.html',
  styleUrl: './modal-lider.scss'
})
export class ModalLider {
  @Input() mostrarFormulario = false;
  @Input() modoEdicion = false;
  @Output() cerrarModal = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<void>();

  mostrarConfirmacion = false;
  mensajeConfirmacion = '';

  cerrar() {
    this.cerrarModal.emit();
  }

  onGuardar() {
    this.mensajeConfirmacion = this.modoEdicion
      ? 'Los cambios han sido<br>guardados exitosamente'
      : 'El nuevo líder ha sido<br>agregado exitosamente';

    this.guardar.emit();
    this.cerrarModal.emit();
    this.mostrarConfirmacion = true;

    setTimeout(() => {
      this.mostrarConfirmacion = false;
    }, 3000);
  }
}