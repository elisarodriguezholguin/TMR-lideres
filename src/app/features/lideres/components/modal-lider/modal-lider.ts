import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ModalConfirmacion } from '../modal-confirmacion/modal-confirmacion';

@Component({
  selector: 'app-modal-lider',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule, ModalConfirmacion],
  templateUrl: './modal-lider.html',
  styleUrl: './modal-lider.scss'
})
export class ModalLider {
  @Input() mostrarFormulario = false;
  @Input() modoEdicion = false;
  @Output() cerrarModal = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<void>();

  enviado = false;

  form = {
    tipo: '',
    persona: '',
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '',
    estado: ''
  };

  cerrar() {
    this.enviado = false;
    this.form = { tipo: '', persona: '', nombres: '', apellidos: '', correo: '', telefono: '', estado: '' };
    this.cerrarModal.emit();
  }

  formularioValido(): boolean {
    if (this.modoEdicion) {
      return !!this.form.tipo && !!this.form.persona &&
             !!this.form.nombres && !!this.form.apellidos &&
             !!this.form.correo && !!this.form.telefono &&
             !!this.form.estado;
    }
    return !!this.form.tipo && !!this.form.persona &&
           !!this.form.nombres && !!this.form.apellidos &&
           !!this.form.correo && !!this.form.telefono;
  }

  onGuardar() {
    this.enviado = true;

    if (!this.formularioValido()) return;

    this.guardar.emit();
    this.cerrarModal.emit();
    this.form = { tipo: '', persona: '', nombres: '', apellidos: '', correo: '', telefono: '', estado: '' };
    this.enviado = false;
  }
}