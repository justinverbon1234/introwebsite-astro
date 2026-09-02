---
title: "Learning the Static Web"
category: "Thought"
date: 2026-09-02T23:10:00+02:00
eyebrow: "Learning"
description: "Some thoughts on what I am learning about the static web at school, and how I am already applying it while building this website."
readTime: "4 min read"
---

At school we are currently learning about the static web. So mainly HTML, CSS and JavaScript, and how those three work together to create a website.

I already knew quite a bit of this before starting, so some things are more familiar than others. But I actually do not mind going over the basics again. It is one thing to know how to make something work, and another to properly understand why you are doing it a certain way.

One of the things we are working with is semantic HTML.

Instead of putting everything inside `div` elements, you use things like `header`, `nav`, `main`, `section`, `article` and `footer` to actually describe what the content is.

It sounds like a small difference, but I am starting to appreciate it more now that my own website is getting bigger.

When a page only has a few elements it does not really matter that much. Once you have multiple sections, different pages, a Journal, navigation and separate article pages, structure becomes a lot more important.

> The bigger the website becomes, the more you notice whether you actually thought about the structure beforehand.

The same goes for CSS.

I have been trying to keep everything separated instead of throwing all of the styling into one massive file. The homepage, About section, Journal and Contact section all have their own CSS, while things that are used everywhere stay in shared files.

That makes it much easier for me to understand where something is coming from when I want to change it later.

This website actually became a good example of another problem I ran into.

Originally I made every Journal entry as a separate HTML page. For three entries that is completely fine. The problem is that I want to update this website regularly.

If I eventually have ten or twenty entries, I really do not want to manually create another HTML page, update the homepage, update the archive, change the entry count and make sure all of the links still work every single time.

So I started looking into Astro.

Astro still lets me build a static website, but I can reuse things like the navigation and layouts instead of copying them everywhere. My Journal entries are now written as Markdown files, while Astro takes care of turning them into actual pages.

That means this article itself is basically just a Markdown file.

I write the title, category, date and the actual text, and the rest of the website knows what to do with it.

That is probably my favourite thing I have learned from working on this so far. The HTML, CSS and JavaScript basics are still underneath everything. Astro does not replace those things. It just gives me a better way to organise them once the project starts getting larger.

I am obviously a bit further ahead with this project than what we are currently doing in class, but I think that makes it more useful for me. I can take what we are learning at school and immediately see what happens when I try to use it in something that I actually want to keep building.