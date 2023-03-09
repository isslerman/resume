<script>
	import Skills from '../../components/resume/Skills.svelte';
	import Languages from '../../components/resume/Languages.svelte';
	import EducationCards from '../../components/resume/EducationCards.svelte';
	import Title from '../../components/resume/Title.svelte';

	import wedo_logo from '$lib/images/WeDoTechnologies.jpg';
	import fintech_logo from '$lib/images/fintechlogo.jpg';
	import bosshouse_logo from '$lib/images/bosshouse.png';
	import Icon from '$lib/images/Icon.svelte';
</script>

<svelte:head>
	<title>Resume</title>
	<meta name="description" content="Marcos Issler - Resume" />
</svelte:head>

<div class="bg-white rounded-xl mx-3 md:mx-20 my-5 p-10">
	<div class="grid grid-cols-7">
		<div class="col-span-2 bg-sky-700 px-5">
			<!-- PICTURE -->
			<div class="">
				<img
					class="rounded-full w-32 xl:w-auto mx-auto shadow-md 2xl:shadow-2xl border-2 lg:border-5 2xl:border-8 border-gray-100 m-5"
					src="https://media.licdn.com/dms/image/C5603AQGckRFT9C5qAw/profile-displayphoto-shrink_800_800/0/1543266766493?e=1681948800&v=beta&t=G9aIn-v70rXdUiDnYbl7-2SC0ZPuEGHxEqnQ2hphJEI"
					alt="Marcos Issler"
				/>
			</div>
			<!-- CONTACT -->
			<div class="text-white text-xl underline underline-offset-8 mb-4">CONTACT</div>
			<ul class="mt-8">
				<li>
					<!-- EMAIL -->
					<div class="text-white mb-3 text-sm">
						<Icon name="email" class="float-left mr-2 mt-1 align-middle" />
						<a href="mailto:marcos@bosshouse.com.br?subject=Resume Contact&body=Hello Marcos,">marcos@bosshouse.com.br</a>
					</div>
				</li>
				<li>
					<!-- LOCATION -->
					<div class="text-white mb-3 text-sm">
						<Icon name="location" class="float-left mr-2" />
						<div class="text-sm">São Paulo, Brazil</div>
					</div>
				</li>
				<li>
					<!-- LINKEDIN -->
					<div class="text-white mb-3 text-sm">
						<Icon name="linkedin" class="float-left mr-2" />
						<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/marcosissler/">linkedin.com/in/marcosissler</a>
					</div>
				</li>
				<li>
					<!-- GITHUB -->
					<div class="text-white text-sm">
						<Icon name="github" class="float-left mr-2 mt-0" />
						<a target="_blank" rel="noreferrer" href="https://github.com/isslerman">github.com/isslerman</a>
					</div>
				</li>
			</ul>
			<!-- SKILLS -->
			<hr class="h-px my-8 bg-sky-800 border-0">
			<div class="text-white text-xl underline underline-offset-8 mb-4">SKILLS</div>
			<ul class="mt-8">
				<Skills title="DeFi" perc={85} />
				<Skills title="Docker" perc={85} />
				<Skills title="Hardhat" perc={50} />
				<Skills title="Kafka" perc={25} />
				<Skills title="MetaBase" perc={100} />
				<Skills title="Node.js" perc={85} />
				<Skills title="PHP" perc={90} />
				<Skills title="Prisma" perc={50} />
				<Skills title="REST API" perc={90} />
				<Skills title="Solidity" perc={65} />
				<Skills title="Svelte" perc={50} />
				<Skills title="SQL/DBs" perc={100} />
				<Skills title="Tokenization" perc={75} />
			</ul>
			<hr class="h-px my-8 bg-sky-800 border-0">
			<!-- LANGUAGES -->
			<div class="text-white text-xl underline underline-offset-8 mb-4">LANGUAGES</div>
			<ul class="mt-8">
				<Languages title="Portuguese" perc={100} />
				<Languages title="English" perc={75} />
				<Languages title="Spanish" perc={50} />
			</ul>
			
		</div>
		<div class="col-span-5 bg-white p-5">
			<!-- NAME - TITLE -->
			<div class="bg-gray-200 w-full p-5 text-center">
				<p class="text-5xl text-black underline underline-offset-8">Marcos Issler</p>
				<p class="text-base text-black pt-4">
					Architecture Developer | Web3 Enthusiast | Crypto Developer
				</p>
			</div>
			<div>
				<!-- SUMMARY -->
				<Title title="SUMMARY"></Title>
				<div class="p-5 text-black">
					<ul class="list-disc text-normal">
						<li>With over 10 years of experience as a senior developer, I am looking for new opportunities in innovative projects that align with my interest in 
							blockchain technologies, web3, DeFi and NFT.
						</li>
						<li>Over the past five years, I have gained extensive experience in the financial market by developing a blockchain bank mobile application that incorporated
							 a range of features, including digital banking, payment systems, KYC/AML, DeFi investments, a crypto exchange integrated with Binance and token issuance. 
							 Prior to this, I worked in revenue assurance and fraud management in the telecommunications industry.
						</li>
						<li>As a dedicated and self-taught professional, I have excelente analytical and problem-solving skills and  enjoy overcoming challenges. 
							I am also skilled in communications and creativity, and am passionate about researching new solutions.
						</li>
					</ul>
				</div>
			</div>
			<!-- EXPERIENCE -->
			<Title title="EXPERIENCE"></Title>
			<!-- #1 -->
			<div class="flex mt-8 text-black">
				<div class="w-1/2 text-normal">
					<img width="48"  class="float-left mr-2" src="{fintech_logo}" loading="lazy" height="48" alt="WeDo Technologies logo"> 
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
					<img width="48"  class="float-left mr-2" src="{fintech_logo}" loading="lazy" height="48" alt="WeDo Technologies logo"> 
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
					<img width="48"  class="float-left mr-2" src="{fintech_logo}" loading="lazy" height="48" alt="WeDo Technologies logo"> 
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
					<img width="48"  class="float-left mr-2" src="{bosshouse_logo}" loading="lazy" height="48" alt="WeDo Technologies logo"> 
					<p class="font-bold">BossHouse Technologies</p>
					<p class="italic text-black">(Freelancer)</p>
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
						<img width="48"  class="float-left mr-2" src="{wedo_logo}" loading="lazy" height="48" alt="WeDo Technologies logo"> 
						<p class="font-bold">WeDo Technologies</p>
					</a>
					<p class="italic text-black">(Technical Team Lead)</p>
				</div>
				<div class="text-sky-700 w-1/2 text-sm font-bold text-right">2014 - 2016</div>
			</div>
			<div class="w-full mx-2 p-2 text-black">
				<ul class="list-disc text-normal ml-4 mt-2">
					<li>Analysis, development and implementation of a revenue assurance migration project at <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/clarobrasil">CLARO Brazil</a>.</li>
					<li>Working as analyst and developer in a new project in <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/viva-bolivia">Nuevatel Bolivia</a>. Working in Spanish daily.</li>
					<li>Technical Leader in TIM Brazil project, working daily with others tech leads, architects and POs. Technical advices and problems solving.</li>
				</ul>
			</div>
			<!-- #5 WEDO -->
			<div class="flex mt-8 text-black">
				<div class="w-1/2 text-normal">
					<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/9394/">
					<img width="48"  class="float-left mr-2" src="{wedo_logo}" loading="lazy" height="48" alt="WeDo Technologies logo"> 
					<p class="font-bold">WeDo Technologies</p>
					</a>
					<p class="italic text-black">(Technical Lead)</p>
				</div>
				<div class="text-sky-700 w-1/2 text-sm font-bold text-right">2012 - 2013</div>
			</div>
			<div class="w-full mx-2 p-2 mt-2 text-black">
				<p>Analysis, development and implementation of the revenue assurance and fraud management in NET Telecom Brasil.					
					I have significantly enhanced my proficiency in Oracle, SQL, ETL, Linux, Java, and project management.</p>
			</div>

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

			<!-- EDUCATION -->
			<Title title="EDUCATION"></Title>
			<EducationCards title="Computer Science" year="2001-2004" name="Universidade Presbiteriana Mackenzie" />
			<EducationCards title="Engineering Course" year="1999 (coursed 3 years)" name="Universidade Presbiteriana Mackenzie" />
			<EducationCards title="High School" year="1995 - 1997" name="Universidade Presbiteriana Mackenzie" />
			<!-- EDUCATION END -->
		</div>
	</div>
</div>
