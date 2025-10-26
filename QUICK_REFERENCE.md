# 🚀 Quick Reference Card

## Essential Commands

```bash
# Navigate to project
cd "/Users/arinbrown/Documents/Arin Digital Innovations/Website/Cursor_ADI"

# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Check for errors
npm run lint

# Deploy (push to GitHub, Vercel auto-deploys)
git add .
git commit -m "Your message"
git push origin main
```

## 📁 Important Files to Add

**Before deploying, add these to `/public` folder:**
- `logo-transparent.png` - Your transparent logo
- `og-image.png` - Social sharing image (1200x630px)

## 📖 Documentation Quick Links

| Need to... | Read this file |
|------------|----------------|
| Get started quickly | GETTING_STARTED.md |
| Deploy the website | DEPLOYMENT.md |
| Add logo files | LOGO_SETUP.md |
| Understand everything | README.md |
| See what you have | PROJECT_SUMMARY.md |

## 🔗 Important URLs

| Resource | URL |
|----------|-----|
| Local dev site | http://localhost:3000 |
| Vercel Dashboard | https://vercel.com/dashboard |
| GitHub Repo | https://github.com/ArinDig/arindigital.com |
| Google Domains | https://domains.google.com |
| Search Console | https://search.google.com/search-console |
| Your live site | https://arindigital.com |

## 🎯 Quick Deploy Steps

1. ✅ Add logos to `/public`
2. ✅ Test: `npm install && npm run dev`
3. ✅ Push to GitHub
4. ✅ Deploy on Vercel (import GitHub repo)
5. ✅ Configure DNS in Google Domains
6. ✅ Wait for DNS propagation (1-48 hours)
7. ✅ Done!

## 📞 Contact Form (Important!)

The contact form is **front-end only** right now. To make it functional:

**Option 1: Use Formspree (easiest)**
```typescript
// In components/ContactForm.tsx, update handleSubmit:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

**Option 2: Use EmailJS**
- Sign up at emailjs.com
- Follow their React integration guide

**Option 3: Build custom API**
- Create API route in Next.js
- Use SendGrid, AWS SES, or similar

## 🎨 Customizing Colors

Colors are in `tailwind.config.ts`:

```typescript
colors: {
  'adi-navy': '#0d2e4f',      // Dark backgrounds
  'adi-blue': '#3b82c8',       // Primary buttons
  'adi-light-blue': '#5ba3d0', // Accents
}
```

## 📝 Content to Update

**Contact Info** (search and replace):
- `contact@arindigital.com` - Update with real email
- Social media links in Footer.tsx
- Phone number (if you want to add one)

**About Page**:
- Years of experience stat
- Team information (if applicable)
- Specific achievements

**Services Page**:
- Pricing information (if you want to add)
- Specific service packages
- Case studies or examples

## 🔍 SEO Actions After Launch

1. **Google Search Console** (Priority 1)
   - Add property: arindigital.com
   - Submit sitemap: https://arindigital.com/sitemap.xml
   
2. **Google Business Profile** (Priority 2)
   - Create business profile
   - Verify Austin, TX location
   
3. **Google Analytics** (Optional)
   - Create property
   - Add tracking code
   
4. **Social Media** (Optional)
   - Create business profiles
   - Link in footer

## 🐛 Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| Logo not showing | Add `logo-transparent.png` to `/public` |
| Build fails | Delete `.next` and `node_modules`, run `npm install` |
| DNS not working | Wait 24-48 hours, verify records in Google Domains |
| Email broke | Check MX records still point to Google |
| Old version showing | Clear cache (Cmd+Shift+R) |
| Changes not deploying | Check Vercel dashboard for build logs |

## 📊 Site Pages

| Page | URL | Purpose |
|------|-----|---------|
| Home | / | Main landing page |
| About | /about | Company information |
| Services | /services | Service offerings |
| Contact | /contact | Contact form |
| Privacy | /privacy | Privacy policy |

## 🎯 Call to Actions

Your site has CTAs on:
- Home page hero (Get Started)
- Services cards (Get Started)
- Bottom of every page (Contact buttons)

All lead to `/contact` page.

## 🔒 DNS Records to Keep

**DO NOT REMOVE these Google Workspace records:**
- MX records (email)
- SPF record (TXT)
- DKIM records (TXT)
- DMARC record (TXT)

**You WILL ADD for Vercel:**
- A record for @ (apex domain)
- CNAME record for www

## 🚀 Performance Tips

Already optimized:
- ✅ Static site export
- ✅ Minimal JavaScript
- ✅ Optimized images
- ✅ CDN delivery
- ✅ Lazy loading

## 📱 Testing Checklist

- [ ] Desktop (Chrome, Safari, Firefox)
- [ ] Mobile (iPhone, Android)
- [ ] Tablet (iPad)
- [ ] All links work
- [ ] Forms display correctly
- [ ] Navigation works
- [ ] Images load
- [ ] Responsive at all sizes

## 💰 Costs

| Service | Cost |
|---------|------|
| Domain (Google) | ~$12/year (you already have) |
| Email (Google Workspace) | ~$6/month (you already have) |
| Hosting (Vercel) | **FREE** |
| SSL Certificate | **FREE** (included with Vercel) |
| CDN | **FREE** (included with Vercel) |
| **Total New Cost** | **$0/month** 🎉 |

## 🎓 Learning Resources

- [Next.js Learn](https://nextjs.org/learn)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Basics](https://www.typescriptlang.org/docs/)

## 📈 Next Steps After Launch

Week 1:
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster
- [ ] Set up Google Business Profile

Month 1:
- [ ] Monitor Search Console
- [ ] Add Google Analytics
- [ ] Start content marketing

Month 2-3:
- [ ] Add blog section
- [ ] Create case studies
- [ ] Collect testimonials

---

## 🆘 Need Help?

**Can't find something?**
- Check README.md (full docs)
- Check DEPLOYMENT.md (deployment help)
- Check LOGO_SETUP.md (logo specs)

**Still stuck?**
- Google the error message
- Check Next.js docs
- Check Vercel docs

---

**Remember**: Start with **GETTING_STARTED.md** for your first steps!

---

*Arin Digital Innovations - Austin, TX - October 2025*

