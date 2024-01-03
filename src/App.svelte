<svelte:options immutable/>

<script>
    import {Route} from 'tinro';
    import Navbar from "./lib/Navbar.svelte";
    import Home from "./page/Home.svelte";
    import Projects from "./page/Projects.svelte";
</script>

<Navbar/>

<main>
    <Route path="/">
        <Home/>
    </Route>
    <Route path="/projects">
        <Projects/>
    </Route>
</main>
