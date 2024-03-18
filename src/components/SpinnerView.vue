<template>
    <div v-if="!loaded">
        <div class="spinner">
            <div class="inner">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SpinnerView',
    data() {
        return {
            loaded: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.loaded = true;
        }, 2000);
    },
}
</script>

<style>
.spinner {
    animation: spin 1.5s linear alternate infinite;
    background: #C0C0C0;
    border-radius: 50%;
    height: 120px;
    width: 120px;
}

.spinner:before {
    background: #000;
    border-radius: 50%;
    content: '';
    display: block;
    height: 0.5em;
    width: 0.5em;
    z-index: 2;
}

.loader:after {
    background: #B87333;
    border-radius: 50%;
    box-shadow: 0em -2.60em #B87333,
        2.25em -4.02em #B87333,
        2.25em -1.25em #B87333,
        4.60em 0em #111,
        2.25em 1.25em #B87333,
        2.25em 4.02em #111,
        0em 2.60em #B87333,
        -2.25em 4.02em #111,
        -2.25em 1.25em #B87333,
        -4.60em 0em #111,
        -2.25em -1.25em #B87333,
        -2.25em -4.02em #111;
    content: '';
    display: block;
    height: 2em;
    width: 2em;
}

.inner {
    animation: load 1.5s linear alternate infinite;
    border: solid 1px #111;
    border-radius: 50%;
    height: 1.75em;
    width: 1.75em;
    z-index: 1;
}

.spinner,
.spinner:before,
.spinner:after,
.inner {
    bottom: 0;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
}

@keyframes load {
    0% {
        box-shadow: 0em -2.60em #000,
            2.25em -1.25em #B87333,
            2.25em 1.25em #B87333,
            0em 2.60em #B87333,
            -2.25em 1.25em #B87333,
            -2.25em -1.25em #B87333;
    }

    15% {
        box-shadow: 0em -2.60em #B87333,
            2.25em -1.25em #000,
            2.25em 1.25em #B87333,
            0em 2.60em #B87333,
            -2.25em 1.25em #B87333,
            -2.25em -1.25em #B87333;
    }

    30% {
        box-shadow: 0em -2.60em #B87333,
            2.25em -1.25em #B87333,
            2.25em 1.25em #B87333,
            0em 2.60em #B87333,
            -2.25em 1.25em #B87333,
            -2.25em -1.25em #B87333;
    }

    45% {
        box-shadow: 0em -2.60em #B87333,
            2.25em -1.25em #B87333,
            2.25em 1.25em #000,
            0em 2.60em #B87333,
            -2.25em 1.25em #B87333,
            -2.25em -1.25em #B87333;
    }

    60% {
        box-shadow: 0em -2.60em #B87333,
            2.25em -1.25em #B87333,
            2.25em 1.25em #B87333,
            0em 2.60em #000,
            -2.25em 1.25em #B87333,
            -2.25em -1.25em #B87333;
    }

    75% {
        box-shadow: 0em -2.60em #B87333,
            2.25em -1.25em #B87333,
            2.25em 1.25em #B87333,
            0em 2.60em #B87333,
            -2.25em 1.25em #000,
            -2.25em -1.25em #B87333;
    }

    90% {
        box-shadow: 0em -2.60em #B87333,
            2.25em -1.25em #B87333,
            2.25em 1.25em #B87333,
            0em 2.60em #B87333,
            -2.25em 1.25em #B87333,
            -2.25em -1.25em #000;
    }

    100% {
        box-shadow: 0em -2.60em #000,
            2.25em -1.25em #B87333,
            2.25em 1.25em #B87333,
            0em 2.60em #B87333,
            -2.25em 1.25em #B87333,
            -2.25em -1.25em #B87333;
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    15% {
        transform: rotate(60deg);
    }

    30% {
        transform: rotate(120deg);
    }

    45% {
        transform: rotate(180deg);
    }

    60% {
        transform: rotate(240deg);
    }

    75% {
        transform: rotate(300deg);
    }

    90% {
        transform: rotate(360deg);
    }

    100% {
        transform: rotate(0deg);
    }
}
</style>