# Web and Mobile Web Component Library & Theme

Organization themed components for all web and mobile web (not native) applications should live in this repository and it should be considered the engineer's source of truth for all [Material UI Base Components](https://mui.com/material-ui/getting-started/)

## Design

Source of truth for all components should be the organization design system found [here(TBD)]() that is maintained by the design team -- Updates to this Figma should be notified to the engineering team as needed to reflect updates here.

Updates to the design system should be reflected in this repository as soon as possible.

## Developing This Library

Generally this library will be developed only as the design system as updated, however during initial design system creation there may be opportunities for parallel development 

When developing components in parallel with an application that may be introducing new components that have not been created in this repo, this repo should be linked locally to provide ease of development using [pnpm link](https://pnpm.io/cli/link)

`main` - Should only include finalized code -- This branch has a CI step to publish the NPM package to our internal NPM directory as well as build a live page to interface with the design team easily.

All other branches should be considered development branches and PR'd into `main` as needed with the required reviews, reviews should include a design team member

## Developing With This Library

All organizational applications that are to use the organization wide design system should use this library as a dependency and import `OrganizationTheme` to be used as the Material Theme from the primary exports of this package.

This library should be published as a private org's repository via NPM
