<script>
	import {page} from '$app/stores';
	const url = 'https://bosshouse.com.br';
	const base = '/marcosissler'
	import Skills from '../components/resume/Skills.svelte';
	import Languages from '../components/resume/Languages.svelte';
	import EducationCards from '../components/resume/EducationCards.svelte';
	import Title from '../components/resume/Title.svelte';
	
	import wedo_logo from '$lib/images/WeDoTechnologies.jpg';
	import fintech_logo from '$lib/images/fintechlogo.jpg';
	import bosshouse_logo from '$lib/images/bosshouse.png';
	import profile_photo from '$lib/images/profile-photo06.jpg';
	import Icon from '$lib/images/Icon.svelte';

	import favicon16 from '$lib/favicon/favicon-16x16.png';
	import favicon32 from '$lib/favicon/favicon-32x32.png';

	const title = "Marcos Issler - Senior Developer";
	const description = "Senior developer with 10+ years of experience, looking for new Golang opportunities. Expert in financial software development.";
	const keywords = "marcos issler, golang developer, golang, café com golan, architecture, crypto, blockchain, web3, financial, brazil, bank, fraud detection, mobile, nodejs, solidity, trading, bot, robot, ia, chatgpt";
	import certifcateFullCycle from '$lib/images/certificate-202311-fullcycle-goexpert.pdf';
	
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />

	<meta property="og:title" content={title}>
	<meta property="og:type" content="website">
	<meta property="og:description" content={description}>
	<meta property="og:image" content={url}{profile_photo}>
	<meta property="og:url" content={url}{base}>
	<meta name="twitter:title" content={title}>
	<meta name="twitter:description" content={description}>
	<meta name="twitter:url" content={url}{base}>
	<link rel="icon" type="image/png" sizes="32x32" href={favicon16}>
	<link rel="icon" type="image/png" sizes="16x16" href={favicon32}>

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image">
	<meta property="twitter:domain" content={url}>
	<meta property="twitter:url" content={url}{base}>
	<meta name="twitter:title" content={title}>
	<meta name="twitter:description" content={description}>
	<meta name="twitter:image" content={url}{profile_photo}>

	<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Expires" content="0" />

	<link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet">
</svelte:head>

<div class="bg-white rounded-xl p-4 w-full md:w-auto">
	<div class="grid grid-cols-12">
		<div class="col-span-3 bg-sky-700 px-5">
			<!-- PICTURE -->
				<img
					class="rounded-full xl:w-52 mx-auto shadow-md 2xl:shadow-2xl border-2 lg:border-5 2xl:border-4 border-gray-100 m-5"
					src={profile_photo}
					alt="Marcos Issler"
				/>
			<!-- CONTACT -->
			<div class="text-white mt-20 text-2xl underline underline-offset-8 mb-4">CONTACT</div>
			<ul class="mt-8">
				<li>
					<!-- EMAIL -->
					<div class="text-white mb-3 text-xs sm:text-sm">
						<Icon name="email" class="float-left mr-2 mt-1 align-middle" />
						<a href="mailto:marcos@bosshouse.com.br?subject=Resume Contact&body=Hello Marcos,">marcos@bosshouse.com.br</a>
					</div>
				</li>
			<li>
					<!-- LINKEDIN -->
					<div class="text-white mb-3 text-sm">
						<Icon name="linkedin" class="float-left mr-2" />
						<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/marcosissler/">Linkedin</a>
					</div>
				</li>
				<li>
					<!-- GITHUB -->
					<div class="text-white text-sm">
						<Icon name="github" class="float-left mr-2 mt-0" />
						<a target="_blank" rel="noreferrer" href="https://github.com/isslerman">Github</a>
					</div>
				</li>
				<li>
					<!-- LOCATION -->
					<div class="text-white mb-3 text-sm mt-3">
						<Icon name="location" class="float-left mr-2" />
						<div class="text-sm">São Paulo, Brazil</div>
					</div>
				</li>
				<li>
					<!-- NATIONALITY -->
					<div class="text-white mb-3 text-sm">
						<Icon name="citizen" class="float-left mr-2" />
						<div class="text-sm">Nationality: Brazil / EU</div>
					</div>
				</li>
			</ul>
			<!-- SKILLS -->
			<hr class="h-px my-8 bg-sky-800 border-0">
			<div class="text-white text-center text-2xl underline underline-offset-8 mb-4">SKILLS</div>
			<ul class="mt-8">
				<Skills title="Golang" perc={60}/>
				<Skills title="API Development" perc={100}/>
				<Skills title="REST/GraphQL/gRPC" perc={100}/>
				<Skills title="Database Management" perc={100}/>
				<Skills title="Software Architecture" perc={80}/>
				<hr class="h-px my-4 w-1/2 m-auto bg-sky-800 border-0">
				<Skills title="Docker / Git / HTML / CSS" perc={100}/>
				<Skills title="AWS / Digital Ocean" perc={80}/>
				<hr class="h-px my-4 w-1/2 m-auto bg-sky-800 border-0">
				<Skills title="Pine Script" perc={100}/>
				<Skills title="Solidity" perc={45}/>
				<!-- <Skills title="MetaBase"/> -->
				<hr class="h-px my-4 w-1/2 m-auto bg-sky-800 border-0">
				<Skills title="PHP" perc={80}/>
				<Skills title="Svelte" perc={55}/>
				<Skills title="Node.js" perc={45}/>
				<!-- <Skills title="Prisma"/> -->
			</ul>			
			<!-- Languages -->
			<hr class="h-px my-8 bg-sky-800 border-0">
			<div class="text-white text-center text-2xl underline underline-offset-8 mb-4">LANGUAGES</div>
			<ul class="mt-8">
				<Skills title="Portuguese" perc={100}/>
				<Skills title="English" perc={80}/>
				<Skills title="Spanish" perc={60}/>
			</ul>
		</div>
		<div class="col-span-9 bg-white p-5">
			<!-- NAME - TITLE -->
			<div class="bg-gray-200 w-full p-5 text-center">
				<h1 class="text-5xl text-black underline underline-offset-8">Marcos Issler</h1>
				<h2 class="text-base text-black pt-4">Golang Developer | Microservices Architecture | Crypto Enthusiast</h2>
			</div>
			<div>
				<!-- SUMMARY -->
				<Title title="SUMMARY"></Title>
				<div class="p-5 text-black">
						Senior developer with 10+ years of experience, looking for new Golang opportunities. Expert in financial software development, 
							delivered a comprehensive digital bank mobile app for a fintech company. The app included digital banking, payment systems, KYC/AML, 
							DeFi, and cryptocurrency exchange integrated with Binance. Previously, worked on revenue assurance and fraud management in telecom industry. 
							As a self-taught professional, I excel at analysis, problem-solving, and overcoming challenges. 
							I also have strong communication and creativity skills, and a passion for finding new solutions.
				</div>
			</div>
			<!-- EXPERIENCE -->
			<Title title="EXPERIENCE"></Title>
			<!-- #1 -->
			<div class="flex mt-8 text-black">
				<div class="w-1/2 text-normal">
					<img width="48"  class="float-left mr-2 hideforprint" src="{fintech_logo}" loading="lazy" height="48" alt="WeDo Technologies logo"> 
					<p class="font-bold">Blockchain Fintech Company</p>
					<p class="italic text-black">(Director of Innovation)</p>
				</div>
				<div class="text-sky-700 w-1/2 text-sm font-bold text-right">Apr 2022 - Sep 2022</div>
			</div>
			<div class="w-full mx-2 p-2 text-black">
				<ul class="list-disc text-normal ml-4 mt-2">
					<li>Coordinated the development of a crypto exchange integrated with Binance Broker feature. (NodeJS / AWS / micro-services)</li>
					<li>Contributed to a cryptocurrency token emission project on Stellar and BSC networks overseeing the process from whitepaper creation, tokenomics to deployment.</li>
					<li>Contributed to a migration BaaS platform. <a class="font-bold" target="_blank" rel="noreferrer" href="https://dock.tech/">Dock</a> to <a class="font-bold" target="_blank" rel="noreferrer" href="https://www.matera.com.br/">Matera</a>. (Laravel / NodeJS)</li>
					<li>Provided technical leadership and support to the technology team. Improvements, bug corrections, updates and support.</li>
				</ul>
			</div>
			<!-- #2 -->
			<div class="flex mt-8 text-black">
				<div class="w-1/2 text-normal">
					<img width="48"  class="float-left mr-2 hideforprint" src="{fintech_logo}" loading="lazy" height="48" alt="WeDo Technologies logo"> 
					<p class="font-bold">Blockchain Fintech Company</p>
					<p class="italic text-black">(Director of Technology)</p>
				</div>
				<div class="text-sky-700 w-1/2 text-sm font-bold text-right">May 2021 - Apr 2022</div>
			</div>
			<div class="w-full mx-2 p-2 text-black">
				<ul class="list-disc text-normal ml-4 mt-2">
					<li>Coordinated the development of a Brazilian payment system (PIX) for Fiat on-ramps and off-ramps. (Micro-services Python/Django)</li>
					<li>Contributed to a rewards program feature integrating products, payments and cryptocurrencies. (Micro-services NodeJS)</li>
					<li>Implementation of a mobile Know Your Customer (KYC) with <a class="font-bold" target="_blank" rel="noreferrer" href="https://metamap.com">Metamap</a>.</li>
					<li>Implemented digital transformation initiatives, including automation, migration to micro-services, data reporting initiatives for the CEO and improvements with client support. (NodeJS, AWS, Metabase BI, N8N Workflow Automation, GitHub CI/CD)</li>
			</ul>
			</div>
			<!-- #3 -->
			<div class="flex mt-8 text-black">
				<div class="w-1/2 text-normal">
					<img width="48"  class="float-left mr-2 hideforprint" src="{fintech_logo}" loading="lazy" height="48" alt="WeDo Technologies logo"> 
					<p class="font-bold">Blockchain Fintech Company</p>
					<p class="italic text-black">(Senior Software Developer)</p>
				</div>
				<div class="text-sky-700 w-1/2 text-sm font-bold text-right">2019 - May 2021</div>
			</div>
			<div class="w-full mx-2 p-2 text-black">
				<ul class="list-disc text-normal ml-4 mt-2">
					<li>Maintenance, development and support of the legacy investment platform of the company. PHP, Symfony and MySQL.</li>
					<li>Migration of the mobile technology from native (Kotlin and Swift) to Flutter.</li>
					<li>Implementation of a mobile digital bank using a Bank as a Service (<a class="font-bold" target="_blank" rel="noreferrer" href="https://dock.tech/">Dock</a>).</li>
					<li>Technical leader working in conjunction with outsourced developers.</li>
				</ul>
			</div>
			<!-- #4 -->
			<div class="flex mt-8 text-black">
				<div class="w-1/2 text-normal">
					<img width="48"  class="float-left mr-2 hideforprint" src="{bosshouse_logo}" loading="lazy" height="48" alt="WeDo Technologies logo"> 
					<p class="font-bold">BossHouse Technologies</p>
					<p class="italic text-black">(Entrepreneur)</p>
				</div>
				<div class="text-sky-700 w-1/2 text-sm font-bold text-right">2017 - 2018</div>
			</div>			
			<div class="w-full mx-2 p-2 text-black">
				<ul class="list-disc text-normal ml-4 mt-2">
					<li>Started my education in blockchain technology and trading with a focus on financial investments, trading tools and algorithmic trading.</li>
					<li>Development and customization of bots and arbitrary systems for particular clients. (CCXT, PHP, PineScript, JS)</li> 
					<li>Trading in both the traditional market of B3 and the spot market of cryptocurrency exchanges.</li>
				</ul>
			</div>

			<!-- #5 WEDO -->
			<div class="flex mt-8 text-black">
				<div class="w-1/2 text-normal">
					<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/9394/">
						<img width="48"  class="float-left mr-2 hideforprint" src="{wedo_logo}" loading="lazy" height="48" alt="WeDo Technologies logo"> 
						<p class="font-bold">WeDo Technologies</p>
					</a>
					<p class="italic text-black">(Technical Lead)</p>
				</div>
				<div class="text-sky-700 w-1/2 text-sm font-bold text-right">2014 - 2016</div>
			</div>
			<div class="w-full mx-2 p-2 text-black">
				<ul class="list-disc text-normal ml-4 mt-2">
					<li>Analysis, development and implementation of a revenue assurance migration project at <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/clarobrasil">CLARO Brazil (América Móvil)</a>.</li>
					<li>Working as analyst and developer in a new project in <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/viva-bolivia">Nuevatel Bolivia</a>. Working in Spanish daily.</li>
					<li>Technical Leader in TIM Brazil project, working daily with others tech leads, architects and POs. Technical advices and problems solving.</li>
					<li>Analysis, development and implementation of the revenue assurance and fraud management in NET Telecom Brasil. I have significantly enhanced my proficiency in Oracle, SQL, ETL, Linux, Java, and project management.</li>					
				</ul>
			</div>
			<!-- #5 WEDO -->
			<!-- <Title title="PROJECTS"></Title> -->
			<!-- #1 -->
			<!-- <div class="mt-4">
				<div class="flex text-black">
					<div class="w-1/2 text-normal font-bold">Mobile Blockchain Bank</div>
					<div class="text-sky-700 w-1/2 text-sm font-bold text-right">2019-2022</div>
				</div>
				<div class="m-4 text-normal text-black">
					<ul class="list-disc text-normal">
						<li>Project detailed description</li>
						<li>Project detailed description</li>
						<li>Project detailed description</li>
						<li>Project detailed description</li>
					</ul>
				</div>
			</div> -->

			<!-- EDUCATION / CERTIFICATES -->
			<Title title="EDUCATION / CERTIFICATES"></Title>
			<ul class="list-disc text-normal ml-4 mt-2">
				<EducationCards title="FullCycle" name="Go Expert" link={certifcateFullCycle} />
				<EducationCards title="Udemy" name="Working with Microservices in Go" link="https://www.udemy.com/certificate/UC-55cd51b0-2dff-4703-a89b-ddefc1022bef" />

				<EducationCards title="Computer Science" name="Universidade Presbiteriana Mackenzie" link="https://www.mackenzie.br" />
				<EducationCards title="Engineering Course" name="Universidade Presbiteriana Mackenzie" link="https://www.mackenzie.br" />
				<EducationCards title="High School" name="Colégio Magno" />
			</ul>
			<!-- EDUCATION END -->
		</div>
	</div>
</div>
