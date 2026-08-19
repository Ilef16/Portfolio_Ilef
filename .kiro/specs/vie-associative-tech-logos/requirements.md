# Requirements Document

## Introduction

This feature adds two enhancements to an existing Next.js + TypeScript portfolio:

1. **Vie Associative (Associative Life)** — a new section displaying club and association memberships, including the organization name, membership period, and role. The section is bilingual (FR/EN) and visually consistent with the rest of the portfolio.

2. **Tech logos on skill badges** — technology logo images sourced from a CDN (devicons or simpleicons) displayed alongside the skill name in each badge for the "Langages de Programmation" and "Frameworks & Bibliothèques" skill categories on the competences page.

Both features integrate with the existing data layer (`lib/data.ts`), translation system (`LangContext`), and visual design system (CSS variables, glass-card style, dark/light theming).

---

## Glossary

- **Portfolio_App**: The Next.js + TypeScript portfolio application.
- **Vie_Associative_Section**: The new UI section displaying club and association memberships.
- **Association_Item**: A single club/association entry containing a name, period, and role.
- **SkillBadge**: A rendered `<span>` element displaying a skill name, currently styled with the `sbadge` CSS class.
- **TechLogo**: A small inline image rendered from an external CDN URL alongside a skill name inside a SkillBadge.
- **CDN**: Content Delivery Network — specifically devicons (`cdn.jsdelivr.net/gh/devicons/devicon`) or simpleicons (`cdn.simpleicons.org`) used to serve technology logo images.
- **LangContext**: The bilingual translation context providing the `t(fr, en)` helper.
- **data.ts**: The centralised data file at `lib/data.ts` where all portfolio data is stored.
- **skillCategories**: The array in `data.ts` that holds skill category objects, each with `titleFr`, `titleEn`, and `items: string[]`.
- **competences_page**: The page at `app/competences/page.tsx` that renders skill categories, soft skills, languages, and certifications.
- **parcours_page**: The page at `app/parcours/page.tsx` that renders the academic timeline and additional training.
- **glass-card**: The existing CSS class used for card-style containers in the portfolio.
- **CSS_Variables**: Theme-aware CSS custom properties (`--tb`, `--tm`, `--v2`, `--bd`, `--c`) used for consistent theming.

---

## Requirements

### Requirement 1: Association Data Model

**User Story:** As a developer, I want a typed data structure for associations, so that association entries are consistent, type-safe, and easy to maintain.

#### Acceptance Criteria

1. THE `data.ts` SHALL export an `AssociationItem` interface with the fields: `nameFr: string`, `nameEn: string`, `period: string`, `roleFr: string`, `roleEn: string`.
2. THE `data.ts` SHALL export a named constant `associations` of type `AssociationItem[]` containing exactly the following three entries in order: `{ nameFr: 'Scout Tunisien', nameEn: 'Scout Tunisien', period: '2011 — 2025', roleFr: 'Membre', roleEn: 'Member' }`, `{ nameFr: 'Club Python', nameEn: 'Python Club', period: '2024', roleFr: 'Membre', roleEn: 'Member' }`, `{ nameFr: 'Club MTC', nameEn: 'MTC Club', period: '2023', roleFr: 'Membre', roleEn: 'Member' }`. Periods for single-year memberships are bare years (e.g., `'2024'`); multi-year ranges use an em-dash (e.g., `'2011 — 2025'`).
3. WHEN the language is French, THE `parcours_page` SHALL display `nameFr` and `roleFr` for each association entry. WHEN the language is English, THE `parcours_page` SHALL display `nameEn` and `roleEn` for each association entry. The `period` field SHALL be rendered as-is regardless of language.

---

### Requirement 2: Vie Associative Section on the Parcours Page

**User Story:** As a visitor, I want to see a dedicated "Vie Associative" section listing club memberships on the parcours page, so that I can learn about extracurricular involvement.

#### Acceptance Criteria

1. WHEN the parcours page is loaded, THE `parcours_page` SHALL render a `SectionTitle` with the bilingual title `t('Vie', 'Associative')` and highlight `t('Associative', 'Life')`, and a bilingual subtitle `t('Activités associatives et bénévolat', 'Associative activities and volunteering')`.
2. THE `Vie_Associative_Section` SHALL render one card per `Association_Item` in the `associations` array, laid out in a CSS grid with `repeat(auto-fit, minmax(280px, 1fr))` column sizing.
3. WHEN the language is set to French, THE `Vie_Associative_Section` SHALL display `nameFr` and `roleFr` for each entry.
4. WHEN the language is set to English, THE `Vie_Associative_Section` SHALL display `nameEn` and `roleEn` for each entry.
5. THE `Vie_Associative_Section` SHALL display the `period` field (language-neutral) on each card, styled with `color: var(--v2)` in uppercase, and the name styled with `color: var(--tb)`, and the role styled with `color: var(--tm)`.
6. THE `Vie_Associative_Section` SHALL use the `glass-card` CSS class for each association card. On mouse enter, the card's `borderColor` SHALL change to `var(--bdg)`; on mouse leave it SHALL revert to `var(--bd)`.
7. THE `Vie_Associative_Section` SHALL use only CSS custom properties (`var(--v2)`, `var(--tb)`, `var(--tm)`, `var(--bd)`, `var(--bdg)`) for all text and border colors — no hardcoded hex, RGB, or named color values.

---

### Requirement 3: Tech Logo Data Model

**User Story:** As a developer, I want a mapping of skill names to CDN logo URLs, so that the competences page can display technology logos without hardcoding URLs in the UI layer.

#### Acceptance Criteria

1. THE `data.ts` SHALL export a `techLogoMap` constant of type `Record<string, string>` where each value is a non-empty absolute URL string pointing to a technology logo image on an external CDN.
2. THE `techLogoMap` SHALL include entries for all items in the `Langages de Programmation` category: `JavaScript`, `TypeScript`, `Python`, `Java`, `C`, `C#`, `VB.NET`, `PHP`, `Node.js`.
3. THE `techLogoMap` SHALL include entries for all items in the `Frameworks & Bibliothèques` category: `Next.js`, `React.js`, `Angular`, `Vue.js`, `Spring Boot`, `Laravel`, `Flask`, `ASP.NET`, `Flutter`.
4. IF a skill name is not a key in `techLogoMap`, THEN the badge for that skill SHALL render as text-only — the `<img>` element SHALL NOT be rendered and no JavaScript error SHALL be thrown.

---

### Requirement 4: Tech Logos in Skill Badges

**User Story:** As a visitor, I want to see a small technology logo next to each skill name in the Programming Languages and Frameworks & Libraries categories, so that I can visually identify technologies at a glance.

#### Acceptance Criteria

1. WHEN the competences page is loaded, THE `competences_page` SHALL render an `<img>` element inside each skill badge `<span className="sbadge">` for items in the `Langages de Programmation` (index 0) and `Frameworks & Bibliothèques` (index 1) skill categories.
2. THE `<img>` element's `src` SHALL be the value of `techLogoMap[item]` where `item` is the skill name string. IF `techLogoMap[item]` is `undefined`, no `<img>` SHALL be rendered for that badge.
3. THE `<img>` element SHALL have `width="16"` and `height="16"` attributes to maintain badge layout consistency.
4. THE `<img>` element SHALL have an `alt` attribute set to the skill name for accessibility.
5. WHEN a `<img>` fails to load from the CDN, the element's `display` style SHALL be set to `'none'` (via an `onError` handler) so the broken image indicator is not visible to the user.
6. THE skill badges for categories with index ≥ 2 (Data Science & AI, Databases, DevOps & Tools, Quality & Testing) SHALL NOT contain any `<img>` element.

---

### Requirement 5: Visual and Accessibility Standards

**User Story:** As a visitor, I want the new UI elements to look and behave consistently with the rest of the portfolio, so that the experience feels cohesive.

#### Acceptance Criteria

1. THE `Vie_Associative_Section` SHALL be responsive: on viewports where multiple cards fit, cards SHALL be arranged in a multi-column grid using `repeat(auto-fit, minmax(280px, 1fr))`; on narrow viewports the grid SHALL collapse to a single column.
2. On viewports ≥ 640px wide, each skill badge in the `Langages de Programmation` and `Frameworks & Bibliothèques` categories SHALL display the `<img>` and the skill name text in a single horizontal row, with the image appearing before the text.
3. WHEN the dark or light theme is active, THE `Vie_Associative_Section` and updated skill badges SHALL use only CSS custom properties (`var(--tb)`, `var(--tm)`, `var(--v2)`, `var(--bd)`, `var(--bdg)`) for colors — no hardcoded hex, RGB, or named color values SHALL be present.
4. THE `<img>` elements for tech logos SHALL have the attribute `loading="lazy"` to avoid blocking page render with CDN requests.
5. IF the `associations` array is empty, THEN THE `parcours_page` SHALL NOT render the `Vie_Associative_Section` `SectionTitle` heading or any association cards.
