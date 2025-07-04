# Deployment and Setup Guide

## Prerequisites

### Development Environment
- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher (or yarn 1.22+)
- **Git**: Version 2.30 or higher
- **Code Editor**: VS Code, WebStorm, or similar with TypeScript support

### Optional Dependencies
- **PostgreSQL**: Version 15+ for production database
- **Docker**: For containerized development
- **Replit Account**: For cloud deployment

## Local Development Setup

### 1. Clone Repository
```bash
git clone <repository-url>
cd material-ui-storybook
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:
```env
# Development Configuration
NODE_ENV=development
PORT=5000

# Database Configuration (Optional for development)
DATABASE_URL=postgresql://username:password@localhost:5432/storybook_db

# Session Configuration
SESSION_SECRET=your-secure-session-secret-here

# Development Features
VITE_DEV_MODE=true
```

### 4. Database Setup (Optional)
For development, the application uses in-memory storage. For production-like testing:

```bash
# Create PostgreSQL database
createdb storybook_db

# Run database migrations
npm run db:push
```

### 5. Start Development Server
```bash
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5000`
- API: `http://localhost:5000/api`

## Production Deployment

### Replit Deployment (Recommended)

#### 1. Import to Replit
- Fork or import the repository to Replit
- Replit will automatically detect the project configuration

#### 2. Environment Variables
Set the following secrets in Replit:
```env
NODE_ENV=production
DATABASE_URL=<your-postgresql-connection-string>
SESSION_SECRET=<generate-secure-random-string>
```

#### 3. Database Setup
```bash
# In Replit console
npm run db:push
```

#### 4. Deploy
Click the "Deploy" button in Replit interface or use:
```bash
replit deploy
```

### Manual Server Deployment

#### 1. Server Requirements
- **OS**: Ubuntu 20.04+ / CentOS 8+ / Docker
- **RAM**: Minimum 512MB, Recommended 2GB+
- **CPU**: 1 core minimum, 2+ cores recommended
- **Storage**: 5GB minimum for application and logs

#### 2. Install Dependencies
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm postgresql nginx

# CentOS/RHEL
sudo yum install nodejs npm postgresql nginx
```

#### 3. Application Setup
```bash
# Clone and setup
git clone <repository-url>
cd material-ui-storybook
npm install
npm run build

# Create system user
sudo useradd -r -s /bin/false storybook
sudo chown -R storybook:storybook /path/to/app
```

#### 4. Database Configuration
```bash
# PostgreSQL setup
sudo -u postgres createuser storybook
sudo -u postgres createdb storybook_db -O storybook
sudo -u postgres psql -c "ALTER USER storybook PASSWORD 'secure_password';"
```

#### 5. Environment Configuration
```bash
# Create production environment file
cat > .env.production << EOF
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://storybook:secure_password@localhost:5432/storybook_db
SESSION_SECRET=$(openssl rand -base64 32)
EOF
```

#### 6. Process Management (PM2)
```bash
# Install PM2
npm install -g pm2

# Create ecosystem file
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'storybook-app',
    script: 'dist/index.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
}
EOF

# Start application
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### 7. Reverse Proxy (Nginx)
```nginx
# /etc/nginx/sites-available/storybook
server {
    listen 80;
    server_name your-domain.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com;

    # SSL Configuration
    ssl_certificate /path/to/ssl/cert.pem;
    ssl_certificate_key /path/to/ssl/private.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Security Headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # Static Assets
    location /assets/ {
        alias /path/to/app/dist/public/assets/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # API Routes
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Application
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/storybook /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Docker Deployment

#### 1. Dockerfile
```dockerfile
# Multi-stage build
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Production image
FROM node:18-alpine AS runner

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 storybook

WORKDIR /app

# Copy built application
COPY --from=builder --chown=storybook:nodejs /app/dist ./dist
COPY --from=builder --chown=storybook:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=storybook:nodejs /app/package.json ./package.json

USER storybook

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000

CMD ["node", "dist/index.js"]
```

#### 2. Docker Compose
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://storybook:password@db:5432/storybook_db
      - SESSION_SECRET=${SESSION_SECRET}
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=storybook_db
      - POSTGRES_USER=storybook
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/ssl/certs
    depends_on:
      - app
    restart: unless-stopped

volumes:
  postgres_data:
```

#### 3. Deploy with Docker
```bash
# Build and start
docker-compose up -d

# View logs
docker-compose logs -f

# Scale application
docker-compose up -d --scale app=3
```

## Cloud Platform Deployments

### Vercel Deployment

#### 1. Configuration
```json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    },
    {
      "src": "client/**",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist/public"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "server/index.ts"
    },
    {
      "src": "/(.*)",
      "dest": "client/$1"
    }
  ],
  "env": {
    "DATABASE_URL": "@database_url",
    "SESSION_SECRET": "@session_secret"
  }
}
```

#### 2. Deploy
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Railway Deployment

#### 1. Configuration
```toml
# railway.toml
[build]
builder = "NIXPACKS"

[deploy]
healthcheckPath = "/api/health"
healthcheckTimeout = 300
restartPolicyType = "ON_FAILURE"
restartPolicyMaxRetries = 10

[variables]
NODE_ENV = "production"
PORT = "3000"
```

#### 2. Deploy
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway link
railway up
```

### DigitalOcean App Platform

#### 1. Configuration
```yaml
# .do/app.yaml
name: material-ui-storybook
services:
- name: web
  source_dir: /
  github:
    repo: your-username/material-ui-storybook
    branch: main
  run_command: npm start
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
  envs:
  - key: NODE_ENV
    value: production
  - key: DATABASE_URL
    value: ${db.DATABASE_URL}
  - key: SESSION_SECRET
    type: SECRET
    value: your-session-secret

databases:
- name: db
  engine: PG
  version: "15"
  size: db-s-dev-database
```

## Monitoring and Maintenance

### Health Checks

#### Application Health Endpoint
```typescript
// Add to server/routes.ts
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    version: process.env.npm_package_version
  });
});
```

#### Database Health Check
```typescript
app.get('/api/health/database', async (req, res) => {
  try {
    await db.select().from(users).limit(1);
    res.json({ status: 'healthy', database: 'connected' });
  } catch (error) {
    res.status(503).json({ status: 'unhealthy', database: 'disconnected' });
  }
});
```

### Backup Strategy

#### Database Backups
```bash
# Daily backup script
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
pg_dump $DATABASE_URL > /backups/storybook_$DATE.sql
find /backups -name "storybook_*.sql" -mtime +7 -delete
```

#### Application Data Backup
```bash
# Backup uploaded themes and configurations
tar -czf /backups/app_data_$DATE.tar.gz \
  /app/uploads \
  /app/configs \
  /app/logs
```

### Monitoring Setup

#### Basic Monitoring Script
```bash
#!/bin/bash
# monitor.sh
URL="https://your-domain.com/api/health"
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" $URL)

if [ $RESPONSE != "200" ]; then
    echo "Application is down! HTTP Status: $RESPONSE"
    # Send alert (email, Slack, etc.)
fi
```

#### Log Monitoring
```bash
# Monitor error logs
tail -f /app/logs/error.log | grep -i "error\|exception\|fatal"

# Monitor access logs
tail -f /var/log/nginx/access.log | grep -v "200\|304"
```

## Troubleshooting

### Common Issues

#### Application Won't Start
```bash
# Check Node.js version
node --version

# Check dependencies
npm list

# Check environment variables
echo $NODE_ENV
echo $DATABASE_URL

# Check ports
netstat -tulpn | grep :3000
```

#### Database Connection Issues
```bash
# Test database connection
psql $DATABASE_URL -c "SELECT version();"

# Check database logs
sudo tail -f /var/log/postgresql/postgresql-15-main.log
```

#### Memory Issues
```bash
# Monitor memory usage
htop
free -h

# Check application memory
ps aux | grep node

# Clear application cache
pm2 restart all
```

#### Performance Issues
```bash
# Monitor CPU usage
top

# Check disk space
df -h

# Monitor network
iftop

# Application performance
curl -w "@curl-format.txt" -o /dev/null -s "http://localhost:3000"
```

### Log Analysis

#### Application Logs
```bash
# View recent errors
tail -100 /app/logs/error.log

# Search for specific errors
grep -r "TypeError" /app/logs/

# Monitor real-time logs
pm2 logs --lines 50
```

#### System Logs
```bash
# System messages
sudo journalctl -f

# Nginx logs
sudo tail -f /var/log/nginx/error.log

# PostgreSQL logs
sudo tail -f /var/log/postgresql/postgresql-15-main.log
```

## Security Considerations

### SSL/TLS Configuration
- Use valid SSL certificates from Let's Encrypt or commercial CA
- Configure HSTS headers for enhanced security
- Regular certificate renewal automation

### Database Security
- Use strong passwords and rotate regularly
- Enable SSL connections for database
- Regular security updates and patches

### Application Security
- Keep dependencies updated
- Implement rate limiting
- Regular security audits
- Input validation and sanitization

### Access Control
- Use SSH keys instead of passwords
- Implement proper firewall rules
- Regular access reviews
- Monitor login attempts

---

**Document Version**: 1.0  
**Last Updated**: July 4, 2025  
**Maintained By**: DevOps Team