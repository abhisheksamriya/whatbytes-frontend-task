# WhatBytes Frontend Intern Assignment

An e-commerce web application built as part of the WhatBytes Frontend Developer Intern assignment.

## Live Demo
- **Live URL:** [https://whatbytes-frontend-task.vercel.app/]
- **GitHub Repository:** [https://github.com/abhisheksamriya/whatbytes-frontend-task]

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **State Management:** Zustand (with Cart Persistence)
- **Icons:** Lucide React
- **Notifications:** React Hot Toast

## Features Implemented
1. **Home Page (/):** 
   - Product listing grid (Responsive: 3 cols on desktop, 2 on tablet, 1 on mobile).
   - Sidebar filters for Categories and Price range.
   - Real-time search filtering.
   - URL-based search parameters syncing (`?category=...&price=...`).
2. **Product Detail Page (/product/[id]):**
   - Dynamic routing for individual products.
   - Detailed view with image, rating, description, and quantity selector.
3. **Cart Page (/cart):**
   - View added items, update quantities, remove items, and view total price summary.
   - Global state persistence.