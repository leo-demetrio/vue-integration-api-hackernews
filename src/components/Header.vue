<template>
    <header>
        <nav class="container">
        <a href=""><img id="logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" alt=""></a>
        <img v-on:click="openMenu" id="menu-button" src="../assets/logomenu.png" alt="">

        <div v-on:click="closeMenu"  id="menu-overlay" v-if="menuActive"></div>

        <div id="menu-items" :class="{active:menuActive}">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </div>
        </nav>

        
    </header>    
</template>
<script>

export default {
    name: 'Header',
    data() {
        return {
            menuActive: false
        }
    },
    methods: {
        openMenu: function(){
            this.menuActive = true;
        },
        closeMenu: function(){
            this.menuActive = false;
        }
    }
}
</script>
<style scoped>
    header {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
        position: fixed;
    }
    .container {
        width: 90%;
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #logo {
        width: 130px;
        align-items: center;
        height: 60px;
    }
    #menu-button {
        width: 38px;
        height: 35px;
        background-color: var(--color-text-light);
    }
    #menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background-color: #000;
        opacity: 0.8;
    }

    #menu-items {
        position: fixed;
        top: 0;
        right: 0;
        width: 60%;
        height: 100vh;
        display: none;
        flex-direction: column;
        align-items: center;        
    }
    #menu-items.active {
        display: flex;
    }
    ul {
        margin-top: 30px;
        text-align: center;
    }
    ul li {
        margin: 20px 0px;
    }
    ul li a {
        color: var(--color-text-light);
        font-size: 30px; 
    }

    @media (min-width: 700px) {
        #menu-button,
        #menu-log,
        #menu-overlay {
            display: none;
        }
        #menu-items {
            display: flex;
            position: static;
            height: 60px;
            width: auto;
            margin-left: 20px;
        }
        ul {
            margin: 0;
            display: flex;
            height: 60px;
            align-items: center;
        } 
        ul li {
            margin: 0;
            margin-left: 20px;
        }
        ul li a {
            color: var(--color-text-light);
            font-size: 30px; 
        }
    }
</style>