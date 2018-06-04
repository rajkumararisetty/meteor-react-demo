import React, { PureComponent } from 'react';
import { ProductsForm } from './ProductsForm';
import ProductsList from './ProductsList';
import { ValidationRules } from './ValidationRules';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import FormValidator from '../../validations/FormValidator';

// Product component - represents the Product Form and List
export default class Products extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        name: '',
        quantity: '',
        price:''
      },
      listLoading: false,
      errors: {}
    };

    this.validator = new FormValidator(ValidationRules);
    this.onChangeProduct = this.onChangeProduct.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onChangeProduct = (event) => {
    event.preventDefault();
    const field = event.target.name;
    const newProduct = Object.assign({}, this.state.product);
    newProduct[field] = event.target.value;
    this.setState(
      {product: newProduct},
      () => this.validateEachInput(field, newProduct[field])
    );
    return true;
  };

  validateEachInput = (field, value) => {
    let validationStatus = this.validator.validateInput(field, value, this.state);
    const errors = Object.assign({}, this.state.errors);
    errors[field] = '';
    if (!validationStatus.isValid) {
      errors[field] = validationStatus.message;
    }

    this.setState({
      errors: errors
    });
    return true;
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      addLoading: !prevState.addLoading
    }));
    let validationStatus = this.validator.validateForm(this.state.product);
    if (!validationStatus.isValid) {
      this.setState((prevState) => ({
        errors: validationStatus.errors,
        addLoading: !prevState.addLoading
      }));
      return true;
    }

    Meteor.call('products.insert', this.state.product, (error, result) => {
      if (result) {
        let initProduct = Object.assign({}, this.state.product);
        initProduct.name = '';
        initProduct.quantity = '';
        initProduct.price = '';
        this.setState({
          product: initProduct
        });
        toastr.success('Successfully added');
      } else {
        toastr.error('Some thing went wrong please try again');
      }
      this.setState((prevState) => ({
        addLoading: !prevState.addLoading
      }));
    });
    return true;
  };

  render = () => {
    const { product, errors, addLoading } = this.state;
    return (
      <div className="container-fluid">
        <h1> React-Meteor Sample </h1>
        <div className="col-sm-5 col-sm-offset-1">
          <ProductsForm product={product}
                       saveFormSubmit={this.onFormSubmit}
                       onChange={this.onChangeProduct}
                       errors={errors}
                       addLoading={addLoading}
          />
        </div>
        <div className="col-sm-5 col-sm-offset-1">
          <ProductsList />
        </div>
      </div>
    );
  }
}
