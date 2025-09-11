# ECommerce Project Folder Structure

This document outlines the complete folder structure for the ecommerce project, organized for both customer-facing and admin interfaces.

## Project Overview

The project uses Next.js 14 with App Router and follows a modular architecture with clear separation between customer and admin interfaces.

## Root Structure

```
ecommerce-project/
├── docs/                          # Project documentation
├── memory-bank/                   # Project context and documentation
├── public/                        # Static assets
├── src/                          # Source code
├── supabase/                     # Database migrations and config
├── .env.example                  # Environment variables template
├── package.json                  # Dependencies and scripts
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## Source Code Structure (`src/`)

### App Router (`src/app/`)

#### Customer Interface - Route Group `(customer)`
```
src/app/(customer)/
├── account/                      # User account management
├── cart/                        # Shopping cart
├── categories/                  # Product categories
├── checkout/                    # Checkout process
├── orders/                      # Order history
└── products/                    # Product listings and details
```

#### Admin Interface - Route Group `(admin)`
```
src/app/(admin)/
├── analytics/                   # Business analytics and reports
├── customers/                   # Customer management
├── dashboard/                   # Admin dashboard overview
├── orders/                      # Order management
├── products/                    # Product management
└── settings/                    # Admin settings
```

#### API Routes (`src/app/api/`)
```
src/app/api/
├── analytics/                   # Analytics endpoints
├── auth/                        # Authentication endpoints
├── customers/                   # Customer management endpoints
├── orders/                      # Order management endpoints
├── payments/                    # Payment processing endpoints
└── products/                    # Product management endpoints
```

### Components (`src/components/`)

#### Customer Components
```
src/components/customer/
├── account/                     # Account-related components
├── cart/                        # Cart components
├── checkout/                    # Checkout flow components
└── product/                     # Product display components
```

#### Admin Components
```
src/components/admin/
├── analytics/                   # Analytics dashboards and charts
├── customers/                   # Customer management components
├── dashboard/                   # Dashboard widgets
├── orders/                      # Order management components
├── products/                    # Product management components
└── settings/                    # Settings components
```

#### Shared Components
```
src/components/shared/
├── charts/                      # Reusable chart components
├── forms/                       # Form components
├── modals/                      # Modal dialogs
└── tables/                      # Data table components
```

#### UI Components
```
src/components/ui/
├── button/                      # Button variants
├── card/                        # Card components
├── dialog/                      # Dialog components
├── dropdown/                    # Dropdown menus
├── input/                       # Input field components
└── toast/                       # Toast notifications
```

#### Layout & Navigation
```
src/components/
├── layouts/                     # Layout components
├── navigation/                  # Navigation components
└── sections/                    # Page section components
```

### Hooks (`src/hooks/`)

Custom React hooks organized by functionality:

```
src/hooks/
├── auth/                        # Authentication hooks
├── cart/                        # Shopping cart hooks
├── orders/                      # Order management hooks
├── payments/                    # Payment processing hooks
└── products/                    # Product data hooks
```

### Library (`src/lib/`)

Utility functions and configurations:

```
src/lib/
├── api/                         # API client functions
├── auth/                        # Authentication utilities
├── constants/                   # Application constants
├── formatters/                  # Data formatting utilities
├── payment/                     # Payment processing utilities
├── supabase/                    # Supabase client configuration
├── utils/                       # General utility functions
└── validations/                 # Form validation schemas
```

### State Management (`src/store/`)

Zustand stores organized by domain:

```
src/store/
├── auth/                        # Authentication state
├── cart/                        # Shopping cart state
├── orders/                      # Order state
└── products/                    # Product state
```

### Types (`src/types/`)

TypeScript type definitions:

```
src/types/
├── auth/                        # Authentication types
├── customers/                   # Customer types
├── orders/                      # Order types
├── payments/                    # Payment types
└── products/                    # Product types
```

### Styles (`src/styles/`)

Global styles and CSS:

```
src/styles/
└── globals.css                  # Global CSS with Tailwind
```

## Key Features of This Structure

### 1. Route Groups
- `(customer)` - Customer-facing pages
- `(admin)` - Admin dashboard pages
- Both groups share the same domain but have different layouts

### 2. Component Organization
- **Domain-based**: Components grouped by business domain
- **Reusability**: Shared components for common functionality
- **UI Library**: Consistent UI components following design system

### 3. State Management
- **Zustand stores**: Lightweight state management
- **Domain separation**: Each store handles specific business logic
- **Type safety**: Full TypeScript support

### 4. API Structure
- **RESTful endpoints**: Organized by resource
- **Authentication**: Secure API routes
- **Validation**: Input validation and error handling

### 5. Development Benefits
- **Scalability**: Easy to add new features
- **Maintainability**: Clear separation of concerns
- **Type Safety**: Full TypeScript coverage
- **Performance**: Optimized for Next.js App Router

## Next Steps for Development

1. **Design Implementation**: Once designs are ready, implement components in respective folders
2. **API Development**: Build API endpoints following the established structure
3. **State Management**: Implement Zustand stores for data management
4. **Authentication**: Set up Supabase auth integration
5. **Testing**: Add tests following the same folder structure

This structure provides a solid foundation for building a scalable ecommerce platform with clear separation between customer and admin interfaces.
