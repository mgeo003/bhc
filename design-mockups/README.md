# BehavioralHealth Connect - Design Mockups

Interactive HTML/CSS prototypes for the BehavioralHealth Connect platform.

**Version:** 1.0  
**Date:** January 2025  
**Status:** MVP Mockups Complete

---

## 📋 Overview

This repository contains comprehensive interactive design mockups for BehavioralHealth Connect, a B2B SaaS platform connecting referring clinicians with behavioral health treatment providers.

These are functional HTML/CSS prototypes demonstrating complete user flows for:
- **Clinicians:** Search, discovery, and review
- **Providers:** Profile management and bed availability updates
- **Admins:** Platform management (in progress)

---

## 🚀 Getting Started

### Viewing the Mockups

1. Open `index.html` in any modern web browser
2. Navigate through the various user flows
3. All interactions are functional using vanilla JavaScript

**No build process required** - these are static HTML files using Tailwind CSS via CDN.

### Recommended Browsers

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 📁 Project Structure

```
design-mockups/
├── index.html                    # Navigation hub for all mockups
├── design-system.html           # Component library showcase
├── README.md                    # This file
│
├── assets/
│   ├── styles.css              # Custom styles (minimal)
│   ├── scripts.js              # Interactive JavaScript
│   └── images/                 # Placeholder images
│
├── auth/
│   ├── login.html              # Universal login
│   ├── register-clinician.html # Clinician registration (3 steps)
│   └── register-provider.html  # Provider registration (3 steps)
│
├── clinician/
│   ├── dashboard.html          # Clinician home with quick search
│   ├── search-results.html     # Search with filters and results
│   ├── provider-detail.html    # Comprehensive provider profile
│   └── submit-review.html      # Review submission form
│
└── provider/
    └── dashboard.html          # Provider home with availability widget
```

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#0066CC` | Primary actions, links, branding |
| Secondary Teal | `#00A896` | Accents, secondary elements |
| Success Green | `#059669` | Available beds, positive states |
| Warning Amber | `#F59E0B` | Limited availability, caution |
| Error Red | `#DC2626` | No beds, errors, critical states |
| Neutrals | `#F9FAFB` to `#1F2937` | Backgrounds, text, borders |

### Typography

- **Font Family:** Inter (Google Fonts)
- **Base Size:** 14px
- **Scale Ratio:** 1.125
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Components

All components are showcased in `design-system.html`:

- **Buttons:** Primary, Secondary, Tertiary, Destructive (Small, Medium, Large)
- **Forms:** Inputs, Selects, Multi-select, Checkboxes, Radio, Toggle, Textarea
- **Cards:** Provider cards, Stat cards, Review cards, Notification cards
- **Badges:** Status (Available/Limited/Full), Insurance tags, Level of care labels
- **Navigation:** Top nav, Breadcrumbs, Tabs, Pagination
- **Feedback:** Alerts, Toasts, Loading states, Skeleton loaders, Empty states
- **Data Display:** Tables, Rating stars, Progress bars
- **Modals:** Dialog, Confirmation, Drawer, Dropdown, Tooltip

---

## 🧭 User Flows

### Authentication Flow

**Entry Point:** `auth/login.html`

1. **Login** → Universal login for all user types
2. **Clinician Registration** → 3-step process with email verification
   - Step 1: Account info (email, password)
   - Step 2: Professional info (name, title, organization)
   - Step 3: Email verification confirmation
3. **Provider Registration** → 3-step process with facility verification
   - Step 1: Facility info (name, email, password)
   - Step 2: Verification (Recovery.com or LegitScript)
   - Step 3: Pending verification confirmation

### Clinician Flow

**Entry Point:** `clinician/dashboard.html`

1. **Dashboard**
   - Hero search form (location, radius, insurance, level of care)
   - Recently viewed providers
   - Saved searches
   - Notifications

2. **Search Results** (`search-results.html`)
   - Left sidebar: Advanced filters (location, availability, insurance, level of care, demographics, specialties, rating)
   - Center: Provider cards with availability, ratings, contact info
   - Sorting: Distance, Rating, Recently Updated
   - Save search functionality

3. **Provider Detail** (`provider-detail.html`)
   - Hero: Availability status, rating, contact buttons
   - Tabbed content:
     - Overview: Description, services, demographics, amenities
     - Insurance & Payment: Accepted insurance by category
     - Contact & Location: Full contact info, map
     - Reviews: Rating breakdown, review list
     - Details: Facility info, accreditations, staff

4. **Submit Review** (`submit-review.html`)
   - Responsiveness rating (1-5 stars)
   - Patient acceptance (positive/negative/neutral)
   - Overall experience (1-5 stars)
   - Written comment (optional, 500 char max)
   - Anonymous option
   - Guidelines and moderation notice

### Provider Flow

**Entry Point:** `provider/dashboard.html`

1. **Dashboard**
   - Quick stats: Profile views, Search appearances, Contact clicks, Average rating
   - **Bed Availability Widget** (PROMINENT)
     - Quick update for 4 bed types with +/- buttons
     - Touch-friendly 44x44px targets
     - Auto-save functionality
     - Last updated timestamp
     - Warning if >24 hours stale
   - Recent activity feed
   - Recent reviews
   - Profile completion progress
   - Quick actions (Edit Profile, View Public Profile, Settings)

2. **Additional Pages** (In Development)
   - Profile Setup/Edit: Multi-step wizard or tabbed editor
   - Availability Manager: Detailed bed management with history
   - Analytics: Charts and insights for profile performance

### Admin Flow

**Entry Point:** Admin dashboard (in progress)

Planned pages:
- Admin Dashboard: Platform metrics, alerts, recent activity
- Verification Queue: Provider verification workflow
- Review Moderation: Flagged content management

---

## 🔧 Technical Details

### Technologies

- **HTML5:** Semantic markup throughout
- **Tailwind CSS:** Via CDN (no build process needed)
- **JavaScript:** Vanilla JS for interactions (no frameworks)
- **Fonts:** Inter via Google Fonts CDN
- **Icons:** Heroicons (inline SVG)

### Responsive Breakpoints

```css
Mobile:  < 640px
Tablet:  640px - 1024px
Desktop: > 1024px
```

### Accessibility Features

- ✅ Semantic HTML5 elements
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ WCAG AA color contrast (minimum)
- ✅ Touch-friendly targets (44x44px minimum)
- ✅ Focus indicators
- ✅ Screen reader considerations

### Interactive Features

All implemented with vanilla JavaScript in `assets/scripts.js`:

- **Form Validation:** Real-time validation with error messages
- **Modal Management:** Open/close with backdrop click handling
- **Toast Notifications:** 4 types (info, success, warning, error)
- **Tab Navigation:** Switching with proper ARIA attributes
- **Star Ratings:** Interactive hover and click states
- **Dropdown Menus:** Click outside to close
- **Password Toggle:** Show/hide password functionality
- **Increment/Decrement:** For bed count updates
- **Character Counter:** For textareas with limits

---

## 📊 Features Demonstrated

### Core Functionality

- [x] User authentication (login, registration flows)
- [x] Advanced search with multiple filters
- [x] Real-time bed availability display
- [x] Provider profiles with comprehensive information
- [x] Rating and review system
- [x] Bed availability management widget
- [x] Responsive mobile-first design
- [x] Toast notifications for user feedback
- [x] Modal dialogs for forms and confirmations
- [x] Tab navigation for content organization

### UX Patterns

- [x] Progressive disclosure (multi-step forms)
- [x] Optimistic UI updates (bed count changes)
- [x] Skeleton loaders for loading states
- [x] Empty states with helpful messaging
- [x] Breadcrumb navigation
- [x] Saved searches for quick access
- [x] Sticky headers and footers
- [x] Touch-friendly controls (especially bed updates)
- [x] Status indicators (color-coded availability)
- [x] Contextual help and guidelines

---

## 🎯 Design Principles

### 1. Clarity First
Information hierarchy emphasizes critical data (availability, contact info, ratings). Large, clear typography and generous whitespace guide attention.

### 2. Speed Perception
Optimistic updates, skeleton loaders, and instant feedback create the perception of a fast, responsive application even in mockup form.

### 3. Mobile-Optimized
Touch-friendly targets, thumb-zone considerations, and simplified mobile layouts ensure usability on smartphones and tablets.

### 4. Accessibility
WCAG AA compliance with proper contrast, keyboard navigation, semantic HTML, and ARIA labels where needed.

### 5. Professional & Trustworthy
Healthcare-appropriate design with a clean, minimal aesthetic. Not overly playful - conveys reliability and professionalism.

---

## 🚧 In Progress / Future Enhancements

### Provider Experience
- [ ] Multi-step profile setup wizard
- [ ] Profile edit interface (tabbed or accordion)
- [ ] Detailed availability manager with history log
- [ ] Analytics dashboard with charts
- [ ] Bulk bed update functionality

### Admin Experience
- [ ] Admin dashboard with platform metrics
- [ ] Provider verification queue interface
- [ ] Review moderation system
- [ ] User management tools

### Additional Features
- [ ] Map integration (Mapbox GL JS placeholder shown)
- [ ] Chart.js integration for analytics
- [ ] Photo gallery uploads
- [ ] Video tour embeds
- [ ] Advanced notification center
- [ ] Organization accounts UI

---

## 📝 Usage Notes

### For Developers

These mockups serve as:
1. **Visual Specification:** Pixel-perfect reference for implementation
2. **Interaction Guide:** Demonstrates expected UI behavior
3. **Component Library:** Reusable patterns for development
4. **User Flow Documentation:** Complete user journeys mapped out

### For Stakeholders

Use these mockups to:
1. **Validate User Experience:** Walk through complete workflows
2. **Gather Feedback:** Share with potential users for input
3. **Align on Vision:** Ensure team agreement on design direction
4. **Plan Development:** Prioritize features based on demonstrated flows

### Customization

To modify:
1. **Colors:** Update Tailwind config in each HTML file's `<script>` tag
2. **Fonts:** Change Google Fonts import in `<head>`
3. **Content:** Edit HTML directly - all text is inline
4. **Interactions:** Modify `assets/scripts.js` for behavior changes
5. **Styles:** Add custom CSS to `assets/styles.css`

---

## 🔗 Related Documents

- **Project Requirements:** `../BehavioralHealth_Connect_Project_Plan.md`
- **Development Plan:** See main project README
- **Technical Architecture:** Refer to PRD Section 6

---

## ✅ Success Criteria

These mockups meet the following criteria:

- ✅ All major user flows represented
- ✅ Consistent design system across all screens
- ✅ Mobile-responsive layouts
- ✅ Accessibility considerations implemented
- ✅ Interactive elements functional
- ✅ Realistic data and content
- ✅ Professional, healthcare-appropriate aesthetic
- ✅ Clear information hierarchy
- ✅ Touch-friendly targets (44x44px minimum)
- ✅ Fast-loading (< 1MB per page)

---

## 📞 Support

For questions or feedback about these mockups:
- Review the design system documentation (`design-system.html`)
- Check the project requirements document
- Refer to component usage examples in existing pages

---

## 📜 License

These design mockups are confidential and proprietary to the BehavioralHealth Connect project. Not for distribution or reproduction without permission.

---

**Created:** January 2025  
**Last Updated:** January 2025  
**Status:** MVP Complete, Ready for Development

