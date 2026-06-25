# Travfica

> **Travel Safe. Travel Smart.**

Travfica is a community-driven travel marketplace built for South Africa — and eventually the world. It combines accommodation booking, curated local experiences, and social travel features into a single platform where travelers and hosts feel equally recognized.

This repository contains the live prototype powering [travfica.com](https://travfica.com).

---

## What Travfica Is

Most booking platforms treat travel as a transaction. Travfica treats it as a community.

Travelers discover vetted stays and experiences, share trip stories, compete for recognition, and earn rewards. Hosts — from boutique guesthouses to independent landlords — get visibility, tools, and an audience they wouldn't otherwise reach. The goal is a platform where being part of Travfica means something: trust, belonging, and a little FOMO if you're not in.

---

## Current State (Phase 1 Prototype)

| Page | Status |
|---|---|
| `index.html` — Landing page | ✅ Live |
| `rooms.html` — Accommodations directory | ✅ Live |
| Room detail pages (e.g. CottageOnKei, StudioOnKei) | ✅ Live |
| `host.html` — Host onboarding form | ✅ Live |
| Partners page | 🔄 In progress |
| Search & filter | 🔄 Planned (Phase 2) |
| Community & reviews layer | 🔄 Planned (Phase 2) |
| Itinerary builder | 🔄 Planned (Phase 2) |
| Monetization & subscriptions | 🔄 Planned (Phase 3) |

---

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript (vanilla)
- **Hosting**: Vercel (auto-deploy from `main`)
- **Domain**: GoDaddy → travfica.com
- **Version control**: GitHub

No frameworks yet — intentionally keeping the stack simple while the prototype evolves.

---

## Site Structure

```
/
├── index.html              # Landing page
├── rooms.html              # Accommodations listing
├── host.html               # Host submission form
├── /pages
│   ├── CottageOnKei.html   # Room detail — Cottage on Kei
│   └── StudioOnKei.html    # Room detail — Studio on Kei
├── /assets
│   ├── /images
│   ├── /icons
│   └── /fonts
├── style.css               # Global styles
└── script.js               # Interactivity (scroll, lightbox, popups)
```

> Structure may shift as Phase 1 refactoring progresses.

---

## Roadmap

### Phase 1 — Foundation (Now)
- Refine navigation: Home · Accommodations (Student / Exclusive) · Host · Partners
- Restructure room listings
- Add Partners showcase page
- Polish landing page and hero section
- Promo banner placeholder

### Phase 2 — Features (3–6 months)
- Reviews and ratings system
- Search and filter for stays and experiences
- Itinerary builder prototype

### Phase 3 — Monetization (6–12 months)
- Commission-based bookings
- Host subscription tiers (standard / premium visibility)
- Competitions, rewards, and community recognition features
- Sponsorship integrations

### Phase 4 — Scale (12+ months)
- Expand listings across South Africa
- Cross-platform integration with English language school site
- International expansion
- Host toolkit (photography, branding, marketing services)

---

## Business Model

| Revenue Stream | Description |
|---|---|
| Booking commissions | Percentage on confirmed bookings through the platform |
| Listing fees | One-time or recurring fees for hosts to list properties |
| Premium subscriptions | Enhanced visibility and analytics for hosts |
| Sponsorships | Brand sponsorship of competitions and featured itineraries |
| Value-added services | Photography, branding, and marketing packages for hosts |

---

## Key Differentiators

- **Dual-audience design** — both travelers and hosts are first-class users
- **Community layer** — stories, competitions, Top Traveler recognition, Featured Stay of the Month
- **FOMO mechanics** — rewards and visibility tied to active participation
- **Inclusive range** — Student (affordable) and Exclusive (luxury) accommodation tiers
- **Local-first** — built for the South African market with international expansion in mind

---

## Contributing

This is a solo-built prototype at this stage. If you're interested in collaborating, reach out via [travfica.com](https://travfica.com).

---

## License

All rights reserved. This codebase is proprietary and not open for redistribution or reuse without explicit permission.

---

*Built by Chloe | Travfica © 2025*
