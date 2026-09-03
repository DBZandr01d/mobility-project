/* ==========================================================================
   Mobility Project — route views
   Each route returns an HTML string. Links marked [data-route] are intercepted
   by the router, so the address bar never shows a ".html" file.
   ========================================================================== */

(function (global) {
  "use strict";

  var ARROW =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  /* ---------------------------------------------------------------- shared */

  /** Primary support CTA — label stays constant; config.js handles the state. */
  function supportBtn(variant) {
    return (
      '<a class="btn ' + (variant || "btn--ocean") + '" href="#" data-link="how-to-buy">' +
      "Support the Project</a>"
    );
  }

  /** Support CTA plus an optional secondary action and the pre-launch note. */
  function supportGroup(variant, secondary, note) {
    return (
      '<div class="cta-group">' +
      '<div class="actions">' + supportBtn(variant) + (secondary || "") + "</div>" +
      '<p class="cta-note when-pending">The campaign opens soon.</p>' +
      (note ? '<p class="cta-note">' + note + "</p>" : "") +
      "</div>"
    );
  }

  function marker(num, title) {
    return (
      '<p class="marker"><span>' + num + "</span><span>— " + title + "</span></p>"
    );
  }

  /* Small hand-drawn swell under the hero eyebrow. */
  var SQUIGGLE =
    '<svg class="squiggle" viewBox="0 0 84 12" fill="none" stroke="currentColor" ' +
    'stroke-width="1.6" stroke-linecap="round" aria-hidden="true">' +
    '<path d="M1 7c4-5 8-5 12 0s8 5 12 0 8-5 12 0 8 5 12 0 8-5 12 0 8 5 11 0"/></svg>';

  /* Imperfect pen stroke under "not a privilege." */
  var STROKE =
    '<svg class="stroke" viewBox="0 0 300 14" preserveAspectRatio="none" fill="none" ' +
    'stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true">' +
    '<path d="M3 9.5c46-4.2 96-6.4 148-5.6 43 .7 92 3.4 146 7.1" ' +
    'vector-effect="non-scaling-stroke"/></svg>';

  /* Two distant seabirds. */
  var BIRDS =
    '<svg viewBox="0 0 100 40" fill="none" stroke="currentColor" stroke-width="1.5" ' +
    'stroke-linecap="round" aria-hidden="true">' +
    '<path d="M4 16c5-6 9-6 13 0 4-6 8-6 13 0"/>' +
    '<path d="M46 31c3.6-4.4 6.6-4.4 9.5 0 2.9-4.4 5.9-4.4 9.5 0"/>' +
    '<path d="M72 9c2.8-3.4 5.1-3.4 7.4 0 2.3-3.4 4.6-3.4 7.4 0"/></svg>';

  /* Faint horizon line drawn across the hero. */
  var HORIZON =
    '<svg viewBox="0 0 1600 40" preserveAspectRatio="none" fill="none" ' +
    'stroke="currentColor" stroke-width="1" aria-hidden="true">' +
    '<path d="M0 22c180-9 300 5 470 2 210-4 330-14 520-9 210 6 350 16 610 5" ' +
    'vector-effect="non-scaling-stroke"/></svg>';

  /* Small wave mark used beside the photo caption. */
  var WAVE_DOT =
    '<svg viewBox="0 0 16 8" fill="none" stroke="currentColor" stroke-width="1.4" ' +
    'stroke-linecap="round" aria-hidden="true">' +
    '<path d="M1 5.4c2-3 3.6-3 5.4 0s3.4 3 5.4 0 2.2-2 3.2-.6"/></svg>';

  /* A single drawn stroke, used sparingly between chapters. */
  var WAVE_RULE =
    '<svg class="wave-rule" viewBox="0 0 1200 22" preserveAspectRatio="none" aria-hidden="true" ' +
    'fill="none" stroke="currentColor" stroke-width="1" vector-effect="non-scaling-stroke">' +
    '<path d="M0 11C100 1 200 21 300 11S500 1 600 11 800 21 900 11s200-10 300 0" ' +
    'vector-effect="non-scaling-stroke"/></svg>';

  /** Section head for the inner routes. */
  function pagehead(o) {
    return (
      '<header class="pagehead"><div class="shell">' +
      '<span class="label">' + o.label + "</span>" +
      "<h1>" + o.title + (o.titleEm ? "<em>" + o.titleEm + "</em>" : "") + "</h1>" +
      '<p class="lede">' + o.lede + "</p>" +
      (o.image
        ? '<figure class="pagehead-figure"><img src="' + o.image + '" alt="' + o.alt + '" /></figure>'
        : "") +
      "</div></header>"
    );
  }

  /**
   * The app the campaign is raising funds to build. Announcement only — the
   * app does not exist yet, so nothing here should read as shipped.
   */
  function appSection(num) {
    return (
      '<section class="section" id="app"><div class="shell">' +
      marker(num, "In development") +
      '<div class="grid">' +
      '<div class="col-7 reveal">' +
      "<h2>An app to find the right treatment, <em>in the right place.</em></h2>" +
      "</div>" +
      '<div class="col-5 reveal"><div class="prose">' +
      "<p>Finding somewhere that actually handles your condition is one of the " +
      "quietest barriers disabled people face. We are building an app that helps " +
      "people find the right locations for their specific treatments — so recovery " +
      "starts sooner and less of it is spent searching.</p>" +
      "</div></div></div>" +

      '<div class="notice reveal" style="margin-top:clamp(36px,4vw,56px)">' +
      '<span class="label">Status</span>' +
      "<p>In development, and not yet available. Building it is one of the goals " +
      "the Mobility Project campaign is raising funds for.</p>" +
      "</div>" +

      '<div class="impact reveal" style="margin-top:clamp(40px,5vw,64px)">' +
      "<div><h3>Find the right place</h3><p>Locations matched to a person's " +
      "specific treatment needs, rather than a generic directory.</p></div>" +
      "<div><h3>Built for recovery</h3><p>Less time spent searching and " +
      "calling around, more time spent actually recovering.</p></div>" +
      "<div><h3>Funded by the campaign</h3><p>The app is a campaign goal — " +
      "supporting the project is what pays to build it.</p></div>" +
      "</div></div></section>"
    );
  }

  /** Closing call to action, over a photograph. */
  function closing(text) {
    return (
      '<section class="closing on-dark">' +
      '<img class="band-bg" src="assets/competitions/4.jpg" alt="" aria-hidden="true" />' +
      '<div class="shell">' +
      "<h2>Help make mobility possible.</h2>" +
      "<p>" + text + "</p>" +
      supportGroup(
        "btn--solid",
        '<a class="btn btn--line" href="mission" data-route>Explore the Mission</a>'
      ) +
      "</div></section>"
    );
  }

  /* ------------------------------------------------------------- 1. story */

  function story() {
    return (
      /* 1 — Illustrated coastal hero */
      '<section class="hero">' +
      '<div class="hero-art" aria-hidden="true">' +
      '<div class="art art--horizon">' + HORIZON + "</div>" +
      '<div class="art art--wave"></div>' +
      '<div class="art art--ocean"></div>' +
      '<div class="art art--weed"></div>' +
      '<div class="art art--birds">' + BIRDS + "</div>" +
      "</div>" +

      '<div class="shell hero-grid">' +
      '<div class="hero-copy">' +
      '<span class="label">A campaign for adaptive mobility</span>' +
      SQUIGGLE +
      "<h1>Mobility is a right,<em>not a privilege." + STROKE + "</em></h1>" +
      '<p class="lede">Founded by Maria Del Sol — adaptive surfing champion and ' +
      "disability advocate — Mobility Project helps fund adaptive equipment, " +
      "coaching and access to sport.</p>" +
      supportGroup(
        "btn--ocean",
        '<a class="link" href="#story">Read Maria\'s story ' + ARROW + "</a>"
      ) +
      "</div>" +

      '<figure class="hero-card">' +
      '<div class="hero-card-photo">' +
      '<img src="assets/photos/maria_sitting2.jpg" width="660" height="880" ' +
      'alt="Maria Del Sol seated on a staircase, wearing her prosthetic legs" />' +
      "</div>" +
      '<figcaption class="hero-card-caption">' +
      '<span class="wave-dot" aria-hidden="true">' + WAVE_DOT + "</span>" +
      "<span><b>Maria Del Sol.</b> Double amputee since infancy; " +
      "Brazilian Parasurf champion.</span>" +
      "</figcaption>" +
      '<picture class="hero-seal">' +
      '<source srcset="assets/img/illustration/seal-adaptive-sport.webp" type="image/webp" />' +
      '<img src="assets/img/illustration/seal-adaptive-sport.png" width="512" height="482" ' +
      'alt="Adaptive sport changes lives" />' +
      "</picture>" +
      "</figure>" +
      "</div></section>" +

      /* 2 — Institutional credibility, on deep ocean */
      '<section class="section section--tight section--dark trust">' +
      '<div class="shell">' +
      '<dl class="credibility">' +
      "<div><dt>United Nations</dt><dd>Verified Agent, in partnership with TikTok.</dd></div>" +
      '<div><dt>Dare2tri</dt><dd>Donations will be made to ' +
      '<a href="https://dare2tri.org/" target="_blank" rel="noopener">Dare2tri</a>, ' +
      "which brings adaptive sport to athletes with physical disabilities and visual impairments.</dd></div>" +
      "<div><dt>pump.fun</dt><dd>The platform the campaign uses to raise funds and gather its community.</dd></div>" +
      "</dl></div></section>" +

      /* 4 — Maria's story */
      '<section class="section" id="story"><div class="shell">' +
      marker("01", "My Story") +

      '<div class="grid" style="align-items:end">' +
      '<div class="col-7 reveal">' +
      "<h2>From the shoreline to the world stage</h2>" +
      "</div>" +
      '<div class="col-5 reveal">' +
      '<p class="lede">A life spent proving that limitation is a design problem, ' +
      "not a destiny.</p>" +
      "</div></div>" +

      '<div style="margin-top:clamp(40px,5vw,72px)">' +

      '<div class="row row--wide reveal">' +
      '<figure class="figure figure--wide"><img src="assets/competitions/3.jpg" alt="Maria carrying her board at a World Surf League event" loading="lazy" /></figure>' +
      '<div class="row-body">' +
      '<span class="label">The ocean</span>' +
      "<h3>Vice champion of Brazil, top ten in the world</h3>" +
      '<div class="prose"><p>I lost both my legs when I was just <strong>45 days old</strong>. ' +
      "But that never stopped me from chasing the waves. Today, I am the " +
      "<strong>Brazilian Surfing Vice Champion</strong> and ranked among the " +
      "<strong>Top 10 in the world</strong>. The ocean taught me that limitations " +
      "exist only in the mind.</p></div>" +
      '<a class="link" href="competitions" data-route>See competition results ' + ARROW + "</a>" +
      "</div></div>" +

      '<blockquote class="pullquote reveal">' +
      "<p>The ocean taught me that limitations exist only in the mind.</p>" +
      "<footer>Maria Del Sol</footer>" +
      "</blockquote>" +

      '<div class="row row--reverse reveal">' +
      '<figure class="figure figure--tall"><img src="assets/photos/verified.jpeg" alt="Portrait of Maria Del Sol" loading="lazy" /></figure>' +
      '<div class="row-body">' +
      '<span class="label">Recognition</span>' +
      "<h3>A United Nations Verified Agent</h3>" +
      "<div class=\"prose\"><p>I am proud to be a <strong>United Nations Verified Agent</strong> " +
      "in partnership with TikTok, using my platform to spread awareness, inspire change, " +
      "and amplify voices that deserve to be heard on a global stage.</p></div>" +
      '<a class="link" href="https://www.tiktok.com/@mariadosolglobal" target="_blank" rel="noopener">Follow on TikTok ' + ARROW + "</a>" +
      "</div></div>" +

      '<div class="row reveal">' +
      '<figure class="figure figure--tall"><img src="assets/photos/maria_conference.jpg" alt="Maria speaking on stage with a microphone" loading="lazy" /></figure>' +
      '<div class="row-body">' +
      '<span class="label">The voice</span>' +
      "<h3>Coaching, mentoring, speaking</h3>" +
      "<div class=\"prose\"><p>As a <strong>certified Life Coach trained in the Tony Robbins " +
      "method</strong>, I help others unlock their true potential. My voice carries a message of " +
      "<strong>courage, transformation, and spiritual strength</strong>. Every person I mentor " +
      "is a new opportunity to ignite change. Join my free masterclass and start your " +
      "transformation today.</p></div>" +
      '<a class="link" href="https://www.youtube.com/watch?v=bckkxzMjLCI" target="_blank" rel="noopener">Watch the free masterclass ' + ARROW + "</a>" +
      "</div></div>" +

      '<div class="row row--reverse reveal">' +
      '<figure class="figure figure--tall"><img src="assets/life/photo_2025-12-16_12-22-48.jpg" alt="Maria at golden hour, hand resting over her heart" loading="lazy" /></figure>' +
      '<div class="row-body">' +
      '<span class="label">The anchor</span>' +
      "<h3>Mother of five, and a grandmother</h3>" +
      "<div class=\"prose\"><p>I am a <strong>mother of five beautiful children</strong> and a " +
      "proud grandmother. My family is my anchor, my strength, and my greatest wave. They remind " +
      "me every day why I fight to create a more inclusive world.</p></div>" +
      "</div></div>" +

      '<div class="row row--wide reveal">' +
      '<figure class="figure figure--wide"><img src="assets/photos/prosthetic_legs.jpg" alt="Running prosthetics standing on a treadmill" loading="lazy" /></figure>' +
      '<div class="row-body">' +
      '<span class="label">The proof</span>' +
      "<h3>Athlete, author, artist</h3>" +
      "<div class=\"prose\"><p>From a double amputee to a <strong>high-performance athlete, " +
      "author, and artist</strong> — my journey proves that resilience has no limits. I've " +
      "become a symbol of what's possible when you refuse to let the world define your " +
      "capabilities.</p></div>" +
      '<a class="link" href="books" data-route>Read the books ' + ARROW + "</a>" +
      "</div></div>" +

      "</div></div></section>" +

      /* Who am I — the original infographic, shown whole */
      '<section class="section section--sand"><div class="shell">' +
      '<div class="row reveal">' +
      '<figure class="figure"><img src="assets/photos/main_pic.jpg" alt="Who am I? — a portrait of Maria Del Sol annotated with her roles" loading="lazy" /></figure>' +
      '<div class="row-body">' +
      '<span class="label">Who am I?</span>' +
      "<h3>Maria Del Sol</h3>" +
      '<div class="prose"><p>Double amputee since infancy, Brazilian champion adaptive ' +
      "surfer, mother, author and mentor — and the person behind Mobility Project.</p></div>" +
      '<ul class="attr-list" style="margin-top:24px">' +
      "<li>Surfer &amp; Brazilian Champion</li>" +
      "<li>6a in the world</li>" +
      "<li>Double legged amputee since baby</li>" +
      "<li>Mother of 5 girls</li>" +
      "<li>International Mentor &amp; Life Coach</li>" +
      "<li>Tony Robbins Method</li>" +
      "<li>A Course in Miracles mentor</li>" +
      "<li>Trilingual speaker</li>" +
      "<li>Wrote 4 books</li>" +
      "<li>Artist</li>" +
      "</ul></div></div>" +

      '<div class="facts-row reveal" style="margin-top:clamp(48px,6vw,80px)">' +
      "<div><b>45</b><span>Days old when she lost both legs</span></div>" +
      "<div><b>9th</b><span>In the world — World Surf League, 2025</span></div>" +
      "<div><b>3</b><span>Books authored and co-authored</span></div>" +
      "<div><b>5</b><span>Children, and a grandmother</span></div>" +
      "</div></div></section>" +

      /* 5 — The mission */
      '<section class="section"><div class="shell">' +
      marker("02", "The Mission") +
      '<div class="grid">' +
      '<div class="col-7 reveal">' +
      "<h2>When life changes the design, there is still a way.</h2>" +
      "</div>" +
      '<div class="col-5 reveal"><div class="prose">' +
      "<p>Mobility and hope can be redesigned through <strong>courage, faith, and inner " +
      "strength</strong> — grounded in loving yourself as you are.</p>" +
      "<p>From this place of self-acceptance and alignment, movement becomes possible, " +
      "visibility expands, and ableism is challenged by example, not by pity.</p>" +
      '<a class="link" href="mission" data-route>Read the full mission ' + ARROW + "</a>" +
      "</div></div></div></div></section>" +

      /* Quote moment, over real surf photography */
      '<section class="band">' +
      '<img class="band-bg" src="assets/photos/maria_surfing.jpg" alt="Maria Del Sol riding a wave" />' +
      '<div class="shell">' +
      "<blockquote>Everything is a wave — and we surf them together.</blockquote>" +
      "<cite>Maria Del Sol</cite>" +
      "</div></section>" +

      /* 6 — Where the funds go */
      '<section class="section section--dark section--washed">' +
      '<img class="wash" src="assets/photos/maria_surfing.jpg" alt="" aria-hidden="true" loading="lazy" />' +
      '<div class="shell">' +
      marker("03", "Where the funds go") +
      '<div class="grid" style="margin-bottom:clamp(36px,4.5vw,60px)">' +
      '<div class="col-7 reveal"><h2>Equipment, coaching, and a way into sport.</h2></div>' +
      '<div class="col-5 reveal"><p class="lede">Donations will be made to <strong>Dare2tri</strong>, ' +
      "which brings adaptive sport to athletes with physical disabilities and visual " +
      "impairments. The campaign is also funding an app to help disabled people find " +
      "the right locations for their treatments.</p></div>" +
      "</div>" +
      '<div class="impact reveal">' +
      "<div><h3>Adaptive equipment</h3><p>The specialist gear that makes training and " +
      "competition physically possible in the first place.</p></div>" +
      "<div><h3>Coaching</h3><p>Trained coaches who know adaptive sport, so athletes " +
      "progress safely rather than alone.</p></div>" +
      "<div><h3>Access to sport</h3><p>Getting disabled athletes to the water, the track " +
      "and the start line — the part that quietly stops most people.</p></div>" +
      "</div></div></section>" +

      /* 7 — The app we are raising funds to build */
      appSection("04") +

      /* 8 — The campaign */
      '<section class="section section--sand"><div class="shell">' +
      marker("05", "The Campaign") +
      '<div class="grid">' +
      '<div class="col-6 reveal">' +
      "<h2>A different way to fund mobility.</h2>" +
      "</div>" +
      '<div class="col-6 reveal"><div class="prose">' +
      "<p>Mobility Project raises funds through a campaign on <strong>pump.fun</strong>. " +
      "It is a fundraising and community mechanism, not the point of the project — the " +
      "point is getting disabled athletes moving.</p>" +
      "<p>Supporting the campaign is public and on-chain, so the community that forms " +
      "around it is visible to everyone.</p>" +
      "</div></div></div>" +

      '<ol class="steps reveal" style="margin-top:clamp(44px,5.5vw,72px)">' +
      "<li><b>01</b><h3>A community forms</h3><p>Supporters join the campaign on pump.fun " +
      "— one movement, openly on-chain.</p></li>" +
      "<li><b>02</b><h3>Awareness travels</h3><p>Maria carries the message through " +
      "UN-verified platforms, national television and world-stage competitions.</p></li>" +
      "<li><b>03</b><h3>Mobility is funded</h3><p>Donations go to Dare2tri, putting adaptive " +
      "equipment and coaching in disabled athletes' hands.</p></li>" +
      "</ol>" +

      '<div class="reveal" style="margin-top:clamp(36px,4vw,56px)">' +
      supportGroup(
        "btn--ocean",
        "",
        "Always start from the button on this site. Beware of impostor tokens."
      ) +
      "</div></div></section>" +

      /* Life in motion */
      '<section class="section"><div class="shell">' +
      '<div class="reveal" style="margin-bottom:clamp(40px,5vw,72px)">' + WAVE_RULE + "</div>" +
      marker("06", "Life in Motion") +
      '<div class="gallery reveal" id="gallery">' +
      galleryItem("assets/life/photo_2025-12-16_12-22-24.jpg", "Maria in action") +
      galleryItem("assets/photos/maria_fun.jpg", "Maria fitting a prosthetic before training") +
      galleryItem("assets/life/photo_2025-12-16_12-22-52.jpg", "Maria living life") +
      galleryItem("assets/life/photo_2025-12-16_12-22-56.jpg", "Maria moments") +
      "</div></div></section>" +

      /* 9 — More to explore */
      '<section class="section section--sand"><div class="shell">' +
      marker("07", "More to explore") +
      '<div class="cards">' +
      exploreCard("interviews", "assets/photos/interview.jpg", "Media", "Interviews &amp; conversations",
        "Tony Robbins, Brazilian national news, and the story in Maria's own words.") +
      exploreCard("books", "assets/books/3.png", "Publications", "Books &amp; publications",
        "Three titles authored and co-authored, on leadership, resilience and motherhood.", true) +
      exploreCard("competitions", "assets/competitions/2.jpg", "Results", "Competitions &amp; achievements",
        "Brazilian Parasurf champion, vice champion, and top five in Hawaii.") +
      "</div></div></section>" +

      closing(
        "Mobility Project turns courage into movement — funding adaptive equipment, " +
        "coaching and access to sport. Donations are made to Dare2tri."
      )
    );
  }

  function galleryItem(src, alt) {
    return (
      '<button type="button" data-full="' + src + '" aria-label="View photo — ' + alt + '">' +
      '<img src="' + src + '" alt="' + alt + '" loading="lazy" /></button>'
    );
  }

  function exploreCard(route, img, label, title, text, art) {
    return (
      '<a class="card" href="' + route + '" data-route>' +
      '<div class="card-media' + (art ? " card-media--art" : "") + '">' +
      '<img src="' + img + '" alt="" loading="lazy" /></div>' +
      '<div class="card-body">' +
      '<span class="label">' + label + "</span>" +
      "<h3>" + title + "</h3>" +
      "<p>" + text + "</p>" +
      '<span class="link">View ' + ARROW + "</span>" +
      "</div></a>"
    );
  }

  /* ----------------------------------------------------------- 2. mission */

  function mission() {
    return (
      pagehead({
        label: "The Mission",
        title: "A new design ",
        titleEm: "in motion.",
        lede: "Mobility and hope, redesigned through courage, faith and inner strength.",
        image: "assets/photos/maria_sitting.jpg",
        alt: "Maria Del Sol sitting outdoors beside her surfboard",
      }) +

      '<section class="section"><div class="shell">' +
      marker("01", "Why this exists") +
      '<div class="grid">' +
      '<div class="col-6 reveal">' +
      "<h2>When life changes the design, there is still a way.</h2>" +
      "</div>" +
      '<div class="col-6 reveal"><div class="prose">' +
      "<p>I exist to show that mobility and hope can be redesigned through " +
      "<strong>courage, faith, and inner strength</strong> — grounded in loving yourself " +
      "as you are.</p>" +
      "<p>From this place of self-acceptance and alignment, movement becomes possible, " +
      "visibility expands, and ableism is challenged by example, not by pity.</p>" +
      "<p><strong>Mobility Project</strong> exists to make this redesign possible — turning " +
      "courage into movement, faith into direction, strength into continuity, and self-love " +
      "into lasting impact.</p>" +
      "<p>This is my wave. A new design in motion.</p>" +
      '<p style="font-family:var(--serif);font-style:italic;color:var(--ink);font-size:1.1rem">— Maria Del Sol</p>' +
      "</div></div></div></div></section>" +

      '<section class="section section--dark"><div class="shell">' +
      marker("02", "Where the funds go") +
      '<div class="grid" style="margin-bottom:clamp(36px,4.5vw,60px)">' +
      '<div class="col-7 reveal"><h2>Equipment, coaching, and a way into sport.</h2></div>' +
      '<div class="col-5 reveal"><p class="lede">Donations will be made to ' +
      '<a class="link" href="https://dare2tri.org/" target="_blank" rel="noopener">Dare2tri</a> — ' +
      "a non-profit bringing adaptive sport to athletes with physical disabilities and " +
      "visual impairments.</p></div>" +
      "</div>" +
      '<div class="impact reveal">' +
      "<div><h3>Adaptive equipment</h3><p>The specialist gear that makes training and " +
      "competition physically possible in the first place.</p></div>" +
      "<div><h3>Coaching</h3><p>Trained coaches who know adaptive sport, so athletes " +
      "progress safely rather than alone.</p></div>" +
      "<div><h3>Access to sport</h3><p>Getting disabled athletes to the water, the track " +
      "and the start line — the part that quietly stops most people.</p></div>" +
      "</div></div></section>" +

      appSection("03") +

      '<section class="section section--sand"><div class="shell">' +
      marker("04", "The Campaign") +
      '<div class="grid">' +
      '<div class="col-6 reveal"><h2>A different way to fund mobility.</h2></div>' +
      '<div class="col-6 reveal"><div class="prose">' +
      "<p>Mobility Project raises funds through a campaign on <strong>pump.fun</strong>, " +
      "led by Maria Del Sol. It is a fundraising and community mechanism — the point of the " +
      "project is getting disabled athletes moving.</p>" +
      "</div></div></div>" +
      '<ol class="steps reveal" style="margin-top:clamp(44px,5.5vw,72px)">' +
      "<li><b>01</b><h3>A community forms</h3><p>Supporters join the campaign on pump.fun " +
      "and in the X community — one movement, openly on-chain.</p></li>" +
      "<li><b>02</b><h3>Awareness travels</h3><p>Maria carries the message through " +
      "UN-verified platforms, national television, podcasts and world-stage competitions.</p></li>" +
      "<li><b>03</b><h3>Mobility is funded</h3><p>Donations go to <strong>Dare2tri</strong>, " +
      "putting adaptive equipment and coaching in the hands of disabled athletes.</p></li>" +
      "</ol>" +
      '<div class="reveal" style="margin-top:clamp(36px,4vw,56px)">' +
      supportGroup(
        "btn--ocean",
        '<a class="link" href="https://x.com/i/communities/2038728348134756564" target="_blank" rel="noopener">Join the X community ' + ARROW + "</a>"
      ) +
      "</div></div></section>" +

      closing(
        "Every wave starts with one person paddling out. Join the campaign and help " +
        "redesign mobility for people who have been told to wait."
      )
    );
  }

  /* -------------------------------------------------------- 3. interviews */

  function interviews() {
    var items = [
      {
        src: "assets/interviews/robbin.mp4",
        title: "Interview with Tony Robbins",
        label: "Featured interview",
        link: "https://www.youtube.com/watch?v=on2Zd1UOI7E",
      },
      {
        src: "assets/interviews/story.mp4",
        title: "My Life Story",
        label: "Personal journey",
        link: "https://www.youtube.com/watch?v=qVF1Va5f71c",
      },
      {
        src: "assets/interviews/brand.mp4",
        title: "Interview with Conforpes about the challenges of prosthetic legs",
        label: "Mobility &amp; challenges",
        link: "https://www.youtube.com/watch?v=Qq1uZMnTr04",
      },
      {
        src: "assets/interviews/news.mp4",
        title: "Interview on Balanço Geral (Brazilian national news)",
        label: "National television",
        link: "https://youtu.be/MKUOdGAHPZQ?si=k59AfIGU0APdQrMB",
      },
    ];

    var list = items
      .map(function (i, n) {
        return (
          '<article class="video-item reveal">' +
          '<div class="video-frame"><video controls preload="metadata" playsinline>' +
          '<source src="' + i.src + '" type="video/mp4" />' +
          "Your browser does not support the video tag." +
          "</video></div>" +
          '<div class="video-meta">' +
          "<div><span class=\"label\">" + String(n + 1).padStart(2, "0") + " — " + i.label + "</span>" +
          '<h3 style="margin-top:10px">' + i.title + "</h3></div>" +
          '<a class="link" href="' + i.link + '" target="_blank" rel="noopener">Watch on YouTube ' + ARROW + "</a>" +
          "</div></article>"
        );
      })
      .join("");

    return (
      pagehead({
        label: "Interviews",
        title: "Conversations that ",
        titleEm: "move people.",
        lede: "Sharing my story, inspiring change, and spreading the message of courage across the world.",
        image: "assets/photos/interview.jpg",
        alt: "Maria Del Sol during an interview",
      }) +
      '<section class="section"><div class="shell">' +
      marker("01", "Watch") +
      list +
      "</div></section>" +
      closing("Every interview is one more door opened. Help us keep the message travelling.")
    );
  }

  /* ------------------------------------------------------------- 4. books */

  function books() {
    var list = [
      {
        img: "assets/books/1.png",
        role: "Co-author",
        title: "Livro Pessoas Comuns, Resultados Extraordinários",
        sub: "Ordinary People, Extraordinary Results",
        text:
          "Common People, Extraordinary Results brings together inspiring stories of ordinary individuals who achieved remarkable success in their personal and professional lives. The book emphasizes the importance of learning, perseverance, and action, showing that everyone has a unique gift and the potential to reach excellence. Through these testimonies, it encourages readers to overcome limitations and actively build the extraordinary life they are capable of.",
        link:
          "https://www.editoraunisv.com.br/livro-pessoas-comuns-resultados-extraordinarios?srsltid=AfmBOorRc_Aq1kk26f3gR8ni911srLZjESttVO3ZKa33mWybxoqGsi_V",
      },
      {
        img: "assets/books/2.png",
        role: "Co-author",
        title: "Livro Formação de Líderes em Alta Performance",
        sub: "Formation of High-Performance Leaders",
        text:
          "Formation of High Performance Leaders is a comprehensive leadership guide that combines a practical book with an in-depth video course. It presents effective strategies, techniques, and tools that leaders can apply across various sectors to enhance communication, decision-making, and team management. Widely recommended by professionals and academic institutions, the book is an essential resource for anyone seeking to develop strong leadership skills and achieve superior performance.",
        link:
          "https://www.editoraunisv.com.br/livro-formacao-de-lideres-em-alta-performance?srsltid=AfmBOoqgz74r-8sFC52L6AO31wp6JaAy_e0FlsM755JNwu6Dy46-r3r0",
      },
      {
        img: "assets/books/3.png",
        role: "Author",
        title: "Parto Sem Dor: Você Também Pode!",
        sub: "Painless Birth: You Can Too!",
        text:
          "Painless Birth: You Can Too! shares Maria Del Sol's successful experience as a mother of five daughters, all born through natural childbirth, including three home births. The book focuses on her conscious preparation that enabled a pain-free birth and offers personal stories and practical advice to help other women experience empowered and mindful motherhood. It also highlights her remarkable resilience, showing how physical limitations did not prevent her from achieving profound personal and maternal accomplishments.",
        link:
          "https://www.amazon.com/Parto-Sem-Dor-Tamb%C3%83%C2%A9m-Portuguese-ebook/dp/B00IELAC8M",
      },
    ];

    var rows = list
      .map(function (b) {
        return (
          '<article class="book reveal">' +
          '<div class="book-cover"><img src="' + b.img + '" alt="Cover of ' + b.title + '" loading="lazy" /></div>' +
          '<div class="book-info">' +
          '<span class="label">' + b.role + "</span>" +
          "<h3>" + b.title + "</h3>" +
          '<p class="subtitle">' + b.sub + "</p>" +
          "<p>" + b.text + "</p>" +
          '<a class="btn btn--line btn--sm" href="' + b.link + '" target="_blank" rel="noopener">Get the book</a>' +
          "</div></article>"
        );
      })
      .join("");

    return (
      pagehead({
        label: "Books",
        title: "Words that ",
        titleEm: "transform.",
        lede: "Stories that inspire, lessons that last, and wisdom to guide your own journey.",
        image: "assets/photos/maria_conference.jpg",
        alt: "Maria Del Sol speaking on stage",
      }) +
      '<section class="section"><div class="shell">' +
      marker("01", "Publications") +
      rows +
      "</div></section>" +
      closing("Books opened the first doors. Mobility Project opens the next ones.")
    );
  }

  /* ------------------------------------------------------ 5. competitions */

  function competitions() {
    var list = [
      {
        img: "assets/competitions/1.jpg",
        place: "2nd",
        year: "2025",
        title: "Brasileira de Parasurf",
        result: "Silver medal — Vice Champion",
      },
      {
        img: "assets/competitions/2.jpg",
        place: "1st",
        year: "2024",
        title: "Brasileira de Parasurf",
        result: "Gold medal — Champion",
      },
      {
        img: "assets/competitions/3.jpg",
        place: "5th",
        year: "World stage",
        title: "Professionals Circuit of Hawaii",
        result: "Top 5 — World Surf League",
      },
    ];

    var rows = list
      .map(function (c) {
        return (
          '<article class="result reveal">' +
          '<div class="result-figure"><img src="' + c.img + '" alt="' + c.title + '" loading="lazy" /></div>' +
          "<div>" +
          '<span class="label">' + c.year + "</span>" +
          "<h3>" + c.title + "</h3>" +
          "<p>" + c.result + "</p>" +
          "</div>" +
          '<p class="result-place">' + c.place + "<small>Place</small></p>" +
          "</article>"
        );
      })
      .join("");

    return (
      pagehead({
        label: "Competitions",
        title: "Breaking barriers, ",
        titleEm: "wave after wave.",
        lede: "Riding waves, breaking barriers, and proving that determination knows no limits.",
        image: "assets/competitions/4.jpg",
        alt: "Maria Del Sol celebrating on the beach after a heat",
      }) +
      '<section class="section--tight section--flush-top"><div class="shell">' +
      '<div class="ranking reveal">' +
      "<b>Currently ranked 9th in the world</b>" +
      "<span>World Surf League — 2025</span>" +
      "</div></div></section>" +
      '<section class="section"><div class="shell">' +
      marker("01", "Results") +
      '<div class="result-list">' + rows + "</div>" +
      "</div></section>" +
      closing("Podiums change perception. Funding changes lives. Both matter.")
    );
  }

  /* ---------------------------------------------------------- 6. not found */

  function notFound() {
    return (
      '<section class="section"><div class="shell">' +
      '<span class="label">Error 404</span>' +
      '<h1 style="margin-block:22px;max-width:14ch">This wave never formed.</h1>' +
      '<p class="lede">The page you were looking for does not exist — but the project does.</p>' +
      '<div class="actions" style="margin-top:32px">' +
      '<a class="btn btn--solid" href="" data-route>Back to the story</a>' +
      "</div></div></section>"
    );
  }

  /* ------------------------------------------------------------- registry */

  global.ROUTES = {
    "": {
      view: story,
      nav: "story",
      title: "Mobility Project — by Maria Del Sol",
      desc:
        "Founded by Maria Del Sol, adaptive surfing champion and disability advocate. Funding adaptive equipment, coaching, access to sport — and an app to help disabled people find the right locations for their treatments.",
    },
    story: { alias: "" },
    mission: {
      view: mission,
      nav: "mission",
      title: "Mission — Mobility Project",
      desc: "Mobility and hope, redesigned through courage, faith and inner strength.",
    },
    interviews: {
      view: interviews,
      nav: "interviews",
      title: "Interviews — Mobility Project",
      desc: "Interviews and conversations with Maria Del Sol.",
    },
    books: {
      view: books,
      nav: "books",
      title: "Books — Mobility Project",
      desc: "Books authored and co-authored by Maria Del Sol.",
    },
    competitions: {
      view: competitions,
      nav: "competitions",
      title: "Competitions — Mobility Project",
      desc: "Adaptive surfing competitions and achievements of Maria Del Sol.",
    },
    "404": { view: notFound, nav: null, title: "Not found — Mobility Project" },
  };

  global.NAV_ITEMS = [
    { path: "", key: "story", label: "My Story" },
    { path: "mission", key: "mission", label: "Mission" },
    { path: "interviews", key: "interviews", label: "Interviews" },
    { path: "books", key: "books", label: "Books" },
    { path: "competitions", key: "competitions", label: "Competitions" },
    { label: "Support the Project", cta: true },
  ];
})(window);
