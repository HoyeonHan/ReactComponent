import React, { Component, MouseEvent } from 'react';
import DataRow from 'src/dataset/DataRow';
import DataTable from 'src/dataset/DataTable';
import DataGridTextColumn from './DataGridTextColumn';

interface Props {
    Columns: DataGridTextColumn[],
    ItemsSource: DataTable,
    SelectionChanged?: ((sender: object, event: MouseEvent) => void),
}

interface IState {
    SelectedItem?: DataRow,
    SelectedValue?: string
}

class Grid extends React.Component<Props, IState> {
    
    public Columns: DataGridTextColumn[] = [];

    constructor(props: Props) {
        super(props);

        // Init state by init value
        this.state = {
            SelectedItem: undefined,
            SelectedValue: undefined,
        }
        
    }

    rowClick = async (event: MouseEvent, row: DataRow) => {
        await this.setState({ SelectedItem: row });

        if (this.props.SelectionChanged != undefined) {
            this.props.SelectionChanged(this, event);
        }
    }

    render() {
        let ths: Array<any> = this.props.Columns.map<any>( column => { 
            return (
                <th scope="col">{column.Header}</th>
        )});

        let listItems: Array<any> = this.props.ItemsSource.Rows.map<any>( row => { 
            
            return (
                <tr onClick={ e => { this.rowClick(e, row)} }>
                    {this.props.Columns.map<any>( column => {
                        return (
                            <td>{row[column.Binding != undefined ? column.Binding.Path : ""]}</td>
                        )
                    })}
                </tr>
        )});

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            {ths}
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Grid;