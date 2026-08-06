export interface Product {
  id: string;
  title: string;
  price: number;
  category: 'Electronics' | 'Clothing' | 'Home';
  image: string;
  rating?: number;
  description?: string;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Running Shoes',
    price: 99,
    category: 'Clothing',
    image: '/shop1.webp',
    rating: 4.5,
    description: 'High-performance running shoes designed for maximum comfort and durability during long runs.'
  },
  {
    id: '2',
    title: 'Wireless Headphones',
    price: 149,
    category: 'Electronics',
    image: '/shop2.webp',
    rating: 4.7,
    description: 'Crystal-clear sound quality with active noise cancellation and long battery life.'
  },
  {
    id: '3',
    title: 'Backpack',
    price: 129,
    category: 'Home',
   image: '/shop3.webp',
    rating: 4.2,
    description: 'Spacious and stylish daily backpack with dedicated compartments for a laptop and accessories.'
  },
  {
    id: '4',
    title: 'Smartwatch',
    price: 249,
    category: 'Electronics',
image: '/shop4.webp',
    rating: 4.6,
    description: 'Track your fitness, heart rate, and notifications seamlessly on your wrist.'
  },
  {
    id: '5',
    title: 'Sunglasses',
    price: 149,
    category: 'Clothing',
image: '/shop5.webp',
    rating: 4.3,
    description: 'UV-protected classic sunglasses to elevate your everyday summer look.'
  },
  {
    id: '6',
    title: 'Digital Camera',
    price: 499,
    category: 'Electronics',
image: '/shop6.webp',
    rating: 4.8,
    description: 'Capture stunning high-resolution photos and videos with professional clarity.'
  },
  {
    id: '7',
    title: 'T-shirt',
    price: 29,
    category: 'Clothing',
image: '/shop7.webp',
    rating: 4.0,
    description: 'Comfortable cotton casual t-shirt suitable for daily wear.'
  },
  {
    id: '8',
    title: 'Smartphone',
    price: 699,
    category: 'Electronics',
image: '/shop8.webp',
    rating: 4.9,
    description: 'Next-generation smartphone with an advanced camera system, blazing-fast processor, and vibrant display.'
  }
];