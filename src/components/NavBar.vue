<template>
    <nav class="navbar-dark bg-black navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <h3> <span class="L">L</span>IGMA <span class="A">A</span>GENCY </h3>
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <router-link to='/' class="nav-link">
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">
                            About
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/agents">
                            Agents
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/cart">
                            Cart
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin">
                            Admin
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">
                            Contact Us
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">
                            Login
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
.img-fluid {
    width: 100px;
    height: 100px;
}

.navbar-nav li {
    margin-inline: 1rem;
    font-size: large;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

nav {
    padding: 20px;
    color: #ddd;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    letter-spacing: 3px;
}

nav a.nav-link:hover {
    color: #FF003C;
}

nav a.router-link-active:hover {
    color: #FF003C;
}

nav a.router-link-exact-active {
    color: #FF003C;
}
</style>