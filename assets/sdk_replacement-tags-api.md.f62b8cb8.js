import{_ as s,c as a,o as e,a as n}from"./app.c4c1ee55.js";const A=JSON.parse('{"title":"Replacement Tags","description":"","frontmatter":{},"headers":[{"level":2,"title":"getAll()","slug":"getall"},{"level":3,"title":"type","slug":"type"},{"level":3,"title":"example","slug":"example"},{"level":2,"title":"setTag()","slug":"settag"},{"level":3,"title":"type","slug":"type-1"},{"level":3,"title":"example","slug":"example-1"},{"level":2,"title":"applyTag()","slug":"applytag"},{"level":3,"title":"type","slug":"type-2"},{"level":2,"title":"ReplacementTag","slug":"replacementtag"}],"relativePath":"sdk/replacement-tags-api.md"}'),l={name:"sdk/replacement-tags-api.md"},p=n(`<h1 id="replacement-tags" tabindex="-1">Replacement Tags <a class="header-anchor" href="#replacement-tags" aria-hidden="true">#</a></h1><p>Utilize our Tag replacement system thoughout the application.</p><h2 id="getall" tabindex="-1">getAll() <a class="header-anchor" href="#getall" aria-hidden="true">#</a></h2><p>Returns a snapshot of all Replacement Tags available on the page.</p><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-hidden="true">#</a></h3><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getAll</span><span style="color:#89DDFF;">():</span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ReplacementTag</span><span style="color:#A6ACCD;">[]</span></span>
<span class="line"></span></code></pre></div><h3 id="example" tabindex="-1">example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lf-sdk-ready</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">     </span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">replacementTags</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sdk</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">replacementTags</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAll</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">replacementTags</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="settag" tabindex="-1">setTag() <a class="header-anchor" href="#settag" aria-hidden="true">#</a></h2><p>Creates a replacement tag with a custom lookup <code>key</code> and <code>value</code></p><h3 id="type-1" tabindex="-1">type <a class="header-anchor" href="#type-1" aria-hidden="true">#</a></h3><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setTag</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="example-1" tabindex="-1">example <a class="header-anchor" href="#example-1" aria-hidden="true">#</a></h3><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lf-sdk-ready</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">     </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sdk</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">replacementTags</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setTag</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my_custom_tag</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">HelloWorld</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="applytag" tabindex="-1">applyTag() <a class="header-anchor" href="#applytag" aria-hidden="true">#</a></h2><p>returns the string value of the Replacement Tag <code>key</code> provided.</p><h3 id="type-2" tabindex="-1">type <a class="header-anchor" href="#type-2" aria-hidden="true">#</a></h3><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">applyTag</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="replacementtag" tabindex="-1">ReplacementTag <a class="header-anchor" href="#replacementtag" aria-hidden="true">#</a></h2><table><thead><tr><th>prop</th><th>type</th></tr></thead><tbody><tr><td>name</td><td><code>string</code></td></tr><tr><td>value</td><td><code>string</code></td></tr></tbody></table>`,20),o=[p];function t(c,r,y,F,D,i){return e(),a("div",null,o)}var C=s(l,[["render",t]]);export{A as __pageData,C as default};
