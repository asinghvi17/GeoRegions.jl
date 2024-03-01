import{_ as e,c as t,o as a,a7 as s}from"./chunks/framework.D6bE-mmG.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"GeoRegions.jl","text":"Document your code","tagline":"Defining Geographic Regions for Data Extraction and Analysis","image":{"src":"/assets/logo.png","alt":"GeoRegions"},"actions":[{"theme":"brand","text":"Getting Started","link":"/georegions/intro"},{"theme":"alt","text":"Tutorials","link":"/using/isin"},{"theme":"alt","text":"View on Github","link":"https://github.com/juliaclimate/GeoRegions.jl"}]},"features":[{"icon":"<img width=\\"64\\" height=\\"64\\" src=\\"https://img.icons8.com/arcade/64/markdown.png\\" alt=\\"markdown\\"/>","title":"GeoRegions","details":"Define your own custom Geographic Regions","link":"/georegions/intro"},{"icon":"<img width=\\"64\\" height=\\"64\\" src=\\"https://img.icons8.com/arcade/64/markdown.png\\" alt=\\"markdown\\"/>","title":"Extract Data","details":"Data Extraction made easy using GeoRegions.jl","link":"/using/extract"},{"icon":"<img width=\\"64\\" height=\\"64\\" src=\\"https://img.icons8.com/arcade/64/markdown.png\\" alt=\\"markdown\\"/>","title":null,"details":"Preset Geographic Regions included","link":"/lists/default"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":null}'),n={name:"index.md"},i=s(`<h2 id="Installation-Instructions" tabindex="-1">Installation Instructions <a class="header-anchor" href="#Installation-Instructions" aria-label="Permalink to &quot;Installation Instructions {#Installation-Instructions}&quot;">​</a></h2><p>The latest version of GeoRegions can be installed using the Julia package manager (accessed by pressing <code>]</code> in the Julia command prompt)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>julia&gt; ]</span></span>
<span class="line"><span>(@v1.6) pkg&gt; add GeoRegions</span></span></code></pre></div><p>You can update <code>GeoRegions.jl</code> to the latest version using</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>(@v1.6) pkg&gt; update GeoRegions</span></span></code></pre></div><p>And if you want to get the latest release without waiting for me to update the Julia Registry (although this generally isn&#39;t necessary since I make a point to release patch versions as soon as I find bugs or add new working features), you may fix the version to the <code>main</code> branch of the GitHub repository:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>(@v1.6) pkg&gt; add GeoRegions#main</span></span></code></pre></div><h2 id="Getting-help" tabindex="-1">Getting help <a class="header-anchor" href="#Getting-help" aria-label="Permalink to &quot;Getting help {#Getting-help}&quot;">​</a></h2><p>If you are interested in using <code>GeoRegions.jl</code> or are trying to figure out how to use it, please feel free to ask me questions and get in touch! Please feel free to <a href="https://github.com/JuliaClimate/GeoRegions.jl/issues/new" target="_blank" rel="noreferrer">open an issue</a> if you have any questions, comments, suggestions, etc!</p>`,9),o=[i];function l(r,c,d,g,p,h){return a(),t("div",null,o)}const k=e(n,[["render",l]]);export{m as __pageData,k as default};