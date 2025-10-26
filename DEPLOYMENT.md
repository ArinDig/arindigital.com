# Quick Deployment Guide

This guide will help you deploy your Arin Digital Innovations website.

## Prerequisites Checklist

- [x] Website code is complete
- [ ] Logo files added to `/public` directory (see LOGO_SETUP.md)
- [ ] GitHub repository created: https://github.com/ArinDig/arindigital.com
- [ ] Vercel account created
- [ ] Domain purchased through Google Workspace

## Step-by-Step Deployment

### Step 1: Add Your Logos

1. Follow instructions in `LOGO_SETUP.md`
2. Add `logo-transparent.png` to `/public`
3. Add `og-image.png` to `/public`

### Step 2: Test Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
# Verify everything looks good
```

### Step 3: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Arin Digital Innovations website"

# Add remote
git remote add origin https://github.com/ArinDig/arindigital.com.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Vercel

1. **Go to Vercel**: [vercel.com](https://vercel.com)
2. **Sign in** with your GitHub account
3. **Click "Add New Project"**
4. **Import** your repository: `ArinDig/arindigital.com`
5. **Configure Build Settings**:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out`
6. **Click "Deploy"**
7. Wait for deployment to complete (usually 2-3 minutes)

### Step 5: Add Custom Domain in Vercel

1. In Vercel project dashboard, go to **Settings → Domains**
2. Click **Add Domain**
3. Enter: `arindigital.com`
4. Click **Add**
5. Also add: `www.arindigital.com`
6. Vercel will show you DNS records to configure

### Step 6: Configure DNS in Google Workspace

⚠️ **IMPORTANT**: Do not remove MX records for your email!

1. **Go to Google Domains**: [domains.google.com](https://domains.google.com)
2. **Select your domain**: arindigital.com
3. **Click "DNS"** in the left sidebar
4. **Add the records** Vercel provided:

#### For Apex Domain (arindigital.com):

Add these A records:

| Host name | Type | TTL  | Data              |
|-----------|------|------|-------------------|
| @         | A    | 3600 | 76.76.21.21       |

*(Use the actual IP provided by Vercel)*

#### For WWW Subdomain:

Add this CNAME record:

| Host name | Type  | TTL  | Data                    |
|-----------|-------|------|-------------------------|
| www       | CNAME | 3600 | cname.vercel-dns.com    |

*(Use the actual CNAME provided by Vercel)*

5. **Save changes**
6. **Wait for propagation** (24-48 hours, but often faster)

### Step 7: Verify Deployment

1. **Check Vercel Dashboard**:
   - Domain should show "Valid Configuration"
   - SSL certificate should be active

2. **Test Your Website**:
   - Visit https://arindigital.com
   - Visit https://www.arindigital.com
   - Both should work and show HTTPS (secure)

3. **Test Email** (should still work):
   - Send a test email to your Google Workspace email
   - Verify it arrives correctly

4. **Check All Pages**:
   - Home page
   - About page
   - Services page
   - Contact page (test form)
   - Privacy policy

### Step 8: Submit to Search Engines

1. **Google Search Console**:
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add property: arindigital.com
   - Verify ownership (DNS verification recommended)
   - Submit sitemap: https://arindigital.com/sitemap.xml

2. **Bing Webmaster Tools**:
   - Go to [bing.com/webmasters](https://www.bing.com/webmasters)
   - Add site: arindigital.com
   - Submit sitemap: https://arindigital.com/sitemap.xml

3. **Google Business Profile** (optional but recommended):
   - Create profile for your Austin location
   - Verify business
   - Link to website

## Making Updates

After initial deployment, updating is easy:

```bash
# Make your changes to files

# Commit and push
git add .
git commit -m "Description of changes"
git push origin main

# Vercel automatically deploys!
# Check deployment status in Vercel dashboard
```

## Troubleshooting

### DNS Not Resolving
- Wait longer (DNS can take up to 48 hours)
- Check DNS with: `dig arindigital.com`
- Verify records in Google Domains
- Check Vercel dashboard for domain status

### Email Stopped Working
- **DO NOT PANIC** - Email issues are usually DNS-related
- Verify MX records are still in Google Domains
- MX records should point to Google:
  - Priority 1: smtp.google.com
  - Priority 5: smtp2.google.com (if applicable)
- Contact Google Workspace support if needed

### Website Shows Old Version
- Clear browser cache (Cmd+Shift+R)
- Check Vercel deployment logs
- Verify latest commit is deployed

### SSL Certificate Issues
- Vercel handles SSL automatically
- Can take a few minutes after DNS propagation
- Check Vercel dashboard for SSL status

### Contact Form Not Working
- Check browser console for errors
- Currently set up for front-end only
- To make functional, integrate with:
  - [Formspree](https://formspree.io)
  - [EmailJS](https://www.emailjs.com)
  - Custom API endpoint
  - Or contact form service of choice

## Next Steps After Deployment

- [ ] Set up Google Analytics
- [ ] Set up Vercel Analytics
- [ ] Create Google Business Profile
- [ ] Submit sitemap to search engines
- [ ] Set up social media profiles
- [ ] Link social media in footer
- [ ] Monitor site performance in Search Console
- [ ] Set up automated backups (Vercel keeps deployments)

## Support

If you need help:
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Google Workspace Support: [support.google.com/a](https://support.google.com/a)
- DNS Checker: [whatsmydns.net](https://www.whatsmydns.net/)

## Estimated Timeline

- Code changes: Immediate (already complete!)
- Push to GitHub: 5 minutes
- Vercel deployment: 2-3 minutes
- DNS configuration: 15 minutes
- DNS propagation: 1-48 hours (usually 1-6 hours)
- Search engine indexing: 1-7 days

**You could have your site live in as little as 2-3 hours!**

---

**Ready to deploy? Start with Step 1!** 🚀

