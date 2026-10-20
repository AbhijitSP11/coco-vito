# VIORA TECH
### Tech Stack & Code Quotation — Streetwear E-Commerce Website

**Prepared for:** [Client Name / Brand]
**Prepared by:** Viora Tech · [GSTIN] · [email] · [phone] · [website]
**Date:** [DD Month YYYY]  ·  **Quotation No:** VT-[XXXX]-TS  ·  **Valid for:** 30 days

---

## 1. What This Document Covers

This document lists every technology and tool that powers your store, explains the choices, and breaks down the **development cost by technology layer** — so you can see exactly what you are paying for and why.

The full pricing summary is in your main quotation (`Viora-Tech-Ecommerce-Costing`). This document is the technical companion to it.

---

## 2. Full Tech Stack

### 2.1 Frontend (What Your Customers See)

| Technology | Role | Why We Chose It |
|---|---|---|
| HTML5 / CSS3 | Markup & styling | Standards-based, fast, accessible |
| JavaScript (ES6+) | Interactivity | Native browser, no framework overhead |
| **GSAP 3** | Scroll animations, micro-interactions | Industry standard for web motion; butter-smooth on mobile |
| **Three.js + Spline** | 3D hero scene, 360° product viewer | WebGL 3D in the browser; Spline for no-code 3D edits post-launch |
| Custom WooCommerce theme | Storefront templates | Full design control; no off-the-shelf theme limitations |
| Google Fonts (CDN) | Typography | Sub-20ms latency with font-display:swap |
| Webpack / Vite | Asset bundling | Tree-shaking, code-splitting, fast builds |

### 2.2 Backend (The Engine)

| Technology | Role | Why We Chose It |
|---|---|---|
| **PHP 8.2+** | Server runtime | Required by WordPress; 8.2 is 40% faster than 7.x |
| **WordPress 6.x** | CMS & admin | Most widely used CMS; non-technical staff can manage content without code |
| **WooCommerce 8.x** | Commerce engine | Powers ~40% of ecommerce sites; mature India-specific ecosystem |
| WP REST API / JSON API | Headless-ready data layer | Future-proofing if you ever add a mobile app |
| Advanced Custom Fields Pro | Structured custom content | Flexible CMS for banners, drops, lookbook, FAQs |
| WP-Cron / WP CLI | Scheduled tasks & automation | Flash-sale start/stop, stock alerts, order cleanup |

### 2.3 Database

| Technology | Role | Why We Chose It |
|---|---|---|
| **MySQL 8.0 / MariaDB 10.x** | Primary datastore | Best-supported DB for WordPress; transactional integrity for orders |
| **Redis** | Object cache | Stores repeated DB query results in memory; dramatically reduces page load time under traffic |
| Database indexing (custom) | Query optimisation | Custom indexes on product/order tables for fast search and filtering |

### 2.4 Infrastructure & Hosting

| Technology | Role | Why We Chose It |
|---|---|---|
| **Cloudways (AWS / DigitalOcean)** | Managed cloud hosting | One-click server management, auto-scaling, built-in backups |
| **Nginx** | Web server | Higher concurrent connections vs Apache; PHP-FPM for speed |
| **Cloudflare** | CDN + WAF + DDoS protection | Free tier covers India edge nodes; SSL, bot protection, performance |
| **Let's Encrypt** | SSL certificate | Free, auto-renewing HTTPS |
| **UpdraftPlus Pro** | Automated daily backups | Off-site to Google Drive/S3; one-click restore |
| Staging environment | Safe testing | Separate server for testing changes before they go live |

### 2.5 Commerce Plugins & Extensions

| Plugin / Extension | Role | Licence Cost (yr) |
|---|---|---|
| **ATUM Inventory Management** | SKU stock, alerts, returns | ~₹8,500 |
| **WooCommerce Dynamic Pricing** | Flash sales, BOGO, bundles | ~₹6,000 |
| **Razorpay / Cashfree Gateway** | Payments (UPI, cards, COD) | Free (txn fee applies) |
| **Shiprocket / Delhivery Plugin** | AWB, tracking, courier | Free–₹4,000 |
| **Yoast SEO Premium** | On-page SEO, schema | ~₹6,000 |
| **WP Rocket** | Page caching, performance | ~₹5,000 |
| **Wordfence Security** | Firewall, malware scan | ~₹6,000 |
| **WooCommerce Subscriptions** | AMC / loyalty billing (optional) | ~₹4,500 |
| **Total mandatory plugin licences** | | **≈ ₹35,000 / yr** |

### 2.6 Third-Party Services (Client Accounts)

| Service | What It Does | Pricing Model |
|---|---|---|
| **Razorpay / Cashfree** | Payment processing — UPI, cards, wallets, COD | ~2% + GST per transaction |
| **Shiprocket / Delhivery** | Courier booking, AWB, live tracking | Per-shipment; weight + zone based |
| **MSG91 / Twilio** | SMS & WhatsApp order notifications | Per-message; ~₹0.20–₹1 per SMS |
| **SendGrid / Postmark** | Transactional email (order confirm, forgot-password) | Per-email; free up to 100/day |
| **Google Analytics 4** | Traffic, conversion, funnel analytics | Free |
| **Meta Pixel** | Facebook/Instagram ad attribution | Free |
| **Google Search Console** | SEO indexing & performance | Free |

---

## 3. Development Cost — Breakdown by Technology Layer

This table maps each cost item to the specific tech that drives it, so you can see exactly what you are funding.

| # | Layer / Feature | Tech Used | Amount (₹) |
|---|---|---|---:|
| 1 | Discovery & IA | Miro, Notion, Figma | 12,000 |
| 2 | UI/UX design (~18 screens + prototype) | Figma, design tokens | 48,000 |
| 3 | Custom theme — front-end build | HTML5, CSS3, JS ES6+, Webpack | 75,000 |
| 4 | WooCommerce core (cart, checkout, accounts) | WooCommerce 8.x, PHP 8.2 | 40,000 |
| 5 | Product catalog, variations, bulk import | WooCommerce, WP CLI, CSV | 22,000 |
| 6 | Inventory management | ATUM, WP hooks, custom REST endpoints | 35,000 |
| 7 | Price & offer management | WooCommerce Dynamic Pricing, WP-Cron | 30,000 |
| 8 | Payment gateway + COD + refunds | Razorpay/Cashfree SDK, WooCommerce gateway API | 20,000 |
| 9 | Delivery partner integration + live tracking | Shiprocket/Delhivery API, custom webhook handler | 30,000 |
| 10 | 3D animations & motion | GSAP 3, Three.js / Spline, WebGL shaders | 45,000 |
| 11 | Search, filters & faceted navigation | WooCommerce AJAX, custom query loops | 22,000 |
| 12 | Reviews, wishlist, notifications | WooCommerce Reviews, MSG91/Twilio API, SMTP | 24,000 |
| 13 | Database design & optimisation | MySQL 8.0, custom indexes, Redis object cache | 18,000 |
| 14 | Deployment & server setup | Cloudways/AWS, Nginx, PHP-FPM, Cloudflare DNS | 22,000 |
| 15 | SEO, performance & security hardening | Yoast SEO, WP Rocket, Wordfence, GA4, Meta Pixel | 18,000 |
| 16 | QA, cross-device testing & UAT | BrowserStack, manual, Lighthouse, GTmetrix | 22,000 |
| 17 | Training & handover documentation | Loom walkthroughs, PDF guide, staging demo | 12,000 |
| | **One-time total (ex-GST)** | | **₹4,95,000** |
| | GST @ 18% | | ₹89,100 |
| | **One-time total (all-inclusive)** | | **₹5,84,100** |

---

## 4. Tech Stack Architecture — At a Glance

```
CUSTOMER BROWSER
  ↓  HTTPS  (Cloudflare CDN + WAF + DDoS)
NGINX Web Server  (PHP 8.2 + FPM)
  ↓
WordPress 6.x  (CMS / admin)
  └── WooCommerce 8.x  (cart / checkout / orders)
  └── ATUM  (inventory)
  └── Dynamic Pricing  (offers / flash sales)
  └── WP REST API  (JSON endpoints for JS front-end / future app)
  ↓
MySQL 8.0  +  Redis (object cache)
  ↓ (integrations)
Razorpay/Cashfree  ←→  Payments
Shiprocket/Delhivery  ←→  Logistics & tracking
MSG91/Twilio  ←→  SMS / WhatsApp
SendGrid  ←→  Email
GA4 + Meta Pixel  ←→  Analytics & attribution
  ↑
FRONT-END LAYER  (custom WooCommerce theme)
  └── GSAP 3  (scroll animations, micro-interactions)
  └── Three.js / Spline  (3D hero + 360° viewer)
  └── Webpack  (bundled, tree-shaken JS + CSS)
```

---

## 5. Hosting & Infrastructure Plan

### Recommended Stack: Cloudways (AWS Mumbai ap-south-1)

| Resource | Spec | Purpose |
|---|---|---|
| PHP Workers | 4 workers × 256 MB | Handle concurrent page requests |
| RAM | 2 GB (launch) → 4 GB (growth) | WordPress + Redis object cache |
| Storage | 50 GB SSD | Media library, DB, backups |
| Bandwidth | Unmetered (Cloudflare absorbs 80%+ of CDN traffic) | |
| Region | AWS Mumbai (ap-south-1) | Sub-50ms latency to Indian users |
| Backups | Daily automated, retained 14 days | Off-site to S3 |

**Estimated hosting cost:** ₹2,500/month at launch → ₹4,000–5,000/month as traffic grows (within the ₹30,000/yr budget line in the main costing).

---

## 6. Performance Targets

| Metric | Target | How We Hit It |
|---|---|---|
| Largest Contentful Paint (LCP) | < 2.5 s on 4G | Cloudflare CDN, lazy-load images, critical CSS inline |
| First Input Delay (FID) | < 100 ms | Deferred JS, no render-blocking scripts |
| Cumulative Layout Shift (CLS) | < 0.1 | Reserved image dimensions, no late-loading fonts |
| Lighthouse mobile score | ≥ 90 | WP Rocket caching, image WebP, minimal plugins |
| Time to First Byte (TTFB) | < 200 ms | Redis + Nginx FastCGI cache |
| 99.9% uptime | < 9 hrs downtime/yr | Cloudways SLA + Cloudflare failover + uptime monitor |

---

## 7. Security Measures (Included)

- **HTTPS everywhere** — Cloudflare + Let's Encrypt, auto-renew, HSTS headers.
- **Web Application Firewall (WAF)** — Cloudflare free plan blocks SQL injection, XSS, and bad bots.
- **WordPress hardening** — login URL renamed, brute-force lockout, XML-RPC disabled, file-edit disabled in admin.
- **Wordfence** — real-time threat feed, malware scanner, firewall rules.
- **Least-privilege DB user** — WooCommerce DB user has SELECT/INSERT/UPDATE/DELETE only; no DROP/ALTER.
- **Automated backups** — daily off-site; tested restore process.
- **Dependency updates** — all plugins and WordPress core on latest stable; part of AMC plan.
- **PCI-DSS scope reduction** — payments handled by Razorpay's hosted iframe; card data never touches your server.

---

## 8. Scalability Path

The architecture is chosen to grow with the brand without a rewrite:

| Stage | Monthly orders | What changes |
|---|---|---|
| Launch | 0 – 500 | Current setup handles this comfortably |
| Growth | 500 – 5,000 | Upgrade server RAM to 4 GB; Redis already in place |
| Scale | 5,000 – 50,000 | Add vertical scaling or object storage for media; consider Elasticsearch for search |
| Enterprise | 50,000+ | Evaluate headless WordPress + Next.js front-end, or Shopify Plus |

The WP REST API is already live on day one — a React Native / Flutter mobile app can be added without touching the backend.

---

## 9. Assumptions & Notes

- All plugin licences are annual and renewed in the client's name.
- Cloudways/AWS account is in the client's name; Viora Tech manages it during development.
- Third-party API keys (Razorpay, Shiprocket, MSG91, etc.) are generated in the client's business accounts.
- The Three.js / Spline 3D build uses provided brand assets; 3D garment modelling is quoted separately (₹4,000–₹12,000 per product).
- Targets above are measured on a standard 4G mobile connection; on desktop/fibre they will be lower.

---

*This document is supplementary to the Viora Tech Ecommerce Costing proposal (VT-[XXXX]).*
*All figures exclusive of 18% GST unless stated otherwise.*
