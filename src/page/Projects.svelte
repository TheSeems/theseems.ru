<script>
    import Project from "../lib/Project.svelte";
</script>

<div class="content mt-20">
    <div class="text-center">
        <p class="text-5xl font-bold text-black dark:text-white">Projects</p>
        <p class="text-xl py-1 font-light text-black dark:text-white">
            A collection of projects I've participated in creating or of which I am the main contributor.</p>
    </div>
    <div class="mt-10 grid  md:grid-cols-3">
        <Project url="https://github.com/beydex/droply-backend" title={"Droply"} tags={["Kotlin", "Ktor", "Spring"]}>
            A minimalistic file transfer application using both P2P and centralized approaches. I've been mainly
            involved in developing the backend of this application.
        </Project>
        <Project url="https://github.com/theseems/clinq" title={"ClinQ"} tags={["Java"]}>
            An experimental validator supporting declarative checks with a simple formal language under the hood.
        </Project>
        <Project url="https://github.com/tomshelbybot" title={"TomShelBot"} tags={["Java", "Telegram API"]}>
            A Telegram Java SDK wrapper with many features such as: handlers (messages, updates, etc.), modularity (just
            put plugin's jar there and it works) abstractions of different levels: storage, commands, polls, punishments
        </Project>
        <Project url="https://github.com/theseems/treports" title={"TReports"} tags={["Python", "Django"]}>
            A simple bug-report system, were actually used in some of my projects as a free alternative of some
            enterprise systems to collect feedback from testers and track all of the bugs they found
        </Project>
        <Project url="https://github.com/asc-community/AngouriMath" title={"AngouriMath"} tags={["C#", "Math"]}>
            A symbolic algebra library. I've introduced a discrete math module there and made some other minor changes
        </Project>
        <Project url="https://github.com/asc-community/GenericTensor" title={"GenericTensor"} tags={["C#", "Math"]}>
            A high-performance library for matrix and tensor calculus. There i've implemented a LU and PLU
            decompositions
        </Project>
        <Project url="https://github.com/asc-community/MxEngine" title={"MxEngine"} tags={["C++", "CG"]}>
            A 3D game engine made from scratch. There i've fixed some bugs in a texture manipulation tools
        </Project>
    </div>
</div>
