---
name: Lumina Academic
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006780'
  on-secondary: '#ffffff'
  secondary-container: '#76dcff'
  on-secondary-container: '#006077'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#07006c'
  on-tertiary-container: '#7073ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#b7eaff'
  secondary-fixed-dim: '#6cd3f7'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e61'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered for a premium AI-powered education ecosystem, balancing professional authority with an approachable, modern SaaS sensibility. The visual language is rooted in **Modern Corporate Minimalism**, utilizing expansive white space to reduce cognitive load for educators while employing high-end polish to signify technological sophistication.

The emotional response should be one of "effortless intelligence." The interface feels quiet and organized, allowing AI-generated insights and educational content to take center stage. The style leverages subtle glassmorphism and soft tonal layering to create a sense of depth without clutter.

## Colors

The palette is anchored by **Deep Navy (#0F172A)** and **Indigo (#1E3A8A)** to establish credibility and academic rigor. **Teal and Cyan (#0891B2, #14B8A6)** serve as functional secondary colors for success states and interactive progress elements, providing a refreshing contrast to the dark primaries.

**Indigo and Violet (#6366F1, #7C3AED)** are reserved for AI-augmented features and high-priority call-to-actions, signaling "intelligence" and innovation. The background strategy utilizes **Off-white (#F8FAFC)** as the canvas, with pure white **(#FFFFFF)** reserved for interactive elevated containers. Subtle cyan and violet tints may be used in low-opacity gradients (2-5% opacity) to denote specialized AI zones.

## Typography

This design system employs a dual-font strategy. **Plus Jakarta Sans** is used for headlines to provide a friendly, modern, and slightly rounded geometric personality. High weights (700-800) are essential for establishing a clear information hierarchy.

**Inter** is used for all body copy and UI labels to ensure maximum legibility and a systematic, functional feel. Body text should maintain a medium-to-high contrast against the background to support long-form reading in an educational context. Line heights are generous to prevent visual crowding in data-heavy views.

## Layout & Spacing

The layout follows a **Fixed-Fluid hybrid grid**. On desktop, content is contained within a 1280px max-width 12-column grid. On mobile and tablet, the layout shifts to a fluid 4-column and 8-column grid respectively.

Spacing follows a strict 4px base unit. The "Lumina" feel is achieved through **generous outer margins** and **internal padding** that exceeds standard density settings. Use `stack-lg` (32px) for separating major content sections and `stack-md` (16px) for internal card components. Empty states and dashboards should prioritize "breathable" layouts to keep the teacher's focus on essential tasks.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and **Tonal Layers**. Surfaces do not use heavy dark shadows; instead, they use extra-diffused, multi-layered shadows with a slight Indigo-Navy tint to remain "airy."

- **Level 0 (Base):** Off-white background (#F8FAFC).
- **Level 1 (Cards/Sections):** Pure white (#FFFFFF) with a `4px blur, 2px Y-offset` shadow at 4% opacity.
- **Level 2 (Hover/Active):** Pure white (#FFFFFF) with a `12px blur, 6px Y-offset` shadow at 8% opacity.
- **Level 3 (Modals/Popovers):** Pure white (#FFFFFF) with a `24px blur, 12px Y-offset` shadow at 12% opacity.

Interactions should feel tactile; as a teacher hovers over a lesson card, the shadow should expand softly, and the element should lift slightly (-2px Y-translation).

## Shapes

The shape language is sophisticated and diverse, using specific radii to denote component roles. Large containers and cards use a **20px radius** to feel soft and high-end. Media covers (16:9) nested within cards use a slightly smaller **16px radius** to create a nested visual harmony (the "inner-radius rule"). 

Buttons use a **12px radius**, providing a distinct look that is neither too sharp nor too playful. Functional UI elements like tags, category filters, and status badges must use the **Pill (999px)** shape to differentiate them from actionable cards or containers.

## Components

- **App Cards:** Utilize a 16:9 aspect ratio for cover images. The title should be in `headline-md` using the Primary Deep Navy. The footer of the card should contain metadata in `label-sm`.
- **Search Bars:** Pure white background, 12px border radius, with a persistent soft shadow. The input text should use `body-md` with a subtle Teal icon prefix.
- **Pill Filters:** Backgrounds should be light Indigo-tinted (#E0E7FF) for inactive states and solid Primary Deep Navy for active states with white text.
- **Buttons:** 
    - *Primary:* Deep Navy background, 12px radius, white text.
    - *Secondary:* Transparent background with a 1.5px border of Teal (#0891B2).
    - *AI-Action:* Gradient background (Indigo to Violet), white text, with a subtle glow shadow.
- **Input Fields:** 12px radius, 1.5px border in #E2E8F0. On focus, the border transitions to Teal (#0891B2) with a 2px outer glow.
- **Lists:** Clean, borderless rows separated by horizontal rules in #F1F5F9. Each row should have a subtle hover state using #F8FAFC.