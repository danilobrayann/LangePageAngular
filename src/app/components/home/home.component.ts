import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common'
import { BntPrimaryComponent } from '../bnt-primary/bnt-primary.component';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    BntPrimaryComponent,
    NewsletterFormComponent
  
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
