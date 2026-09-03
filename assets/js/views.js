/* ==========================================================================
   The Mobility Project — route views
   Every route returns a plain HTML string. Links marked [data-route] are
   intercepted by the router so the address bar never shows a ".html" file.
   ========================================================================== */

(function (global) {
  "use strict";

  var ARROW =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  var PUMP_ICON =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';

  var SHIELD_ICON =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.6 4.6 5.8v5.6c0 4.4 3.1 8.5 7.4 9.9 4.3-1.4 7.4-5.5 7.4-9.9V5.8L12 2.6Z"/><path d="m9.2 11.9 2 2 3.6-3.7"/></svg>';

  var HEART_ICON =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8Z"/></svg>';

  var VERIFIED_ICON =
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.6 14.6 4l3.4-.3.9 3.3 3 1.7-1.3 3.2 1.3 3.2-3 1.7-.9 3.3-3.4-.3L12 22.4 9.4 20l-3.4.3-.9-3.3-3-1.7L3.4 12 2.1 8.8l3-1.7.9-3.3L9.4 4 12 1.6Zm-1.2 13.9 5.6-5.6-1.4-1.4-4.2 4.2-2-2L7.4 12l3.4 3.5Z"/></svg>';

  /* ---------------------------------------------------------------- shared */

  function pageHero(opts) {
    return (
      '<section class="hero hero--page">' +
      '<div class="hero-media"><img src="' + opts.image + '" alt="" /></div>' +
      '<span class="hero-glow hero-glow--a"></span>' +
      '<span class="hero-glow hero-glow--b"></span>' +
      '<div class="wrap hero-inner">' +
      '<span class="eyebrow">' + opts.eyebrow + "</span>" +
      "<h1>" + opts.title + '<em class="gradient-text">' + opts.titleAccent + "</em></h1>" +
      "<p class=\"hero-quote\">" + opts.lede + "</p>" +
      "</div></section>"
    );
  }

  function ctaBand(text) {
    return (
      '<section class="section section--tight"><div class="wrap">' +
      '<div class="cta-band reveal">' +
      '<img class="mark" src="assets/img/logo-wide.png" alt="The Mobility Project" />' +
      '<h2>Back the <span class="gradient-text">Mobility Project</span></h2>' +
      "<p>" + text + "</p>" +
      '<div class="hero-actions">' +
      '<a class="btn btn--primary" href="#" data-link="how-to-buy">' + PUMP_ICON + " Buy on pump.fun</a>" +
      '<a class="btn btn--ghost" href="mission" data-route>Read the mission ' + ARROW + "</a>" +
      "</div></div></div></section>"
    );
  }

  /* ------------------------------------------------------------- 1. story */

  function story() {
    return (
      /* Hero */
      '<section class="hero hero--split" id="top">' +
      '<span class="hero-glow hero-glow--a"></span>' +
      '<span class="hero-glow hero-glow--b"></span>' +
      '<div class="wrap">' +
      '<div class="hero-inner">' +
      '<span class="eyebrow">Official charity campaign on pump.fun</span>' +
      '<h1>Mobility is a right,<em class="gradient-text">not a privilege.</em></h1>' +
      '<p class="hero-lede">The <strong>Mobility Project</strong> is a charity campaign on ' +
      '<strong>pump.fun</strong>, led by <strong>Maria Del Sol</strong> — a United Nations ' +
      "Verified Agent, double amputee and Brazilian champion adaptive surfer. Donations go to " +
      '<strong>Dare2tri</strong>, funding adaptive equipment and coaching for disabled athletes.</p>' +
      '<p class="hero-quote">“Everything is a wave — and we surf them together.”</p>' +
      '<div class="hero-actions">' +
      '<a class="btn btn--primary" href="#" data-link="how-to-buy">' + PUMP_ICON + " Buy on pump.fun</a>" +
      '<a class="btn btn--ghost" href="mission" data-route>Our mission ' + ARROW + "</a>" +
      "</div>" +
      '<ul class="trust-row">' +
      '<li>' + VERIFIED_ICON + "United Nations Verified Agent</li>" +
      "<li>" + PUMP_ICON + "Charity campaign on pump.fun</li>" +
      '<li>' + HEART_ICON + "Donations to Dare2tri</li>" +
      "</ul></div>" +
      '<figure class="portrait">' +
      '<img src="assets/photos/maria_sitting2.jpg" alt="Maria Del Sol sitting on a staircase, wearing her prosthetic legs" />' +
      '<figcaption class="portrait-badge">' +
      '<img src="assets/photos/verified.jpeg" alt="" />' +
      VERIFIED_ICON +
      "<span>United Nations Verified Agent</span>" +
      "</figcaption></figure>" +
      "</div>" +
      '<div class="scroll-cue"><span>Scroll</span><i></i></div>' +
      "</section>" +

      /* The campaign — stated plainly, directly under the hero */
      '<section class="section section--tight"><div class="wrap">' +
      '<div class="campaign reveal">' +
      '<div class="campaign-head">' +
      '<span class="eyebrow">The campaign</span>' +
      '<h2>An official charity campaign <span class="gradient-text">on pump.fun</span></h2>' +
      "<p>This is the one and only campaign run by Maria Del Sol for the Mobility Project. " +
      "Every buy is a public, on-chain vote for a world where disabled people can move freely.</p>" +
      "</div>" +
      '<ol class="campaign-steps">' +
      '<li><span class="num">01</span><h3>A community forms</h3>' +
      "<p>Supporters join the campaign on pump.fun — one movement, openly on-chain.</p></li>" +
      '<li><span class="num">02</span><h3>Awareness travels</h3>' +
      "<p>Maria carries the message through UN-verified platforms, national television and world-stage competitions.</p></li>" +
      '<li><span class="num">03</span><h3>Mobility is funded</h3>' +
      "<p>Donations go to <strong>Dare2tri</strong>, putting adaptive equipment and coaching in disabled athletes' hands.</p></li>" +
      "</ol>" +
      '<div class="campaign-foot">' +
      '<a class="btn btn--primary" href="#" data-link="how-to-buy">' + PUMP_ICON + " Buy on pump.fun</a>" +
      '<a class="btn btn--ghost" href="mission" data-route>Read the full mission ' + ARROW + "</a>" +
      '<p class="campaign-note">' + SHIELD_ICON +
      "Always launch the campaign from the button on this site. Beware of impostor tokens.</p>" +
      "</div></div></div></section>" +

      /* Stats */
      '<section class="section section--tight"><div class="wrap">' +
      '<div class="stats reveal">' +
      '<div class="stat"><b>45</b><span>Days old when she lost both legs</span></div>' +
      '<div class="stat"><b>9th</b><span>In the world — WSL 2025</span></div>' +
      '<div class="stat"><b>3</b><span>Books authored &amp; co-authored</span></div>' +
      '<div class="stat"><b>5</b><span>Children, and a grandmother</span></div>' +
      "</div></div></section>" +

      /* Who am I */
      '<section class="section section--tight"><div class="wrap">' +
      '<div class="showcase reveal">' +
      '<div class="showcase-img"><img src="assets/photos/main_pic.jpg" alt="Who am I? — Maria Del Sol at a glance" loading="lazy" /></div>' +
      '<div class="showcase-body">' +
      '<span class="eyebrow">Who am I?</span>' +
      '<h2>Maria <span class="gradient-text">Del Sol</span></h2>' +
      "<p>Double amputee since babyhood, Brazilian champion adaptive surfer, mother, author and mentor — and the person behind the Mobility Project.</p>" +
      '<div class="facts">' +
      "<span>Surfer &amp; Brazilian Champion</span>" +
      "<span>6a in the world</span>" +
      "<span>Double legged amputee since baby</span>" +
      "<span>Mother of 5 girls</span>" +
      "<span>International Mentor &amp; Life Coach</span>" +
      "<span>Tony Robbins Method</span>" +
      "<span>A Course in Miracles mentor</span>" +
      "<span>Trilingual speaker</span>" +
      "<span>Wrote 4 books</span>" +
      "<span>Artist</span>" +
      "</div></div></div></div></section>" +

      /* Journey */
      '<section class="section"><div class="wrap">' +
      '<div class="section-head reveal">' +
      '<span class="eyebrow">My journey</span>' +
      '<h2>From the shoreline to the <span class="gradient-text">world stage</span></h2>' +
      "<p>The story behind the project — a life spent proving that limitation is a design problem, not a destiny.</p>" +
      "</div>" +

      '<div class="bento">' +

      '<article class="card card--wide span-6 reveal">' +
      '<div class="card-media"><img src="assets/photos/maria_surfing.jpg" alt="Maria surfing" loading="lazy" /></div>' +
      '<div class="card-body">' +
      '<span class="eyebrow">The ocean</span>' +
      "<p>I lost both my legs when I was just <strong>45 days old</strong>. But that never stopped me from chasing the waves. Today, I am the <strong>Brazilian Surfing Vice Champion</strong> and ranked among the <strong>Top 10 in the world</strong>. The ocean taught me that limitations exist only in the mind.</p>" +
      "</div></article>" +

      '<article class="card span-3 reveal">' +
      '<div class="card-media"><img src="assets/photos/verified.jpeg" alt="Maria — UN Verified Agent" loading="lazy" /></div>' +
      '<div class="card-body">' +
      '<span class="eyebrow">Recognition</span>' +
      "<p>I am proud to be a <strong>United Nations Verified Agent</strong> in partnership with TikTok, using my platform to spread awareness, inspire change, and amplify voices that deserve to be heard on a global stage.</p>" +
      '<a class="link-arrow" href="https://www.tiktok.com/@mariadosolglobal" target="_blank" rel="noopener">Follow on TikTok ' + ARROW + "</a>" +
      "</div></article>" +

      '<article class="card span-3 reveal">' +
      '<div class="card-media"><img src="assets/photos/maria_conference.jpg" alt="Maria speaking on stage" loading="lazy" /></div>' +
      '<div class="card-body">' +
      '<span class="eyebrow">The voice</span>' +
      "<p>As a <strong>certified Life Coach trained in the Tony Robbins method</strong>, I help others unlock their true potential. My voice carries a message of <strong>courage, transformation, and spiritual strength</strong>. Every person I mentor is a new opportunity to ignite change. Join my free masterclass and start your transformation today.</p>" +
      '<a class="link-arrow" href="https://www.youtube.com/watch?v=bckkxzMjLCI" target="_blank" rel="noopener">Watch my free masterclass ' + ARROW + "</a>" +
      "</div></article>" +

      '<article class="card span-3 reveal">' +
      '<div class="card-media"><img src="assets/photos/maria_fun.jpg" alt="Maria laughing outdoors" loading="lazy" /></div>' +
      '<div class="card-body">' +
      '<span class="eyebrow">The anchor</span>' +
      "<p>I am a <strong>mother of five beautiful children</strong> and a proud grandmother. My family is my anchor, my strength, and my greatest wave. They remind me every day why I fight to create a more inclusive world.</p>" +
      "</div></article>" +

      '<article class="card span-3 reveal">' +
      '<div class="card-media"><img src="assets/photos/prosthetic_legs.jpg" alt="Maria as an athlete" loading="lazy" /></div>' +
      '<div class="card-body">' +
      '<span class="eyebrow">The proof</span>' +
      "<p>From a double amputee to a <strong>high-performance athlete, author, and artist</strong> — my journey proves that resilience has no limits. I've become a symbol of what's possible when you refuse to let the world define your capabilities.</p>" +
      "</div></article>" +

      "</div></div></section>" +

      /* Gallery */
      '<section class="section"><div class="wrap">' +
      '<div class="section-head reveal">' +
      '<span class="eyebrow">Life in motion</span>' +
      '<h2>Moments from the <span class="gradient-text">everyday</span></h2>' +
      "</div>" +
      '<div class="gallery reveal" id="gallery">' +
      galleryItem("assets/life/photo_2025-12-16_12-22-24.jpg", "Maria in action") +
      galleryItem("assets/life/photo_2025-12-16_12-22-48.jpg", "Maria in motion") +
      galleryItem("assets/life/photo_2025-12-16_12-22-52.jpg", "Maria living life") +
      galleryItem("assets/life/photo_2025-12-16_12-22-56.jpg", "Maria moments") +
      "</div></div></section>" +

      ctaBand(
        "The Mobility Project turns courage into movement, faith into direction, and " +
          "self-love into lasting impact for disabled people everywhere. Donations go to Dare2tri."
      )
    );
  }

  function galleryItem(src, alt) {
    return (
      '<button type="button" data-full="' + src + '" aria-label="View photo — ' + alt + '">' +
      '<img src="' + src + '" alt="' + alt + '" loading="lazy" /></button>'
    );
  }

  /* ----------------------------------------------------------- 2. mission */

  function mission() {
    return (
      pageHero({
        image: "assets/photos/maria_sitting.jpg",
        eyebrow: "My mission",
        title: "A new design ",
        titleAccent: "in motion.",
        lede: "Mobility and hope, redesigned through courage, faith and inner strength.",
      }) +

      '<section class="section"><div class="wrap">' +
      '<div class="mission-panel reveal">' +
      '<span class="eyebrow">Why this exists</span>' +
      '<p class="lede">When life changes the design, there is still a way.</p>' +
      '<div class="mission-body">' +
      "<p>I exist to show that mobility and hope can be redesigned through <strong>courage, faith, and inner strength</strong> — grounded in loving yourself as you are.</p>" +
      "<p>From this place of self-acceptance and alignment, movement becomes possible, visibility expands, and ableism is challenged by example, not by pity.</p>" +
      "<p>The <strong>Mobility Project</strong> exists to make this redesign possible — turning courage into movement, faith into direction, strength into continuity, and self-love into lasting impact.</p>" +
      "<p>This is my wave. A new design in motion.</p>" +
      "</div>" +
      '<div class="callout">' +
      '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" style="color:var(--sky);flex:none"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8Z" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      '<p>Donations will be made to <a href="https://dare2tri.org/" target="_blank" rel="noopener">Dare2tri</a> — a non-profit bringing adaptive sport to athletes with physical disabilities and visual impairments.</p>' +
      "</div>" +
      '<p class="mission-sign">— Maria Del Sol 🌊</p>' +
      "</div></div></section>" +

      '<section class="section"><div class="wrap">' +
      '<div class="section-head reveal">' +
      '<span class="eyebrow">The campaign</span>' +
      '<h2>How the <span class="gradient-text">Mobility Project</span> works</h2>' +
      "<p>A charity campaign on pump.fun, led by a United Nations Verified Agent who lives the cause every single day.</p>" +
      "</div>" +
      '<div class="steps">' +
      '<div class="step reveal"><span class="num">01</span><h3>A community forms</h3><p>Supporters join the campaign on pump.fun and in the X community — one movement, openly on-chain.</p></div>' +
      '<div class="step reveal"><span class="num">02</span><h3>Awareness travels</h3><p>Maria carries the message through UN-verified platforms, national television, podcasts and world-stage competitions.</p></div>' +
      '<div class="step reveal"><span class="num">03</span><h3>Mobility is funded</h3><p>Donations go to <strong>Dare2tri</strong>, putting adaptive equipment and coaching in the hands of disabled athletes.</p></div>' +
      "</div></div></section>" +

      ctaBand(
        "Every wave starts with one person paddling out. Join the campaign and help redesign mobility for people who have been told to wait."
      )
    );
  }

  /* -------------------------------------------------------- 3. interviews */

  function interviews() {
    var items = [
      {
        src: "assets/interviews/robbin.mp4",
        title: "Interview with Tony Robbins",
        chip: "🎤 Featured interview",
        link: "https://www.youtube.com/watch?v=on2Zd1UOI7E",
        featured: true,
      },
      {
        src: "assets/interviews/story.mp4",
        title: "My Life Story",
        chip: "🌊 Personal journey",
        link: "https://www.youtube.com/watch?v=qVF1Va5f71c",
      },
      {
        src: "assets/interviews/brand.mp4",
        title: "Interview with Conforpes about the challenges of prosthetic legs",
        chip: "🦿 Mobility &amp; challenges",
        link: "https://www.youtube.com/watch?v=Qq1uZMnTr04",
      },
      {
        src: "assets/interviews/news.mp4",
        title: "Interview on Balanço Geral (Brazilian national news)",
        chip: "📺 National television",
        link: "https://youtu.be/MKUOdGAHPZQ?si=k59AfIGU0APdQrMB",
      },
    ];

    var cards = items
      .map(function (i) {
        return (
          '<article class="card video-card reveal' + (i.featured ? " is-featured" : "") + '">' +
          '<div class="video-frame"><video controls preload="metadata" playsinline>' +
          '<source src="' + i.src + '" type="video/mp4" />' +
          "Your browser does not support the video tag." +
          "</video></div>" +
          '<div class="card-body">' +
          "<h3>" + i.title + "</h3>" +
          '<div class="video-meta">' +
          '<span class="chip">' + i.chip + "</span>" +
          '<a class="link-arrow" href="' + i.link + '" target="_blank" rel="noopener">Watch on YouTube ' + ARROW + "</a>" +
          "</div></div></article>"
        );
      })
      .join("");

    return (
      pageHero({
        image: "assets/photos/interview.jpg",
        eyebrow: "Interviews",
        title: "Conversations that ",
        titleAccent: "move people.",
        lede: "Sharing my story, inspiring change, and spreading the message of courage across the world.",
      }) +
      '<section class="section"><div class="wrap">' +
      '<div class="section-head reveal">' +
      '<span class="eyebrow">Watch</span>' +
      '<h2>Interviews &amp; <span class="gradient-text">appearances</span></h2>' +
      "</div>" +
      '<div class="videos">' + cards + "</div>" +
      "</div></section>" +
      ctaBand("Every interview is one more door opened. Help us keep the message travelling.")
    );
  }

  /* ------------------------------------------------------------- 4. books */

  function books() {
    var list = [
      {
        img: "assets/books/1.png",
        tag: "Co-Author",
        title: "Livro Pessoas Comuns, Resultados Extraordinários",
        sub: "Ordinary People, Extraordinary Results",
        text:
          "Common People, Extraordinary Results brings together inspiring stories of ordinary individuals who achieved remarkable success in their personal and professional lives. The book emphasizes the importance of learning, perseverance, and action, showing that everyone has a unique gift and the potential to reach excellence. Through these testimonies, it encourages readers to overcome limitations and actively build the extraordinary life they are capable of.",
        link:
          "https://www.editoraunisv.com.br/livro-pessoas-comuns-resultados-extraordinarios?srsltid=AfmBOorRc_Aq1kk26f3gR8ni911srLZjESttVO3ZKa33mWybxoqGsi_V",
      },
      {
        img: "assets/books/2.png",
        tag: "Co-Author",
        title: "Livro Formação de Líderes em Alta Performance",
        sub: "Formation of High-Performance Leaders",
        text:
          "Formation of High Performance Leaders is a comprehensive leadership guide that combines a practical book with an in-depth video course. It presents effective strategies, techniques, and tools that leaders can apply across various sectors to enhance communication, decision-making, and team management. Widely recommended by professionals and academic institutions, the book is an essential resource for anyone seeking to develop strong leadership skills and achieve superior performance.",
        link:
          "https://www.editoraunisv.com.br/livro-formacao-de-lideres-em-alta-performance?srsltid=AfmBOoqgz74r-8sFC52L6AO31wp6JaAy_e0FlsM755JNwu6Dy46-r3r0",
      },
      {
        img: "assets/books/3.png",
        tag: "Author",
        author: true,
        title: "Parto Sem Dor: Você Também Pode!",
        sub: "Painless Birth: You Can Too!",
        text:
          "Painless Birth: You Can Too! shares Maria Del Sol's successful experience as a mother of five daughters, all born through natural childbirth, including three home births. The book focuses on her conscious preparation that enabled a pain-free birth and offers personal stories and practical advice to help other women experience empowered and mindful motherhood. It also highlights her remarkable resilience, showing how physical limitations did not prevent her from achieving profound personal and maternal accomplishments.",
        link:
          "https://www.amazon.com/Parto-Sem-Dor-Tamb%C3%83%C2%A9m-Portuguese-ebook/dp/B00IELAC8M",
      },
    ];

    var cards = list
      .map(function (b) {
        return (
          '<article class="book reveal">' +
          '<div class="book-cover"><img src="' + b.img + '" alt="' + b.title + '" loading="lazy" /></div>' +
          '<div class="book-info">' +
          '<span class="tag' + (b.author ? " tag--author" : "") + '">' + b.tag + "</span>" +
          "<h3>" + b.title + "<em>" + b.sub + "</em></h3>" +
          "<p>" + b.text + "</p>" +
          '<a class="btn btn--sm" href="' + b.link + '" target="_blank" rel="noopener">Get the book ' + ARROW + "</a>" +
          "</div></article>"
        );
      })
      .join("");

    return (
      pageHero({
        image: "assets/photos/maria_conference.jpg",
        eyebrow: "Books",
        title: "Words that ",
        titleAccent: "transform.",
        lede: "Stories that inspire, lessons that last, and wisdom to guide your own journey.",
      }) +
      '<section class="section"><div class="wrap">' +
      '<div class="section-head reveal">' +
      '<span class="eyebrow">Publications</span>' +
      '<h2>My books &amp; <span class="gradient-text">publications</span></h2>' +
      "</div>" +
      '<div class="books">' + cards + "</div>" +
      "</div></section>" +
      ctaBand("Books opened the first doors. The Mobility Project opens the next ones.")
    );
  }

  /* ------------------------------------------------------ 5. competitions */

  function competitions() {
    var list = [
      {
        img: "assets/competitions/1.jpg",
        badge: "2nd",
        badgeClass: "badge--silver",
        year: "2025",
        title: "Brasileira de Parasurf",
        medal: "🥈",
        result: "Silver Medal — Vice Champion",
      },
      {
        img: "assets/competitions/2.jpg",
        badge: "1st",
        badgeClass: "badge--gold",
        year: "2024",
        title: "Brasileira de Parasurf",
        medal: "🥇",
        result: "Gold Medal — Champion",
      },
      {
        img: "assets/competitions/3.jpg",
        badge: "5th",
        badgeClass: "badge--blue",
        year: "World stage",
        title: "Professionals Circuit of Hawaii",
        medal: "🏄‍♀️",
        result: "Top 5 — World Surf League",
      },
    ];

    var cards = list
      .map(function (c) {
        return (
          '<article class="card comp reveal">' +
          '<div class="card-media"><img src="' + c.img + '" alt="' + c.title + '" loading="lazy" />' +
          '<div class="badge ' + c.badgeClass + '">' + c.badge + "<span>Place</span></div></div>" +
          '<div class="card-body">' +
          '<span class="year">' + c.year + "</span>" +
          "<h3>" + c.title + "</h3>" +
          '<div class="result"><span class="medal">' + c.medal + "</span><span>" + c.result + "</span></div>" +
          "</div></article>"
        );
      })
      .join("");

    return (
      pageHero({
        image: "assets/competitions/4.jpg",
        eyebrow: "Competitions",
        title: "Breaking barriers, ",
        titleAccent: "wave after wave.",
        lede: "Riding waves, breaking barriers, and proving that determination knows no limits.",
      }) +
      '<section class="section section--tight"><div class="wrap">' +
      '<div class="ranking reveal">' +
      '<div class="ico">🌊</div>' +
      "<div><h3>Currently ranked 9th in the world</h3><p>World Surf League — 2025</p></div>" +
      "</div></div></section>" +
      '<section class="section"><div class="wrap">' +
      '<div class="section-head reveal">' +
      '<span class="eyebrow">Results</span>' +
      '<h2>Competition <span class="gradient-text">results</span></h2>' +
      "</div>" +
      '<div class="comps">' + cards + "</div>" +
      "</div></section>" +
      ctaBand("Podiums change perception. Funding changes lives. Both matter.")
    );
  }

  /* ---------------------------------------------------------- 6. not found */

  function notFound() {
    return (
      '<section class="section" style="padding-top:calc(var(--header-h) + 90px);min-height:70vh"><div class="wrap">' +
      '<div class="mission-panel">' +
      '<span class="eyebrow">404</span>' +
      '<p class="lede">This wave never formed.</p>' +
      "<p>The page you were looking for does not exist — but the project does.</p>" +
      '<div class="hero-actions"><a class="btn btn--primary" href="" data-route>Back to the story ' + ARROW + "</a></div>" +
      "</div></div></section>"
    );
  }

  /* ------------------------------------------------------------- registry */

  global.ROUTES = {
    "": {
      view: story,
      nav: "story",
      title: "The Mobility Project — by Maria Del Sol",
      desc:
        "The Mobility Project is a pump.fun charity campaign led by Maria Del Sol, United Nations Verified Agent, adaptive surfer and double amputee.",
    },
    story: { alias: "" },
    mission: {
      view: mission,
      nav: "mission",
      title: "My Mission — The Mobility Project",
      desc: "Mobility and hope, redesigned through courage, faith and inner strength.",
    },
    interviews: {
      view: interviews,
      nav: "interviews",
      title: "Interviews — The Mobility Project",
      desc: "Interviews and conversations with Maria Del Sol.",
    },
    books: {
      view: books,
      nav: "books",
      title: "Books — The Mobility Project",
      desc: "Books authored and co-authored by Maria Del Sol.",
    },
    competitions: {
      view: competitions,
      nav: "competitions",
      title: "Competitions — The Mobility Project",
      desc: "Adaptive surfing competitions and achievements of Maria Del Sol.",
    },
    "404": { view: notFound, nav: null, title: "Not found — The Mobility Project" },
  };

  global.NAV_ITEMS = [
    { path: "", key: "story", label: "My Story" },
    { path: "mission", key: "mission", label: "My Mission" },
    { path: "interviews", key: "interviews", label: "Interviews" },
    { path: "books", key: "books", label: "Books" },
    { path: "competitions", key: "competitions", label: "Competitions" },
    { label: "Buy on pump.fun", cta: true },
  ];
})(window);
