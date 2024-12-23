import{_ as n,c as a,a3 as p,b as e}from"./chunks/framework.CLl4w4rv.js";const h=JSON.parse('{"title":"12345","description":"","frontmatter":{},"headers":[],"relativePath":"markdown-examples.md","filePath":"markdown-examples.md","lastUpdated":1734905804000}'),i={name:"markdown-examples.md"};function l(r,s,t,c,o,b){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="_12345" tabindex="-1">12345 <a class="header-anchor" href="#_12345" aria-label="Permalink to &quot;12345&quot;">​</a></h1><p>This page demonstrates some of the built-in markdown extensions provided by VitePress.</p><h2 id="syntax-highlighting" tabindex="-1">Syntax Highlighting <a class="header-anchor" href="#syntax-highlighting" aria-label="Permalink to &quot;Syntax Highlighting&quot;">​</a></h2><p>VitePress provides Syntax Highlighting powered by <a href="https://github.com/shikijs/shiki" target="_blank" rel="noreferrer">Shiki</a>, with additional features like line-highlighting:</p><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​\`\`\`js{4}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export default {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  data () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    return {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      msg: &#39;Highlighted!&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>Output</strong></p><p>​\`\`\`js{4} export default { data () { return { msg: &#39;Highlighted!&#39; } } }</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## Custom Containers</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Input**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`md</span></span>
<span class="line"><span>::: info</span></span>
<span class="line"><span>This is an info box.</span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>::: tip</span></span>
<span class="line"><span>This is a tip.</span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>::: warning</span></span>
<span class="line"><span>This is a warning.</span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>::: danger</span></span>
<span class="line"><span>This is a dangerous warning.</span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>::: details</span></span>
<span class="line"><span>This is a details block.</span></span>
<span class="line"><span>:::</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><strong>Output</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>让我测试一下</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><h2 id="more" tabindex="-1">More <a class="header-anchor" href="#more" aria-label="Permalink to &quot;More&quot;">​</a></h2><p>Check out the documentation for the <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noreferrer">full list of markdown extensions</a>.</p>`,17)]))}const m=n(i,[["render",l]]);export{h as __pageData,m as default};
