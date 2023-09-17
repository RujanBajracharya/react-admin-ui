import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import './dataTable.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';

type Props = {
    columns: GridColDef[];
    rows: object[];
    slug: string;
}

export const DataTable = (props:Props) => {
    const [userRows, setUserRows] = useState(props.rows);
    const handleDelete = (id: int) => {
        const newRows = userRows.filter((item) => {
            return item.id !== id
        })
        setUserRows(newRows)
    }
    const actionColumn: GridColDef = {
        field: 'action',
        headerName: 'Action',
        width: 100,
        renderCell: (params) => {

            return(
                <div className="action">
                    <Link to={`/${props.slug}/${params.row.id}`}>
                        <img src="/view.svg" alt="" />
                    </Link>
                    <div className="delete" onClick={()=> handleDelete(params.row.id)}>
                        <img src="/delete.svg" alt="" />
                    </div>
                </div>
            );
        }
    }

  return (
    <div className='dataTable'>
        <DataGrid className='dataGrid'
        rows={userRows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar: GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 }
            }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnSelector
        disableDensitySelector
        disableColumnFilter
      />
    </div>
  )
}
