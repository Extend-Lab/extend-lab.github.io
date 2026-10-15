# SEO maintenance

Run `python3 scripts/update_seo.py` after adding content pages or changing metadata.
The script reads the production domain from `CNAME`, preserves article descriptions,
and refreshes canonical URLs, sharing metadata, the homepage organization data,
`sitemap.xml`, and `robots.txt`. Add descriptions for new section pages to
`DESCRIPTIONS`; new article pages must include their own description.

English and Chinese currently share URLs and use client-side translation. Do not
add language alternate URLs until independently addressable translations exist.

After deployment, verify `https://extend-lab.com/` in Google Search Console and
submit `https://extend-lab.com/sitemap.xml`. Account/domain verification requires
access to the owner's Google account or DNS settings. Code changes alone do not
submit the site or guarantee indexing/rankings.
