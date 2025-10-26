# Arin Digital Innovations Website

Professional website for Arin Digital Innovations, LLC - An Austin-based AI and Digital Marketing consultancy.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **SEO Optimized**: Comprehensive meta tags, structured data, sitemap, and semantic HTML
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Fast Performance**: Optimized for speed with Next.js static export
- **Contact Form**: Built-in contact form with validation
- **Privacy Policy**: Comprehensive privacy policy page
- **Structured Data**: Schema.org markup for better search engine understanding

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git
- Vercel account (for deployment)
- GitHub account

## 🛠️ Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ArinDig/arindigital.com.git
   cd arindigital.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add Logo Files**
   - Save `logo-transparent.png` to the `/public` directory
   - Save `og-image.png` (Open Graph image) to the `/public` directory
   - Logo should be the transparent background version for best results

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
```

This will create an optimized static export in the `out` directory.

## 🚀 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)

Vercel provides the best hosting experience for Next.js applications with automatic deployments from GitHub.

#### Step 1: Connect GitHub Repository

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your GitHub repository: `https://github.com/ArinDig/arindigital.com`
4. Configure project:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
5. Click "Deploy"

#### Step 2: Configure Custom Domain in Vercel

1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain: `arindigital.com`
3. Add www subdomain: `www.arindigital.com`
4. Vercel will provide DNS records you need to configure

### Option 2: Deploy to GitHub Pages

1. **Update `next.config.js`** (if needed for GitHub Pages):
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: process.env.NODE_ENV === 'production' ? '' : '',
     images: {
       unoptimized: true,
     },
   }
   ```

2. **Build and deploy**:
   ```bash
   npm run build
   ```

3. Push the `out` directory to your `gh-pages` branch

## 🌐 DNS Configuration in Google Workspace

To point your domain to Vercel (or your hosting provider), follow these steps:

### Method 1: Using Vercel DNS Records (Recommended)

1. **Log in to Google Domains** (or Google Workspace Admin Console)
   - Navigate to [domains.google.com](https://domains.google.com)
   - Select your domain: `arindigital.com`

2. **Access DNS Settings**
   - Click on "DNS" in the left sidebar
   - Scroll to "Custom records"

3. **Add A Records** (for apex domain)
   
   After adding the domain in Vercel, you'll get IP addresses. Add these A records:
   
   | Host name | Type | TTL  | Data              |
   |-----------|------|------|-------------------|
   | @         | A    | 3600 | 76.76.21.21       |
   
   (Note: Use the actual IP addresses provided by Vercel)

4. **Add CNAME Record** (for www subdomain)
   
   | Host name | Type  | TTL  | Data                    |
   |-----------|-------|------|-------------------------|
   | www       | CNAME | 3600 | cname.vercel-dns.com    |
   
   (Note: Use the actual CNAME provided by Vercel)

5. **Verify Configuration**
   - DNS changes can take 24-48 hours to propagate
   - You can check status in Vercel dashboard
   - Use [whatsmydns.net](https://www.whatsmydns.net/) to verify propagation

### Important Notes for Google Workspace Email

⚠️ **DO NOT remove your existing MX records!** These are required for your email to work.

Your Google Workspace MX records should remain intact:

| Host name | Type | Priority | TTL  | Data                  |
|-----------|------|----------|------|-----------------------|
| @         | MX   | 1        | 3600 | smtp.google.com       |

(These are examples - keep your actual Google Workspace MX records)

### Method 2: Using Cloudflare (Optional - for advanced users)

If you want additional features like DDoS protection and CDN:

1. Sign up for [Cloudflare](https://cloudflare.com)
2. Add your domain to Cloudflare
3. Update nameservers in Google Domains to Cloudflare's nameservers
4. Configure DNS records in Cloudflare dashboard
5. Enable SSL/TLS in Cloudflare (Full mode)

## 📧 Email Configuration

Your email is hosted through Google Workspace and should continue to work after DNS changes. Make sure you:

1. Keep all MX records intact
2. Keep SPF, DKIM, and DMARC records if they exist
3. Don't modify any records related to Google Workspace

Common Google Workspace DNS records to preserve:
- MX records (priority 1, 5, 10, etc.)
- TXT record for SPF (usually starts with `v=spf1`)
- TXT record for DMARC (`_dmarc` subdomain)
- CNAME records for DKIM (usually like `google._domainkey`)

## 🔧 Environment Variables

If you need to add environment variables (e.g., for contact form API integration):

1. Copy `.env.example` to `.env.local`
2. Add your environment variables
3. In Vercel dashboard, go to Settings → Environment Variables
4. Add the same variables there

## 📝 Content Updates

### Updating Services

Edit `app/services/page.tsx` to modify service offerings.

### Updating Contact Information

Update the following files:
- `components/Footer.tsx` - Footer contact info
- `app/contact/page.tsx` - Contact page details
- `components/StructuredData.tsx` - Structured data for SEO

### Adding Blog Posts (Future Enhancement)

To add a blog in the future:
1. Create `app/blog` directory
2. Add individual blog post pages
3. Update navigation in `components/Navigation.tsx`
4. Update sitemap in `app/sitemap.ts`

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.ts`:
- `adi-navy`: #0d2e4f
- `adi-dark-blue`: #1a4a6b
- `adi-blue`: #3b82c8
- `adi-light-blue`: #5ba3d0
- `adi-sky`: #87c4e0

To change colors, update these values in the Tailwind config.

### Fonts

The site uses Inter font from Google Fonts. To change:
1. Update the import in `app/layout.tsx`
2. Update the font family in `tailwind.config.ts`

## 📊 Analytics (Optional)

To add Google Analytics:

1. Add Google Analytics script to `app/layout.tsx`
2. Or use Vercel Analytics (built-in):
   ```bash
   npm install @vercel/analytics
   ```
   Then add to `app/layout.tsx`:
   ```typescript
   import { Analytics } from '@vercel/analytics/react'
   
   // In return statement:
   <Analytics />
   ```

## 🔍 SEO Checklist

The site is already optimized for SEO, but here are some additional steps:

- [ ] Submit sitemap to Google Search Console: `https://arindigital.com/sitemap.xml`
- [ ] Verify ownership in Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics
- [ ] Set up Google Tag Manager (optional)
- [ ] Create and verify Google Business Profile
- [ ] Add social media meta tags (already included)
- [ ] Monitor Core Web Vitals in Search Console
- [ ] Set up 301 redirects for any old URLs (if applicable)

## 🛡️ Security

- All forms include CSRF protection
- Environment variables are used for sensitive data
- HTTPS is enforced through Vercel
- Regular dependency updates recommended

## 📱 Progressive Web App (Future Enhancement)

To make this a PWA:
1. Add `next-pwa` package
2. Create `manifest.json`
3. Add service worker
4. Update `next.config.js`

## 🤝 Contributing

This is a private repository. For any changes:
1. Create a new branch
2. Make your changes
3. Test locally
4. Push and create a pull request
5. Deploy preview will be created automatically by Vercel

## 📞 Support

For questions or issues:
- Email: contact@arindigital.com
- Visit: [arindigital.com](https://arindigital.com)

## 📄 License

© 2025 Arin Digital Innovations, LLC. All rights reserved.

---

## Quick Command Reference

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linter

# Deployment
git add .
git commit -m "Your commit message"
git push origin main  # Automatically deploys to Vercel
```

## Troubleshooting

### Logo Not Showing
- Ensure `logo-transparent.png` is in the `/public` directory
- Clear browser cache
- Check browser console for errors

### DNS Not Working
- Wait 24-48 hours for propagation
- Verify records in Google Domains DNS settings
- Check Vercel dashboard for verification status
- Use `dig arindigital.com` to check DNS records

### Email Stopped Working
- Verify MX records are still present in DNS
- Check Google Workspace admin console
- Contact Google Workspace support if needed

### Build Errors
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Check for TypeScript errors: `npm run lint`

---

**Built with ❤️ in Austin, TX**

