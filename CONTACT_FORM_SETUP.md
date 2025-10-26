# Contact Form Setup Instructions

Your contact form is now configured to use **Formspree**, a free service that sends form submissions to your email.

## 🚀 Quick Setup (5 minutes)

### Step 1: Sign Up for Formspree

1. Go to [formspree.io](https://formspree.io)
2. Click **"Get Started"** or **"Sign Up"**
3. Sign up with your email (or GitHub)
4. **It's FREE** for up to 50 submissions/month

### Step 2: Create a Form

1. Once logged in, click **"+ New Form"**
2. **Form Name**: "Arin Digital Contact Form"
3. **Email**: Enter your email (where you want to receive submissions): `contact@arindigital.com`
4. Click **"Create Form"**

### Step 3: Get Your Form ID

After creating the form, you'll see a **Form Endpoint** that looks like:
```
https://formspree.io/f/abc123xyz
```

The **Form ID** is the part after `/f/` → `abc123xyz`

### Step 4: Update Your Website

1. Open the file: `components/ContactForm.tsx`
2. Find this line (around line 23):
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
3. Replace `YOUR_FORM_ID` with your actual Form ID
4. Save the file

### Step 5: Commit and Deploy

In **GitHub Desktop**:
1. You'll see changes to:
   - `components/ContactForm.tsx`
   - `app/page.tsx` (hero image)
2. **Commit message**: "Add hero image and integrate Formspree contact form"
3. **Commit** and **Push**
4. Vercel will automatically redeploy (takes 2-3 minutes)

---

## ✅ Testing the Form

Once deployed:
1. Visit https://arindigital.com/contact
2. Fill out and submit the form
3. Check your email inbox (the one you configured in Formspree)
4. You should receive the form submission!

---

## 📧 Form Submission Emails

Each submission will include:
- Name
- Email address
- Company name (if provided)
- Service interested in
- Message

You can reply directly to these emails!

---

## 🎛️ Formspree Dashboard

In your Formspree dashboard, you can:
- View all submissions
- Download submissions as CSV
- Set up email notifications
- Configure spam protection
- Add custom redirect URLs

---

## 🆓 Free Tier Limits

Formspree's free tier includes:
- ✅ 50 submissions per month
- ✅ Email notifications
- ✅ Spam filtering
- ✅ File uploads (up to 10MB)
- ✅ Form validation

If you need more, paid plans start at $10/month for 1,000 submissions.

---

## 🔧 Alternative Services (If Needed)

If you prefer a different service:

### **Web3Forms** (Free, no signup)
- Simple, anonymous
- Visit: web3forms.com

### **EmailJS** (Free tier: 200/month)
- No backend needed
- Visit: emailjs.com

### **Netlify Forms** (If using Netlify instead of Vercel)
- Built-in to Netlify
- 100 submissions/month free

---

## ❓ Troubleshooting

### Form shows error when submitting
- Make sure you replaced `YOUR_FORM_ID` with your actual Form ID
- Check that the website has been redeployed with the changes

### Not receiving emails
- Check your spam folder
- Verify the email address in Formspree dashboard
- Make sure the form was created successfully

### Form shows success but email not received
- Check Formspree dashboard to see if submission was logged
- Verify email settings in Formspree

---

**Once you've set up Formspree and deployed, your contact form will be fully functional!** 🎉

