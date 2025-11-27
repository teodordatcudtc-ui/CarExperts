import { Metadata } from 'next'
import GalleryGrid from '@/components/GalleryGrid'

export const metadata: Metadata = {
  title: 'Galerie Proiecte Tuning - Car Experts București',
  description: 'Galerie cu proiecte de tuning realizate de Car Experts. Before/After, modificări performanță, personalizări auto și transformări complete.',
  keywords: 'galerie service auto, proiecte service auto București, before after service auto, reparații auto',
}

export default function GalleryPage() {
  return (
    <div className="pt-24">
      <GalleryGrid />
    </div>
  )
}

