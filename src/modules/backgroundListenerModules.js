export default [
    {
        ["START_OVER"]: async (argsObj) => {
            chrome.runtime.reload();
        }
    }
];