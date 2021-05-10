<template>
    <div
        class="sidebar p-col-5 p-md-3 p-lg-2 p-shadow-5 animate__animated animate__faster animate__fadeInLeft"
    >
        <ul>
            <li>
                <router-link :to="'/'">
                    <Button class="p-button-text">
                        Registro
                    </Button>
                </router-link>
            </li>
            <li>
                <router-link :to="'/listado'">
                    <Button class="p-button-text">
                        Listado
                    </Button>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
button {
    transition: transform 0.3s ease;
    transform: scale3d(1, 1, 1);
}

button:hover {
    transform: scale3d(1.2, 1.2, 1.2);
}

.sidebar {
    background-color: cornflowerblue;
}

.sidebar ul {
    list-style: none;
}

.p-button.p-button-text {
    color: black;
}

a:link,
a:visited,
a:active {
    text-decoration: none;
}
a:hover {
    text-decoration: none;
}
</style>
