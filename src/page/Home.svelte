<script>
    import {A} from "flowbite-svelte";
    import MailIcon from "../assets/icons/mail.svg";
    import TelegramIcon from "../assets/icons/telegram.svg";
    import GithubIcon from "../assets/icons/github.svg";
    import LinkIcon from "../assets/icons/link.svg";
</script>

<div class="content py-7">
    <div class="text-center">
        <p class="text-5xl font-bold text-black dark:text-white">TheSeems</p>
        <p class="text-2xl text-black dark:text-white">Software Engineer</p>
    </div>
    <div class="py-10 w-full md:w-1/2 mx-auto">
        <p class="text-black text-lg dark:text-white">
            My name is Alexey Akhundov.
            I am a Software Engineer at
            <A href="//ya.ru" aClass="inline-flex items-center font-medium">
                Yandex <LinkIcon class="p-0.5 m-0.5 h-5 w-5"/>
            </A>
            and also a student at
            <A href="//cs.hse.ru/en" aClass="inline-flex items-center font-medium">
                HSE, Faculty of Computer Science <LinkIcon class="p-0.5 m-0.5 h-5 w-5"/>
            </A>
        </p>
        <p class="text-black dark:text-white font-light py-2">
            As a software engineer, I specialize in backend technologies. I like coding, learning and using algorithms,
            data structures, designing architecture - almost everything related to computer science.
        </p>
    </div>

    <div class="py-5 flex items-center mx-auto justify-center space-x-8">
        <a class="text-primary-600" href="//github.com/theseems" target="_blank">
            <GithubIcon class="w-5 h-5"/>
        </a>
        <a class="text-primary-600" href="//t.me/theseems" target="_blank">
            <TelegramIcon class="w-5 h-5"/>
        </a>
        <a class="text-primary-600" href="mailto:me@theseems.ru" target="_blank">
            <MailIcon class="w-5 h-5"/>
        </a>
    </div>
</div>
