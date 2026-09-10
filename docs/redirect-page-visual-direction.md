# Visual Direction --- Redirect Page

## Context

This redirect page is part of the same visual identity used across the
**VC. / vlopcas.dev** ecosystem.

The objective is to keep the experience minimal, technical, premium, and
consistent with the existing visual language: dark graphite surfaces,
warm orange light, strong negative space, thin geometric lines, and
restrained motion.

The redirect screen should feel like a natural extension of the website
rather than a generic loading screen.

------------------------------------------------------------------------

## 1. Background

Do **not** use the hero image itself as the redirect background. The
page should be lighter and faster, reproducing the visual language
through CSS.

### Dark theme

Recommended background:

``` css
#080B0E
```

Alternative:

``` css
#0A0D10
```

Avoid absolute black (`#000000`). A slightly lifted graphite-black
preserves the depth of the identity.

### Light theme

Recommended background:

``` css
#F7F7F5
```

Alternative:

``` css
#FAFAF8
```

Avoid pure white when possible. A subtle off-white keeps the light theme
softer and closer to the visual character of the dark version.

### Accent color

Use orange as the primary and essentially only accent color:

``` css
#FF6500
```

The orange should appear selectively in the logo dot, loading animation,
and very subtle glow effects.

------------------------------------------------------------------------

## 2. Central Composition

Keep the entire interface centered both vertically and horizontally.

Recommended hierarchy:

``` text
VC.

Redirecionando...

━━━━━━━━━━━━━━━━
```

The composition should contain generous negative space.

### Logo

Use the **VC.** mark as the primary visual element.

-   `VC` follows the foreground color of the active theme.
-   The dot remains orange.
-   Keep the logo clearly larger than every other element.
-   Do not add additional branding text unless necessary.

### Status text

Use:

``` text
Redirecionando...
```

The text should be secondary to the logo.

Recommended characteristics:

-   small or medium size;
-   regular/light font weight;
-   neutral gray;
-   slight letter spacing if consistent with the website;
-   no oversized messaging.

Avoid verbose copy such as:

> Aguarde enquanto preparamos sua experiência.

The redirect should happen quickly, so additional explanatory copy adds
unnecessary visual noise.

------------------------------------------------------------------------

## 3. Loading Animation

### Preferred solution: horizontal light line

Use a **thin horizontal loading track** rather than a traditional
circular spinner.

The track should be approximately:

``` text
140–180 px
```

A short orange illuminated segment travels horizontally from left to
right.

Conceptually:

``` text
────────━━────────
        →
```

The base track remains subtle and neutral while the moving segment uses
the brand orange.

### Why a line

The existing visual identity is strongly based on:

-   architectural light seams;
-   thin geometric divisions;
-   diagonal illuminated edges;
-   orange light crossing dark surfaces;
-   restrained geometry.

A moving light line translates those elements naturally into motion
design.

For this identity:

**line \> circle \> three dots \> generic spinner**

------------------------------------------------------------------------

## 4. Motion Behavior

The animation should feel controlled rather than playful.

### Loading line

Recommended behavior:

-   smooth horizontal movement;
-   subtle glow around the orange segment;
-   continuous loop when redirect duration is unknown;
-   no aggressive acceleration;
-   no bouncing;
-   no large scale changes.

An indeterminate animation is preferable to a fake percentage because
the page usually does not know the real progress of the redirect.

Do **not** show values such as:

``` text
37%
82%
100%
```

unless they represent actual measurable progress.

------------------------------------------------------------------------

## 5. VC. Dot Animation

As a secondary motion detail, the orange dot in **VC.** can pulse very
subtly.

Example conceptual opacity:

``` text
0.65 → 1.00 → 0.65
```

The pulse should be slow and restrained.

It should feel like a subtle light source rather than a conventional
loading indicator.

The combination becomes:

1.  **VC.** as the identity anchor;
2.  orange dot with a slow pulse;
3.  `Redirecionando...` as status;
4.  horizontal orange light segment as the main loading animation.

------------------------------------------------------------------------

## 6. Dark Theme

Suggested visual hierarchy:

-   Background: graphite black (`#080B0E`)
-   `VC`: white / soft white
-   Dot: orange (`#FF6500`)
-   Status text: muted gray
-   Loading track: dark neutral gray
-   Moving loading segment: orange
-   Glow: subtle orange with low opacity

The orange should remain an accent, not dominate the entire screen.

------------------------------------------------------------------------

## 7. Light Theme

Use the exact same structure and motion language.

Suggested hierarchy:

-   Background: off-white (`#F7F7F5`)
-   `VC`: near-black
-   Dot: orange (`#FF6500`)
-   Status text: medium gray
-   Loading track: light neutral gray
-   Moving loading segment: orange
-   Glow: very subtle orange

Do not redesign the loading experience for the light theme. Only adapt
contrast and foreground colors.

This maintains a single visual system across both themes.

------------------------------------------------------------------------

## 8. What to Avoid

Avoid elements that make the page look like a generic web application:

-   default circular spinners;
-   rotating rings;
-   bouncing dots;
-   skeleton loaders;
-   fake progress percentages;
-   large loading messages;
-   multiple simultaneous animations;
-   excessive orange glow;
-   gradients unrelated to the existing identity;
-   unnecessary icons;
-   hero background images on the redirect screen.

The page should remain visually quiet.

------------------------------------------------------------------------

## 9. Final Direction

The redirect page should communicate the brand with the minimum possible
number of elements.

Final composition:

``` text
             VC.
              •

       Redirecionando...

        ───━━━━────
```

The orange dot provides subtle ambient motion while a thin illuminated
line communicates activity.

The result should feel **minimal, architectural, technical, and
deliberate**, preserving the same visual language as the rest of the VC.
identity without reproducing the full hero artwork.
