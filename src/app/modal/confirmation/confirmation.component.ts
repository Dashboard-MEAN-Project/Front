import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css',
})
export class ConfirmationComponent {
  @ViewChild('confirmationModal') confirmationModal!: ElementRef;
  @Output() confirmed: EventEmitter<any> = new EventEmitter();
  @Output() cancelled: EventEmitter<any> = new EventEmitter();

  constructor() {}

  openConfirmation() {
    const modal = this.confirmationModal.nativeElement as HTMLElement;
    modal.classList.add('d-block');
  }

  confirm() {
    this.confirmed.emit();
    this.closeConfirmation();
  }

  cancel() {
    this.cancelled.emit();
    this.closeConfirmation();
  }

  private closeConfirmation() {
    const modal = this.confirmationModal.nativeElement as HTMLElement;
    modal.classList.remove('d-block');
  }
}
