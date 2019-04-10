export interface Updater {
    addChange(action: () => void) : void;
}