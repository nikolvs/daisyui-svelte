<script>
	import '../app.css';
	import { Navbar, NavbarSection, version } from '@nikolvs/daisyui-svelte';
</script>

<Navbar data-theme="dark">
	<NavbarSection section="start">daisyUI Svelte {version}</NavbarSection>
</Navbar>
<slot />
