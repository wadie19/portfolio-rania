import { Component, OnInit } from '@angular/core';

export interface Experience {
  period: string;
  duration: string;
  title: string;
  role: string;
  location: string;
  description: string;
  highlights: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  experiences: Experience[] = [
    {
      period: '2020 – Aujourd\'hui',
      duration: '5 ans',
      title: 'Mon Atelier Ongles',
      role: 'Fondatrice & Technicienne Ongulaire',
      location: 'Tunisie — Local indépendant créé de zéro',
      description: 'J\'ai ouvert et géré seule mon propre atelier d\'onglerie. De l\'aménagement du local à la fidélisation des clientes, j\'ai développé une activité complète et rentable.',
      highlights: [
        'Création et aménagement du local',
        'Clientèle fidèle de 100+ clientes',
        'Gestion des rendez-vous et stocks',
        'Présence sur les réseaux sociaux'
      ]
    },
    {
      period: '2019 – 2020',
      duration: '1 an',
      title: 'Formation & Perfectionnement',
      role: 'Apprentissage des techniques professionnelles',
      location: 'Tunisie',
      description: 'Formation intensive aux techniques de pose gel, acrylique, vernis semi-permanent et nail art. Perfectionnement continu via des tutoriels et formations en ligne internationales.',
      highlights: [
        'Techniques gel & acrylique',
        'Nail art avancé',
        'Hygiène et stérilisation',
        'Formation continue en ligne'
      ]
    }
  ];

  certifications = [
    { label: 'Pose Gel & Acrylique', icon: 'verified' },
    { label: 'Vernis Semi-Permanent', icon: 'verified' },
    { label: 'Nail Art Avancé', icon: 'verified' },
    { label: 'Hygiène Professionnelle', icon: 'verified' }
  ];

  trackByExperienceTitle(index: number, exp: any): string {
    return exp.title;
  }

  trackByHighlight(index: number, highlight: string): string {
    return highlight;
  }

  trackByCertificationLabel(index: number, cert: any): string {
    return cert.label;
  }

}
