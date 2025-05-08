export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'coffee' | 'food';
}

export interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
  rating: number;
}