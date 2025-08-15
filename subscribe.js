/**
 * This script finds all "Subscribe" buttons on a YouTube search results page
 * and clicks them to subscribe to the channels.
 *
 * How to use:
 * 1. Go to a YouTube search results page.
 * 2. Open the browser's developer console (usually by pressing F12).
 * 3. Copy and paste this entire script into the console.
 * 4. Press Enter to run the script.
 */
(async function iife() {
    // Delay in milliseconds between each subscription action.
    // This helps prevent the page from becoming unresponsive or flagging your actions as spam.
    var SUBSCRIBE_DELAY_TIME = 200;

    /**
     * Creates a delay before executing the next action.
     * @param {function} fn - The function to execute after the delay.
     * @param {number} delay - The time to wait in milliseconds.
     * @returns {Promise} A promise that resolves after the delay.
     */
    var runAfterDelay = (fn, delay) => new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                fn();
                resolve();
            } catch (e) {
                reject(e);
            }
        }, delay);
    });

    // Select all subscribe buttons that are not yet in a 'subscribed' state.
    // YouTube uses the 'aria-label' to identify the button's purpose, which is a reliable selector.
    var subscribeButtons = Array.from(document.querySelectorAll('button[aria-label^="Subscribe to"]'));

    if (subscribeButtons.length === 0) {
        console.log("No 'Subscribe' buttons found on this page. Make sure you are on a YouTube search results page.");
        return;
    }

    console.log(`${subscribeButtons.length} channels found to subscribe to.`);

    var count = 0;
    for (const button of subscribeButtons) {
        // Click the subscribe button.
        button.click();
        count++;
        console.log(`Subscribed to channel ${count} of ${subscribeButtons.length}.`);

        // Wait for a short period before proceeding to the next button.
        await runAfterDelay(() => {}, SUBSCRIBE_DELAY_TIME);
    }

    console.log("Script finished. All visible channels have been subscribed to.");
})();
