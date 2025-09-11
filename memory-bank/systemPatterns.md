# System Patterns

## Architecture Overview
The ecommerce platform follows a modern full-stack architecture with clear separation of concerns:

```
┌─────────────────────────────────────────┐
│              Frontend (Next.js)         │
│  ┌─────────────┐    ┌─────────────────┐ │
│  │  Customer   │    │     Admin       │ │
│  │   Routes    │    │   Dashboard     │ │
│  └─────────────┘    └─────────────────┘ │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│           Supabase Backend              │
│  ┌─────────┐ ┌─────────┐ ┌───────────┐ │
│  │Database │ │  Auth   │ │  Storage  │ │
│  │(Postgres│ │ Service │ │ (Images)  │ │
│  └─────────┘ └─────────┘ └───────────┘ │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│        External Services                │
│  ┌─────────────┐    ┌─────────────────┐ │
│  │   Breeze    │    │   Shiprocket    │ │
│  │  Checkout   │    │   Payments      │ │
│  └─────────────┘    └─────────────────┘ │
└─────────────────────────────────────────┘
```

## Key Technical Decisions

### Frontend Architecture
- **Next.js 14 App Router**: Modern routing with server components
- **Route Groups**: Separate customer `(customer)` and admin routes
- **Server Components**: Default for better performance
- **Client Components**: Only when interactivity is needed
- **TypeScript**: Full type safety across the application

### State Management Strategy
- **Zustand**: Lightweight state management for cart and user state
- **React Query**: Server state management and caching
- **Local Storage**: Persistent cart across sessions
- **Supabase Realtime**: Live updates for admin dashboard

### Authentication Pattern
- **Supabase Auth**: Built-in authentication service
- **Row Level Security**: Database-level access control
- **Role-Based Access**: Customer vs Admin user types
- **JWT Tokens**: Secure session management
- **Middleware Protection**: Route-level authentication

## Design Patterns in Use

### Component Architecture
```typescript
// Atomic Design Pattern
components/
├── ui/              // Atoms (Button, Input, Card)
├── customer/        // Customer-specific molecules/organisms
├── admin/           // Admin-specific molecules/organisms
└── shared/          // Shared molecules/organisms
```

### Data Flow Pattern
```typescript
// Unidirectional Data Flow
User Action → Component → Hook → API Call → Supabase → Database
                ↑                                        ↓
            UI Update ← State Update ← Response ← Query Result
```

### Error Handling Pattern
```typescript
// Consistent Error Boundaries
try {
  const result = await supabaseOperation()
  return { data: result, error: null }
} catch (error) {
  return { data: null, error: error.message }
}
```

## Component Relationships

### Customer Flow Components
```
HomePage → ProductGrid → ProductCard → ProductDetails
    ↓           ↓            ↓             ↓
CartProvider → CartItem → CartSummary → Checkout
```

### Admin Flow Components
```
AdminLayout → Sidebar → Dashboard → StatsCard
     ↓           ↓          ↓          ↓
AdminAuth → Navigation → DataTable → Modal
```

## Critical Implementation Paths

### Product Management Flow
1. **Admin adds product** → Supabase insert → Real-time update
2. **Customer views product** → Server-side fetch → Static generation
3. **Inventory update** → Database trigger → Admin notification

### Order Processing Flow
1. **Customer checkout** → Payment gateway → Order creation
2. **Payment confirmation** → Webhook → Order status update
3. **Admin fulfillment** → Status change → Customer notification

### Authentication Flow
1. **User login** → Supabase Auth → JWT token
2. **Route access** → Middleware check → Role verification
3. **API calls** → Token validation → RLS enforcement

## Database Design Patterns

### Core Tables Structure
```sql
users (Supabase Auth)
├── customers (extends users)
└── admins (extends users)

products
├── categories
├── inventory
└── product_images

orders
├── order_items
├── payments
└── shipping_details
```

### Security Patterns
- **Row Level Security**: Users can only access their own data
- **Admin Policies**: Admins can access all data within their store
- **API Security**: All routes protected with authentication
- **Input Validation**: Zod schemas for all forms

## Performance Patterns

### Optimization Strategies
- **Static Generation**: Product pages pre-rendered
- **Image Optimization**: Next.js Image component with Supabase Storage
- **Code Splitting**: Route-based and component-based splitting
- **Caching**: React Query for API responses
- **Lazy Loading**: Components and images loaded on demand

### Real-time Updates
- **Supabase Realtime**: Live inventory and order updates
- **Optimistic Updates**: Immediate UI feedback
- **Background Sync**: Offline-first cart management

## Deployment Patterns

### Hostinger Deployment
- **Static Export**: Next.js static build for hosting
- **Environment Variables**: Secure configuration management
- **Asset Optimization**: Compressed images and minified code
- **CDN Integration**: Fast global content delivery

This architecture ensures scalability, maintainability, and performance while keeping the codebase organized and developer-friendly.
