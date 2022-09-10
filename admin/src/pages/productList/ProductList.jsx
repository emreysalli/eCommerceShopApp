import React,{useState} from 'react'
import "./productList.css";
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {productRows} from "../../dummyData.js";

const ProductList = () => {
    const [data,setData]=useState(productRows);
    const handleDelete=(id)=>{
        setData(data.filter(item=>item.id!==id));
      }

      const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Ürün', width: 200, renderCell:(params)=>{
          return(
            <div className="productListItem">
              <img className="productListImg" src={params.row.img} alt="" />
              {params.row.name}
            </div>
          );
        } },
        { field: 'stock', headerName: 'Stok', width: 200 },
        {
          field: 'status',
          headerName: 'Durum',
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Fiyat',
          width: 160,
        },
        {
          field:"action",
          headerName:"Action",
          width:150,
          renderCell:(params)=>{
            return(
              <div>
                <Link to={"/product/"+params.row.id}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row.id)}/>
              </div>
            )
          }
        }
      ];
  return (
    <div className="productList">
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

export default ProductList