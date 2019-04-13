/**
 * Define the strategy of to schedule the
 * UI changes to an better performance.
 */
export interface Updater {
    /**
     * Adds an UI change.
     * @param action change
     */
    addChange(action: () => void): void;
}
