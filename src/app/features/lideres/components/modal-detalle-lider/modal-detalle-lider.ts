import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-detalle-lider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-detalle-lider.html',
  styleUrl: './modal-detalle-lider.scss'
})
export class ModalDetalleLider {

  @Input() lider: any;

}