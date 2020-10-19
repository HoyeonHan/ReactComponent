class DataRow {
    [column: string]: any; 

    //get value by column index
    get(index: number) {
        return this[Object.keys(this)[index]];
    }

    get ItemArray() {
        let keys = Object.keys(this);
        let array = this;

        return keys.map(function(key) { return array[key]; });
    }

    set ItemArray(value) {
        if(value != null && value.length > 0) {
            for(let i = 0; i < value.length; i++) {
                this[Object.keys(this)[i]] = value[i];
            }
        }
    }
}

export default DataRow;