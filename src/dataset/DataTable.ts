import DataRow from './DataRow';
import DataSet from './DataSet';

class DataTable {
    //tableName
    private _tableName: string;
    get TableName() {
        return this._tableName;
    }
    set TableName(value) {
        let oldTableName = this._tableName;

        if(this._dataSet != undefined) {
            //indexer
            this._dataSet.Tables[value] = this._dataSet.Tables[oldTableName];
            delete this._dataSet.Tables[oldTableName];

            //map
            this._dataSet.Tables.delete(oldTableName);
            this._dataSet.Tables.set(value, this._dataSet.Tables[value]);
        }
                
        this._tableName = value;
    }

    //rows
    private _rows: Array<DataRow>;
    get Rows() {
        return this._rows;
    }

    constructor(name?: string) {
        this._tableName = name ? name : "";
        this._rows = new Array<DataRow>();
        this._dataSet = undefined;
    }

    //DataSet
    private _dataSet?: DataSet;
    get DataSet() {
        return this._dataSet;
    }
    set DataSet(value) {
        this._dataSet = value;
    }

    NewRow() {
        return new DataRow();
    }
}

export default DataTable;