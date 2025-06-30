# Bilnycklar Tech Website - Coolify Deployment Guide

## Overview
This guide provides step-by-step instructions for deploying the Bilnycklar Tech website using Coolify with the domain bilnyckel.tech.

## Prerequisites
- Coolify installed and configured on your server
- Domain bilnyckel.tech pointing to your server
- Git repository containing the website files

## Deployment Steps

### 1. Prepare the Repository
Ensure your repository contains:
- `dist/` - Built React application (production files)
- `Dockerfile` - Container configuration
- `nginx.conf` - Nginx server configuration
- `docker-compose.yml` - Docker Compose configuration

### 2. Coolify Configuration

#### Create New Application
1. Log into your Coolify dashboard
2. Click "New Application"
3. Select "Docker Compose" as the deployment type
4. Connect your Git repository

#### Environment Configuration
Set the following environment variables in Coolify:
- `NGINX_HOST=bilnyckel.tech`
- `NGINX_PORT=80`

#### Domain Configuration
1. In the application settings, add your domain: `bilnyckel.tech`
2. Enable SSL/TLS certificate (Let's Encrypt)
3. Configure www redirect if needed: `www.bilnyckel.tech` → `bilnyckel.tech`

#### Port Configuration
- Container Port: 80
- Public Port: 80 (or 443 for HTTPS)

### 3. Build and Deploy
1. Trigger the deployment from Coolify dashboard
2. Monitor the build logs for any errors
3. Once deployed, verify the website is accessible at https://bilnyckel.tech

### 4. Post-Deployment Verification
- [ ] Website loads correctly at bilnyckel.tech
- [ ] All images and assets are loading
- [ ] Navigation works properly
- [ ] Mobile responsiveness is maintained
- [ ] SSL certificate is active
- [ ] Contact form is functional (if backend is configured)

## File Structure
```
bilnycklar-tech/
├── dist/                 # Built React app (production files)
├── src/                  # Source files (for development)
├── public/               # Public assets
├── Dockerfile           # Docker container configuration
├── nginx.conf           # Nginx server configuration
├── docker-compose.yml   # Docker Compose configuration
├── package.json         # Node.js dependencies
└── README.md           # Project documentation
```

## Technical Details

### Docker Configuration
- Base Image: `nginx:alpine`
- Serves static files from `/usr/share/nginx/html/`
- Custom nginx configuration for React routing
- Gzip compression enabled
- Security headers configured

### Nginx Features
- Client-side routing support (React Router)
- Static asset caching (1 year)
- Gzip compression
- Security headers
- Server signature removal

### Performance Optimizations
- Minified and optimized build files
- Image optimization
- CSS and JavaScript bundling
- Browser caching headers

## Troubleshooting

### Common Issues
1. **404 errors on page refresh**: Ensure nginx.conf has proper `try_files` configuration
2. **Images not loading**: Check if asset paths are correct in the build
3. **SSL certificate issues**: Verify domain DNS settings and Coolify SSL configuration
4. **Build failures**: Check Docker build logs and ensure all dependencies are available

### Logs and Monitoring
- View application logs in Coolify dashboard
- Monitor container health and resource usage
- Set up alerts for downtime or errors

## Maintenance
- Regular updates to dependencies
- Monitor security vulnerabilities
- Backup configuration files
- Update SSL certificates (automatic with Let's Encrypt)

## Support
For technical support or questions about the deployment:
- Check Coolify documentation
- Review container logs
- Verify DNS and domain configuration

---

**Note**: This website is optimized for production deployment and includes all necessary configuration files for seamless Coolify integration.

