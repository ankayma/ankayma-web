# User-guide images

Screenshots for the user guide live here. Each guide page marks where an image goes with
an HTML comment placeholder, so a page with no image yet renders cleanly (the comment is
invisible) instead of showing a broken-image icon.

## Naming convention

```
<page>-<NN>-<slug>.png
```

- **`<page>`** — the guide file's basename (e.g. `getting-started`, `prove-it`).
- **`<NN>`** — a two-digit order within that page (`01`, `02`, …).
- **`<slug>`** — a short, readable hint (e.g. `ssh-from-iphone`).

Example: `getting-started-01-ssh-from-iphone.png`.

## Finding the slots

Every placeholder is an HTML comment beginning with `IMG:`. To list them all:

```
grep -rn 'IMG:' ..
```

Each reads `<!-- IMG: <filename> — <caption> -->`.

## Adding an image

1. Drop the PNG here with the exact name from the placeholder.
2. In the page, replace the comment line with:
   `![<caption>](images/<filename>)`

Until step 2, the slot shows nothing — by design.
