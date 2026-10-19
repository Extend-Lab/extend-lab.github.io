#!/usr/bin/env python3
"""Refresh static SEO metadata and sitemap. Run from any working directory."""
from pathlib import Path
import html
import json
import re
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = 'https://' + (ROOT / 'CNAME').read_text().strip()
DESCRIPTIONS = {
    '': 'EXTEND Lab at HKUST(GZ), The Hong Kong University of Science and Technology (Guangzhou), researches reinforcement learning, multi-agent systems, robotics, and edge intelligence.',
    'about': 'Learn about EXTEND Lab at HKUST(GZ), our mission, and research in reinforcement learning, multi-agent systems, embodied AI, and edge intelligence.',
    'research': 'Explore EXTEND Lab research in multi-agent systems, robotic and embodied AI, simulation-to-reality reinforcement learning, edge intelligence, and wireless systems.',
    'projects': 'Explore research projects from EXTEND Lab in reinforcement learning, multi-agent systems, robotics, and edge intelligence.',
    'people': 'Meet the faculty, students, collaborators, and alumni of EXTEND Lab at The Hong Kong University of Science and Technology (Guangzhou).',
    'publications': 'Explore selected EXTEND Lab publications on reinforcement learning, multi-agent systems, edge intelligence, robotics, and wireless systems.',
    'news': 'Read the latest EXTEND Lab news, publication highlights, and media coverage of our research and academic community.',
    'news/publication-highlights': 'Discover research papers and publication highlights from EXTEND Lab, spanning intelligent systems, reinforcement learning, and edge intelligence.',
    'news/media-coverage': 'Explore media coverage and reports featuring EXTEND Lab research and activities.',
    'events': 'Explore EXTEND Lab seminars, research sharing sessions, and recent academic activities.',
    'events/extend-sharing': 'Explore EXTEND Sharing sessions from EXTEND Lab, featuring research discussions and knowledge exchange.',
    'events/recent-activity': 'Discover recent EXTEND Lab academic activities, research exchanges, and community events.',
    'collaborate': 'Collaborate with EXTEND Lab at HKUST(GZ): explore graduate research, undergraduate projects, visiting scholar opportunities, and industry partnerships.',
    'resources': 'The EXTEND Lab resources page for models, data, open courses, and research materials. Resources will be added as they become available.',
}


def refresh():
    pages = [ROOT / 'index.html'] + sorted(p for p in ROOT.glob('*/**/index.html') if p.parts[len(ROOT.parts)] in {'about', 'research', 'projects', 'people', 'publications', 'news', 'events', 'collaborate', 'resources', 'insights'})
    urls = []
    for page in pages:
        key = page.parent.relative_to(ROOT).as_posix()
        key = '' if key == '.' else key
        url = ORIGIN + '/' + (key + '/' if key else '')
        urls.append(url)
        source = page.read_text()
        source = re.sub(r'\n*<!-- SEO metadata -->.*?<!-- /SEO metadata -->\n?', '', source, flags=re.S)
        if not key:
            source = re.sub(r'<title>.*?</title>', '<title>EXTEND Lab | Reinforcement Learning &amp; Multi-Agent Systems | HKUST(GZ)</title>', source, count=1)
        if key in DESCRIPTIONS:
            source = re.sub(r'\n<meta name="description"[^>]*>', '', source)
            source = source.replace('</title>', '</title>\n<meta name="description" content="' + html.escape(DESCRIPTIONS[key], quote=True) + '">', 1)
        title = html.unescape(re.search(r'<title>(.*?)</title>', source).group(1))
        description = html.unescape(re.search(r'<meta name="description" content="([^"]*)"', source).group(1))
        esc = lambda s: html.escape(s, quote=True)
        tags = [f'<link rel="canonical" href="{url}">', '<meta property="og:site_name" content="EXTEND Lab">', f'<meta property="og:type" content="{"article" if key.startswith("insights/") else "website"}">', f'<meta property="og:title" content="{esc(title)}">', f'<meta property="og:description" content="{esc(description)}">', f'<meta property="og:url" content="{url}">', '<meta name="twitter:card" content="summary">', f'<meta name="twitter:title" content="{esc(title)}">', f'<meta name="twitter:description" content="{esc(description)}">']
        if not key:
            data = {'@context': 'https://schema.org', '@graph': [
                {'@type': 'ResearchOrganization', '@id': ORIGIN + '/#organization', 'name': 'EXTEND Lab', 'url': ORIGIN + '/', 'description': description, 'parentOrganization': {'@type': 'CollegeOrUniversity', 'name': 'The Hong Kong University of Science and Technology (Guangzhou)'}, 'knowsAbout': ['Reinforcement learning', 'Multi-agent systems', 'Embodied AI', 'Robotics', 'Edge intelligence', 'Wireless systems']},
                {'@type': 'WebSite', '@id': ORIGIN + '/#website', 'url': ORIGIN + '/', 'name': 'EXTEND Lab', 'publisher': {'@id': ORIGIN + '/#organization'}}]}
            tags.append('<script type="application/ld+json">\n' + json.dumps(data, ensure_ascii=False, indent=2) + '\n</script>')
        block = '\n<!-- SEO metadata -->\n' + '\n'.join(tags) + '\n<!-- /SEO metadata -->'
        source = source.replace('</head>', block + '\n</head>', 1)
        source = source.replace('href="https://extend-lab.github.io/Page/"', 'href="' + ORIGIN + '/"')
        page.write_text(source)
    for page in ROOT.glob('*.html'):
        if page.name == 'index.html':
            continue
        source = page.read_text()
        source = re.sub(r'(<link rel="canonical" href=")https://extend-lab.github.io/Page/', r'\g<1>' + ORIGIN + '/', source)
        page.write_text(source)
    ET.register_namespace('', 'http://www.sitemaps.org/schemas/sitemap/0.9')
    ns = '{http://www.sitemaps.org/schemas/sitemap/0.9}'
    sitemap = ET.Element(ns + 'urlset')
    for url in urls:
        ET.SubElement(ET.SubElement(sitemap, ns + 'url'), ns + 'loc').text = url
    ET.indent(sitemap)
    ET.ElementTree(sitemap).write(ROOT / 'sitemap.xml', encoding='utf-8', xml_declaration=True)
    (ROOT / 'robots.txt').write_text('User-agent: *\nAllow: /\n\nSitemap: ' + ORIGIN + '/sitemap.xml\n')
    print(f'Updated {len(pages)} content pages, redirect canonicals, sitemap.xml and robots.txt.')


if __name__ == '__main__':
    refresh()
