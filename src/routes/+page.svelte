<script>
	import { get_dilemma } from '$lib/dilemma'
	import { get_testimonial, get_initials } from '$lib/testimonial'

</script>
<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="">
			<h1 class="text-5xl font-bold">Tired of dating duds? Tor-pedo your love life into overdrive!</h1>
			<div class="m-7">Check your compatability with Tor! The knight of your dreams, hero of things, saviour of none.</div>
			<div class="group indicator">
				<span class="group indicator-item badge mask mask-heart bg-red-400 group-hover:scale-110 transition-transform duration-300"> </span>
				<button class="group btn btn-primary">Get Started!!</button>
			</div>
		</div>
	</div>
</div>

<div class="carousel rounded-box">
	{#await get_testimonial()}
		<span class="loading loading-dots loading-xs"></span>
	{:then testimonial}
		{#each testimonial as test}
	<div class="carousel-item card w-96 bg-base-100 shadow-xl">
		<div class="card-body">
			{#if test.icon}
			<div class="avatar">
				<div class="w-24 rounded-full">
					<img src="{test.icon}" alt="{test.by}" />
				</div>
			</div>
			{:else}
			<div class="avatar placeholder">
			  <div class="bg-neutral text-neutral-content rounded-full w-24">
				<span class="text-3xl">{get_initials(test.by)}</span>
			  </div>
			</div>
			{/if}
			<div>
				<h1 class="card-title">{test.title}</h1>
				<h5>{test.by}</h5>
				<span>{test.description}</span>
			</div>
		</div>
	</div>
	{/each}
	{/await}
</div>
<div class="flex flex-col w-full">
<div class="divider divider-primary"></div>
</div>

<div class="w-full h-screen items-center justify-center flex flex-col">
	<h1 class="text-4xl font-bold p-16">Compatabilty test</h1>

	<div class="stack">
		{#await get_dilemma()}
			<span class="loading loading-dots loading-xs"></span>
		{:then dilemma}
		{#each dilemma as dil}
		<div class="artboard artboard-horizontal phone-5 bg-base-200 rounded shadow-2xl flex flex-col w-full lg:flex-row">
			<div class="grid flex-grow m-10 card bg-primary-100 rounded-box place-items-center w-96">{dil.option1}</div>
			<div class="divider lg:divider-horizontal primary ">OR</div>
			<div class="grid flex-grow m-10 card bg-primary-100 rounded-box place-items-center w-96">{dil.option2}</div>
		</div>
		{/each}
		{/await}
		<div class="artboard artboard-horizontal bg-base-300 phone-5 bg-accent rounded shadow-2xl"></div>
	</div>
</div>
