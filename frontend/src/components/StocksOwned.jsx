import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer,MDBFormInline, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBBadge } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangeSymbol = this.onChangeSymbol.bind(this);
    this.onChangeCost = this.onChangeCost.bind(this);
    






    this.state = {
      company: '',
      symbol: '',
      cost: '',
      currency: ''  
    }
  }

  onChangeCompany(e){
    this.setState({
      company: e.target.value
    })
  }

  onChangeCost(e) {
    this.setState({
      cost: e.target.value
    })
  }

  onChangeSymbol(e) {
    this.setState({
      symbol: e.target.value
    })
  }

  

  onChangeCurrency(e) {
    this.setState({
      currency: e.target.value
    })
  }

  onChangeMarket(e) {
    this.setState({
      market: e.target.value
    })
  }

  onChangeDate(e) {
    this.setState({
      currency: e.target.value
    })
  }

  

  

  onSubmit(e) {
    e.preventDefault();


    const data = {
      company: this.state.company,
      symbol: this.state.symbol,
      cost: this.state.cost,
      currency: this.state.currency,
      market: this.state.market,
      date: this.state.date
    }
    

    const encodeForm = (data) => {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&');
    }

    axios.post('http://localhost:4000/stock', encodeForm(data), {headers: {'Accept': 'application/json'}})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
    });

  }

  render(){
    return (
      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
        <MDBCard>
        <MDBCardBody>
          <form method="post" onSubmit={this.onSubmit} action="http://localhost:4000/stocks">
            <p className="h5 text-center mb-4">Add Stocks Owned by you</p>
            <div className="grey-text">
              <MDBInput

                label="Company"
                icon="building"
                type="text"
                group
                error="wrong"
                success="right"
                name="company"
                title="Name cannot contain numbers"
                value={this.state.company}
                onChange={this.onChangeCompany}
                required


              />
              <MDBInput
                label="Symbol"
                icon="chart-line"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="symbol"
                title="Please enter stock name"
                value={this.state.symbol}
                onChange={this.onChangeSymbol}
                required
              />
              Eg. AAPL for Apple Inc.
                  GOOGL for Alphabet Inc.
                  BAJAJ-AUTO for Bajaj Automobiles

              <MDBInput 
                label="Market"
                icon="money-check"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="market"
                title="Please enter market name"
                value={this.state.market}
                onChange={this.onChangeMarket}
              />
              Eg. NYSE,NASDAQ,NSE,BSE
              <MDBInput
                label="Price When stock was bought"
                icon="money-bill-wave"
                type="text"
                pattern="[0-9]"
                title="Cost cannot be in alphabets"
                validate
                error="wrong"
                success="right"
                name="cost"
                value={this.state.cost}
                onChange={this.onChangeCost}
                required

              />

              <MDBInput
                label="Currency"
                icon="rupee-sign"
                type="text"
                pattern="[A-Z]{3}"
                title="Currency cannot be in numbers"
                validate
                error="wrong"
                success="right"
                name="currency"
                value={this.state.currency}
                onChange={this.onChangeCurrency}
                required
               />

               Eg. USD for US Dollars INR for Indian Rupees

               <MDBInput
                 label="Date"
                 icon="calendar-alt"
                 type="date"
                 error="wrong"
                 success="right"
                 name="date"
                 value={this.state.date}
                 onChange={this.onChangeDate}
                 
                 required
               />

              


              

            </div>
            <div className="text-center">
              <MDBBtn gradient="purple" type="submit">Add Stock</MDBBtn>
            </div>
          </form>
          </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
}
