import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  Col,
  Button,
  CardBody,
  Input,
  Form,
  Label,
  CustomInput,
} from "reactstrap";
import { MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// core components
import Header from "components/Headers/Header.js";
import { useState } from "react";
import "./Inputfile.css";
import uploadImg from "../../assets/img/upload.png";
const AddProduct = () => {
  const [Category, setCategory] = useState({});
  const [formValues, setFormValues] = useState([{ key: "", value: "" }]);

  const [images, setImages] = useState([]);

  let Navigate = useNavigate();
  const handleCategorySubmit = (e) => {
    e.preventDefault();
  };

  let handleChangeInput = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { key: "", value: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name == "images") {
      let Images = Array.from(e.target.files);

      Promise.all(
        Images.map((file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (e) => {
              resolve(e.target.result);
            };

            reader.onerror = (error) => {
              reject(error);
            };

            reader.readAsDataURL(file);
          });
        })
      ).then((imagesArray) => {
        setImages(imagesArray);
      });
      setCategory({ ...Category, [name]: Images });
    } else if (name == "featured") {
      setCategory({ ...Category, [name]: e.target.checked });
    } else {
      setCategory({ ...Category, [name]: value });
    }
  };
  console.log(Category);
  console.log(formValues);
  return (
    <>
      {/* <Header /> */}
      <div className="header bg-gradient-primary pb-8 pt-6 pt-md-8"></div>
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <Col lg="4" md="4" sm="12">
                    <h3 className="mb-0">Add</h3>
                  </Col>
                  <Col lg="8" md="8" sm="12">
                    <div className="d-flex justify-content-end">
                      <Button
                        title="Go Back"
                        onClick={(e) => {
                          e.preventDefault();
                          Navigate("/admin/productList");
                        }}
                        color="primary"
                      >
                        {" "}
                        Back
                      </Button>
                    </div>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleCategorySubmit}>
                  <Row>
                    <Col className="mb-3" lg="4" md="4" sm="6" xs="12">
                      <Label>Name</Label>
                      <Input
                        required
                        placeholder="Enter Product Name"
                        name="ProductName"
                        onChange={handleChange}
                        value={Category.ProductName}
                        type="text"
                      ></Input>
                    </Col>
                    <Col className="mb-3" lg="4" md="4" sm="6" xs="12">
                      <Label>Model Id</Label>
                      <Input
                        name="modalId"
                        placeholder="Enter Model id"
                        onChange={handleChange}
                        value={Category.modalId}
                        type="text"
                      ></Input>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col className="mb-3" lg="4" md="4" sm="6" xs="12">
                      <span>
                        <span> Free</span>
                        <Input
                          className="mx-3 mt-2"
                          placeholder="Enter Points"
                          name="Pointsfree"
                          onChange={handleChange}
                          value={Category.Pointsfree}
                          type="radio"
                        />{" "}
                      </span>
                      <span className="mx-5">
                        <span> Points</span>
                        <Input
                          className="mx-2 mt-2"
                          placeholder="Enter Points"
                          name="Pointsfree"
                          onChange={handleChange}
                          value={Category.Pointsfree}
                          type="radio"
                        />{" "}
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    {/* <Col className="mb-3" lg="4" md="4" sm="6" xs="12">
                      <Label>Images</Label>
                      <Input
                        name="images"
                        onChange={handleChange}
                        type="file"
                        multiple
                      ></Input>
                    </Col> */}
                    <Col lg="2" md="2" sm="6" xs="12">
                      <div className="d-flex justify-content-start">
                        <Label>Images</Label>
                      </div>

                      <div className="parent">
                        <div className="file-upload">
                          <img height="25px" src={uploadImg} alt="upload" />
                          {/* <h3>Click box to upload</h3>
                          <p>Maximun file size 10mb</p> */}
                          <input
                            multiple
                            type="file"
                            name="images"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        {images?.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            style={{
                              borderRadius: "8px",
                              maxWidth: "100px",
                              maxHeight: "120px",
                              marginTop: "20px",
                              marginRight: "10px",
                            }}
                          />
                        ))}
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col className="mb-3" lg="4" md="4" sm="6" xs="12">
                      <Label>Available Version</Label>
                      <Input
                        name="version"
                        placeholder="Enter version"
                        onChange={handleChange}
                        value={Category.version}
                        type="text"
                      ></Input>
                    </Col>
                    <Col className="mb-3" lg="4" md="4" sm="6" xs="12">
                      <Label>Select Category</Label>
                      <CustomInput
                        name="Category"
                        placeholder="Enter version"
                        onChange={handleChange}
                        value={Category.Category}
                        type="select"
                      >
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                      </CustomInput>
                    </Col>
                    <Col className="mb-3" lg="4" md="4" sm="6" xs="12">
                      <Label>More Details</Label>
                      <Input
                        name="details"
                        placeholder="Enter Details"
                        onChange={handleChange}
                        value={Category.details}
                        type="text"
                      ></Input>
                    </Col>
                    <Col className="mb-3" lg="4" md="4" sm="6" xs="12">
                      <Label>Featured</Label>
                      <div>
                        <Input
                          className="mt-2 mx-2"
                          height={25}
                          width={25}
                          name="featured"
                          placeholder="Enter Details"
                          onChange={handleChange}
                          value={Category.details}
                          type="checkbox"
                        ></Input>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    {formValues.map((element, index) => (
                      <>
                        <Col
                          key={index}
                          className="mb-2"
                          lg="4"
                          md="4"
                          sm="6"
                          xs="12"
                        >
                          <Label>Key</Label>

                          <Input
                            placeholder="Enter key name"
                            name="key"
                            value={element.key || ""}
                            onChange={(e) => handleChangeInput(index, e)}
                            type="text"
                          ></Input>
                        </Col>
                        <Col
                          key={index}
                          className="mb-2"
                          lg="4"
                          md="4"
                          sm="6"
                          xs="12"
                        >
                          <Label>value</Label>

                          <Input
                            placeholder="Enter value"
                            name="value"
                            value={element.value || ""}
                            onChange={(e) => handleChangeInput(index, e)}
                            type="email"
                          ></Input>
                        </Col>
                        <Col key={index} lg="4" md="4" sm="6" xs="12">
                          {index ? (
                            <Button
                              type="button"
                              className="mt-4"
                              color="danger"
                              onClick={() => removeFormFields(index)}
                            >
                              Remove
                            </Button>
                          ) : null}
                          <Button
                            color="primary"
                            className="mt-4"
                            type="button"
                            onClick={() => addFormFields()}
                          >
                            Add
                          </Button>
                        </Col>
                      </>
                    ))}
                  </Row>
                  <Row>
                    <Col>
                      <div className="d-flex justify-content-start">
                        <Button className="mt-5" color="primary" type="submit">
                          Submit
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default AddProduct;
