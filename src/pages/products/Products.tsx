import { useState } from "react"
import { DataTable } from "../../components/dataTable/DataTable"
import { Add } from "../../components/add/Add";
import { useGlobalContext } from "../../context";
import './products.scss';

const Products = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 250,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 150,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 200,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 150,
      type: "boolean",
    },
  ];

  const { products } = useGlobalContext();

  const [open, setOpen] = useState(false);
  return (
    <div className='products'>
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add new Products</button>
      </div>
      <DataTable slug={'product'} rows={products} columns = {columns}/>
      { open && <Add slug={'products'} setOpen={setOpen} columns={columns} /*rows = {userRows} setRows = {setRows}*//>}
    </div>
  )
}

export default Products