# Active Context

## Current Work Focus
Setting up the foundational structure for the ecommerce platform with both customer-facing website and admin dashboard in a unified Next.js project.

## Recent Changes
- ✅ Created Next.js 14 project with TypeScript and Tailwind CSS
- ✅ Installed all required dependencies (Supabase, Zustand, React Query, etc.)
- ✅ Set up complete folder structure for organized development
- ✅ Created comprehensive memory-bank documentation
- 🔄 Currently setting up Supabase configuration and database schema

## Next Steps
1. **Supabase Setup**: Create configuration files and database schema
2. **Environment Configuration**: Set up environment variables template
3. **Base Layouts**: Create customer and admin layout components
4. **UI Components**: Build foundational UI components with Shadcn/ui
5. **Authentication Structure**: Implement auth flows for customers and admins
6. **API Routes**: Set up Next.js API routes for backend operations

## Active Decisions and Considerations

### Architecture Decisions
- **Unified Codebase**: Single Next.js project for both customer and admin interfaces
- **Route Groups**: Using `(customer)` and `admin` route organization
- **Supabase Backend**: Chosen over custom backend for faster development
- **Static Export**: Planning for Hostinger deployment compatibility

### Current Implementation Strategy
- **Foundation First**: Setting up solid project structure before feature development
- **Type Safety**: Implementing TypeScript throughout for better DX
- **Component Library**: Using Shadcn/ui for consistent, accessible components
- **State Management**: Zustand for client state, React Query for server state

## Important Patterns and Preferences

### Code Organization
```typescript
// Preferred import structure
import { ComponentName } from '@/components/ui'
import { useCustomHook } from '@/hooks'
import { TypeDefinition } from '@/types'
```

### Component Structure
```typescript
// Preferred component pattern
interface ComponentProps {
  // Props definition
}

export function ComponentName({ ...props }: ComponentProps) {
  // Component logic
  return (
    // JSX
  )
}
```

### Database Naming
- **Tables**: snake_case (products, order_items, user_profiles)
- **Columns**: snake_case (created_at, updated_at, product_id)
- **Policies**: descriptive names (customers_can_view_own_orders)

## Learnings and Project Insights

### Technical Insights
- **Next.js 14 App Router**: Provides excellent developer experience with server components
- **Supabase Integration**: Simplifies backend development significantly
- **TypeScript Benefits**: Catches errors early and improves code quality
- **Tailwind CSS**: Enables rapid UI development with consistent design

### Project Management Insights
- **Memory Bank System**: Excellent for maintaining context across development sessions
- **Structured Documentation**: Helps maintain clear project vision and goals
- **Incremental Development**: Building foundation first prevents technical debt

### User Experience Considerations
- **Admin Dashboard**: Must be intuitive for non-technical users
- **Customer Interface**: Should prioritize speed and mobile experience
- **Payment Integration**: Local payment gateways crucial for Indian market
- **Performance**: Hostinger deployment requires optimization considerations

## Current Challenges
1. **Hostinger Compatibility**: Ensuring static export works with dynamic features
2. **Payment Integration**: Implementing Breeze and Shiprocket APIs
3. **Real-time Features**: Balancing real-time updates with performance
4. **Mobile Optimization**: Ensuring excellent mobile experience

## Development Environment
- **Node.js**: Version 18+ for optimal Next.js performance
- **Package Manager**: Using npm for consistency
- **IDE**: VS Code with TypeScript and Tailwind extensions
- **Version Control**: Git with feature branch workflow

## Immediate Priorities
1. Complete Supabase database schema design
2. Set up environment variables and configuration
3. Create base UI components and layouts
4. Implement authentication flows
5. Build initial product and admin interfaces

This active context will be updated as development progresses to maintain clear focus and direction.
