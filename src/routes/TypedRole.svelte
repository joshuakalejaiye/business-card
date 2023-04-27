<script lang="ts">
	import { onMount } from 'svelte';

    $: shouldStillType = cursorPosition < roles[roleIndex].length
    $: cursorPosition = 0
    const roles = ['Software Engineer', 'Gamer', 'Keyboard Enthusiast']
    $: roleIndex = 0
    $: shouldBlink = cursorPosition === roles[roleIndex].length || cursorPosition === 0;
    $: typedText = roles[roleIndex].slice(0, cursorPosition)
    $: shouldBackspace = false

    let lastTyped: number = 0;
    let lastBackspaced: number = 0;
    let timeToWaitAfterWordIsTyped = 2500;
    let timeToWaitAfterWordIsBackspaced = 400;

   const animate = (currentTime: number) => {
        let lastTypedDelta = currentTime - lastTyped
        let lastBackspacedDelta = currentTime - lastBackspaced

        if ( !shouldBackspace && shouldStillType && lastTypedDelta >= 70) {
            cursorPosition += 1;
            lastTyped = currentTime
        } 

        if ( lastTypedDelta >= timeToWaitAfterWordIsTyped )
        {
            shouldBackspace = true
        }

        if (shouldBackspace) { 
            console.log(currentTime, lastBackspaced, lastBackspacedDelta >= 70 )
            if ( lastBackspacedDelta >= 70 && cursorPosition > 0 ) {
                cursorPosition -= 1
                lastBackspaced = currentTime
            }
        }

        if (shouldBackspace && cursorPosition === 0 && lastBackspacedDelta >= timeToWaitAfterWordIsBackspaced) { 
            roleIndex = (roleIndex + 1) % roles.length
             shouldBackspace = false
        }

        requestAnimationFrame(animate)
    }

    onMount(() => { 
        requestAnimationFrame(animate)
    })

</script>

<p id="i-am" class="text-3xl lg:text-4xl">I'm a </p>
<span class="flex ml-2">
    <p id="role" class="text-3xl lg:text-4xl mr-1">{typedText}</p>
    <div id="cursor" class={`w-1 bg-white ${shouldBlink ? 'cursor' : ''}`}></div>
</span>

<style>
    :root { 
        --blink-speed: 900ms;
    }

    .cursor { 
        animation: blink var(--blink-speed) infinite;
    }

    @keyframes blink { 
        to { 
            background: transparent;
        }
    }
</style>