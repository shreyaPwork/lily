# Tech Context

## Technologies Used

### Frontend Stack
- **Next.js 14**: React framework with App Router for modern web development
- **React 18**: Latest React with concurrent features and server components
- **TypeScript**: Static typing for better development experience and fewer bugs
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Beautiful, customizable SVG icons

### Backend & Database
- **Supabase**: Backend-as-a-Service providing database, auth, and real-time features
- **PostgreSQL**: Robust relational database with advanced features
- **Row Level Security**: Database-level security policies
- **Supabase Auth**: Built-in authentication with JWT tokens
- **Supabase Storage**: File storage for product images

### State Management
- **Zustand**: Lightweight state management for client-side state
- **TanStack Query**: Server state management, caching, and synchronization
- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation

### UI & Styling
- **Shadcn/ui**: High-quality, accessible React components
- **Class Variance Authority**: Type-safe component variants
- **Clsx & Tailwind Merge**: Conditional and merged CSS classes
- **Recharts**: Composable charting library for analytics

### Payment Integration
- **Breeze Checkout**: Indian payment gateway integration
- **Shiprocket**: Shipping and payment processing platform

## Development Setup

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn package manager
- Git for version control
- VS Code (recommended) with extensions:
  - TypeScript and JavaScript Language Features
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux/React-Native snippets
  - Prettier - Code formatter

### Environment Configuration
```bash
# Required environment variables
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
BREEZE_API_KEY=your_breeze_api_key
SHIPROCKET_API_KEY=your_shiprocket_api_key
```

### Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## Technical Constraints

### Performance Requirements
- **First Contentful Paint**: < 1.5 seconds
- **Largest Contentful Paint**: < 2.5 seconds
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5 seconds

### Browser Support
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **No IE Support**: Focus on modern web standards

### Scalability Constraints
- **Initial Scale**: 10-100 products
- **Concurrent Users**: 100-500 simultaneous users
- **Database**: Supabase free tier initially (500MB, 2GB bandwidth)
- **Storage**: 1GB for product images initially

## Dependencies

### Core Dependencies
```json
{
  "@supabase/supabase-js": "^2.57.4",
  "next": "15.5.3",
  "react": "^18",
  "typescript": "^5",
  "tailwindcss": "^3.4.1",
  "zustand": "^5.0.1",
  "@tanstack/react-query": "^5.87.4",
  "react-hook-form": "^7.62.0",
  "zod": "^4.1.7",
  "lucide-react": "^0.543.0",
  "recharts": "^3.2.0"
}
```

### Development Dependencies
```json
{
  "@types/node": "^20",
  "@types/react": "^18",
  "@types/react-dom": "^18",
  "eslint": "^8",
  "eslint-config-next": "15.5.3",
  "postcss": "^8",
  "autoprefixer": "^10.0.1"
}
```

## Tool Usage Patterns

### Code Organization
- **Barrel Exports**: Use index.ts files for clean imports
- **Absolute Imports**: Use @ alias for src directory
- **Component Co-location**: Keep related files together
- **Type Definitions**: Separate types directory for shared types

### Development Workflow
1. **Feature Branch**: Create branch for each feature
2. **Type-First**: Define TypeScript interfaces first
3. **Component-Driven**: Build UI components in isolation
4. **Test Integration**: Test with real Supabase data
5. **Performance Check**: Monitor Core Web Vitals

### Database Workflow
1. **Schema Design**: Plan database structure first
2. **Migration Files**: Use Supabase migrations for changes
3. **RLS Policies**: Define security policies early
4. **Seed Data**: Create sample data for development

### Deployment Workflow
1. **Build Optimization**: Next.js static export for Hostinger
2. **Environment Setup**: Configure production variables
3. **Asset Optimization**: Compress images and minify code
4. **Performance Testing**: Verify Core Web Vitals in production

## Integration Patterns

### Supabase Integration
- **Client-Side**: Use supabase-js for browser operations
- **Server-Side**: Use service role for admin operations
- **Real-time**: Subscribe to database changes
- **Storage**: Upload and serve product images

### Payment Integration
- **Webhook Handling**: Process payment confirmations
- **Error Handling**: Graceful payment failure recovery
- **Security**: Validate webhook signatures
- **Logging**: Track payment events for debugging

### Hostinger Deployment
- **Static Build**: Generate static files for hosting
- **Environment Variables**: Secure configuration management
- **Asset Serving**: Optimize for CDN delivery
- **Routing**: Handle SPA routing with .htaccess

This technical foundation provides a solid base for building a scalable, maintainable ecommerce platform.
