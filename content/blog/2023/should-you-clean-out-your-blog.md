---
title: Should you clean out your blog?
description: If like me, you own a blog, you may ask yourself if it's ever a good idea to clean it out from time to time.
published_time: 2023-02-16
modified_time: 2025-08-16
tags: [Tips, Productivity, HTML]
---

If like me, you own a blog, you may ask yourself if it's ever a good idea to clean it out from time to time.

Old and outdated articles are like dust on a coffee table; they're there for everyone to see until you decide to do something about it.

There are three reasons why an article should be considered being cleaned from your blog:

1. Outdated content - can be rewritten and updated
2. Outdated content - cannot be rewritten (the topic is no longer relevant)
3. Subject or style of writing may no longer align with you or your audience

## 1. Outdated content - can be rewritten and updated

More often than not, an article's subject or content is likely to become old news.

Depending on the subject, the time in which an article is considered outdated can vary wildly. Typically, in tech (the main focus of my blog), the average time a particular thing is considered relevant and modern is 18 months. This means, after 18 months of an article being published on a given subject, at least some of its content may no longer be relevant.

This can be a perfect opportunity to keep your content fresh and your audience trusting your ability to keep up with the times and not show them anything that may no longer be of any use to them.

There are two ways to rewrite an article, either approach is fine but should be chosen based on preference and the best need for the blog, and both approaches work for articles with a high organic SEO rating that you'll want to maintain - the approach you use may vary between different articles and article subjects within the same blog.

1. Keep updating the original article keeping it forever evergreen
2. Writing an entirely new article

### 1.1 Keep updating the original article keeping it forever evergreen

This approach is the simpler of the two. Essentially, just keep updating and publishing updates and new content to the original article as if it were a "living document".

This approach only works, though, if you state, at the top of the article, "Updated on" with the date and/or time the article was last updated, otherwise, the user won't know how fresh the content is or if the article ever gets updates. This should be stated below the "Published on" line to show that this article gets updates. You should refrain, however, from displaying "Updated on" if an article has never been updated since "Updated on" will show the same date as "Published on".

The advantage of this method is there is no need for redirects or SEO management. Just update the article's content, publish it and away you go.

If you're more technical and want an extra potential SEO boost and to improve your article's metadata, you can add the `article:modified_time` [Open Graph metadata](https://ogp.me/) to the <head> of your HTML.

```html
<head>
  <meta property="og:type" content="article" />
  <meta property="article:published_time" content="2021-10-31" />
  <meta property="article:modified_time" content="2023-02-16" />
</head>
```

The disadvantage to this approach is if your blog is architected to show newer articles towards the top, any articles you update will likely still be low down in the list. This can be easily remedied (if it is considered an issue) by either rearchitecting the order to define new articles as the latest published or latest updated or by adding a more advanced filter/sort functionality.

### 1.2 Writing an entirely new article

If updating the same article is not for you and you'd rather write an entirely new article, this should be fine. With a little bit more setup, you can rewrite an article and hopefully have no negative SEO impact.

This new article should be written as if it were brand new and not a rewrite, whereby you should not reference or link to the old article.

So that your article can get the best SEO benefit, it's best to delete the old article and set up a [301 (Permanent redirect)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301) from the old article URL to the new article URL. By setting up a 301 (Permanent redirect), all the SEO "juice" that was earned by the old article will be transferred to the new article, and any backlinks that reference the old article will automatically redirect users to the new version of the article.

You could alternatively delete the old article and return a [404 (Not found)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404) or a [410 (Gone)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410) status code, but you won't get the SEO or UX (user experience) benefits that a 301 (Permanent redirect) will give you.

If you're absolutely intent on keeping and not deleting the old article, there are some steps you could take to ensure the maximum benefit of the new article, such as adding a link at the top of the old article that directs the user to a newer version of the article and adding a canonical link and the `article:expiration_time` Open Graph metadata to the `<head>` of your HTML. The canonical link tells search engines that this page is the same as a different page and all organic SEO earned by this page should be given to the other URL. The `article:expiration_time` Open Graph metadata provides extra information about when the article will expire or is going to expire.

```html
<head>
  <link rel="canonical" href="NEW_ARTICLE_URL" />
  <meta property="og:type" content="article" />
  <meta property="article:published_time" content="2021-10-31" />
  <meta property="article:expiration_time" content="2023-02-16" />
</head>
```

The disadvantages to this approach are it may require more setup to properly delete and rewrite an article by adding redirects or metadata, and it could potentially take longer to completely rewrite an article than it would be to update an existing article.

## 2. Outdated content - cannot be rewritten (the topic is no longer relevant)

For some topics, it is inevitable that they will reach the point where the entire topic is just no longer relevant. It's not worth rewriting, it can't be updated and it's not adding any value to your blog.

Over time, old articles where content has not been updated for a long time can often start harming your site's global SEO rating because search engines see this as not keeping content up to date and showing neglect.

You have two options:

1. Delete the article
2. Keep the article

### 2.1 Delete the article

Simply, if the article is providing no value and is not worth rewriting or updating, delete it.

By default, any backlinks to the article will show a 404 (Not found) error to the user. If you want to provide a better user experience, you could change this to return a 410 (Gone) status code and display a nicer error message that may say "This article has been removed" rather than the standard "Page not found".

<blockquote>
Whether you return a 404 (Not found) or a 410 (Gone) status code, according to Google, will not impact SEO any differently.
Currently Google treats 410s (Gone) the same as 404s (Not found), so it’s immaterial to us whether you return one or the other.
<cite>- <a href="https://developers.google.com/search/blog/2011/05/do-404s-hurt-my-site">Google Search Central</a></cite>
</blockquote>

### 2.2 Keep the article

If you've identified an old, outdated article but you've decided you want to keep it, you could implement an `article:expiration_time` Open Graph metadata to the `<head>` of the HTML. This could provide extra information to search engines that you as the author have identified this article as expired, although no one truly knows how search engines rank pages, so this is just an educated guess, but I don't see any negative to adding this metadata.

```html
<head>
  <meta property="og:type" content="article" />
  <meta property="article:published_time" content="2021-10-31" />
  <meta property="article:expiration_time" content="2023-02-16" />
</head>
```

To improve user experience, you could add a note to the top of the article that the content is now outdated.

If you want to go one step further, you could hide this article from the blog, so users searching for new articles won't be able to see this outdated article. But this would still mean anyone with the URL and backlinks will still work.

## 3. Subject or style of writing may no longer align with you or your audience

As your blog progresses, your niche, style of writing or attitude may change. This might make some older articles irrelevant to your blog.

It's very common for blogs to take different turns in their niche as they mature. Your audience may have taken a particular liking to a specific niche that some of your older articles may no longer meet.

In this case, it's time for a decision. Do you delete these irrelevant articles? Do you keep them? Do you rewrite them or update them? What you do may vary from article to article.

## What do I do?

I tend to do a mixture of all I've mentioned above. There is no set rule, just whatever works for the specific article you're considering cleaning up. So if you ever come across my blog, just know that all the articles on my website may not be all that I've ever written... there are very likely a lot more articles I have deleted than articles that are active on my blog. In fact, if you visited my blog a short while after August 16<sup>th</sup>, 2025, there is a very good chance you saw very little articles. I cleared out **a lot** of old articles that were just not relevant anymore or did not align with my niche or style of writing anymore.

I post my articles on [jackdomleo.dev/blog](/blog), but I used to also cross-post them onto other blogging platforms, such as DEV.to and Hashnode where I would use canonical links to send all the SEO "juice" from the articles on the blogging platforms straight to the original articles on my website. So when I was cleaning my blog, I had to also remember to clean the blogging platforms I cross-posted to.

## TL;DR

Yes, you should clean out your blog and maintain it. It can provide many benefits such as improved SEO and improved user experience. Cleaning your blog does not necessarily mean deleting articles, it simply means keeping on top of your content so your articles can provide the most value to you, your blog and your audience.

