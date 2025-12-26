# Deploying to Netlify

This document explains how to deploy your e-commerce dashboard to Netlify.

## Changes Made for Netlify Deployment

1. **Static Export Configuration**:
   - Updated `next.config.ts` to use `output: "export"` for static site generation
   - Added `trailingSlash: true` for proper routing
   - Set `images: { unoptimized: true }` for static exports
   - Added additional remote image patterns for static exports

2. **Netlify Configuration**:
   - Created `netlify.toml` with proper build settings
   - Configured build command to `pnpm run build`
   - Set publish directory to `out`
   - Added redirects for client-side routing

3. **Server-Side Rendering Fixes**:
   - Removed async/await from layout components that use server-only features
   - Removed cookies dependency from root layout to support static export
   - Converted all data fetching in page components to static data (removed async functions)

4. **Package.json Updates**:
   - Updated start script to use `serve out` for previewing build
   - Added preview script for testing builds locally

## Deployment Steps

### Option 1: Using Netlify CLI (Recommended)

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
netlify deploy --prod
```

### Option 2: Manual Deployment

1. Build the project:
```bash
pnpm run build
```

2. The build output will be in the `out/` directory
3. Upload the contents of the `out/` directory to your hosting provider

### Option 3: Netlify Drop

1. Build your project locally:
```bash
pnpm run build
```

2. Zip the contents of the `out/` directory
3. Drag and drop the zip file to https://app.netlify.com/drop

## Environment Setup on Netlify

If you need to set environment variables on Netlify:

1. Go to your site's dashboard on Netlify
2. Navigate to Site settings > Build & deploy > Environment
3. Add any required environment variables

## Troubleshooting

### Common Issues:

1. **Build fails on Netlify**:
   - Make sure you're using pnpm as your package manager
   - Check that the build command is set to `pnpm run build`
   - Verify that Node.js version is compatible (18.x or higher recommended)

2. **Images not loading**:
   - Verify that all image domains are added to `remotePatterns` in `next.config.ts`
   - For static exports, images should be optimized or set to unoptimized

3. **Routing issues**:
   - The `_redirects` file and netlify.toml should handle client-side routing
   - Make sure trailing slashes are handled properly with `trailingSlash: true`

### Local Testing

To test the build locally before deploying:

```bash
pnpm run preview
```

This will build the project and serve it using the `serve` package on a local server.

## Additional Notes

- The site is now configured for static export, which means it can be deployed to any static hosting service
- All data is currently static (hardcoded) - for dynamic data, you'll need to implement client-side API calls
- The sidebar state persistence using cookies has been removed for static export compatibility