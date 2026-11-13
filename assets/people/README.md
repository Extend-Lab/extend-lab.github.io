# EXTEND Lab people assets

This directory is the canonical location for photos displayed on the People page.

## Naming convention

- Use the member's English name in lowercase.
- Separate words with hyphens: `given-name-family-name.ext`.
- Keep one current web-ready photo per person.
- Update `people/index.html` whenever a photo is added, replaced, or removed.

## Current directory contents

| File | Member | Page section |
| --- | --- | --- |
| `jiadong-yu.png` | Jiadong Yu | Research Team |
| `yulong-zhang.jpg` | Yulong Zhang | Research Team |
| `hao-xiong.jpeg` | Hao Xiong | Research Team |
| `ziru-zhang.jpeg` | Ziru Zhang | Research Team |
| `jianing-zheng.jpeg` | Jianing Zheng | Research Team |
| `xuling-zhang.jpeg` | Xuling Zhang | Research Team |
| `xinren-zhang.jpeg` | Xinren Zhang | Research Team |
| `jiale-li.jpeg` | Jiale Li | Research Team |
| `guanghui-song.jpg` | Guanghui Song | Research Team |
| `guangzhi-zhu.jpg` | Guangzhi Zhu | Research Team |
| `jinglian-ouyang.jpg` | Jinglian Ouyang | Research Team |
| `nianfu-wang.jpg` | Nianfu Wang | Collaborators |
| `rongqi-lu.jpg` | Rongqi Lu | Collaborators |
| `chun-zhan.jpg` | Chun Zhan | Collaborators |

## Portrait framing for current and future members

Research Team and Collaborators use the same card width, 4:5 photo frame, and
reserved name/role space. The grid has four, three, or two columns according to
viewport width. Never add a section-specific or member-specific frame size.

Use Jianing Zheng, Jiale Li, and Hao Xiong as visual references. Aim for the face
(excluding hair) to occupy about 25% of the frame height (23–27%), centered around
39% of its height (37–41%). Keep the whole head visible with natural shoulder
framing; do not stretch a photo to change the face's proportions.

For a new or replacement photo:

1. Place it in the shared `.person-photo-frame` markup in `people/index.html`.
2. Add a `person-photo-frame-given-name-family-name` class when calibration is
   needed. Set only `--person-photo-scale` and `--person-photo-position` in
   `people/people.css`; the common frame size and responsive layout must remain.
3. Compare the displayed crop with the Research Team references in the four-,
   three-, and two-column layouts, including a narrow phone viewport. Compare
   both photo-frame dimensions and face size/position; original image dimensions
   alone do not establish visual consistency.
4. Recheck after replacing an image, even if its filename stays the same, and
   update the People stylesheet cache version when crop rules change.
