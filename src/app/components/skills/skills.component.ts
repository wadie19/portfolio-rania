import { Component } from '@angular/core';

export interface Skill {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills: Skill[] = [
    {
      icon: 'brush',
      title: 'Pose Gel & Acrylique',
      description: 'Extension, renforcement et gainage pour une tenue impeccable et un fini naturel. Maîtrise des chablons et capsules.'
    },
    {
      icon: 'flare',
      title: 'Vernis Semi-Permanent',
      description: 'Application précise, brillance éclatante et résistance durable jusqu’à 4 semaines pour mains et pieds.'
    },
    {
      icon: 'palette',
      title: 'Nail Art Artistique',
      description: 'Créations sur-mesure : motifs floraux, géométriques, marbre, dégradés, stamping et décors en relief.'
    },
    {
      icon: 'workspace_premium',
      title: 'Gestion d’Atelier',
      description: 'Hygiène et stérilisation rigoureuses, gestion des stocks, accueil et fidélisation d’une clientèle régulière.'
    },
    {
      icon: 'medical_services',
      title: 'Soins des Ongles',
      description: 'Manucure, pédicure, soin des cuticules, traitement des ongles fragiles et conseils personnalisés.'
    },
    {
      icon: 'style',
      title: 'Tendances & Création',
      description: 'Veille constante sur les tendances internationales, adaptation aux demandes des clientes et créations originales.'
    }
  ];

  // ✅ Optimisation Angular (important pour performance)
  trackBySkillTitle(index: number, skill: Skill): string {
    return skill.title;
  }
}