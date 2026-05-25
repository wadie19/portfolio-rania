import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from 'src/environments/environment';

interface ContactFormData {
  name: string;
  email: string;
  salon: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  searchItems: string[] = [
    'CDI',
    'Temps plein',
    'Poste salarié en salon'
  ];

  formData: ContactFormData = {
    name: '',
    email: '',
    salon: '',
    message: ''
  };

  submitted = false;
  isSending = false;
  errorMessage = '';

  ngOnInit(): void {}

  trackBySearchItem(index: number, item: string): string {
    return item;
  }

  sendContactEmail(): void {
    this.isSending = true;
    this.errorMessage = '';

    const templateParams = {
      user_name: this.formData.name,
      user_email: this.formData.email,
      salon_name: this.formData.salon || 'Non renseigné',
      message: this.formData.message,
      time: new Date().toLocaleString('fr-FR')
    };

    emailjs.send(
      environment.emailjs.serviceId,
      environment.emailjs.contactTemplateId,
      templateParams,
      {
        publicKey: environment.emailjs.publicKey
      }
    ).then(
      () => {
        this.submitted = true;
        this.isSending = false;

        this.formData = {
          name: '',
          email: '',
          salon: '',
          message: ''
        };

        setTimeout(() => {
          this.submitted = false;
        }, 4000);
      },
      (error) => {
        console.error('EmailJS error:', error);
        this.errorMessage = 'Erreur lors de l\'envoi. Veuillez réessayer.';
        this.isSending = false;
      }
    );
  }
}