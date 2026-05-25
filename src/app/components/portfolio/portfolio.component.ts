import { Component, OnInit } from '@angular/core';

export type PortfolioMediaType = 'image' | 'video';

export interface PortfolioItem {
  id: number;
  type: PortfolioMediaType;
  src: string;
  fallback?: string;
  category: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  activeFilter = 'Tous';

  filters: string[] = [
    'Tous',
    'Couleur Unie',
    'French',
    'Baby Boomer',
    'Nail Art',
    'Déco 3D',
    'Vidéos'
  ];

  items: PortfolioItem[] = [
    {
      id: 1,
      type: 'image',
      src: 'assets/portfolio/photos/photo-1.jfif',
      fallback: 'assets/portfolio/fallback.jpg',
      category: 'Nail Art',
      title: 'Nail art rose floral',
      description: 'Pose féminine avec détail floral, finition brillante et rendu délicat.'
    },
    {
      id: 2,
      type: 'image',
      src: 'assets/portfolio/photos/photo-2.jfif',
      fallback: 'assets/portfolio/fallback.jpg',
      category: 'Couleur Unie',
      title: 'Pose blanche naturelle',
      description: 'Pose simple et lumineuse avec une finition propre et élégante.'
    },
    {
      id: 3,
      type: 'image',
      src: 'assets/portfolio/photos/photo-3.jfif',
      fallback: 'assets/portfolio/fallback.jpg',
      category: 'Couleur Unie',
      title: 'Pose bordeaux élégante',
      description: 'Couleur intense et brillante pour un style chic et affirmé.'
    },
    {
      id: 4,
      type: 'image',
      src: 'assets/portfolio/photos/photo-4.jfif',
      fallback: 'assets/portfolio/fallback.jpg',
      category: 'Couleur Unie',
      title: 'Pose nacrée lumineuse',
      description: 'Rendu doux et brillant avec une couleur claire très raffinée.'
    },
    {
      id: 5,
      type: 'image',
      src: 'assets/portfolio/photos/photo-5.jfif',
      fallback: 'assets/portfolio/fallback.jpg',
      category: 'French',
      title: 'French blanche élégante',
      description: 'French fine et harmonieuse pour un rendu naturel et soigné.'
    },
    {
      id: 6,
      type: 'image',
      src: 'assets/portfolio/photos/photo-6.jfif',
      fallback: 'assets/portfolio/fallback.jpg',
      category: 'Déco 3D',
      title: 'French avec nœuds 3D',
      description: 'Pose décorée avec nœuds roses en relief et finition glossy.'
    },
    {
      id: 7,
      type: 'image',
      src: 'assets/portfolio/photos/photo-7.jfif',
      fallback: 'assets/portfolio/fallback.jpg',
      category: 'Couleur Unie',
      title: 'Pose jaune pastel',
      description: 'Couleur pastel lumineuse avec une forme douce et naturelle.'
    },
    {
      id: 8,
      type: 'image',
      src: 'assets/portfolio/photos/photo-8.jfif',
      fallback: 'assets/portfolio/fallback.jpg',
      category: 'Nail Art',
      title: 'Nail art vert marbré',
      description: 'Design marbré vert avec détails dorés pour un rendu original.'
    },
    {
      id: 9,
      type: 'image',
      src: 'assets/portfolio/photos/photo-9.jfif',
      fallback: 'assets/portfolio/fallback.jpg',
      category: 'Couleur Unie',
      title: 'Rouge glossy intense',
      description: 'Pose rouge brillante, élégante et intemporelle.'
    },
    {
      id: 10,
      type: 'image',
      src: 'assets/portfolio/photos/photo-10.jfif',
      fallback: 'assets/portfolio/fallback.jpg',
      category: 'French',
      title: 'French carrée fine',
      description: 'French carrée avec une ligne blanche nette et un rendu naturel.'
    },
    {
      id: 11,
      type: 'image',
      src: 'assets/portfolio/photos/photo-11.jfif',
      fallback: 'assets/portfolio/fallback.jpg',
      category: 'Baby Boomer',
      title: 'Baby boomer naturel',
      description: 'Dégradé doux entre le rose et le blanc pour un effet élégant.'
    },
    {
      id: 12,
      type: 'image',
      src: 'assets/portfolio/photos/photo-12.jfif',
      fallback: 'assets/portfolio/fallback.jpg',
      category: 'Nail Art',
      title: 'French animal print',
      description: 'French revisitée avec détails noirs façon animal print.'
    },
    {
      id: 13,
      type: 'image',
      src: 'assets/portfolio/photos/photo-13.jfif',
      fallback: 'assets/portfolio/fallback.jpg',
      category: 'Couleur Unie',
      title: 'Bordeaux brillant',
      description: 'Pose bordeaux profonde avec une finition glossy très élégante.'
    },
    {
      id: 14,
      type: 'image',
      src: 'assets/portfolio/photos/photo-14.jfif',
      fallback: 'assets/portfolio/fallback.jpg',
      category: 'Déco 3D',
      title: 'Pose rose avec nœud 3D',
      description: 'Pose rose douce avec décoration en relief pour un style girly.'
    },
    {
      id: 15,
      type: 'image',
      src: 'assets/portfolio/photos/photo-15.jfif',
      fallback: 'assets/portfolio/fallback.jpg',
      category: 'Déco 3D',
      title: 'French rose avec strass',
      description: 'French rose décorée avec strass et nœuds pour un rendu glamour.'
    },
    {
      id: 16,
      type: 'image',
      src: 'assets/portfolio/photos/photo-16.jfif',
      fallback: 'assets/portfolio/fallback.jpg',
      category: 'French',
      title: 'French carrée classique',
      description: 'Pose carrée avec french blanche, propre et intemporelle.'
    },
    {
      id: 17,
      type: 'image',
      src: 'assets/portfolio/photos/photo-17.jfif',
      fallback: 'assets/portfolio/fallback.jpg',
      category: 'Couleur Unie',
      title: 'Pose crème amande',
      description: 'Couleur crème douce sur forme amande pour un rendu élégant.'
    },
    {
      id: 18,
      type: 'image',
      src: 'assets/portfolio/photos/photo-18.jfif',
      fallback: 'assets/portfolio/fallback.jpg',
      category: 'Couleur Unie',
      title: 'Pose jaune carrée',
      description: 'Pose carrée en jaune pastel avec finition brillante.'
    },
    {
      id: 19,
      type: 'image',
      src: 'assets/portfolio/photos/photo-19.jfif',
      fallback: 'assets/portfolio/fallback.jpg',
      category: 'Couleur Unie',
      title: 'Pose rose nude',
      description: 'Pose nude rosée, naturelle et discrète avec une belle brillance.'
    },
    {
      id: 20,
      type: 'image',
      src: 'assets/portfolio/photos/photo-20.jfif',
      fallback: 'assets/portfolio/fallback.jpg',
      category: 'Nail Art',
      title: 'Pose rose avec détail floral',
      description: 'Pose rose douce avec une décoration florale colorée.'
    },
    {
      id: 21,
      type: 'video',
      src: 'assets/portfolio/videos/video-1-muted.mp4',
      category: 'Couleur Unie',
      title: 'Pose blanche en vidéo',
      description: 'Présentation vidéo d’une pose blanche simple, propre et brillante.'
    },
    {
      id: 22,
      type: 'video',
      src: 'assets/portfolio/videos/video-2-muted.mp4',
      category: 'Nail Art',
      title: 'Nail art coloré en vidéo',
      description: 'Aperçu vidéo d’une pose décorée avec détails colorés et finition lumineuse.'
    },
    {
      id: 23,
      type: 'video',
      src: 'assets/portfolio/videos/video-3-muted.mp4',
      category: 'Couleur Unie',
      title: 'Pose rose nude en vidéo',
      description: 'Vidéo d’une pose nude rosée avec une forme féminine et élégante.'
    },
    {
      id: 24,
      type: 'video',
      src: 'assets/portfolio/videos/video-4-muted.mp4',
      category: 'Nail Art',
      title: 'Nail art marron brillant',
      description: 'Présentation vidéo d’une pose foncée décorée avec un rendu glamour.'
    },
    {
      id: 25,
      type: 'video',
      src: 'assets/portfolio/videos/video-5-muted.mp4',
      category: 'Nail Art',
      title: 'Nail art doré',
      description: 'Vidéo d’une pose décorée avec touches dorées et finition raffinée.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  get filteredItems(): PortfolioItem[] {
    if (this.activeFilter === 'Tous') {
      return this.items;
    }

    if (this.activeFilter === 'Vidéos') {
      return this.items.filter(item => item.type === 'video');
    }

    return this.items.filter(item => item.category === this.activeFilter);
  }

  setFilter(f: string): void {
    this.activeFilter = f;
  }

  trackByFilter(index: number, filter: string): string {
    return filter;
  }

  trackByPortfolioItem(index: number, item: PortfolioItem): number {
    return item.id;
  }

  onImageError(event: Event, fallback?: string): void {
    const img = event.target as HTMLImageElement;

    if (fallback) {
      img.src = fallback;
    }
  }

}