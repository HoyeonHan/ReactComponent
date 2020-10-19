import DataSet from "./DataSet";
import DataTable from "./DataTable";

class DataTableCollection extends Map<String, DataTable> {
    [tableName: string]: any;

    private _dataSet: DataSet;

    constructor (dataSet: DataSet) {
        super();
        this._dataSet = dataSet;
    }
    
    Add (dataTable: DataTable) {
        dataTable.DataSet = this._dataSet;
        this.set(dataTable.TableName, dataTable);
        this[dataTable.TableName] = dataTable;
    }
}

export default DataTableCollection;