import React, { useState,useEffect }from 'react';
import millify from 'millify';
import { Card, Row, Col} from 'antd';
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from 'react-router-dom';

function Cryptocurrencies() {
  // const count = simplified ? 10 : 100;
  // console.log(count);
  // const {cryptosList, isFetching } = useGetCryptosQuery();
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  
  // console.log(data);
  // const cryptosList = data;
  // console.log("Cryptocurrencies",cryptosList);
  // console.log("Cryptocurrencies data",cryptosList?.data);
  // console.log("Cryptocurrencies coins  ",cryptosList?.data?.coins);
  // console.log("Cryptocurrencies", cryptosList);
  
  const [cryptos, setCryptos] = useState([]);
  useEffect(() => {
    if (cryptosList?.data?.coins) {
      
      setCryptos(cryptosList?.data?.coins);
    }
  
    return () => {
      
    }
  }, [cryptosList])
  
  console.log("Cryptocurrencies",cryptos);
  return (
    <div>
  
      <Row gutter={[15, 15]} className='crypto-card-container'>
        {cryptos.map((currency) => (

          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}></Link>
            <Card title={`${currency.rank}. ${currency.name}`}
              extra={<img className='crypto-image' src={currency.iconUrl} alt={`${currency.name}_img`} />}
              hoverable
              loading={isFetching}>
              <p><b>Price: {parseFloat(currency.price).toFixed(6) + " $"}</b></p>
              <p>Market Cap: {millify(currency.marketCap)}</p>
              <p>Daily Change: {millify(currency.change)} %</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cryptocurrencies