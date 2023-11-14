

export default function ClearConsole() {
    console.log = () => { };
    console.warn = () => { };
    console.error = () => { };
    console.clear();
}