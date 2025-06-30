# 🚀 Coolify Deployment Setup for bilnyckel.tech

## ⚠️ Domain Persistence Fix

**Problem:** Domain reverts to default after deployment
**Solution:** Updated configuration files to be Coolify-compatible

## 🔧 Changes Made

### 1. Updated nginx.conf
- **Before:** `server_name bilnyckel.tech www.bilnyckel.tech;`
- **After:** `server_name _;`
- **Why:** Allows Coolify to manage domain configuration dynamically

### 2. Simplified docker-compose.yml
- **Removed:** Hardcoded environment variables and networks
- **Simplified:** Basic service configuration only
- **Why:** Prevents conflicts with Coolify's automatic configuration

## 📋 Coolify Setup Instructions

### Step 1: Application Configuration
1. **Application Type:** Docker Compose
2. **Repository:** `https://github.com/Ztoritz/Bilnycklar-Tech-Website`
3. **Branch:** `main`
4. **Build Pack:** Docker

### Step 2: Domain Configuration
1. **Go to:** Application → Settings → Domains
2. **Add Domain:** `bilnyckel.tech`
3. **SSL/TLS:** Enable (Let's Encrypt)
4. **Force HTTPS:** Enable (recommended)

### Step 3: Environment Variables (Optional)
No environment variables needed - configuration is now automatic.

### Step 4: Deploy
1. **Click:** Deploy button
2. **Wait:** 5-10 minutes for build and deployment
3. **Verify:** Visit https://bilnyckel.tech

## ✅ Domain Persistence Checklist

After deployment, verify:
- [ ] Domain shows as `bilnyckel.tech` in Coolify
- [ ] Website loads at https://bilnyckel.tech
- [ ] Domain doesn't revert after redeployment
- [ ] SSL certificate is active
- [ ] All website features work correctly

## 🔄 If Domain Still Reverts

### Option 1: Use Dockerfile Only
Instead of docker-compose.yml, configure Coolify to use Dockerfile directly:
1. **Build Pack:** Change to "Dockerfile"
2. **Dockerfile Path:** `./Dockerfile`
3. **Redeploy**

### Option 2: Manual Domain Override
In Coolify application settings:
1. **Advanced Settings**
2. **Custom Domain Configuration**
3. **Force domain:** `bilnyckel.tech`

### Option 3: Environment Variable Override
Add environment variable in Coolify:
- **Key:** `VIRTUAL_HOST`
- **Value:** `bilnyckel.tech`

## 🛠️ Technical Details

### Why This Fixes the Issue
1. **Flexible nginx config:** No hardcoded domains
2. **Simplified docker-compose:** No conflicting settings
3. **Coolify-friendly:** Lets Coolify manage networking and domains

### How Coolify Works
- Coolify automatically configures reverse proxy
- It manages SSL certificates and domain routing
- Hardcoded configurations can override Coolify's settings

## 📞 Next Steps
1. **Deploy updated configuration**
2. **Set domain to bilnyckel.tech in Coolify**
3. **Test that domain persists after redeployment**
4. **Enable SSL for secure HTTPS access**

The domain should now persist correctly after deployments!

