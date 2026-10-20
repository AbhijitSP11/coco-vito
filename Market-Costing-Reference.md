# Actual Market Costing — Snitch-Grade Streetwear Ecommerce
### India · Small to Mid-Size Agency · 2024–25 · Ex-GST unless noted
#### Sources cited inline — ★ = official/live source · ○ = derived from salary data

---

## 1. Platform Subscription Costs (Official)

### Shopify India ★ Source: shopify.com/in/pricing

| Plan | Billed Monthly | Billed Yearly | 3rd-Party Gateway Txn Fee |
|---|---:|---:|---|
| Basic | ₹1,994 / mo | ₹1,499 / mo | 2.0% per order |
| Grow | ₹7,447 / mo | ₹5,599 / mo | 1.0% per order |
| **Advanced** ★ recommended | **₹30,164 / mo** | **₹22,680 / mo** | **0.6% per order** |
| Plus | ₹1,75,000 / mo | Custom | 0.2% per order |

> Shopify Payments is not available in India — Razorpay/Cashfree is mandatory, so the txn fee above always applies on top of the gateway fee.

---

## 2. Payment Gateway Fees (Official)

### Razorpay ★ Source: razorpay.com/pricing

| Payment Method | Fee | GST |
|---|---:|---|
| UPI / Cards / Netbanking / Wallets / EMI | **2%** | +18% on fee |
| Instant Refund | ₹7.99 – ₹14.99 per refund | +18% |

### Cashfree ★ Source: cashfree.com/payment-gateway-charges

| Payment Method | Fee | GST |
|---|---:|---|
| Domestic cards / standard | **1.95%** (promo to Mar 2027, first ₹20L) → **2%** standard | +18% on fee |
| International cards | 2.95% – 2.99% | +18% |

**Effective per-order fee on your store:**
- WordPress / Next.js: **2% + 18% GST on that 2%** = ~2.36% effective
- Shopify Advanced: **2% + 0.6% Shopify fee** = **2.6% + GST** effective

---

## 3. Hosting / Infrastructure Costs (Official)

### Cloudways ★ Source: cloudways.com/en/pricing.php

| Plan | Price/mo | RAM | vCPU | Storage | Bandwidth |
|---|---:|---|---|---|---|
| DO Micro (launch) | **$11 (~₹925)** | 2 GB | 1 | 50 GB | 2 TB |
| DO Medium (growth) | **$88 (~₹7,400)** | 8 GB | 4 | 160 GB | 5 TB |
| Autonomous Growth (WP-focused) | **$99 (~₹8,300)** | — | — | 20 GB | 150 GB |

### AWS Lightsail ★ Source: aws.amazon.com/lightsail/pricing

| Plan | Price/mo | RAM | vCPU | SSD | Transfer |
|---|---:|---|---|---|---|
| Starter | **$12 (~₹1,000)** | 2 GB | 2 | 60 GB | 3 TB |
| Standard | **$24 (~₹2,000)** | 4 GB | 2 | 80 GB | 4 TB |
| Growth | **$44 (~₹3,700)** | 8 GB | 2 | 160 GB | 5 TB |

### Vercel ★ Source: vercel.com/pricing (for Next.js frontend)

| Plan | Price/mo | Transfer |
|---|---:|---|
| Hobby | Free | 100 GB |
| **Pro** | **$20 (~₹1,680)** | 1 TB |
| Enterprise | Custom | Custom |

**Realistic yearly hosting cost:**
- WordPress (Cloudways DO Micro): **~₹11,100 / yr** at launch
- Next.js (Vercel Pro + Railway/Render API): **~₹20,000 – ₹50,000 / yr**

---

## 4. Developer Salary Benchmarks → Agency Rate Derivation

### Indian Web Developer Salaries ★ Source: payscale.com (2026, n=569)

| Experience | Annual Salary (INR) | Monthly | Implied Agency Hourly ○ |
|---|---:|---:|---:|
| Entry (0–1 yr) | ₹3,02,000 | ₹25,200 | $8–12/hr |
| Early career (1–4 yr) | ₹4,06,000 | ₹33,800 | $12–18/hr |
| Mid career (4–8 yr) | ₹7,20,000 | ₹60,000 | $18–30/hr |
| Senior (8+ yr) | ₹11,20,000 | ₹93,000 | $28–45/hr |

> ○ Agency hourly = (monthly salary × 2.5 overhead multiplier) ÷ 160 billable hours, converted at ₹84/USD.
> Small Indian agencies typically bill at **$15–25/hr** for offshore client work.
> Mid-size Indian agencies bill at **$25–50/hr**.

---

## 5. Development Cost — What Agencies Actually Charge

*Based on: salary benchmarks (PayScale) + 2.5× overhead + typical project hours.*
*All figures ex-18% GST.*

### Estimated Project Hours by Platform (Snitch-grade scope)

| Work area | WordPress | Shopify | Next.js Custom |
|---|---:|---:|---:|
| Design (Figma, UX) | 80 hrs | 80 hrs | 100 hrs |
| Frontend / theme | 160 hrs | 120 hrs | 200 hrs |
| Backend / commerce logic | 140 hrs | 60 hrs | 280 hrs |
| 3D / motion (GSAP, Three.js) | 60 hrs | 60 hrs | 60 hrs |
| Integrations (payment, shipping, SMS) | 80 hrs | 50 hrs | 100 hrs |
| Database + infrastructure | 40 hrs | 0 hrs | 80 hrs |
| QA + launch + training | 60 hrs | 50 hrs | 80 hrs |
| **Total hours** | **~620 hrs** | **~420 hrs** | **~900 hrs** |

### Cost at Indian Agency Rates

| | WordPress | Shopify | Next.js Custom |
|---|---:|---:|---:|
| **Small agency** ($15–20/hr, 5–15 people) | ₹7,80,000 – ₹10,40,000 | ₹5,30,000 – ₹7,05,000 | ₹11,35,000 – ₹15,10,000 |
| **Mid agency** ($25–40/hr, 15–50 people) | ₹13,00,000 – ₹20,80,000 | ₹8,80,000 – ₹14,10,000 | ₹18,90,000 – ₹30,20,000 |
| **Freelancer** ($8–15/hr) | ₹3,15,000 – ₹5,90,000 | ₹2,13,000 – ₹4,00,000 | ₹4,57,000 – ₹8,57,000 |

> Freelancer = cheapest but highest risk: no team, no QA process, handover risk.
> Small agency = best value for Snitch-grade. Mid agency = brand-safety + faster delivery.

---

## 6. Recurring Cost — Full Yearly Picture (Snitch-grade, Advanced Shopify)

| Cost Item | WordPress | Shopify Advanced | Next.js Custom | Source |
|---|---:|---:|---:|---|
| Platform / hosting | ₹11,100 – ₹88,800 | **₹2,72,160** (yearly plan) | ₹20,000 – ₹50,000 | ★ Official |
| Plugin / app licences | ₹30,000 – ₹50,000 | ₹85,000 – ₹1,80,000 | ₹0 | ★ App stores |
| Domain (.com) | ₹1,200 | ₹1,200 | ₹1,200 | Market rate |
| SSL | ₹0 (Let's Encrypt) | ₹0 (included) | ₹0 | ★ Free |
| CDN (Cloudflare free) | ₹0 | ₹0 (built-in) | ₹0 – ₹15,000 | ★ Official |
| **Fixed yearly total** | **₹42,300 – ₹1,40,000** | **₹3,58,360 – ₹4,53,360** | **₹21,200 – ₹66,200** | |
| + Per-order gateway | 2% + GST | 2.6% + GST | 2% + GST | ★ Razorpay |
| + Courier (Shiprocket) | Per shipment | Per shipment | Per shipment | Market rate |

---

## 7. Total Cost of Ownership — Year 1 (Mid Estimate, Small Agency, Ex-GST)

| | WordPress | Shopify Advanced | Next.js Custom |
|---|---:|---:|---:|
| One-time dev (small agency, mid) | ₹9,10,000 | ₹6,17,500 | ₹13,22,500 |
| Year 1 recurring (mid) | ₹91,150 | ₹4,05,860 | ₹43,600 |
| **Year 1 total** | **₹10,01,150** | **₹10,23,360** | **₹13,66,100** |
| **Year 2 (recurring only)** | **₹91,150** | **₹4,05,860** | **₹43,600** |
| Per-order fee | 2% + GST | 2.6% + GST | 2% + GST |
| Code ownership | Yes | No | Yes |
| Launch time | 10–12 weeks | 8–10 weeks | 18–26 weeks |

---

## 8. Summary — What to Tell a Client

| | WordPress | Shopify | Next.js Custom |
|---|---|---|---|
| Pay once, low running cost | ✅ | ❌ | ✅ |
| Fastest to launch | ❌ | ✅ | ❌ |
| Snitch uses this | ❌ | ✅ | ❌ |
| Full code ownership | ✅ | ❌ | ✅ |
| Best at high traffic / drops | ❌ | ✅ | ✅ |
| Lowest dev cost | — | ✅ | ❌ |
| Lowest 3-year total cost | ✅ | ❌ | ✅ |

---

*Sources: Shopify India pricing (shopify.com/in/pricing) · Razorpay fees (razorpay.com/pricing) ·*
*Cashfree fees (cashfree.com) · Cloudways pricing (cloudways.com) · AWS Lightsail (aws.amazon.com/lightsail/pricing) ·*
*Vercel pricing (vercel.com/pricing) · PayScale India salaries (payscale.com, 2026, n=569)*
*Agency hourly rates derived from salary benchmarks using 2.5× overhead multiplier.*
