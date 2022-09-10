import React,{useState} from 'react'
import  styled  from 'styled-components';
import Navbar from './../components/Navbar';
import Announcement from './../components/Announcement';
import Products from './../components/Products';
import Newsletter from './../components/Newsletter';
import Footer from './../components/Footer';
import { mobile } from './../responisve';
import { useLocation  } from "react-router-dom";
const Container=styled.div``
const Title=styled.h1`
    margin: 20px;
`
const FilterContainer=styled.div`
    display:flex;
    justify-content: space-between;
`
const Filter=styled.div`
    margin: 20px;
    ${mobile({width: "0px 20px", display:"flex",flexDirection:"column"})};
`;

const FilterText=styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: "0px"})};
`

const Select=styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: "10px 0px"})};
`
const Option=styled.option``

const ProductList = () => {
    const location=useLocation();
    const cat=location.pathname.split("/")[2];
    const [filters,setFilters]=useState({});
    const [sort,setSort]=useState("newest");

    const handleFilters=(e)=>{
        const value=e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value
        });
    };
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filtreleme:</FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option disabled >Renk</Option>
                    <Option value="white">Beyaz</Option>
                    <Option value="black">Siyah</Option>
                    <Option value="red">Kırmızı</Option>
                    <Option value="blue">Mavi</Option>
                    <Option value="yellow">Sarı</Option>
                    <Option value="green">Yeşil</Option>
                </Select>
                <Select name="size" onChange={handleFilters}>
                    <Option disabled>Beden</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sıralama:</FilterText>
                <Select onChange={e=>setSort(e.target.value)}>
                    <Option value="newest">En Yeniler</Option>
                    <Option value="asc">Fiyata Göre (Artan)</Option>
                    <Option value="desc">Fiyata Göre (Azalan)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList