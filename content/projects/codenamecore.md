---
title: codenamecore
pageType: homepage
homepageSectionsType: fs-snap
description: An experimental Hugo theme made for personal usage
---
{{<html>}}
<style>
    div.introductionContainer{
        background:rgba(34,34,34,0.75);
        padding:10px;
        border-radius: 20px;
        width:50%;
        margin:auto;
        display: grid;
        height:auto;
        transition:1s;
        transition-timing-function:cubic-bezier(0,1,.5,1);
        position: absolute;
        top: 45%;
        left: 50%; 
        transform: translate(-50%, -50%);     
    }
@media (max-width: 899px){
    div.introductionContainer{
        width:70%;
        margin:auto;
    }
}
</style>
{{</html>}}

{{<homepage/section id="introduction">}}
<div class="introductionContainer">
{{<md>}}
***This page is currently WIP, some parts of this page contains only placeholders, especially the feature section***
{{</md>}}
{{<md>}}
# A theme "codename[d]core"  
An experimental Hugo theme made for personal usage
{{</md>}}
<br>
<br>
{{<homepage/fs-snap-nextAnimatedButton name="Let's start!" icon-class="fa fa-angle-double-down fa-bounce" icon-side="both"/>}}
<br>
{{<anchorAnimatedButton href="https://github.com/dplayz/codenamecore" name="Repository" icon-class="fas fa-code-branch" icon-side="left"/>}}
</div>
{{</homepage/section>}}


{{<homepage/section id="testtoo" style="">}}
{{<md>}}
# Features
{{</md>}}   
    {{<homepage/side-by-side>}}
        {{<homepage/content>}}
        <img src="/images/preview.png" width="100%">
        {{</homepage/content>}}
        {{<homepage/content >}}
            <h1>Sample heading 2</h1>
            <p>Sample description 2</p>
        {{</homepage/content>}} 
        {{<homepage/content >}}
        {{<md>}}
# Sample heading 2
Sample description     
        {{</md>}}
        {{</homepage/content>}} 
        {{<homepage/content>}}
        {{<md>}}
![Preview Image](/images/preview.png)        
        {{</md>}}
        {{</homepage/content>}}
    {{</homepage/side-by-side>}}
{{</homepage/section>}}



{{<homepage/section id="contributors">}}
{{<md>}}
# Contributors
{{</md>}}
{{<homepage/grid>}}
    {{<homepage/content >}}
        <img src="https://www.gravatar.com/avatar/f55b5bd7415b6f2357313097be685468?s=500" width="150px">
        <h1>dp</h1>
    {{</homepage/content>}} 
{{</homepage/grid>}}
{{<md>}}
Help me finish this experimental project in [this repo](https://github.com/dplayz/codenamecore)
{{</md>}}
{{</homepage/section>}}
