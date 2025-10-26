# Contact Form Setup with Resend

Your contact form is now configured to use **Resend**, a professional email service you're already using!

## 🚀 Quick Setup (3 minutes)

### Step 1: Get Your Resend API Key

1. Go to [resend.com/api-keys](https://resend.com/api-keys)
2. Log in to your Resend account
3. Click **"Create API Key"**
4. **Name**: "Arin Digital Website"
5. **Permission**: Full Access (or Send Access)
6. Click **"Create"**
7. **Copy the API key** (starts with `re_`)

### Step 2: Add API Key to Vercel

1. Go to your **Vercel project dashboard**
2. Click **"Settings"** tab
3. Click **"Environment Variables"** in sidebar
4. Click **"Add New"**
5. **Key**: `RESEND_API_KEY`
6. **Value**: Paste your Resend API key (the one starting with `re_`)
7. **Environment**: Select all (Production, Preview, Development)
8. Click **"Save"**

### Step 3: Update Email Settings in Code

In the file `app/api/contact/route.ts`, update these settings:

**Line 20** - Change the "from" email:
```typescript
from: 'Arin Digital Website <noreply@arindigital.com>',
```

**Note:** You'll need to verify your domain in Resend first, OR just use:
```typescript
from: 'Arin Digital Website <onboarding@resend.dev>',
```
(This works immediately with no verification)

**Line 21** - Make sure your email is correct:
```typescript
to: 'contact@arindigital.com',
```

### Step 4: Deploy

After adding the environment variable in Vercel:
1. Go to **"Deployments"** tab
2. Click **"Redeploy"** on the latest deployment
3. Or just push your latest changes and it will auto-deploy

---

## ✅ Testing the Form

Once deployed:
1. Visit https://arindigital.com/contact
2. Fill out and submit the form
3. Check your email: `contact@arindigital.com`
4. You should receive the form submission!

---

## 📧 Email Details

Each submission email will include:
- **Subject**: New Contact Form: [Service] - [Name]
- **From**: Arin Digital Website
- **Reply-To**: The sender's email (so you can reply directly!)
- **Body**: All form fields formatted nicely

---

## 🎨 Verify Your Domain (Optional)

To send emails from `@arindigital.com`:

1. Go to [resend.com/domains](https://resend.com/domains)
2. Click **"Add Domain"**
3. Enter: `arindigital.com`
4. Resend will give you DNS records to add
5. Add these records in Squarespace DNS (similar to what we did for Vercel)
6. Once verified, update the "from" email in `route.ts`

**Benefits:**
- Professional emails from your domain
- Better deliverability
- Branded experience

---

## 🔒 Security

✅ API key is stored securely in Vercel environment variables  
✅ Never exposed to the frontend  
✅ API route handles all communication with Resend  
✅ Form validation on both frontend and backend  

---

## 📊 Resend Free Tier

Your free tier includes:
- ✅ **3,000 emails per month**
- ✅ Email API
- ✅ Custom domains
- ✅ Full HTML emails
- ✅ Reply-to functionality
- ✅ Email logs and analytics

This is **way more than Formspree's 50/month!**

---

## 🐛 Troubleshooting

### Form shows error when submitting
- Check that `RESEND_API_KEY` is added in Vercel
- Make sure you redeployed after adding the environment variable
- Check Vercel logs for errors

### Not receiving emails
- Check your spam folder
- Verify the "to" email address in `route.ts`
- Check Resend dashboard for logs

### "Failed to send email" error
- Verify your Resend API key is correct
- Make sure the API key has send permissions
- Check that you're not over your rate limit

---

## 🎉 Advantages Over Formspree

✅ Already set up for you  
✅ 60x more emails (3,000 vs 50)  
✅ Professional email templates  
✅ More control  
✅ Better for business  
✅ No third-party form service  

---

**Once you add the API key to Vercel and redeploy, your contact form will be fully functional with Resend!** 🚀

