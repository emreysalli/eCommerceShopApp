import React from "react";
import Navbar from "./../components/Navbar";
import Announcement from "./../components/Announcement";
import Footer from "./../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "./../responisve";
import { removeProduct, addProduct } from "../redux/cartRedux";
import { useSelector, useDispatch } from "react-redux";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })};
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })};
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })};
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>SEPETİM</Title>
        <Top>
          <TopButton>Alışverişe Devam Et</TopButton>
          <TopTexts>
            <TopText>Alışveriş Sepetim({cart.quantity})</TopText>
            <TopText>İstek Listen(0)</TopText>
          </TopTexts>
          <TopButton type="filled">Siparişi Tamamla</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Ürün: </b>
                      {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID: </b>
                      {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Beden: </b>
                      {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove
                      onClick={() => {
                        dispatch(removeProduct({ ...product, quantity: 1 }));
                      }}
                    />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Add
                      onClick={() => {
                        dispatch(addProduct({ ...product, quantity: 1 }));
                      }}
                    />
                  </ProductAmountContainer>
                  <ProductPrice>
                    {product.price * product.quantity} ₺
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>SİPARİŞ ÖZETİ</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Sipariş Tutarı</SummaryItemText>
              <SummaryItemPrice>{cart.total} ₺</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Kargo Ücreti</SummaryItemText>
              <SummaryItemPrice>20 ₺</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Kampanya İndirimi</SummaryItemText>
              <SummaryItemPrice>-20 ₺</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Sepet Toplamı</SummaryItemText>
              <SummaryItemPrice>{cart.total} ₺</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryButton>Siparişi Tamamla</SummaryButton>
            </SummaryItem>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
