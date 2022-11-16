---
category: post
title: "Info"
date: 2022-01-20T10:52:59+08:00
description: "Check my accounts and info here!"
draft: false
sitemapExclude: true
singlepage: true
infopage: true
---
{{< html >}}
{{< infopage/profile-gravatar "dp@dplayzgames06.tk" >}}
{{< infopage/sns >}}
    {{< infopage/sns/facebook "https://facebook.com/dplayzgames06" >}}
	{{< infopage/sns/twitch "https://twitch.tv/dplayzgames06" >}}
	{{< infopage/sns/youtube "https://youtube.com/channel/UCNTjCvAvlLzmEKIZQ5BpoGQ" >}}
	{{< infopage/sns/youtube "https://youtube.com/channel/UCRYtnbYg1N9AKS7LQ88N5Qg" >}}
    {{< infopage/sns/medal "https://medal.tv/u/dplayzgames06" >}}
	{{< infopage/sns/twitter "https://twitter.com/dplayzgames06" >}}
	{{< infopage/sns/tiktok "https://tiktok.com/@dplayzgames06" >}}
    {{< infopage/sns/instagram "https://instagram.com/dplayzgames06" >}}
	</br>	
	
{{</ infopage/sns >}}
	{{<infopage/collapsible "Introduction">}}
		{{< readFile "/readFile/info/introduction.md" markdownify>}}
		{{< dynamicContent introductionAsAKPopFan >}}
			{{<infopage/collapsible "Introduction as a K-Pop Fan">}}
				{{< readFile "/readFile/info/introduction-kpopfan.md" markdownify>}}
			{{</infopage/collapsible>}}
		{{</dynamicContent>}}
	{{</infopage/collapsible>}}
<br>
<br>
		{{< dynamicContent gameID >}}
			{{< infopage/collapsible "Play With Me!" >}}
				{{< readFile "/readFile/info/playwithme-active.md" markdownify>}}
				{{< infopage/collapsible "Inactive player of these games" >}}
					{{< readFile "/readFile/info/playwithme-inactive.md" markdownify>}}
				{{</ infopage/collapsible >}}
			{{</ infopage/collapsible>}}
		{{< /dynamicContent >}}
		{{< infopage/collapsible "My other accounts" >}}
			{{< readFile "/readFile/info/1_otheraccounts.md" markdownify>}}
		{{< /infopage/collapsible >}}
		{{< infopage/collapsible "Media Monitor Accounts" >}}
			{{< readFile "/readFile/info/medialist-id.md" markdownify>}}
		{{< /infopage/collapsible >}}
		{{< dynamicContent kpopID >}}
			{{< infopage/collapsible "Kpop-Related Accounts" >}}
				{{< infopage/collapsible "VLIVE-WEVERSE" >}}	
					{{< readFile "/readFile/info/kpop-ids-vlive_weverse.md" markdownify>}}
				{{< /infopage/collapsible >}}
				{{< infopage/collapsible "Daum Cafe" >}}
						{{< readFile "/readFile/info/kpop-ids-daum_cafe.md" markdownify>}}
				{{< /infopage/collapsible >}}
				{{< infopage/collapsible "Voting Platforms" >}}
						{{< readFile "/readFile/info/kpop-ids-voting_platforms.md" markdownify>}}
				{{< /infopage/collapsible >}}
				{{< infopage/collapsible "JYPE Fans" >}}
						{{< readFile "/readFile/info/kpop-ids-jype_fans.md" markdownify>}}
				{{< /infopage/collapsible >}}
			{{< /infopage/collapsible >}}
		{{< /dynamicContent >}}
		{{< infopage/collapsible "Contact Info" >}}
			{{<readFile "/readFile/info/contactinfo.md" markdownify>}}
		{{< /infopage/collapsible >}}
	<br>
	<br>
	<br>
	<br>
	<br>
	</div>
{{< /html >}}
