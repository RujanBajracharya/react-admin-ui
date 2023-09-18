import { GridColDef } from '@mui/x-data-grid';
import './add.scss'
import { useState } from 'react';

type Props = {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    // rows: object[];
    // setRows: React.Dispatch<React.SetStateAction<({
    //     id: number;
    //     img: string;
    //     lastName: string;
    //     firstName: string;
    //     email: string;
    //     phone: string;
    //     createdAt: string;
    //     verified: boolean;
    // } | {
    //     id: number;
    //     img: string;
    //     lastName: string;
    //     firstName: string;
    //     phone: string;
    //     createdAt: string;
    //     verified?: undefined;
    //     })[]>>;
}

export const Add = (props:Props) => {
    // const [userRows, setUserRows] = useState(props.rows)
    // const [inputs, setInputs] = useState({id: 16, img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600"});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({...inputs, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    
  return (
    <div className='add'>
        <div className="modal">
            <span className="close" onClick={()=>props.setOpen(false)}>X</span>
            <h1>Add new {props.slug}</h1>
            <form onSubmit={(e)=> handleSubmit(e)}>
                {
                    props.columns.filter((column) => {
                        return column.field !== 'id' && column.field !== 'img'
                    }).map((column) => {
                        return (
                            <div className="item">
                                <label>{column.headerName}</label>
                                <input type={column.type} name={column.field} placeholder={column.field}/>
                            </div>
                        );
                    })
                }
                <button type='submit'>Send</button>
            </form>
        </div>
    </div>
  )
}
