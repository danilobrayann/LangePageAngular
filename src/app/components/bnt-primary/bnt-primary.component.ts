import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


type BtnVariants = "primary"|"secondary"

@Component({
  selector: 'app-bnt-primary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bnt-primary.component.html',
  styleUrl: './bnt-primary.component.scss'
})
export class BntPrimaryComponent {
@Input ("bnt-text") bntText: string = " ";
@Input() disabled: boolean = false;
@Input() loading: boolean = false;
@Input() variant : BtnVariants = "primary"
@Output ("submit") onSubmit = new EventEmitter();

submit (){
  this.onSubmit.emit();
}
}
