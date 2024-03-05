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
import { MdAdd, MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// core components
import Header from "components/Headers/Header.js";
import { useState } from "react";
import "./Inputfile.css";
import uploadImg from "../../assets/img/upload.png";
import { Delete, Trash2 } from "react-feather";
import Multiselect from "multiselect-react-dropdown";

const UserDetails = () => {
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

  const options = [
    { name: "Option 1️⃣", id: 1 },
    { name: "Option 2️⃣", id: 2 },
    { name: "Option 2️⃣", id: 2 },
    { name: "Option 2️⃣", id: 2 },
    { name: "Option 2️⃣", id: 2 },
    { name: "Option 2️⃣", id: 2 },
    { name: "Option 2️⃣", id: 2 },
  ];
  const onSelect = (selectedList, selectedItem) => {};

  const onRemove = (selectedList, removedItem) => {};

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

  const handleDeleteImages = (image, i) => {
    let myimages = Category?.images.splice(i, 1);

    setCategory({ ...Category, images: myimages });
    images?.splice(i, 1);
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
                    <h3 className="mb-0">User Details</h3>
                  </Col>
                  <Col lg="8" md="8" sm="12">
                    <div className="d-flex justify-content-end">
                      <Button
                        title="Go Back"
                        onClick={(e) => {
                          e.preventDefault();
                          Navigate("/admin/UserList");
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
                        name="userName"
                        onChange={handleChange}
                        value={Category.userName}
                        type="text"
                      ></Input>
                    </Col>
                    <Col className="mb-3" lg="4" md="4" sm="6" xs="12">
                      <Label>Registration Date</Label>
                      <Input
                        name="RegistrationDate"
                        placeholder="Enter Model id"
                        onChange={handleChange}
                        value={Category.RegistrationDate}
                        type="date"
                      ></Input>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    {/* <Col className="mb-4" lg="4" md="4" sm="6" xs="12">
                      <span>
                        <span> Free</span>
                        <Input
                          className="mx-3 mt-2"
                          placeholder="Enter Points"
                          name="free"
                          onChange={handleChange}
                          value="Free"
                          type="radio"
                        />{" "}
                      </span>
                      <span className="mx-5">
                        <span> Points</span>
                        <Input
                          className="mx-2 mt-2"
                          placeholder="Enter Points"
                          name="free"
                          onChange={handleChange}
                          value="Point"
                          type="radio"
                        />{" "}
                      </span>
                    </Col> */}
                    {Category.free == "Point" && (
                      <Col className="mb-3" lg="4" md="4" sm="6" xs="12">
                        <Label> Current Points</Label>
                        <Input
                          min={0}
                          placeholder="Enter Points"
                          value={Category.CurrentPoints}
                          name="CurrentPoints"
                          onChange={handleChange}
                          type="number"
                        ></Input>
                      </Col>
                    )}
                  </Row>
                  <Row>
                    <Col lg="2" md="2" sm="6" xs="12">
                      <div className="d-flex justify-content-start">
                        <Label>Images</Label>
                      </div>

                      {/* <div className="parent">
                        <div className="file-upload">
                          <img height="25px" src={uploadImg} alt="upload" />
                          <p>Click box to upload</p>
                          <input
                            multiple
                            type="file"
                            name="images"
                            onChange={handleChange}
                          />
                        </div>
                      </div> */}
                    </Col>
                    <Col>
                      <div>
                        {images?.map((image, index) => (
                          <>
                            <span
                              style={{ position: "absolute", marginTop: "0px" }}
                            >
                              <MdCancel
                                style={{ cursor: "pointer" }}
                                onClick={() => handleDeleteImages(image, index)}
                                size={15}
                                color="red"
                              />
                            </span>
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
                          </>
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
                    {/* <Col className="mb-3" lg="4" md="4" sm="6" xs="12">
                      <Label>Select Category</Label>
                      <Multiselect
                        options={options} // Options to display in the dropdown
                        // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                        onSelect={onSelect} // Function will trigger on select event
                        onRemove={onRemove} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                      />
                    </Col> */}
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

export default UserDetails;
