import { Component } from '@angular/core';
import { BntPrimaryComponent } from '../bnt-primary/bnt-primary.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [
    BntPrimaryComponent,
  ReactiveFormsModule
  ],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {

}
