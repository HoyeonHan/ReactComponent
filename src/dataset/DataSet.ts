import DataTableCollection from './DataTableCollection'

class DataSet {
    private _dataSetName: string;
    get DataSetName() {
        return this._dataSetName;
    }
    set DataSetName(value) {
        this._dataSetName = value;
    }

    private _Tables: DataTableCollection;
    get Tables() {
        return this._Tables;
    }
    
    constructor(name?: string) {
        this._dataSetName = name ? name : "";
        this._Tables = new DataTableCollection(this);
    }
}

export default DataSet;