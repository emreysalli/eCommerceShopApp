import React,{useState} from 'react'
import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {userRows} from "../../dummyData.js";

const UserList = () => {
  const  [data,setData]=useState(userRows);
  const handleDelete=(id)=>{
    setData(data.filter(item=>item.id!==id));
  }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'Kullanıcı', width: 200, renderCell:(params)=>{
          return(
            <div className="userListUser">
              <img className="userListImg" src={params.row.avatar} alt="" />
              {params.row.userName}
            </div>
          );
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Durum',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'İşlem Hacmi',
          width: 160,
        },
        {
          field:"action",
          headerName:"Action",
          width:150,
          renderCell:(params)=>{
            return(
              <div>
                <Link to={"/user/"+params.row.id}>
                  <button className="userListEdit">Edit</button>
                </Link>
                <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
              </div>
            )
          }
        }
      ];
      
      
  return (
    <div className="userList">
        <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default UserList