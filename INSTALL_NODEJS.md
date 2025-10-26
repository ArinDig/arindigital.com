# Installing Node.js and npm

## Quick Installation (Recommended)

### Option 1: Using Homebrew (Easiest for Mac)

If you have Homebrew installed:

```bash
# Install Node.js (includes npm)
brew install node

# Verify installation
node --version
npm --version
```

If you don't have Homebrew, install it first:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Option 2: Direct Download from Node.js

1. Go to [nodejs.org](https://nodejs.org)
2. Download the **LTS version** (Long Term Support) - currently 18.x or 20.x
3. Run the installer (`.pkg` file for macOS)
4. Follow the installation wizard
5. Restart Terminal

### Option 3: Using nvm (Node Version Manager)

If you want to manage multiple Node versions:

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Close and reopen Terminal, then:
nvm install --lts
nvm use --lts
```

## After Installation

Once Node.js is installed, verify it worked:

```bash
# Check Node.js version (should show v18.x or v20.x)
node --version

# Check npm version (should show 9.x or 10.x)
npm --version
```

## Then Install Project Dependencies

Once npm is available:

```bash
# Navigate to project
cd "/Users/arinbrown/Documents/Arin Digital Innovations/Website/Cursor_ADI"

# Install dependencies
npm install

# Start development server
npm run dev
```

## Expected Output

After `npm install`:
- Should download ~200-300 packages
- Creates `node_modules` folder
- Creates `package-lock.json`
- Takes 1-3 minutes

After `npm run dev`:
```
  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
  - Ready in 2.1s
```

Then open http://localhost:3000 in your browser!

## Troubleshooting

### "command not found: npm" after installation
- Close and reopen Terminal
- Or run: `source ~/.zshrc` (or `~/.bash_profile`)

### Permission errors during npm install
```bash
# Run with your user (don't use sudo)
npm install
```

### Port 3000 already in use
```bash
# Use a different port
npm run dev -- -p 3001
```

## Need Help?

- Node.js Installation Guide: https://nodejs.org/en/download/
- Homebrew Installation: https://brew.sh/
- nvm Installation: https://github.com/nvm-sh/nvm

---

**After Node.js is installed, come back to GETTING_STARTED.md Step 2!**

