import "../modules/startedLog";

const number = Math.floor(Math.random() * 1000);

async function main() {
    window.addEventListener("message", () => {
        console.log("Number is", number);
    });
}

main();