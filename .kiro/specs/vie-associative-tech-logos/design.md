# Design Document

## Overview

This document describes the technical design for two enhancements to the Next.js + TypeScript portfolio:

1. **Vie Associative section** — a new cards grid on `app/parcours/page.tsx` showing club and association memberships, bilingual, glass-card styled.
2. **Tech logos in skill badges** — 16×16 CDN images injected into the `sbadge` spans for the first two skill categories on `app/competences/page.tsx`.

No new pages, routes, or third-party packages are introduced. All changes touch exactly three files: `lib/data.ts`, `app/parcours/page.tsx`, and `app/competences/page.tsx`.

---

## Architecture

### Affected Files

| File | Change |
|---|---|
| `lib/data.ts` | Add `AssociationItem` interface, `associations` array, and `techLogoMap` record |
| `app/parcours/page.tsx` | Import `associations`, add Vie Associative section below the extra training section |
| `app/competences/page.tsx` | Import `techLogoMap`, render `<img>` inside `sbadge` spans for categories 0 and 1 |

### Data Flow

```
lib/data.ts
  └─ AssociationItem interface
  └─ associations: AssociationItem[]   ──→  app/parcours/page.tsx
  └─ techLogoMap: Record<string,string> ──→  app/competences/page.tsx
```

---

## Data Layer — `lib/data.ts`

### `AssociationItem` Interface

```ts
export interface AssociationItem {
  nameFr: string
  nameEn: string
  period: string
  roleFr: string
  roleEn: string
}
```

### `associations` Array

```ts
export const associations: AssociationItem[] = [
  { nameFr: 'Scout Tunisien', nameEn: 'Scout Tunisien', period: '2011 — 2025', roleFr: 'Membre', roleEn: 'Member' },
  { nameFr: 'Club Python',    nameEn: 'Python Club',    period: '2024',         roleFr: 'Membre', roleEn: 'Member' },
  { nameFr: 'Club MTC',       nameEn: 'MTC Club',       period: '2023',         roleFr: 'Membre', roleEn: 'Member' },
]
```

### `techLogoMap` Record

CDN source: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/` for colored SVGs. Each URL points to the `original` or `plain` variant; the `plain-wordmark` variant is avoided to keep images recognisable at 16×16 px.

```ts
export const techLogoMap: Record<string, string> = {
  // Programming Languages
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'Python':     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'Java':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'C':          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
  'C#':         'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
  'VB.NET':     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg',
  'PHP':        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  'Node.js':    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  // Frameworks & Libraries
  'Next.js':      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  'React.js':     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'Angular':      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
  'Vue.js':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  'Spring Boot':  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  'Laravel':      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  'Flask':        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
  'ASP.NET':      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg',
  'Flutter':      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
}
```

---

## Vie Associative Section — `app/parcours/page.tsx`

### Placement

Appended after the existing "Formations Complémentaires" section, before the closing `</div>`.

### Import change

```ts
import { education, training, associations } from '@/lib/data'
```

### JSX structure

```tsx
{associations.length > 0 && (
  <>
    <SectionTitle
      className="mt-16"
      title={t('Vie', 'Associative')}
      highlight={t('Associative', 'Life')}
      subtitle={t('Activités associatives et bénévolat', 'Associative activities and volunteering')}
    />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
      {associations.map((item, i) => (
        <div
          key={i}
          className="glass-card"
          style={{ padding: 22 }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--bdg)')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--bd)')}
        >
          <p style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--v2)', marginBottom: 8 }}>
            {item.period}
          </p>
          <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 4, color: 'var(--tb)' }}>
            {t(item.nameFr, item.nameEn)}
          </h3>
          <p style={{ fontSize: '0.86rem', color: 'var(--tm)' }}>
            {t(item.roleFr, item.roleEn)}
          </p>
        </div>
      ))}
    </div>
  </>
)}
```

### Styling notes

- `glass-card` class provides the backdrop blur, border, shadow, and hover lift already defined in `globals.css`.
- All colors use CSS custom properties — no hardcoded hex values.
- The `onMouseEnter` / `onMouseLeave` pattern matches the existing education timeline cards exactly.
- The grid collapses to a single column on narrow viewports automatically via `auto-fit minmax(280px, 1fr)`.

---

## Tech Logos in Skill Badges — `app/competences/page.tsx`

### Import change

```ts
import { skillCategories, softSkills, languages, certifications, techLogoMap } from '@/lib/data'
```

### Badge rendering

The existing badge loop:

```tsx
{cat.items.map(item => (
  <span key={item} className="sbadge">{item}</span>
))}
```

Is replaced, for categories at index 0 and 1 only, with:

```tsx
{cat.items.map(item => (
  <span key={item} className="sbadge" style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
    {(i === 0 || i === 1) && techLogoMap[item] && (
      <img
        src={techLogoMap[item]}
        alt={item}
        width={16}
        height={16}
        loading="lazy"
        onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
      />
    )}
    {item}
  </span>
))}
```

The outer `<span>` gains `display: inline-flex` and `alignItems: center` so the image and text sit on the same baseline regardless of font rendering. The `gap: 5` matches the existing badge padding rhythm.

### Fallback behaviour

- If `techLogoMap[item]` is `undefined` (key absent), the `&&` short-circuit prevents the `<img>` from being rendered at all — no DOM node, no error.
- If the CDN is unreachable, `onError` sets `display: 'none'` on the broken `<img>` so the badge shows text only.

### Categories not affected

Categories at index ≥ 2 continue to render plain `<span className="sbadge">{item}</span>` — no `<img>` elements, no layout changes.

---

## Components and Interfaces

### Component Inventory

No new React components are introduced. The feature reuses existing components and extends two existing pages inline, consistent with the project's pattern of keeping simple UI inline rather than extracting components.

| Component / Module | Role in this feature |
|---|---|
| `SectionTitle` (existing) | Renders the section heading for the Vie Associative section — same usage as all other sections on the page |
| `TechTag` (existing, not modified) | Not used by this feature; listed for context |
| `LangContext.useLang()` | Provides the `t(fr, en)` translation helper used in both changed pages |
| `lib/data.ts` (extended) | Exports `AssociationItem`, `associations`, and `techLogoMap` consumed by the two pages |

### Interfaces Exported from `lib/data.ts`

#### `AssociationItem`

```ts
export interface AssociationItem {
  nameFr: string   // Association name in French
  nameEn: string   // Association name in English
  period: string   // Membership period — language-neutral (e.g. '2011 — 2025' or '2024')
  roleFr: string   // Member role in French
  roleEn: string   // Member role in English
}
```

#### `techLogoMap`

```ts
// Record<skillName, absoluteCdnUrl>
// Keys: exact strings matching items[] values in skillCategories[0] and skillCategories[1]
// Values: non-empty https:// URLs pointing to 16×16-compatible SVG icons
export const techLogoMap: Record<string, string>
```

### Page-level Prop / Import Contracts

#### `app/parcours/page.tsx`

- **Consumes**: `associations: AssociationItem[]` from `lib/data.ts`
- **Consumes**: `useLang().t` from `LangContext`
- **Renders** (new): a conditional `associations.length > 0` block containing one `SectionTitle` and a CSS-grid of association cards
- **No new props** — the page is a Next.js route component with no external props

#### `app/competences/page.tsx`

- **Consumes**: `techLogoMap: Record<string, string>` from `lib/data.ts`
- **Consumes**: `skillCategories: SkillCategory[]` (already imported)
- **Modifies**: badge rendering loop — adds an `<img>` inside `<span className="sbadge">` for category indices 0 and 1 only
- **No new props** — the page is a Next.js route component with no external props

---

## Data Models

### `AssociationItem` — full model

| Field | Type | Constraints | Example |
|---|---|---|---|
| `nameFr` | `string` | Non-empty; displayed as the card heading in French | `'Scout Tunisien'` |
| `nameEn` | `string` | Non-empty; displayed as the card heading in English | `'Scout Tunisien'` |
| `period` | `string` | Language-neutral; multi-year ranges use ` — ` (em-dash with spaces) | `'2011 — 2025'` |
| `roleFr` | `string` | Non-empty; displayed as the card sub-line in French | `'Membre'` |
| `roleEn` | `string` | Non-empty; displayed as the card sub-line in English | `'Member'` |

### `associations` — seeded data

```ts
[
  { nameFr: 'Scout Tunisien', nameEn: 'Scout Tunisien', period: '2011 — 2025', roleFr: 'Membre', roleEn: 'Member' },
  { nameFr: 'Club Python',    nameEn: 'Python Club',    period: '2024',         roleFr: 'Membre', roleEn: 'Member' },
  { nameFr: 'Club MTC',       nameEn: 'MTC Club',       period: '2023',         roleFr: 'Membre', roleEn: 'Member' },
]
```

### `techLogoMap` — key/value contract

| Key (skill name) | Value (CDN URL pattern) |
|---|---|
| `'JavaScript'` | `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg` |
| `'TypeScript'` | `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg` |
| `'Python'` | `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg` |
| `'Java'` | `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg` |
| `'C'` | `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg` |
| `'C#'` | `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg` |
| `'VB.NET'` | `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg` |
| `'PHP'` | `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg` |
| `'Node.js'` | `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg` |
| `'Next.js'` | `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg` |
| `'React.js'` | `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg` |
| `'Angular'` | `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg` |
| `'Vue.js'` | `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg` |
| `'Spring Boot'` | `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg` |
| `'Laravel'` | `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg` |
| `'Flask'` | `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg` |
| `'ASP.NET'` | `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg` |
| `'Flutter'` | `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg` |

All values are absolute HTTPS URLs. Keys match the exact `string` values used in `skillCategories[0].items` and `skillCategories[1].items` so that `techLogoMap[item]` lookups are always key-consistent.

### Relationship Diagram

```
lib/data.ts
│
├── AssociationItem (interface)
│     ↑ typed by
├── associations: AssociationItem[]  ──used by──▶  parcours/page.tsx
│
└── techLogoMap: Record<string,string>  ──used by──▶  competences/page.tsx
                                               ↑ keys must match
                          skillCategories[0].items + skillCategories[1].items
```

---

## Theme Compatibility

- The `techLogoMap` uses devicons `original` SVGs which are colored (not white-only), so they are visible on both dark and light backgrounds.
- The Next.js icon (`nextjs-original.svg`) is black on transparent, which may be hard to see in dark mode. As a mitigation, the `onError` fallback silently hides broken images, but for the Next.js icon specifically the implementation uses a white variant via the `nextjs-original-wordmark.svg` substitute or applies a CSS filter — **the implementation task SHALL use the plain white SVG for Next.js in dark mode**. The simplest approach is to use the `nextjs-plain.svg` which has a neutral appearance, or fall back to `cdn.simpleicons.org/nextdotjs` which renders white by default.
- No custom CSS classes are added; all styling is inline to stay consistent with the rest of the page components.

---

## Constraints and Decisions

| Decision | Rationale |
|---|---|
| Devicons CDN over simpleicons | Devicons provides colored technology-specific icons recognisable at 16px; simpleicons are monochromatic |
| Inline styles over new CSS classes | Every other component in the project uses inline styles; introducing new classes would break the pattern |
| `associations.length > 0` guard | Satisfies Requirement 5 AC5 — empty array hides the entire section including the heading |
| No new component file | The association cards are simple enough to render inline, matching how training cards are rendered |
| `loading="lazy"` on all logo `<img>` | The competences page can have 18 logos; lazy loading avoids 18 CDN requests blocking the initial render |


---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Bilingual rendering correctness

*For any* `AssociationItem` and any language setting (`'fr'` or `'en'`), the rendered association card must display exactly the localized name and role fields that correspond to the active language (`nameFr`/`roleFr` for French, `nameEn`/`roleEn` for English), while always displaying the language-neutral `period` field unchanged.

**Validates: Requirements 1.3, 2.3, 2.4**

### Property 2: Card count matches data length

*For any* `associations` array of length N ≥ 1, the `Vie_Associative_Section` must render exactly N association cards — no more, no fewer.

**Validates: Requirements 2.2**

### Property 3: Tech logo URL validity

*For any* key in `techLogoMap`, the corresponding value must be a non-empty string that starts with `'https://'`, ensuring every logo URL is an absolute HTTPS reference that can be used as an `<img src>`.

**Validates: Requirements 3.1**

### Property 4: Logo badge attribute completeness

*For any* skill item at category index 0 or 1 that has a `techLogoMap` entry, the rendered `<img>` element inside the badge must simultaneously satisfy all of: `src === techLogoMap[item]`, `width === 16`, `height === 16`, `alt === item`, and `loading === 'lazy'`.

**Validates: Requirements 4.1, 4.2, 4.3, 4.4, 5.4**

### Property 5: No logo in non-logo categories

*For any* skill item at category index ≥ 2, the rendered badge must contain no `<img>` element regardless of whether the item's name happens to appear as a key in `techLogoMap`.

**Validates: Requirements 4.6**

---

## Error Handling

### CDN image load failures

When a tech logo `<img>` cannot be fetched from the CDN (network error, 404, CORS), the `onError` handler sets `e.currentTarget.style.display = 'none'`. The badge continues to render the skill name as text, so the page remains fully usable without any broken-image indicators.

```tsx
onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
```

**Impact**: Visual degradation only — skill name remains visible. No JavaScript exception is surfaced to the user.

### Missing `techLogoMap` key

If a skill name is not a key in `techLogoMap`, the expression `techLogoMap[item]` evaluates to `undefined`. The conditional `techLogoMap[item] && <img ... />` short-circuits before the `<img>` is rendered. No DOM node is created and no error is thrown.

**Impact**: The badge renders as text-only — identical to how all badges in categories ≥ 2 render.

### Empty `associations` array

The JSX block for the Vie Associative section is wrapped in `{associations.length > 0 && (...)}`. If `lib/data.ts` exports an empty array, the entire section — including the `SectionTitle` heading — is suppressed from the DOM.

**Impact**: The parcours page renders without the section, which is the correct behavior per Requirement 5 AC5.

### TypeScript compile-time safety

- `AssociationItem` is a typed interface; omitting any required field in the `associations` array is a compile error.
- `techLogoMap` is typed as `Record<string, string>`; accessing an absent key returns `string | undefined` in strict mode, which is handled by the `&&` guard.
- No `any` casts are introduced.

---

## Testing Strategy

### Dual testing approach

Unit tests cover specific examples and edge cases. Property-based tests verify universal invariants across generated inputs. Both are needed for comprehensive coverage of this feature.

### Property-based testing

**Library**: [fast-check](https://github.com/dubzzz/fast-check) (TypeScript-native, works with Jest/Vitest).

Each property test runs a minimum of 100 iterations. Each test is tagged with a comment referencing its design property.

| Property | What is generated | What is asserted |
|---|---|---|
| Property 1 — Bilingual rendering | Random `AssociationItem` values + random language `'fr'\|'en'` | Rendered output contains the correct localized field |
| Property 2 — Card count | Random arrays of `AssociationItem` (length 1–20) | Number of rendered cards === array length |
| Property 3 — Logo URL validity | Iterate all keys of `techLogoMap` | Each value is a non-empty string starting with `'https://'` |
| Property 4 — Badge attribute completeness | Items from `skillCategories[0]` and `[1]` with known map entries | `<img>` has correct `src`, `width=16`, `height=16`, `alt`, `loading=lazy` |
| Property 5 — No logo in categories ≥ 2 | Items from `skillCategories[2..5]` | No `<img>` element in rendered badge |

Tag format for each test:
```ts
// Feature: vie-associative-tech-logos, Property N: <property_text>
```

### Unit tests (example-based)

| Test | Asserts |
|---|---|
| `associations` array has exactly 3 entries with correct field values | Data integrity of seeded data |
| `techLogoMap` contains all 9 programming language keys | Completeness check per Requirement 3.2 |
| `techLogoMap` contains all 9 framework keys | Completeness check per Requirement 3.3 |
| Render with `associations = []` hides section entirely | Edge case — Requirement 5 AC5 |
| Simulated `onError` on logo `<img>` sets `display: 'none'` | CDN failure fallback — Requirement 4.5 |
| SectionTitle renders with correct bilingual strings | Presence check — Requirement 2.1 |
| `glass-card` class and hover handlers present on association cards | Styling invariant — Requirement 2.6 |

### Integration / visual testing

- Manually verify dark/light theme toggle does not break card or badge appearance.
- Manually verify responsive collapse of the association grid on narrow viewports (< 280px column width threshold).
- Spot-check that devicons CDN URLs resolve to visible icons in both dark and light modes; use the `nextjs-plain.svg` fallback if the `original` variant is invisible on dark backgrounds.
