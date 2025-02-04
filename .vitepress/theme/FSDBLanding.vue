<template>
    <div class="flex flex-col items-center mt-8">
        <div class="image-container mb-4">
            <div class="naotimes-logo-bg"></div>
            <a href="/">
                <img class="naotimes-logo" src="/assets/img/nt256.png" alt="naoTimes Logo">
            </a>
        </div>
        <h2 class="head-text mt-4">Selamat datang di website naoTimes.</h2>
        <div class="flex flex-col items-center mt-2">
            <p>Jika anda datang dari website <a class="link" href="https://db.silveryasha.id/">FansubDB</a>, Fansub yang ingin anda unduh harus mengubah link URL terlebih dahulu.</p>
            <p>Mohon kontak Fansub anda untuk mengubah link proyek Fansub ke URL yang benar.</p>
        </div>
        <div class="flex flex-col items-center mt-8">
            <a href="/docs" className="link">
                Tertarik dengan naoTimes?
            </a>
            <a href="/invite" className="link mt-2">
                Invite naoTimes
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.flex {
    display: flex;
}

.flex-col {
    flex-direction: column;
}

.flex-row {
    flex-direction: row;
}

.items-center {
    align-items: center;
}

.head-text {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    margin-bottom: 0.5rem;
}

.mt-8 {
    margin-top: 2rem;
}

.mt-4 {
    margin-top: 1rem;
}

.mt-2 {
    margin-top: 0.5rem;
}

.mb-4 {
    margin-bottom: 1rem;
}

.naotimes-logo {
    width: 12rem;
    height: 12rem;
    z-index: 10;
    position: relative;
    transition: transform 0.2s ease-in-out;
}

.naotimes-logo:hover {
    transform: scale(1.05);
}

.naotimes-logo-bg {
    position: absolute;
    background-image: linear-gradient( -45deg, #ffbea7 50%, #fcddcc 50% );
    filter: blur(40px);
    z-index: 5;
    width: 12.5rem;
    height: 12.5rem;
    margin-left: -0.25rem;
    margin-top: -0.25rem;
}

.link {
    font-weight: 500;
    color: var(--vp-c-brand-1);
    text-decoration: underline;
    text-decoration-style: dashed;
    text-underline-offset: 2px;
    transition: color 0.25s, opacity 0.25s;
}

.link:hover {
    color: var(--vp-c-brand-2);
    text-decoration-style: solid;
}
</style>