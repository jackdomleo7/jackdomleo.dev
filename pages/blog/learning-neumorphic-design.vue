<template lang="md">
  <article class="markdown">
    <blog-header :page-title="pageTitle" :date="new Date('2020-05-27')" :readMinutes="6" :hashtags="['neumorphic', 'neumorphism', 'webdesign', 'webdeveloper', 'design', 'ui']" :lead="pageDescription" />

    Neumorphic design is a combination of skeuomorphic design and flat design. It gives a soft UI vibe with a 3D, nearly-realistic style by cleverly and carefully combining background colours, gradients, shapes, rounded edges and shadows. The design trend is made to feel like the elements are being pushed through and/or out of the page.

    [![Neumorphic music player](/blog/learning-neumorphic-design/music-player.png "Neumorphic music player")](https://codepen.io/JackDomleo/pen/GRpaNGp)

    If I could sum up neumorphic design in a few words:
    - Soft
    - Rounded
    - Smooth
    - Futuristic
    - Anti-WCAG

    Learning neumorphism was quite difficult for me to begin with because I don't see myself as very design-minded (yet). I really struggled to get the CSS `box-shadow` looking right. When I first came across neumorphic design, I was instantly hooked; I was searching [neumorphic on CodePen](https://codepen.io/search/pens?q=neumorphic), I was searching [neumorphic on Google](https://www.google.com/search?q=neumorphic) and was reading many articles on the topic. Here's what you need to know to get started:

    ## Themes

    ### Font

    A theme of neumorphic design is <em>roundness</em>, so you should probably consider choosing a font with rounded letters. To further explain this, I created a simple CodePen below:

    <p class="codepen" data-height="450" data-theme-id="default" data-default-tab="result" data-user="JackDomleo" data-slug-hash="dyYEdPg" data-pen-title="Choosing a neumorphic font-family">
      <span>See the Pen <a href="https://codepen.io/JackDomleo/pen/dyYEdPg">
      Choosing a neumorphic font-family</a> by Jack Domleo (<a href="https://codepen.io/JackDomleo">@JackDomleo</a>)
      on <a href="https://codepen.io">CodePen</a>.</span>
    </p>

    A rounded font will give your UI the **soft** vibe that comes with neumorphic design, rather than a sharp vibe.

    ### Sizing

    When considering sizing with neumorphic, you shouldn't look at it as "Can a mouse click it?" You should come from the angle of, "Will my thumb be able to press it easily on mobile?" With this in mind, it's natural to have <strong>larger components</strong>.

    Naturally, larger components will ultimately prevent you from creating small, cluttered and hard-to-read UIs. Think about padding. Neumorphism should allow for space and keeping things distanced apart.

    ### Colour

    This is where your neumorphic design starts looking neumorphic. You should remember:

    > The component and the background colour should be the same or very very similar

    It's OK to have components that contrast with the background, as long as the majority of your components blend in. It's also OK to have components that contrast with the background if you apply the shadows correctly...

    ### Shadow

    Save the best until last. Shadows. This needs to be right, I spent ages learning the [box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) CSS property. I played around with it by adding a shadow to an element, adding two shadows, three shadows, etc. You can't implement neumorphism effectively if you don't know about shadows.

    Wait! Two shadows, three shadows? Yes. You can apply multiple shadows to a **single** CSS `box-shadow` property. Although the R2-D2 below doesn't have anything to do with neumorphic design, it does demonstrate multiple box-shadows quite well. Below is a CodePen I created a while back of a pixel art R2-D2. It consists of a single `<div>`, then a very long, but easy-to-understand `box-shadow` CSS property.

    <p class="codepen" data-height="450" data-theme-id="default" data-default-tab="result" data-user="JackDomleo" data-slug-hash="ZEEqdxy" data-pen-title="Pixel Art: R2-D2 - pure CSS">
      <span>See the Pen <a href="https://codepen.io/JackDomleo/pen/ZEEqdxy">
      Pixel Art: R2-D2 - pure CSS</a> by Jack Domleo (<a href="https://codepen.io/JackDomleo">@JackDomleo</a>)
      on <a href="https://codepen.io">CodePen</a>.</span>
    </p>

    The trick to neumorphic design shadows is, there are two shadows on your `box-shadow` CSS property, one lighter and one darker. Now imagine you have a light source in the top-left hand corner of your page shining from the top-left to the bottom-right. Since a theme of neumorphism is 3D, you need to think, "Where will the shadow be?" Here is a little CodePen I created to help explain it.

    <p class="codepen" data-height="700" data-theme-id="default" data-default-tab="result" data-user="JackDomleo" data-slug-hash="yLYWqoQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Understanding neumorphic design shadows">
      <span>See the Pen <a href="https://codepen.io/JackDomleo/pen/yLYWqoQ">
      Understanding neumorphic design shadows</a> by Jack Domleo (<a href="https://codepen.io/JackDomleo">@JackDomleo</a>)
      on <a href="https://codepen.io">CodePen</a>.</span>
    </p>

    ## Put it all together

    When you combine all these themes, ideas, tips and tricks, you can end up with a nice set of components for your design system.

    <p class="codepen" data-height="600" data-theme-id="default" data-default-tab="result" data-user="JackDomleo" data-slug-hash="mdeowoz" data-pen-title="Neumorphic Design Elements">
      <span>See the Pen <a href="https://codepen.io/JackDomleo/pen/mdeowoz">
      Neumorphic Design Elements</a> by Jack Domleo (<a href="https://codepen.io/JackDomleo">@JackDomleo</a>)
      on <a href="https://codepen.io">CodePen</a>.</span>
    </p>

    ## When not to use neumorphic design?

    Neumorphic design became a big trend in early <time datetime="2020">2020</time> but was quickly discarded.

    Neumorphic design became popular for its sexiness. It brought a really nice, Futuristic, 3D-like design to the UI and I have to admit, I do love how it looks. But good UI/UX design in <time datetime="2020">2020</time>, it's not all about good looks, it needs to be as equally accessible as it is sexy.

    Neumorphic design lacks with colour contrast, since an element's background colour should be the same or very similar to the background it sits on to look neumorphic, this makes it difficult for some users to see, therefore making it difficult for them to use your website or application.

    There are ways around this if you really want to include neumorphic design; you could learn about implementing different themes and offer a "high contrast" theme. The high contrast theme wouldn't be neumorphic but at least you're giving user's the option what vibe they want or need.

    ## Where to start?

    Reading this blog and other blogs and neumorphism is just the start. You need to play:

    1. [Check out this CodePen collection I've put together](https://codepen.io/collection/XjYaOy) and maybe give the collection and pens within it a like ❤
    2. [Learn and practise box-shadow with single and multiple shadows](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
    3. Experiment making your own components
    4. Share this article
    5. Become an expert neumorphic designer!
  </article>
  <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</template>

<script>
import { BlogHeader } from '@/components';

export default {
  components: { BlogHeader },
  data () {
    return {
      pageTitle: 'Learning Neumorphic Design',
      pageDescription: 'The awesome design trend that never took off! I\'ve become fascinated with neumorphic design and wanted to share my opinion.'
    };
  },
  head () {
    return {
      title: this.pageTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.pageDescription },
        { hid: 'og:description', name: 'og:description', content: this.pageDescription }
      ]
    };
  }
};
</script>
