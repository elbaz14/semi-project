import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name = '';
  email = '';
  phone = '';
  subject = '';
  message = '';
  submitted = false;

  subjects = ['General', 'Reservation', 'Complaint', 'Catering'];

  onSubmit() {
    this.submitted = true;
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.subject = '';
    this.message = '';
    this.submitted = false;
  }
}
