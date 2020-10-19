import React, { useState, MouseEvent } from 'react';
import './App.css';
import DataSet from './dataset/DataSet';
import DataTable from './dataset/DataTable';
import DataRow from './dataset/DataRow';
import ComboBox from './ComboBox/ComboBox';
import Grid from './Grid/Grid';
import DataGridTextColumn from './Grid/DataGridTextColumn';
import Binding from './Grid/Binding';

interface Props {

}

interface IState {
  color: string,
}

class App extends React.Component<Props, IState> {
  private dtColor: DataTable;
  private refCbo: React.RefObject<ComboBox>;
  private refGrid: React.RefObject<Grid>;
  private columns: DataGridTextColumn[];
  private dtPersons: DataTable;

  constructor(props: Props) {
    super(props);

    //Init ComboBox
    this.dtColor = this.getComboData();

    this.state = {
      color: "B"
    };

    this.refCbo = React.createRef<ComboBox>();
    this.refGrid = React.createRef<Grid>();

    //Init Grid
    this.columns = [];
    this.InitGrid();

    this.dtPersons = this.getPersons();
  }

  componentDidMount() {

  }

  InitGrid() {
    var column = new DataGridTextColumn();
    column.Header = "No";
    column.Binding = new Binding("No");

    var column2 = new DataGridTextColumn();
    column2.Header = "Name";
    column2.Binding = new Binding("Name");

    var column3 = new DataGridTextColumn();
    column3.Header = "City";
    column3.Binding = new Binding("City");

    this.columns.push(column);
    this.columns.push(column2);
    this.columns.push(column3);
  }
  
  getComboData() {
    var dtColor = new DataTable();
    var dr1 = dtColor.NewRow();
    dr1["NAME"] = "Blue";
    dr1["VALUE"] = "B";

    dtColor.Rows.push(dr1);

    let dr2 = dtColor.NewRow();
    dr2["NAME"] = "Yellow";
    dr2["VALUE"] = "Y";

    dtColor.Rows.push(dr2);

    let dr3 = dtColor.NewRow();
    dr3["NAME"] = "Red";
    dr3["VALUE"] = "R";

    dtColor.Rows.push(dr3);

    let dr4 = dtColor.NewRow();
    dr4["NAME"] = "Green";
    dr4["VALUE"] = "G";

    dtColor.Rows.push(dr4);

    return dtColor;
  }

  getPersons() {
    var dtPersons = new DataTable();
    var dr1 = dtPersons.NewRow();
    dr1["No"] = "1";
    dr1["Name"] = "Hoyeon";
    dr1["City"] = "Seoul";

    dtPersons.Rows.push(dr1);

    var dr2 = dtPersons.NewRow();
    dr2["No"] = "2";
    dr2["Name"] = "Jian";
    dr2["City"] = "Busan";

    dtPersons.Rows.push(dr2);

    var dr3 = dtPersons.NewRow();
    dr3["No"] = "3";
    dr3["Name"] = "Jieun";
    dr3["City"] = "Jeju";

    dtPersons.Rows.push(dr3);

    return dtPersons;
  }
  
  cbo_SelectionChanged = async (sender: object, event: Event) => {
    var cbo = sender as ComboBox;

    console.log("combobox selectedValue: " + cbo.state.SelectedValue);
    console.log("combobox selectedItem: ", cbo.state.SelectedItem);
    
    await this.setState({ color: cbo.state.SelectedValue });
  }

  grd_SelectionChanged = async (sender: object, event: MouseEvent) => {
    var grid = sender as Grid;
    console.log("grid SelectedItem: ", grid.state.SelectedItem);
  }

  btn_click = () => {
    console.log("button click: " + this.refCbo.current?.state.SelectedValue);
  }

  render() {
    return (
        <div style={{width: "500px"}}>
            <div className="form-group">
                <label>Color</label>
                <ComboBox ref={this.refCbo} 
                        value={this.state.color} 
                        DisplayMemberPath="NAME" 
                        SelectedValuePath="VALUE" 
                        ItemsSource={this.dtColor} 
                        SelectionChanged={this.cbo_SelectionChanged} />
                
            </div>      
            
            <div className="form-group">
                <button type="button" className="btn btn-primary" onClick={this.btn_click}>Click</button>
            </div>
            
            <div className="form-group">
                <Grid ref={this.refGrid}
                    Columns={this.columns}
                    ItemsSource={this.dtPersons}
                    SelectionChanged={this.grd_SelectionChanged}/>
            </div>
        </div>
    );
  }
}

export default App;
