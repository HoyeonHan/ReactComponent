class Binding {
    private path: string = "";
    get Path() {
        return this.path;
    }
    set Path(value) {
        this.path = value;
    }

    constructor(path: string) {
        this.path = path;
    }
}

export default Binding;