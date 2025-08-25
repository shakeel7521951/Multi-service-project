import CodeBlock from "./CodeBlock";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Typography = () => {
  // Code samples
  const htmlHeadings = `<!-- Headings h1–h6 -->
<h1>h1. Bootstrap heading <small class="text-muted">subheading</small></h1>
<h2>h2. Bootstrap heading <small class="text-muted">subheading</small></h2>
<h3>h3. Bootstrap heading <small class="text-muted">subheading</small></h3>
<h4>h4. Bootstrap heading <small class="text-muted">subheading</small></h4>
<h5>h5. Bootstrap heading <small class="text-muted">subheading</small></h5>
<h6>h6. Bootstrap heading <small class="text-muted">subheading</small></h6>

<!-- Heading classes on non-heading elements -->
<p class="h1">.h1 styled paragraph</p>
<p class="h2">.h2 styled paragraph</p>`;

  const displayHeadings = `<!-- Display headings (hero/marketing) -->
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
<h1 class="display-5">Display 5</h1>
<h1 class="display-6">Display 6</h1>`;

  const leadParagraph = `<!-- Lead paragraph -->
<p class="lead">This is a lead paragraph—larger and lighter to introduce content.</p>
<p>Regular paragraph for comparison. It uses the base font-size and line-height.</p>`;

  const inlineText = `<!-- Inline text semantics -->
<p>You can <mark>highlight</mark> text for emphasis.</p>
<p><del>Deleted</del> and <s>no longer accurate</s> text.</p>
<p><ins>Inserted</ins> and <u>underlined</u> text.</p>
<p><small>Small print</small> for fine details.</p>
<p><strong>Bold</strong> and <em>italic</em> emphasis.</p>

<!-- Code-related inline elements -->
<p>Inline code: <code>npm run build</code></p>
<p>Keyboard input: Press <kbd>Ctrl</kbd> + <kbd>S</kbd></p>
<p>Sample output: <samp>Compilation successful.</samp></p>`;

  const preCode = `<!-- Preformatted blocks -->
<pre><code>&lt;div class="row"&gt;
  &lt;div class="col"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>`;

  const blockquotes = `<!-- Blockquotes -->
<figure>
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>

<!-- Right-aligned quote -->
<figure class="text-end">
  <blockquote class="blockquote">
    <p>Right aligned quotation.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Anonymous
  </figcaption>
</figure>`;

  const lists = `<!-- Unordered / Ordered -->
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>

<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>

<!-- Unstyled (removes default bullets/padding) -->
<ul class="list-unstyled">
  <li>Item without bullets</li>
  <li>Another item</li>
</ul>

<!-- Inline list -->
<ul class="list-inline">
  <li class="list-inline-item">Inline 1</li>
  <li class="list-inline-item">Inline 2</li>
  <li class="list-inline-item">Inline 3</li>
</ul>`;

  const descriptionLists = `<!-- Description list -->
<dl>
  <dt>Term</dt>
  <dd>Definition for the term being described.</dd>
</dl>

<!-- Horizontal description list using grid -->
<dl class="row">
  <dt class="col-sm-3">Term</dt>
  <dd class="col-sm-9">A longer definition that spans the remaining columns.</dd>

  <dt class="col-sm-3">Another term</dt>
  <dd class="col-sm-9">Its corresponding definition text.</dd>
</dl>`;

  const alignmentTransform = `<!-- Text alignment -->
<p class="text-start">Left aligned on all viewports</p>
<p class="text-center">Center aligned on all viewports</p>
<p class="text-end">Right aligned on all viewports</p>

<!-- Responsive alignment -->
<p class="text-sm-start text-md-center text-lg-end">
  Start on small, center on md, end on lg+
</p>

<!-- Text transform -->
<p class="text-lowercase">LOWERCASED EXAMPLE</p>
<p class="text-uppercase">uppercased example</p>
<p class="text-capitalize">title cased example</p>`;

  const fontSizeWeightStyle = `<!-- Font size utilities (fs-1 is largest, fs-6 smallest) -->
<p class="fs-1">.fs-1</p>
<p class="fs-2">.fs-2</p>
<p class="fs-3">.fs-3</p>
<p class="fs-4">.fs-4</p>
<p class="fs-5">.fs-5</p>
<p class="fs-6">.fs-6</p>

<!-- Font weight & style -->
<p class="fw-light">Light weight text (.fw-light)</p>
<p class="fw-normal">Normal weight text (.fw-normal)</p>
<p class="fw-semibold">Semibold text (.fw-semibold)</p>
<p class="fw-bold">Bold text (.fw-bold)</p>
<p class="fst-italic">Italic text (.fst-italic)</p>
<p class="fst-normal">Normal style (.fst-normal)</p>`;

  const lineHeightFamily = `<!-- Line-height -->
<p class="lh-1">Tight line height (.lh-1)</p>
<p class="lh-sm">Slightly tight line height (.lh-sm)</p>
<p class="lh-base">Default line height (.lh-base)</p>
<p class="lh-lg">Relaxed line height (.lh-lg)</p>

<!-- Monospace font family -->
<p class="font-monospace">Monospace text via .font-monospace</p>`;

  const wrapBreakTruncate = `<!-- Wrapping & breaking -->
<p class="text-wrap" style="width: 12rem;">
  Long content will wrap as needed inside this fixed width.
</p>

<p class="text-nowrap" style="width: 12rem; border: 1px solid #dee2e6;">
  This text will not wrap and may overflow its container.
</p>

<p class="text-break" style="width: 12rem; border: 1px solid #dee2e6;">
  SuperLongUnbreakableWordSuperLongUnbreakableWord
</p>

<!-- Truncation (requires width + d-inline-block/block) -->
<div class="text-truncate" style="max-width: 220px;">
  This is a very long line of text that will be truncated with an ellipsis.
</div>
<div class="d-inline-block text-truncate" style="max-width: 180px;">
  Inline-block truncation also works as expected.
</div>`;

  const decorationResetLinks = `<!-- Text decoration -->
<a href="#" class="text-decoration-none">Link without underline</a>
<p class="text-decoration-underline">Underlined text via utility</p>

<!-- Reset color (inherit from parent) -->
<p class="text-primary">
  <a href="#" class="text-reset">This link resets to inherit the parent's color</a>
</p>

<!-- Link color helpers -->
<a href="#" class="link-primary">Primary link</a>
<a href="#" class="link-secondary">Secondary link</a>
<a href="#" class="link-success">Success link</a>
<a href="#" class="link-danger">Danger link</a>
<a href="#" class="link-warning">Warning link</a>
<a href="#" class="link-info">Info link</a>
<a href="#" class="link-dark">Dark link</a>`;

  const abbreviations = `<!-- Abbreviations -->
<p>Use <abbr title="HyperText Markup Language">HTML</abbr> to structure pages.</p>
<p><abbr title="Internationalization" class="initialism">i18n</abbr> is a common abbreviation.</p>`;

  const colorsNote = `<!-- Text color utilities (quick reference) -->
<p class="text-primary">.text-primary</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-success">.text-success</p>
<p class="text-danger">.text-danger</p>
<p class="text-warning">.text-warning</p>
<p class="text-info">.text-info</p>
<p class="text-dark">.text-dark</p>
<p class="text-muted">.text-muted</p>
<p class="text-light bg-dark d-inline-block px-2">.text-light on dark</p>
<p class="text-white bg-dark d-inline-block px-2">.text-white on dark</p>`;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0] px-0 sm:px-4 lg:px-6 py-3 sm:py-10 lg:py-14">
      <div className="w-full max-w-6xl mx-auto space-y-5 sm:space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#04AA6D] drop-shadow">
            Bootstrap Typography
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Typography in Bootstrap covers headings, display headings, lead
            text, inline semantics, blockquotes, lists, alignment, transforms,
            font sizes, weights, line-heights, wrapping, truncation, link
            utilities, abbreviations, and more. All utilities are
            responsive-friendly and integrate with the Bootstrap design system.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/grid-system"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Grid System
          </Link>

          <Link
            to="/bootstrap/colors-backgrounds"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Colors & Backgrounds <FaChevronRight />
          </Link>
        </div>

        {/* Headings */}
        <section className="bg-[#D9EEE1] p-5 md:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Headings</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Bootstrap styles the six HTML headings and also provides utility
            classes
            <code className="mx-1 bg-[#E7E9EB] px-1 rounded">.h1</code> through
            <code className="mx-1 bg-[#E7E9EB] px-1 rounded">.h6</code> to apply
            heading sizes to non-heading elements. Use{" "}
            <code>&lt;small&gt;</code> or
            <code className="mx-1 bg-[#E7E9EB] px-1 rounded">
              .text-muted
            </code>{" "}
            for secondary text.
          </p>
          <div className="bg-white p-4 md:p-8 rounded-xl border border-gray-200 shadow-sm mb-6 space-y-1">
            <h1>
              h1. Bootstrap heading{" "}
              <small className="text-gray-500">subheading</small>
            </h1>
            <h2>
              h2. Bootstrap heading{" "}
              <small className="text-gray-500">subheading</small>
            </h2>
            <h3>
              h3. Bootstrap heading{" "}
              <small className="text-gray-500">subheading</small>
            </h3>
            <h4>
              h4. Bootstrap heading{" "}
              <small className="text-gray-500">subheading</small>
            </h4>
            <h5>
              h5. Bootstrap heading{" "}
              <small className="text-gray-500">subheading</small>
            </h5>
            <h6>
              h6. Bootstrap heading{" "}
              <small className="text-gray-500">subheading</small>
            </h6>
            <p className="h1 mt-4">.h1 styled paragraph</p>
            <p className="h2">.h2 styled paragraph</p>
          </div>

          <CodeBlock code={htmlHeadings} />
        </section>

        {/* Display Headings */}
        {/* Display Headings */}
        <section className="bg-white p-5 md:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Display Headings
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Display headings are extra-large, lighter headings intended for hero
            areas or marketing pages. Use <code>.display-1</code> through{" "}
            <code>.display-6</code>.
          </p>

          {/* Visual Representation */}
          <div className="bg-white p-3 md:p-6 rounded-xl border border-gray-200 shadow-sm mb-6 space-y-2">
            <h1 className="text-6xl font-light">Display 1</h1>
            <h1 className="text-5xl font-light">Display 2</h1>
            <h1 className="text-4xl font-light">Display 3</h1>
            <h1 className="text-3xl font-light">Display 4</h1>
            <h1 className="text-2xl font-light">Display 5</h1>
            <h1 className="text-xl font-light">Display 6</h1>
          </div>

          {/* Code Block */}
          <CodeBlock code={displayHeadings} />
        </section>

        {/* Lead Paragraph */}
        <section className="bg-[#D9EEE1] p-5 md:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Lead Paragraph
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Use <code>.lead</code> to make an introductory paragraph stand out
            with larger size and lighter weight. Pair with regular paragraphs
            for contrast.
          </p>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
            <p className="lead">
              This is a lead paragraph that introduces the section content.
            </p>
            <p>
              This is a regular paragraph. It uses the base font-size and
              line-height.
            </p>
          </div>

          <CodeBlock code={leadParagraph} />
        </section>

        {/* Inline Text & Code Semantics */}
        <section className="bg-white p-5 md:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Inline Text Elements & Code
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Bootstrap preserves and enhances the default HTML semantics for
            inline emphasis and code-related elements.
          </p>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6 space-y-2">
            <p>
              Use <mark>mark</mark>, <del>del</del>, <s>s</s>, <ins>ins</ins>,{" "}
              <u>u</u>, <small>small</small>, <strong>strong</strong>,{" "}
              <em>em</em>.
            </p>
            <p>
              Inline code: <code>npm run build</code>
            </p>
            <p>
              Keyboard: <kbd>Ctrl</kbd> + <kbd>C</kbd>
            </p>
            <p>
              Sample output: <samp>Done in 1.23s.</samp>
            </p>
          </div>
          <div className="space-y-4">
            <CodeBlock code={inlineText} />
            <CodeBlock code={preCode} />
          </div>
        </section>

        {/* Blockquotes */}
        <section className="bg-[#D9EEE1] p-5 md:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Blockquotes
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Quote content using <code>&lt;blockquote&gt;</code> with the{" "}
            <code>.blockquote</code> class, and cite sources with{" "}
            <code>.blockquote-footer</code>. Use alignment utilities to position
            them.
          </p>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
            <figure>
              <blockquote className="blockquote">
                <p>
                  Typography is the craft of endowing human language with a
                  durable visual form.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Robert Bringhurst in{" "}
                <cite title="Source Title">
                  The Elements of Typographic Style
                </cite>
              </figcaption>
            </figure>
          </div>

          <CodeBlock code={blockquotes} />
        </section>

        {/* Lists & Description Lists */}
        <section className="bg-white p-5 md:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">Lists</h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Use default ordered/unordered lists, remove bullets with{" "}
            <code>.list-unstyled</code>, or place items inline with{" "}
            <code>.list-inline</code> and <code>.list-inline-item</code>.
          </p>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Unordered</h3>
                <ul className="list-disc ml-6">
                  <li>First</li>
                  <li>Second</li>
                  <li>Third</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Ordered</h3>
                <ol className="list-decimal ml-6">
                  <li>First</li>
                  <li>Second</li>
                  <li>Third</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Inline</h3>
                <ol className="list-inline">
                  <li className="list-inline-item">Item 1</li>
                  <li className="list-inline-item">Item 2</li>
                  <li className="list-inline-item">Item 3</li>
                </ol>
              </div>
            </div>
          </div>

          <CodeBlock code={lists} />

          <h3 className="text-2xl font-semibold mb-3 text-[#04AA6D] mt-4">
            Description Lists
          </h3>
          <p className="text-gray-800 mb-4">
            Use <code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code>, and{" "}
            <code>&lt;dd&gt;</code>. For horizontal layouts, combine with the
            grid system.
          </p>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
            <dl className="row">
              <dt className="col-sm-3">Term</dt>
              <dd className="col-sm-9">
                Definition for the term being described with more details.
              </dd>
              <dt className="col-sm-3">Another term</dt>
              <dd className="col-sm-9">Its corresponding explanation text.</dd>
            </dl>
          </div>

          <CodeBlock code={descriptionLists} />
        </section>

        {/* Alignment & Transform */}
        <section className="bg-[#D9EEE1] p-5 md:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Alignment & Transform
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Control horizontal alignment with <code>.text-start</code>,{" "}
            <code>.text-center</code>, and <code>.text-end</code>. Combine with
            breakpoint prefixes for responsive behavior. Transform text casing
            with <code>.text-lowercase</code>, <code>.text-uppercase</code>, and{" "}
            <code>.text-capitalize</code>.
          </p>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6 space-y-1">
            <p className="text-start">Left aligned</p>
            <p className="text-center">Center aligned</p>
            <p className="text-end">Right aligned</p>
            <p className="text-sm-start text-md-center text-lg-end">
              Responsive aligned: start → center → end
            </p>
            <p className="text-lowercase">LOWERCASE</p>
            <p className="text-uppercase">uppercase</p>
            <p className="text-capitalize">capitalized text example</p>
          </div>

          <CodeBlock code={alignmentTransform} />
        </section>

        {/* Font Size, Weight, Style */}
        <section className="bg-white p-5 md:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Font Size, Weight, Style
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Use <code>.fs-1</code> through <code>.fs-6</code> for font sizes,
            <code className="mx-1 bg-[#E7E9EB] px-1 rounded">.fw-*</code> for
            weights, and{" "}
            <code className="mx-1 bg-[#E7E9EB] px-1 rounded">.fst-*</code> for
            styles.
          </p>

          {/* Visual Demonstration */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Font Sizes */}
              <div>
                <p className="text-6xl font-semibold">.fs-1 (Very Large)</p>
                <p className="text-5xl font-semibold">.fs-2</p>
                <p className="text-4xl font-semibold">.fs-3</p>
                <p className="text-3xl font-semibold">.fs-4</p>
                <p className="text-2xl font-semibold">.fs-5</p>
                <p className="text-xl font-semibold">.fs-6 (Smallest)</p>
              </div>

              {/* Font Weights & Styles */}
              <div className="space-y-1">
                <p className="font-light">.fw-light (Light)</p>
                <p className="font-normal">.fw-normal (Normal)</p>
                <p className="font-semibold">.fw-semibold (SemiBold)</p>
                <p className="font-bold">.fw-bold (Bold)</p>
                <p className="italic">.fst-italic (Italic)</p>
                <p className="not-italic">.fst-normal (Normal Style)</p>
              </div>
            </div>
          </div>

          {/* Code Box */}
          <CodeBlock code={fontSizeWeightStyle} />
        </section>

        {/* Line-height & Font Family */}
        <section className="bg-[#D9EEE1] p-5 md:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Line-height & Font Family
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Adjust readability with line-height utilities and use{" "}
            <code>.font-monospace</code> for code-like text.
          </p>

          {/* Visual Examples */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6 space-y-4">
            <p className="lh-1 bg-[#E7E9EB] p-2 rounded">
              This paragraph uses <code>.lh-1</code>
              <br /> Line height is very tight and compact.
            </p>
            <p className="lh-sm bg-[#E7E9EB] p-2 rounded">
              This paragraph uses <code>.lh-sm</code>
              <br /> Slightly more relaxed line height than <code>.lh-1</code>.
            </p>
            <p className="lh-base bg-[#E7E9EB] p-2 rounded">
              This paragraph uses <code>.lh-base</code>
              <br /> This is the default line height used in Bootstrap.
            </p>
            <p className="lh-lg bg-[#E7E9EB] p-2 rounded">
              This paragraph uses <code>.lh-lg</code>
              <br /> Line height is much looser for readability.
            </p>
            <p className="font-monospace mt-3 bg-[#E7E9EB] p-2 rounded">
              This paragraph uses <code>.font-monospace</code>
              <br /> Example: Monospace fonts like <b>Courier / Consolas</b>.
            </p>
          </div>

          <CodeBlock code={lineHeightFamily} />
        </section>

        {/* Wrapping, Breaking, Truncation */}
        <section className="bg-white p-5 md:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Wrapping, Breaking, Truncation
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Control long content with wrap and overflow utilities. Truncation
            requires a fixed or max width plus <code>.text-truncate</code> and a
            block or inline-block display.
          </p>

          <CodeBlock code={wrapBreakTruncate} />
        </section>

        {/* Decoration, Reset & Link Helpers; Abbreviations */}
        <section className="bg-[#D9EEE1] p-5 md:p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Decoration, Reset, Links & Abbreviations
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Control underlines with text-decoration utilities, reset link colors
            to inherit from parents, and use link color helpers. Mark
            abbreviations with titles and <code>.initialism</code> for compact
            styling.
          </p>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6 space-y-2">
            <a href="#" className="text-decoration-none">
              Link without underline
            </a>
            <p className="text-decoration-underline">Underlined text</p>
            <p className="text-primary">
              <a href="#" className="text-reset">
                Reset link color to parent
              </a>
            </p>
            <p className="mt-3">
              Abbrev: <abbr title="HyperText Markup Language">HTML</abbr>,{" "}
              <abbr title="Internationalization" className="initialism">
                i18n
              </abbr>
            </p>
          </div>
          <div className="space-y-4">
            <CodeBlock code={decorationResetLinks} />
            <CodeBlock code={abbreviations} />
          </div>
        </section>

        {/* Quick Color Utilities Reference (link to full page) */}
        <section className="bg-white p-5 md:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Text Color Utilities (Quick Reference)
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            A brief preview of text color utilities. Full details are covered in
            the next chapter on Colors & Backgrounds.
          </p>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6 space-y-1">
            <p className="text-primary">.text-primary</p>
            <p className="text-secondary">.text-secondary</p>
            <p className="text-success">.text-success</p>
            <p className="text-danger">.text-danger</p>
            <p className="text-warning">.text-warning</p>
            <p className="text-info">.text-info</p>
            <p className="text-dark">.text-dark</p>
            <p className="text-muted">.text-muted</p>
            <p className="text-light bg-dark inline-block px-2">
              .text-light on dark
            </p>
            <p className="text-white bg-dark inline-block px-2">
              .text-white on dark
            </p>
          </div>

          <CodeBlock code={colorsNote} />
        </section>

        {/* Bottom Navigation */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap/grid-system"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Grid System
          </Link>

          <Link
            to="/bootstrap/colors-backgrounds"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Colors & Backgrounds <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Typography;
