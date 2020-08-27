import "../modules/startedLog";

const CONTENT_SCRIPT_INSTANCE_ID = Math.floor(Math.random() * 1000);

async function main() {
    window.addEventListener("message", () => {
        console.log("Number is", CONTENT_SCRIPT_INSTANCE_ID);
    });
}

main();