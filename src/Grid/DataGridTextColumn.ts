import Binding from './Binding';

class DataGridTextColumn {
    // Header
    private header: string = "";
    get Header() {
        return this.header;
    }
    set Header(value) {
        this.header = value;
    }

    // Binding
    private binding?: Binding;
    get Binding() {
        return this.binding;
    }
    set Binding(value) {
        this.binding = value;
    }
}

export default DataGridTextColumn;