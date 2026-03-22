# Skills 3D Cloud Design

## Goal

Add a Three.js-based interactive tag cloud at the top of the skills page while preserving the existing skill blocks below.

## User Requirements

- Render all skills in a 3D cloud.
- More advanced skills should appear larger and with stronger glow.
- Cloud rotates automatically and also rotates when the user drags.
- Keep current skills catalog blocks below the 3D renderer.
- Add new skills from `docs/linkedin-updated-info.md`.

## Architecture

- Add a client component `SkillsTagCloud3D` that uses `@react-three/fiber` + `@react-three/drei`.
- Build a data utility `getSkillCloudItems()` to flatten all skill categories into a cloud-ready dataset.
- Render 3D cloud on both skills routes (`/tecnologias/`, `/en/skills/`) above `SkillsCatalog`.

## Visual Rules

- Skill `level` controls:
  - font size
  - outline intensity (glow proxy)
- Skill `isRecent` controls color emphasis.
- Category controls base color family (languages/frameworks/tools/concepts).

## Interaction Rules

- `OrbitControls` with:
  - drag rotation enabled
  - zoom disabled
  - pan disabled
  - idle auto-rotation enabled

## Content Model Update

New skills added from LinkedIn update include leadership, architecture, CI/CD, cloud, observability, and AI orchestration topics.

## Constraints

- Keep static export and route parity unchanged.
- Keep existing `SkillsCatalog` blocks intact below 3D cloud.
- Maintain bilingual compatibility.
