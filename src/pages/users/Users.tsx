import { GridColDef} from "@mui/x-data-grid";
import { DataTable } from "../../components/dataTable/DataTable"
import { useGlobalContext } from "../../context";
import { userRows } from "../../data";
import './users.scss';

const Users = () => {
  const {userRows:[]} = useGlobalContext();
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'avatar',
      headerName: 'Avatar',
      width:100,
      renderCell: (params) => {
        return <img src={params.row.img} alt="" />
      }
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 200
    },
    {
      field:'createdAt',
      headerName: 'Created At',
      width: 200
    },
    {
      field: 'verified',
      headerName: 'Verified',
      width: 150,
      type: 'boolean'
    },
  ];

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add New Users</button>
      </div>
      <DataTable slug={'user'} rows={userRows} columns = {columns}/>
    </div>
  )
}

export default Users