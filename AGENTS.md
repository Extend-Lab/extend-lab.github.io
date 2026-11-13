# Site typography

- Website text must use upright type, except for publication and reference lists, whose existing typography (including italic journal and conference names) must be preserved. These exceptions use `.publication-list` and `.article-references`.
- Include the shared `typography.css` stylesheet on every content page, including standalone event pages. Keep its upright-text rule and list exclusions in place.
- Write paper and event titles in News/Publication Highlights cards, Events cards, and other body copy as plain text rather than wrapping them in `<em>` or textual `<i>` tags. Do not introduce italic or oblique text outside the list exceptions. Bootstrap icon elements such as `<i class="bi ...">` are allowed.
- Apply the same typography rules to English and Chinese content and to future pages and updates.

# People photos

- Keep all People card photo areas the same height at each responsive breakpoint, across Research Team and Collaborators, in both English and Chinese.
- Use the shared card layout and uniform reserved name/role space in `people/people.css` for current and future members. Do not add member-specific card heights, photo heights, or role-space overrides.
- Individual photo cropping may adjust `object-position` or image scale within the shared photo area without changing its height.
- Keep the People grid at four columns on wide screens, three on medium screens, and two on narrow screens and phones; never switch it to one column. Use the shared 4:5 `.person-photo-frame` for every portrait and let card height scale with its width.
- Match Collaborators' framing to the Research Team head-and-shoulders portraits: aim for the visible face (excluding hair) to occupy 25% of the photo-frame height, within 23–27%, with its center at 37–41% of the frame height. Preserve the full head and a natural shoulder crop.
- For every added or replaced portrait, inspect the actual crop alongside Research Team references and check it in the two-, three-, and four-column layouts. Calibrate only `--person-photo-scale` and `--person-photo-position` on its frame; never resize the frame or stretch the image to match a face. Follow `assets/people/README.md`.
