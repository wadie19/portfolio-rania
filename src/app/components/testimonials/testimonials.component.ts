import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from 'src/environments/environment';

export interface Testimonial {
  text: string;
  name: string;
  role: string;
  initials: string;
  color: string;
}

interface TestimonialFormData {
  name: string;
  role: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5];

  isSending = false;
  successMessage = '';
  errorMessage = '';

  formData: TestimonialFormData = {
    name: '',
    role: '',
    email: '',
    message: ''
  };

  testimonials: Testimonial[] = [
    {
      text: 'Un travail précis et soigné, mes ongles n\'ont jamais été aussi beaux ! Elle est à l\'écoute et s\'adapte parfaitement à ce qu\'on veut.',
      name: 'Amira B.',
      role: 'Cliente régulière',
      initials: 'AB',
      color: 'bg-primary-fixed text-primary'
    },
    {
      text: 'Je viens tous les mois depuis 2 ans. Son atelier est impeccable, l\'hygiène est irréprochable et ses nail arts sont vraiment artistiques.',
      name: 'Sana M.',
      role: 'Cliente fidèle',
      initials: 'SM',
      color: 'bg-tertiary-fixed text-tertiary'
    },
    {
      text: 'Elle m\'a fait des ongles pour mon mariage et ils étaient parfaits. Tout le monde m\'a demandé qui avait fait ce travail !',
      name: 'Rania K.',
      role: 'Occasion spéciale',
      initials: 'RK',
      color: 'bg-secondary-container text-secondary'
    }
  ];

  ngOnInit(): void {}

  trackByTestimonialName(index: number, testimonial: Testimonial): string {
    return testimonial.name;
  }

  trackByStar(index: number, star: number): number {
    return star;
  }

  sendTestimonial(): void {
    if (
      this.formData.name.trim().length < 2 ||
      this.formData.name.trim().length > 50 ||
      this.formData.role.trim().length < 3 ||
      this.formData.role.trim().length > 40 ||
      this.formData.message.trim().length < 10 ||
      this.formData.message.trim().length > 500
    ) {
      this.errorMessage = 'Veuillez corriger les champs du formulaire.';
      return;
    }
    this.isSending = true;
    this.successMessage = '';
    this.errorMessage = '';

    const templateParams = {
      user_name: this.formData.name,
      user_role: this.formData.role || 'Cliente',
      user_email: this.formData.email,
      message: this.formData.message,
      time: new Date().toLocaleString('fr-FR')
    };

    emailjs.send(
      environment.emailjs.serviceId,
      environment.emailjs.templateId,
      templateParams,
      { publicKey: environment.emailjs.publicKey }
    ).then(
      () => {
        this.successMessage = 'Merci ! Votre témoignage a bien été envoyé.';
        this.formData = {
          name: '',
          role: '',
          email: '',
          message: ''
        };
        this.isSending = false;
      },
      (error) => {
        console.error('EmailJS error:', error);
        this.errorMessage = 'Erreur lors de l’envoi. Veuillez réessayer.';
        this.isSending = false;
      }
    );
  }
}