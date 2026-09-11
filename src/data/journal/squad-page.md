---
title: "Squad-page"
category: "Thought"
date: 2026-09-11
eyebrow: "Squad / Week 01"
description: "From four early sketches to a working prototype: a first-week build log about structure, interaction, and learning when to let a design change."
descriptionPlacement: "body"
author: "Justin Verbon"
readTime: "4 min read"
series: "plain-article"
---

The first couple of days I was mainly busy making an actual design for the [website](https://justinverbon1234.github.io/your-tribe-squad-page/) (see link, I hope you like it). But now that we have the introduction out of the way, let me walk you through what happened this week.

I started by making a design and discussing it with my team. Before touching too much code, I wanted us to have at least some idea of what we were building. While doing that I also made four initial sketches of the website, which you can see above. They all looked quite different from what you see now, but that was kind of the point. I wanted to try a few directions first instead of immediately committing to the first idea that came to mind.

Eventually we landed on the current direction and started turning that into an actual website. By the time Thursday came around we already had a fully functioning prototype.

One of the first things I worked on was the overall structure of the page. The website is divided into a few main sections: the hero, selected work, local spots and eventually a footer. I wanted the website to feel like something you explore instead of just another portfolio where everything is placed into a predictable grid.

That became especially important for the Selected Work section. At first, I experimented with a few different ideas, including things like tabs and masks, but those versions started making the section more complicated without really making it better. Eventually I went back to a simpler alternating layout, where the projects switch sides as you move down the page.

I also added reflections underneath some of the project images. It is a small detail, but it gives the images a little more depth and makes them feel less like flat rectangles sitting on a page. I didn't want to go too far with the 3D effect either. The goal was more to create the illusion that the work has some physical presence without making it distracting.

For the background I went with a mixture of burgundy, purple and blue. Instead of using one flat background colour, I wanted something that felt a little more atmospheric. It also helped connect the different parts of the website because the colour continues throughout the page even when the layouts themselves change.

Then there is the Spots section.

This part of the website is meant to show local locations instead of projects, so I wanted it to behave differently as well. Rather than showing another grid of images, I created an infinite carousel. The photos continuously move across the screen, and when you interact with them you can get more information about the individual spot.

I like this section because it gives the website a different rhythm. The project section is much more structured, while Spots feels more like browsing through a collection.

I also started adding some small animations throughout the website. Most of these are simple scroll reveals using IntersectionObserver. I deliberately kept these subtle because I don't want the website to become one of those sites where everything flies onto the screen just because it can.

There was also quite a bit of work that wasn't immediately visible.

I spent some time cleaning up the HTML, CSS and JavaScript and making the structure a little more modular. I also started working on the responsive version of the website. Some layouts that work well on a large screen obviously don't translate directly to mobile, so instead of just shrinking everything I started thinking about how those sections should change.

I also added support for prefers-reduced-motion, so people who have reduced motion enabled don't have to sit through all the animations.

In terms of learning HTML and CSS this week, there wasn't a huge amount that was completely new to me. As you know, I already have the needed experience, so building things like the navigation, layouts and responsive behavior wasn't that much of a task for me.

That doesn't mean the week was useless though.

Most of the challenge was in making design decisions and then figuring out whether those ideas still worked once they existed in an actual browser. Something can look great in a sketch or prototype and then suddenly feel completely wrong once you can scroll through it and interact with it.

I also worked with CSS Grid again later in the week. I can't really say I learned anything groundbreaking from it because it is something I have already used before, but it was still useful for building some of the layouts.

By the end of the week the website was already much further along than the original sketches. The main structure works, the project section has a clear direction, the Spots carousel is functional, and the overall visual style is starting to feel consistent.

There are still things I want to change. The footer, for example, still needs some actual attention, and I'm sure some of the current sections will change again once we continue working on the site.

But that is probably my biggest takeaway from this week.

The first design is almost never the final design.

So, week one: a lot of designing, a lot of CSS, a few ideas thrown away, and one functioning website.

Not a bad start.
