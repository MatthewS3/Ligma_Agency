<template>
    <div class="access-spinner">
        <pre class="access-spinner__text">
          
        </pre>
    </div>
</template>

<script>
export default {
    mounted() {
        const textArray = textString.split("");
        const textElem = document.querySelector(".access-spinner__text");
        let count = 0;
        setInterval(() => {
            if (textArray[count] === "\n") {
                textElem.innerHTML += "<br>";
            } else {
                textElem.innerHTML += `<span class="access-spinner__character">${textArray[count]}</span>`;
            }
            count++;
            if (count === textArray.length) {
                count = 0;
            }
        }, .3);
        setTimeout(() => {
            this.$router.push({ name: "home" }); // Navigate to home page
        }, 60000);
    },
};
const textString = `.
    ServerRunning ...
        198.51.100.247
            Sever_Running...

                    {
                        IP:             21.253.258.2589
                        Port:           4769.55.3.9
                        Server:         @SVJ12711/LLCJ
                        Status:         @ LOADING ...
                        Strenght:       420 TB/s
                        Latency:        215 Bits
                        Timer:          20.75 sec
                    }
        
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣶⣶⣾⣿⣿⣿⣿⣶⣷⣶⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣼⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⡿⠻⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣯⣻⣧⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⠟⠉⠁⠀⠀⠀⠀⠀⠀⠀⠉⠀⠉⠉⠙⠛⠿⣿⣿⣿⣿⢽⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣷⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣵⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣽⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠚⢻⣿⣿⣿⡏⠀⣠⡶⠒⢾⣾⣷⣶⣤⣄⠀⠀⠀⠀⢀⣤⣤⣤⣤⣤⣤⣄⠀⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣧⡾⠁⢀⣤⣶⡶⣾⣿⣿⣷⠀⠀⠀⠀⣸⣿⣿⣿⣭⣀⡀⠙⢳⣬⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣧⠀⠾⣿⠉⠉⠉⠙⠛⠉⠀⠀⠀⠀⠉⠹⠋⠻⠿⠻⢿⣆⠰⣿⣋⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠘⢹⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡄⢹⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢿⡿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⣶⡤⠿⣷⣶⠷⣦⣦⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣥⣼⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣾⠁⢿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠁⠀⠀⠀⠙⠁⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⡿⢻⢻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣆⣴⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⡃⢨⡷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⡟⢻⣿⣏⠀⠀⠀⠀⠀⠀⠀⠦⠾⠛⠉⠉⠉⠉⠉⠳⣶⡄⠀⠀⠀⠀⠀⠀⣿⡷⢾⡞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢹⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠲⣶⣶⣶⣶⡶⠈⠀⠀⠀⠀⠀⠀⠀⣿⠷⠚⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡄⣺⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣶⣄⢲⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣾⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣾⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣾⣷⣿⣿⣿⣿⣿⣿⣿⡿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠁⠀⠈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠋⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠈⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠘⣿⣄⡀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⡏⠀⠀⠀⠀⠀⠀⠈⠿⣿⣷⣄⣀⣠⠾⠋⠀⠀⠀⠀⠀⠀⠀⢰⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣾⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⠿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠖⠉⢿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⡟⠈⠓⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⢟⣵⠆⠀⠈⠻⣿⣷⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⡿⠟⠁⠀⢶⣄⠙⠲⣤⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣤⢞⣡⡾⠛⠁⠀⠀⠀⠀⠈⠙⠻⣿⣿⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡴⠟⠛⠁⠀⠀⠀⠀⠀⠈⠻⢦⣄⠉⠓⢤⣄⡀⠀⠀
⠀⠀⣠⡤⣞⣭⡾⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠿⠷⠤⠤⠤⠤⠤⠶⠖⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢦⣄⠀⠙⠲⢦
⢐⣫⣡⡾⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⢶⣄⣼
⠛⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠋


Server Has Been Located :
    Server is located at IP Address: 159.753.21.29
        Server being Hacked:
            Server ONLINE:
                    RUNNING:
                            {
                                IP:         127.0.0.155.66
                                Port:       8439
                                Server:     21.55.LV2
                                Location:   Plumstead / Southfield
                                Status:     Online
                                PIN:        258 369 25-9
                                OTP:        3-13-14
                                Nommer:     28
                            }

    Final Stage of activation:
    {
        IP:          HACK SUCCESSFULL ...
        SCAN:        ACCCESS GRANTED ...
        SERVER:      ACCCESS GRANTED ...
        PORT:        ACCCESS GRANTED ...
        SIGNAL:      ACCCESS GRANTED ...
        VPN:         DISCONNECTING ...
        FIREWALL:    SHUTTING DOWN ...
        SECURITY:    FORTIFING ...
        ADDRESS:     LOCATED ...
        DEVICE:      LAPTOP / PC ...
        SOFTWARE:    IDENTIFIED ...
        USERNAME:    N/A ...
        PASSWORD:    N/A ...
        EMAIL:       N/A ...
        OTP:         2121-XXXX-XXXX-5555 ...
    }
    !!!! Activation Complete !!!!

    ANYWAY WELCOME TO LIGMA AGENCY
        `;
</script>
<style scoped>
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
}

.access-spinner {
    background: #000;
    height: 100vh;
}

.access-spinner__text {
    bottom: 0;
    font-family: monospace;
    font-size: 18px;
    left: 0;
    line-height: 1.5rem;
    padding: 2rem;
    position: absolute;
    right: 0;
    text-align: left;
    color: #ff003c;
}

.access-spinner__character {
    animation: type .001s  linear;
    color: #ff003c;
}

@keyframes type {
    0% {
        background: #ddd;
        color: #ddd;
    }

    5% {
        background: transparent;
        color: #ddd;
    }

    100% {
        background: transparent;
        color: #ff003c;
    }
}
</style>