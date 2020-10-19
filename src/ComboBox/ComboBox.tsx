import React from 'react';
import DataRow from 'src/dataset/DataRow';
import DataTable from 'src/dataset/DataTable';

interface Props {
    value: string,
    DisplayMemberPath: string,
    SelectedValuePath: string,
    ItemsSource: DataTable,
    SelectionChanged?: ((sender: object, event: Event) => void),
}

interface IState {
    SelectedItem: DataRow,
    SelectedValue: string
}

class ComboBox extends React.Component<Props, IState> {
    // state = {
    //     SelectedItem: null,
    //     SelectedValue: "KR",
    // }

    constructor(props: Props) {
        super(props);

        // Init state by init value
        if (this.props.ItemsSource.Rows.filter( o => o[this.props.SelectedValuePath] == props.value).length > 0) {
            var selectedItem = this.props.ItemsSource.Rows.filter( o => o[this.props.SelectedValuePath] == props.value)[0];    
            this.state = {
                SelectedItem: selectedItem,
                SelectedValue: props.value,
            }
        }
    }

    handleChange = async (event: any) => {
        var selectedItem = this.props.ItemsSource.Rows.filter( o => o[this.props.SelectedValuePath] == event.target.value)[0];
        await this.setState({ SelectedItem: selectedItem, SelectedValue: event.target.value });
        
        if (this.props.SelectionChanged != undefined) {
            this.props.SelectionChanged(this, event);
        }
    }
    render() {
        let listItems: Array<any> = this.props.ItemsSource.Rows.map<any>( row => { 
            return (
            <option value={row[this.props.SelectedValuePath]}>{row[this.props.DisplayMemberPath]}</option>
        )});

        // this.setState({ SelectedItem: this.props.ItemsSource.Rows[0], SelectedValue: this.props.ItemsSource.Rows[0][this.props.SelectedValuePath] });

        return (
            <select className="form-control" value={this.props.value} onChange={this.handleChange}>
                {listItems}
            </select>
        );
    }
}

export default ComboBox;