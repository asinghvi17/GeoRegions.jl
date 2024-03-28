import{_ as s,c as i,o as a,a7 as n}from"./chunks/framework.WgvfZnk2.js";const t="/juliaclimate.github.io/GeoRegions.jl/dev/assets/ttlojgr.hCExjJhh.png",y=JSON.parse('{"title":"Extracting Gridded Data using RegionGrid","description":"","frontmatter":{},"headers":[],"relativePath":"using/extract.md","filePath":"using/extract.md","lastUpdated":null}'),l={name:"using/extract.md"},p=n(`<h1 id="Extracting-Gridded-Data-using-RegionGrid" tabindex="-1">Extracting Gridded Data using RegionGrid <a class="header-anchor" href="#Extracting-Gridded-Data-using-RegionGrid" aria-label="Permalink to &quot;Extracting Gridded Data using RegionGrid {#Extracting-Gridded-Data-using-RegionGrid}&quot;">​</a></h1><p>Suppose we have Global Data. However, we are only interested in a specific region (say, the North Central American region as defined in AR6), how do we extract data for this region?</p><p>The simple answer is, we use the <code>extractGrid()</code> function, which takes in a <code>RegionGrid</code> and a data array, and returns a new data array for the GeoRegion.</p><h3 id="Setup" tabindex="-1">Setup <a class="header-anchor" href="#Setup" aria-label="Permalink to &quot;Setup {#Setup}&quot;">​</a></h3><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GeoRegions</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DelimitedFiles</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">download</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://raw.githubusercontent.com/natgeo-wong/GeoPlottingData/main/coastline_resl.txt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;coast.cst&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">coast </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> readdlm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;coast.cst&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,comments</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">clon  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> coast[:,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">clat  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> coast[:,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nothing</span></span></code></pre></div><h2 id="Let-us-define-the-GeoRegion-of-interest" tabindex="-1">Let us define the GeoRegion of interest <a class="header-anchor" href="#Let-us-define-the-GeoRegion-of-interest" aria-label="Permalink to &quot;Let us define the GeoRegion of interest {#Let-us-define-the-GeoRegion-of-interest}&quot;">​</a></h2><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">geo  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GeoRegion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;AR6_NCA&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>The Polygonal Region AR6_NCA has the following properties:</span></span>
<span class="line"><span>    Region ID    (ID) : AR6_NCA</span></span>
<span class="line"><span>    Parent ID   (pID) : GLB</span></span>
<span class="line"><span>    Name       (name) : Northern Central America</span></span>
<span class="line"><span>    Bounds  (N,S,E,W) : [33.8, 16.0, -90.0, -122.5]</span></span>
<span class="line"><span>    Shape     (shape) : Point2{Float64}[[-90.0, 25.0], [-104.5, 16.0], [-122.5, 33.8], [-105.0, 33.8], [-90.0, 25.0]]</span></span>
<span class="line"><span>        (is180,is360) : (true, false)</span></span></code></pre></div><p>We also define some sample test data in the global domain</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lon </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> collect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">360</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pop!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lon); nlon </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lon)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> collect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">90</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);           nlat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lat)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">odata </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((nlon,nlat))</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>360×181 Matrix{Float64}:</span></span>
<span class="line"><span>  1.30405       0.161355  -0.323514   …   1.38445   -0.640729    1.15013</span></span>
<span class="line"><span>  1.24024       1.92628   -0.506826      -1.55983   -0.77034     0.894609</span></span>
<span class="line"><span> -0.189461     -0.833403  -1.2735         0.1681     1.07161    -0.514887</span></span>
<span class="line"><span>  0.547597      0.829366  -2.88563       -0.500779  -0.865865    1.75171</span></span>
<span class="line"><span> -0.418921     -0.917567   0.825045       0.389158   1.11701     0.213809</span></span>
<span class="line"><span>  1.30029       1.36341   -1.0001     …   0.192927   0.676866   -0.130882</span></span>
<span class="line"><span>  0.118784     -0.398641  -0.0829299     -1.02413   -0.223486    1.68403</span></span>
<span class="line"><span>  0.0347908     0.342369  -0.830865      -0.765435  -1.01899    -0.40046</span></span>
<span class="line"><span> -1.68201       0.330324  -0.395038       0.596142   0.0998836  -1.17272</span></span>
<span class="line"><span>  1.38935       1.17954   -0.258467       0.307167  -0.391432   -0.299668</span></span>
<span class="line"><span>  ⋮                                   ⋱                          ⋮</span></span>
<span class="line"><span>  0.357544      0.403838  -2.70108        0.516405   0.461365   -2.63535</span></span>
<span class="line"><span>  1.0835        1.0053    -1.51155        1.99969    0.991911    0.491796</span></span>
<span class="line"><span> -0.000613885   0.133197  -0.779266       0.455286   0.218994   -1.79553</span></span>
<span class="line"><span> -0.478745     -0.451684  -0.651678       2.19343    2.09904     0.07627</span></span>
<span class="line"><span>  1.01055      -0.119822   1.81091    …   0.468304   0.321099    0.603882</span></span>
<span class="line"><span>  1.02195       0.802915  -1.70369        0.735324  -0.806551    0.868808</span></span>
<span class="line"><span>  0.65458      -1.46651   -0.303451       0.169015  -0.102943    1.25372</span></span>
<span class="line"><span> -1.36616       0.851306   1.0956         1.15247   -0.0633064  -0.655978</span></span>
<span class="line"><span>  0.50475       0.774688  -0.374782       0.285661  -0.739183    1.20506</span></span></code></pre></div><p>Our next step is to define the RegionGrid based on the longitude and latitude vectors and their intersection with the GeoRegion</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ggrd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> RegionGrid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(geo,lon,lat)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>The Polygonal Grid has the following properties:</span></span>
<span class="line"><span>    Grid Bounds       (grid) : [124, 107, 271, 239]</span></span>
<span class="line"><span>    Longitude Indices (ilon) : [239, 240, 241, 242, 243, 244, 245, 246, 247, 248  …  262, 263, 264, 265, 266, 267, 268, 269, 270, 271]</span></span>
<span class="line"><span>    Latitude Indices  (ilat) : [107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124]</span></span>
<span class="line"><span>    Longitude Points   (lon) : [-122.0, -121.0, -120.0, -119.0, -118.0, -117.0, -116.0, -115.0, -114.0, -113.0  …  -99.0, -98.0, -97.0, -96.0, -95.0, -94.0, -93.0, -92.0, -91.0, -90.0]</span></span>
<span class="line"><span>    Latitude Points    (lat) : [16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0]</span></span>
<span class="line"><span>    Region Size (nlon * nlat) : 33 lon points x 18 lat points</span></span>
<span class="line"><span>    Region Mask (sum(mask) / (nlon * nlat)) : 281 / 594</span></span></code></pre></div><p>Then we extract the data</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ndata </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> extractGrid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(odata,ggrd)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>33×18 Matrix{Float64}:</span></span>
<span class="line"><span> NaN  NaN  NaN  NaN  NaN  NaN         …  NaN          NaN         NaN</span></span>
<span class="line"><span> NaN  NaN  NaN  NaN  NaN  NaN            NaN          NaN          -0.484329</span></span>
<span class="line"><span> NaN  NaN  NaN  NaN  NaN  NaN            NaN            0.64769     0.517512</span></span>
<span class="line"><span> NaN  NaN  NaN  NaN  NaN  NaN             -0.338221     1.03418    -0.626364</span></span>
<span class="line"><span> NaN  NaN  NaN  NaN  NaN  NaN             -0.939144     1.10101     0.334026</span></span>
<span class="line"><span> NaN  NaN  NaN  NaN  NaN  NaN         …   -0.17649      0.019512   -1.87572</span></span>
<span class="line"><span> NaN  NaN  NaN  NaN  NaN  NaN             -0.849855    -0.844926    0.106151</span></span>
<span class="line"><span> NaN  NaN  NaN  NaN  NaN  NaN              0.0812461   -0.827151   -0.84139</span></span>
<span class="line"><span> NaN  NaN  NaN  NaN  NaN  NaN              0.0439894   -0.57983     1.5935</span></span>
<span class="line"><span> NaN  NaN  NaN  NaN  NaN  NaN              1.56469      0.906666   -0.45286</span></span>
<span class="line"><span>   ⋮                        ⋮         ⋱    ⋮                      </span></span>
<span class="line"><span> NaN  NaN  NaN  NaN  NaN   -2.62952      NaN          NaN         NaN</span></span>
<span class="line"><span> NaN  NaN  NaN  NaN  NaN    0.728729  …  NaN          NaN         NaN</span></span>
<span class="line"><span> NaN  NaN  NaN  NaN  NaN  NaN            NaN          NaN         NaN</span></span>
<span class="line"><span> NaN  NaN  NaN  NaN  NaN  NaN            NaN          NaN         NaN</span></span>
<span class="line"><span> NaN  NaN  NaN  NaN  NaN  NaN            NaN          NaN         NaN</span></span>
<span class="line"><span> NaN  NaN  NaN  NaN  NaN  NaN            NaN          NaN         NaN</span></span>
<span class="line"><span> NaN  NaN  NaN  NaN  NaN  NaN         …  NaN          NaN         NaN</span></span>
<span class="line"><span> NaN  NaN  NaN  NaN  NaN  NaN            NaN          NaN         NaN</span></span>
<span class="line"><span> NaN  NaN  NaN  NaN  NaN  NaN            NaN          NaN         NaN</span></span></code></pre></div><p>Let us plot the old and new data</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_,_,slon,slat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> coordGeoRegion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(geo); slon </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> slon</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">aspect </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">maximum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(slon)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">minimum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(slon))</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">maximum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(slat)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">minimum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(slat))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ax </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">350</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,height</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">350</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">aspect,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    limits</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">minimum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(slon)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">360</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">maximum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(slon)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">360</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">minimum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(slat)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">maximum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(slat)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">contourf!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ax,lon,lat,odata,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    levels</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),extendlow</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,extendhigh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:auto</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">lines!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ax,clon,clat,color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:black</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">lines!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ax,slon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">360</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,slat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">360</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,linewidth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ax </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">350</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,height</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">350</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">aspect,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    limits</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">minimum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(slon)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">maximum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(slon)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">minimum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(slat)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">maximum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(slat)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">contourf!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ax,ggrd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lon,ggrd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lat,ndata,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    levels</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),extendlow</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,extendhigh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:auto</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">lines!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ax,clon,clat,color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:black</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">lines!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ax,slon,slat,color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,linewidth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hideydecorations!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ax, ticks </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,grid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">resize_to_layout!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig</span></span></code></pre></div><p><img src="`+t+`" alt=""></p><h2 id="API" tabindex="-1">API <a class="header-anchor" href="#API" aria-label="Permalink to &quot;API {#API}&quot;">​</a></h2><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="GeoRegions.extractGrid" href="#GeoRegions.extractGrid">#</a> <b><u>GeoRegions.extractGrid</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">extractGrid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    odata </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AbstractArray{&lt;:Real,N}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ggrd  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> RegionGrid</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Array{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Real</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,N}</span></span></code></pre></div><p>Extracts data from odata, an Array of dimension N (where N ∈ 2,3,4) that contains data of a Parent <code>GeoRegion</code>, into another Array of dimension N, containing <em><strong>only</strong></em> within a sub <code>GeoRegion</code> we are interested in.</p><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>Please ensure that the 1st dimension is longitude and 2nd dimension is latitude before proceeding. The order of the 3rd and 4th dimensions (when used), however, is not significant.</p></div><p><strong>Arguments</strong></p><ul><li><p><code>odata</code> : An array of dimension N containing gridded data in the region we are interesting in extracting from</p></li><li><p><code>ggrd</code> : A <code>RegionGrid</code> containing detailed information on what to extract</p></li></ul><p><a href="https://github.com/JuliaClimate/GeoRegions.jl/blob/9767a44733b7638ef79564e834577809ef12e197/src/extract/grid.jl#L1-L16" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="GeoRegions.extractGrid!" href="#GeoRegions.extractGrid!">#</a> <b><u>GeoRegions.extractGrid!</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">extractGrid!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    odata </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AbstractArray{&lt;:Real,N}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ndata </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AbstractArray{&lt;:Real,N}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ggrd  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> RegionGrid</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nothing</span></span></code></pre></div><p>Extracts data from odata, an Array of dimension N (where N ∈ 2,3,4) that contains data of a Parent <code>GeoRegion</code>, into ndata, another Array of dimension N, containing <em><strong>only</strong></em> within a sub <code>GeoRegion</code> we are interested in.</p><p>This allows for iterable in-place modification to save memory space and reduce allocations if the dimensions are fixed.</p><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>Please ensure that the 1st dimension is longitude and 2nd dimension is latitude before proceeding. The order of the 3rd and 4th dimensions (when used), however, is not significant.</p></div><p><strong>Arguments</strong></p><ul><li><p><code>odata</code> : An array of dimension N containing gridded data in the region we are interesting in extracting from</p></li><li><p><code>ndata</code> : An array of dimension N meant as a placeholder for the extracted data to minimize allocations</p></li><li><p><code>ggrd</code> : A <code>RegionGrid</code> containing detailed information on what to extract</p></li></ul><p><a href="https://github.com/JuliaClimate/GeoRegions.jl/blob/9767a44733b7638ef79564e834577809ef12e197/src/extract/grid.jl#L33-L52" target="_blank" rel="noreferrer">source</a></p></div><br><hr><p><em>This page was generated using <a href="https://github.com/fredrikekre/Literate.jl" target="_blank" rel="noreferrer">Literate.jl</a>.</em></p>`,27),h=[p];function e(k,d,r,E,g,o){return a(),i("div",null,h)}const N=s(l,[["render",e]]);export{y as __pageData,N as default};