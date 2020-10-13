import React from "react";
import Form from "../Common/Form";
import Joi from "joi-browser";
import Buffer from "../Common/Buffer";
import {
  PostProduct,
  GetProduct,
  GetCategories,
} from "../../Services/productService";

import { toast } from "react-toastify";
import MultiImageUpload from "../Common/MultiImageUpload";
import { GetProductTags } from "../../Services/productCategoryService";
import AdminNavBar from "./AdminNavBar";

class ProductEntryForm extends Form {
  state = {
    data: {
      Id:0,
      Category: "",
      Description: "",
      IsActive: "",
      Price: "",
      ProductName: "",
      Tag: "",
      Images: {},
    },
    Categories: [],
    Tags: [],
    errors: {},
    currentId: 0,
    submitInprogress: false,
  };

  componentDidMount() {
    this.initializeForm();
  }

  async initializeForm() {
    const Categories = await GetCategories();
    const Tags = GetProductTags();
    const productId = this.props.match.params.Id;
    if (productId === "new") {
      const data = this.state.data;
      data.IsActive = true;
      data.Tag = "_";
      this.setState({ data, Categories, Tags });
      return;
    }
    const formData = await GetProduct(productId);
    let { data, currentId } = this.state;
    data.Category = formData[0].Category;
    data.Description = formData[0].Description;
    data.IsActive = formData[0].IsActive;
    data.Price = formData[0].Price;
    data.ProductName = formData[0].ProductName;
    data.Tag = formData[0].Tag;
    data.Id = formData[0].Id;
    currentId = formData[0].Id;
    this.setState({ data, Categories, Tags, currentId });
  }

  doSubmit = async () => {
    try {
      this.setState({ submitInprogress: true });
      const response = await PostProduct(this.state.data);
      if (response.status === 200) {
        this.props.history.push("/ProductEntry");
      } else {
        toast(response.data);
        this.setState({ submitInprogress: false });
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast(ex.response.data);
        this.setState({ submitInprogress: false });
      }
    }
  };

  handleImageChange = (images) => {
    const currentImages = this.state.count;
    if (images !== currentImages) {
      const data = this.state.data;
      data.Images = images;
      this.setState({ data });
    }
  };

  schema = {
    Id: Joi.number(),
    ProductName: Joi.string().required().label("Product Name"),
    Price: Joi.number().min(0).max(1000000).required().label("price"),
    Category: Joi.string().required().label("Category"),
    Description: Joi.string().required().label("Description"),
    IsActive: Joi.boolean(),
    Tag: Joi.string(),
    Images: Joi.object(),
  };

  render() {
    return (
      <React.Fragment>
        <Buffer isActive={this.state.submitInprogress} />
        <AdminNavBar />
        <div className="container_ProductEntryForm">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("ProductName", "Product Name", true)}
            {this.renderInput("Price", "Price")}
            {this.renderInputDropDown(
              this.state.Categories,
              "Category",
              "Category"
            )}
            {this.renderInputBigTextArea("Description", "Description")}
            {this.state.currentId === 0 && (
              <MultiImageUpload handleCountChange={this.handleImageChange} />
            )}
            {this.renderInputDropDown(this.state.Tags, "Tag", "Tag")}
            {/* {this.renderInputCheckBox("IsActive", "Active")} */}

            {this.renderButton("Submit")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductEntryForm;
