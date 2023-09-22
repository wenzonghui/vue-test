<template>
    <div class="container">
        <header>
            <slot name="header"></slot>
        </header>

        <main>
            <slot name="default"></slot>
        </main>

        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<style>
    header {
        background-color: blue;
    }

    main {
        background-color: burlywood;
    }

    footer {
        font-size: 0.8em;
        background-color: chartreuse;
    }
</style>