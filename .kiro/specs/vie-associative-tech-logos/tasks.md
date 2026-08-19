# Implementation Plan: Vie Associative & Tech Logos

## Overview

Implement two enhancements to the Next.js + TypeScript portfolio:
1. Extend `lib/data.ts` with the `AssociationItem` interface, `associations` array, and `techLogoMap` record.
2. Add a "Vie Associative" section to `app/parcours/page.tsx`.
3. Inject tech logo `<img>` elements inside skill badges for categories 0 and 1 on `app/competences/page.tsx`.
4. Validate all five correctness properties with fast-check property-based tests.

---

## Tasks

- [ ] 1. Extend the data layer in `lib/data.ts`
  - [ ] 1.1 Add `AssociationItem` interface and `associations` array
    - Export the `AssociationItem` interface with fields `nameFr`, `nameEn`, `period`, `roleFr`, `roleEn` (all `string`)
    - Export `const associations: AssociationItem[]` with the three seeded entries (Scout Tunisien 2011—2025, Club Python 2024, Club MTC 2023)
    - _Requirements: 1.1, 1.2_

  - [ ] 1.2 Add `techLogoMap` record
    - Export `const techLogoMap: Record<string, string>` with the 18 CDN entries covering all items in `skillCategories[0]` and `skillCategories[1]`
    - Use `devicons` CDN URLs (`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/…`) for colored SVGs
    - All values must be non-empty absolute HTTPS URLs
    - _Requirements: 3.1, 3.2, 3.3_

- [ ] 2. Add the Vie Associative section to `app/parcours/page.tsx`
  - [ ] 2.1 Update import and render the Vie Associative section
    - Add `associations` to the existing import from `@/lib/data`
    - Append the section below the existing "Formations Complémentaires" section, wrapped in `{associations.length > 0 && (…)}`
    - Render a `SectionTitle` with `title={t('Vie', 'Associative')}`, `highlight={t('Associative', 'Life')}`, and the bilingual subtitle, with `className="mt-16"`
    - Render a CSS grid (`repeat(auto-fit, minmax(280px, 1fr))`, `gap: 20`) of `glass-card` association cards
    - Each card shows `period` (uppercase, `color: var(--v2)`), `t(nameFr, nameEn)` (`color: var(--tb)`), and `t(roleFr, roleEn)` (`color: var(--tm)`)
    - Wire `onMouseEnter` / `onMouseLeave` hover handlers to toggle `borderColor` between `var(--bdg)` and `var(--bd)`, matching existing education cards
    - Use only CSS custom properties — no hardcoded hex/rgb values
    - _Requirements: 1.3, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 5.1, 5.3, 5.5_

- [ ] 3. Checkpoint — build passes and Vie Associative section renders
  - Ensure all TypeScript types are satisfied (`npx tsc --noEmit`), ask the user if questions arise.

- [ ] 4. Inject tech logos into skill badges on `app/competences/page.tsx`
  - [ ] 4.1 Update import and modify badge rendering loop
    - Add `techLogoMap` to the existing import from `@/lib/data`
    - Replace the inner `<span key={item} className="sbadge">{item}</span>` with a version that adds `display: inline-flex`, `alignItems: center`, `gap: 5` to the span's inline style
    - For category indices 0 and 1 only (`i === 0 || i === 1`), conditionally render `<img>` when `techLogoMap[item]` is defined: `src={techLogoMap[item]}`, `width={16}`, `height={16}`, `alt={item}`, `loading="lazy"`, and an `onError` handler that sets `e.currentTarget.style.display = 'none'`
    - Categories at index ≥ 2 must not contain any `<img>` element
    - _Requirements: 3.4, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 5.2, 5.3, 5.4_

- [ ] 5. Checkpoint — build passes and tech logos render in badges
  - Ensure all TypeScript types are satisfied (`npx tsc --noEmit`), ask the user if questions arise.

- [ ] 6. Set up the fast-check testing framework
  - [ ] 6.1 Install fast-check, Vitest, and related packages
    - Install `vitest`, `@vitejs/plugin-react`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom`, and `fast-check` as dev dependencies
    - Add a `vitest.config.ts` at the project root configured for the `jsdom` environment and React plugin
    - Add a `"test": "vitest --run"` script to `package.json`
    - _Requirements: (infrastructure for all property tests)_

- [ ] 7. Write property-based tests in `__tests__/vie-associative-tech-logos.test.tsx`
  - [ ] 7.1 Write property test for Property 1 — Bilingual rendering correctness
    - Generate random `AssociationItem` values (all fields non-empty strings) and a random language `'fr' | 'en'`
    - Assert: when lang is `'fr'` the rendered card displays `nameFr` and `roleFr`; when `'en'` it displays `nameEn` and `roleEn`; `period` is always displayed unchanged
    - Tag: `// Feature: vie-associative-tech-logos, Property 1: Bilingual rendering correctness`
    - **Property 1: Bilingual rendering correctness**
    - **Validates: Requirements 1.3, 2.3, 2.4**

  - [ ] 7.2 Write property test for Property 2 — Card count matches data length
    - Generate random arrays of `AssociationItem` with length 1–20
    - Assert: the rendered section contains exactly N association cards
    - Tag: `// Feature: vie-associative-tech-logos, Property 2: Card count matches data length`
    - **Property 2: Card count matches data length**
    - **Validates: Requirements 2.2**

  - [ ] 7.3 Write property test for Property 3 — Tech logo URL validity
    - Iterate all keys of `techLogoMap`
    - Assert: each value is a non-empty string starting with `'https://'`
    - Tag: `// Feature: vie-associative-tech-logos, Property 3: Tech logo URL validity`
    - **Property 3: Tech logo URL validity**
    - **Validates: Requirements 3.1**

  - [ ] 7.4 Write property test for Property 4 — Logo badge attribute completeness
    - Collect all items in `skillCategories[0].items` and `skillCategories[1].items` that are keys in `techLogoMap`
    - Assert: the rendered `<img>` inside the badge simultaneously satisfies `src === techLogoMap[item]`, `width === 16`, `height === 16`, `alt === item`, and `loading === 'lazy'`
    - Tag: `// Feature: vie-associative-tech-logos, Property 4: Logo badge attribute completeness`
    - **Property 4: Logo badge attribute completeness**
    - **Validates: Requirements 4.1, 4.2, 4.3, 4.4, 5.4**

  - [ ] 7.5 Write property test for Property 5 — No logo in non-logo categories
    - Collect all items from `skillCategories[2]` through `skillCategories[5]`
    - Assert: no `<img>` element is present in any rendered badge for these items
    - Tag: `// Feature: vie-associative-tech-logos, Property 5: No logo in non-logo categories`
    - **Property 5: No logo in non-logo categories**
    - **Validates: Requirements 4.6**

- [ ] 8. Final checkpoint — all tests pass
  - Run `npm test` (or `npx vitest --run`) and ensure all property-based tests pass. Ask the user if questions arise.

---

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- All three files touched (`lib/data.ts`, `app/parcours/page.tsx`, `app/competences/page.tsx`) match the design scope exactly — no new routes, no new component files
- Property tests use [fast-check](https://fast-check.dev) (TypeScript-native) with a minimum of 100 iterations per property
- The `loading="lazy"` attribute on `<img>` elements avoids blocking the initial render with up to 18 CDN requests
- The `onError` handler ensures CDN failures degrade gracefully to text-only badges with no broken-image indicators

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2"] },
    { "id": 1, "tasks": ["2.1", "4.1", "6.1"] },
    { "id": 2, "tasks": ["7.1", "7.2", "7.3", "7.4", "7.5"] }
  ]
}
```
