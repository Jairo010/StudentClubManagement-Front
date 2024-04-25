import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-registrationprojects',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule,NavbarComponent],
  templateUrl: './registrationprojects.component.html',
  styleUrl: './registrationprojects.component.css'
})
export class RegistrationprojectsComponent {
  members = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Alice Johnson'},
    { name: 'Bob Davis' },
  ];
}

