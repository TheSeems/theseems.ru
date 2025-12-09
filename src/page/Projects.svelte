<script>
    import Project from "../lib/Project.svelte";
</script>

<div class="content mt-20">
    <div class="text-center">
        <p class="text-5xl font-bold text-black dark:text-white">Projects</p>
        <p class="text-xl py-1 font-light text-black dark:text-white">
            A collection of projects I've participated in creating or of which I am the main contributor.</p>
    </div>
    <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Project url="https://wili.me" title={"Wili.me"} tags={["Svelte", "Go", "Product"]}>
            Create and share wish-lists with friends, family, or anyone else. Log in to start building yours.
        </Project>
        <Project url="https://github.com/beydex/droply-backend" title={"Droply"} tags={["Kotlin", "Ktor", "Spring"]}>
            A minimalistic file transfer application using both P2P and centralized approaches. I focused on backend
            development for this project.
        </Project>
        <Project url="https://github.com/theseems/clinq" title={"ClinQ"} tags={["Java"]}>
            An experimental validator that supports declarative checks through a simple formal language.
        </Project>
        <Project url="https://github.com/tomshelbybot" title={"TomShelBot"} tags={["Java", "Telegram API"]}>
            A Telegram Java SDK wrapper with features such as message and update handlers, a modular plugin system, and
            layered abstractions for storage, commands, polls, and moderation.
        </Project>
        <Project url="https://github.com/theseems/treports" title={"TReports"} tags={["Python", "Django"]}>
            A simple bug-report system used in several of my projects as a free alternative to enterprise feedback
            collection tools.
        </Project>
        <Project url="https://github.com/asc-community/AngouriMath" title={"AngouriMath"} tags={["C#", "Math"]}>
            A symbolic algebra library where I introduced a discrete math module and contributed additional
            improvements.
        </Project>
        <Project url="https://github.com/asc-community/GenericTensor" title={"GenericTensor"} tags={["C#", "Math"]}>
            A high-performance library for matrix and tensor calculus where I implemented LU and PLU decompositions.
        </Project>
        <Project url="https://github.com/asc-community/MxEngine" title={"MxEngine"} tags={["C++", "CG"]}>
            A 3D game engine made from scratch where I fixed bugs in texture manipulation tools.
        </Project>
    </div>
</div>
