import React from 'react'
import MUIDataTable from "mui-datatables";
// hooks
import useQueryFeatures from '../../hooks/useQueryFeatures';
// mui
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Checkbox } from '@material-ui/core';
import { options } from './GridOptions';

export default function FeaturesGrid() {
    const { loading, features, metadata } = useQueryFeatures();


    const columns = [
      {
       name: "name",
       options: {
        sort: true,
        filter: false,
        customHeadLabelRender: (columnMeta: object) => (
          <span style={{fontWeight: 'bold', textTransform: 'uppercase'}}>Name</span>
         ),
       }
      },
      {
       name: "varId",
       options: {
        sort: true,
        filter: false,
        customHeadLabelRender: (columnMeta: object) => (
          <span style={{fontWeight: 'bold', textTransform: 'uppercase'}}>Variable Id</span>
         ),
       }
      },
      {
       name: "description",
       options: {
        sort: false,
        filter: false,
        customHeadLabelRender: (columnMeta: object) => (
          <span style={{fontWeight: 'bold', textTransform: 'uppercase'}}>Description</span>
         ),
         customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
           <div>
              {value}
           </div>

        )
       }
      },
      {
       name: "domains",
       options: {
        filter: true,
        sort: false,
        customHeadLabelRender: (columnMeta: object) => (
          <span style={{fontWeight: 'bold', textTransform: 'uppercase'}}>Domains</span>
         ),
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <FormControl>
          <Select 
            multiple 
            value={value} 
            style={{fontSize: 'inherit'}} 
            input={<OutlinedInput />}
            renderValue={(selected: any) => selected.join(', ')}
          >
            {!!metadata && metadata.domains.map((domain, index) => (
              <MenuItem key={index} value={domain}>
                <Checkbox checked={value.indexOf(domain) > -1} />
                <ListItemText primary={domain} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        )
       }
      },
      {
        name: "labels",
        options: {
         filter: true,
         sort: false,
         customHeadLabelRender: (columnMeta: object) => (
          <span style={{fontWeight: 'bold', textTransform: 'uppercase'}}>Labels</span>
         ),
         customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <Select 
            multiple 
            value={value} 
            style={{fontSize: 'inherit'}} 
            input={<OutlinedInput />}
            renderValue={(selected: any) => selected.join(', ')}
          >
            {!!metadata && metadata.labels.map((label, index) => (
              <MenuItem key={index} value={label}>
                <Checkbox checked={value.indexOf(label) > -1} />
                <ListItemText primary={label} />
              </MenuItem>
            ))}
          </Select>
        )
        }
       },
       {
        name: "value",
        options: {
         sort: true,
         filter: false,
         customHeadLabelRender: (columnMeta: object) => (
          <span style={{fontWeight: 'bold', textTransform: 'uppercase'}}>Value</span>
         ),
         customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <OutlinedInput
            value={value || ''}
            onChange={event => updateValue(event.target.value)}
          />
        )
        }
       },
     ];

    return (
      <>
      {loading ? (
        <div style={{display: 'flex',textAlign: 'center', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
          <CircularProgress />
        </div> )
      :  (
          <MUIDataTable
              title="Features List"
              data={features}
              columns={columns as any}
              options={options as any}
          />
      )}
      </>
    )
}
