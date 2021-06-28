<script lang="typescript">
	import { fly } from 'svelte/transition';

	let delayedStart = false;
	let srcBlue = "../blue.svg"
	let srcBrown = "../brown.svg"
	let srcNavy = "../navy.svg"
	let srcSolomon = "../solomon.svg"
	let srcSand = "../sand.svg"
	let srcBoat = "../boat.svg"

	setTimeout(() => {
		delayedStart = true;
	}, 100);
</script>

{#if delayedStart}
	 <div in:fly={{x:300, duration:500}}>
		 hunyyyyy &lt;
	 </div>
	 <img src={srcBrown} class="nineth-wave bottom-8 sm:bottom-0" alt="brown wave">
	 <img src={srcSolomon} class="eighth-wave bottom-6 sm:-bottom-4" alt="solomon wave">
	 <img src={srcBoat} class="boat bottom-16 left-9 sm:bottom-32" alt="boat">
	 <img src={srcNavy} class="seventh-wave bottom-4 sm:-bottom-8" alt="navy wave">
	 <img src={srcSand} class="sixth-wave bottom-2 sm:-bottom-12" alt="sand wave">
	 <img src={srcBlue} class="fiveth-wave bottom-0 sm:-bottom-16" alt="blue wave">
	 <img src={srcBrown} class="fourth-wave -bottom-2 sm:-bottom-20" alt="brown wave">
	 <img src={srcSolomon} class="third-wave -bottom-4 sm:-bottom-24" alt="solomon wave">
	 <img src={srcNavy} class="second-wave -bottom-6 sm:-bottom-28" alt="navy wave">
	 <img src={srcBlue} class="first-wave -bottom-8 sm:-bottom-32" alt="blue wave">
{/if}

<style>
	img {
		position: fixed;
		width: 100%;
		transform: scale(1.3);
	}

	.nineth-wave {
		animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) 0s infinite, swell 7s ease -.25s infinite;
	}

	.eighth-wave {
		animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) .5s infinite, swell 7s ease .25s infinite;
	}

	.seventh-wave {
		animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) 1s infinite, swell 7s ease 1.25s infinite;
	}

	.sixth-wave {
		animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) 2s infinite, swell 7s ease 2.14s infinite;
	}

	.boat {
		animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) 2s infinite, swell 7s ease 2.14s infinite;
	}

	.fiveth-wave {
		animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) 2.5s infinite, swell 7s ease 2.5s infinite;
	}

	.fourth-wave {
		animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) 3s infinite, swell 7s ease 2.8s infinite;
	}

	.third-wave {
		animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) 3.5s infinite, swell 7s ease 3.25s infinite;
	}

	.second-wave {
		animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) 4s infinite, swell 7s ease 3.60s infinite;
	}

	.first-wave {
		animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) 4.5s infinite, swell 7s ease 3s infinite;
	}

	@keyframes swell {
  0%, 100% {
    margin-bottom: 0;
  }
  50% {
    margin-bottom: 15px;
  }
}

@keyframes wave {
  0% {
    margin-left: 0;
  }
	
	50% {
		margin-left: 30px;
	}

  100% {
    margin-left: 0;
  }
}
</style>
