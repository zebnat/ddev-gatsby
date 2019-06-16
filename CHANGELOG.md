# Changelog

Changes tracked and documented for each release about the website [danieldev.es/en/](https://danieldev.es/en/)

## Untagged

Changes for the next tag (next: v1.6.7)

### Added/Feature

- Lots of Content added for the projects section
- Disclaimer message for private projects when no public code is available
- Plugin gatsby-plugin-catch-links support for markdown local links
- Auto disclaimer when detects private-project tag within projects
- Added sitemap support by using gatsby-plugin-sitemap
- Added tag filtering support for the projects list

### Fixed/Changed

- Languages order on topbar
- Improved design styles
- Improved README
- Changed remark images plugin config, more quality, enabled webp.
- Fixed some docker nginx conf issues
- Fixed private disclaimer in projects, now working properly

### Removed

- release binaries, now git tags is the proper option for deployment

## Tags

v1.0.0 - 2019-01-17

New year, new release! This is a functional PWA website made with gatsby, features include

- Navigation Menu : A responsive menu to reach the site categories
- Language Switcher : A simple way to switch to other languages
- Homepage (en, es) : Summary about who I am, what I do, my skills and projects I've made, Academic papers, etc
- Skills page (en, es) : Fully featured, shows skill levels in a fashionable way
- About page (en, es) : Info about @me, photo auto-carrousel, etc
- Projects page (en, es) : Markdown driven content (no content yet)
- Footer layout component
