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
  FormGroup,
  FormText,
} from "reactstrap";
import { MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// core components
import Header from "components/Headers/Header.js";
import { useState } from "react";
import "./Inputfile.css";
import uploadImg from "../../assets/img/upload.png";

const Tables = () => {
  const [Category, setCategory] = useState({});

  let Navigate = useNavigate();
  const handleCategorySubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name == "image") {
      setCategory({ ...Category, [name]: e.target.files[0] });
    } else {
      setCategory({ ...Category, [name]: value });
    }
  };
  console.log(Category);
  return (
    <>
      {/* <Header /> */}
      <div className="header bg-gradient-primary pb-8 pt-6 pt-md-8"></div>
      {/* Page content */}
      <Container className="mt-5" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <Col lg="4" md="4" sm="12">
                    <h3 className="mb-0">Add Category</h3>
                  </Col>
                  <Col lg="8" md="8" sm="12">
                    <div className="d-flex justify-content-end">
                      <Button
                        title="Go Back"
                        onClick={(e) => {
                          e.preventDefault();
                          Navigate("/admin/CategryList");
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
                    <Col lg="4" md="4" sm="6" xs="12">
                      <Label>Name</Label>
                      <Input
                        required
                        placeholder="Enter Name"
                        name="CategoryName"
                        onChange={handleChange}
                        value={Category.CategoryName}
                        type="text"
                      ></Input>
                    </Col>
                    {/* <Col lg="4" md="4" sm="6" xs="12">
                      <Label>Image</Label>
                      <FormGroup>
                        <Input
                          name="image"
                          onChange={handleChange}
                          type="file"
                        ></Input>
                      </FormGroup>
                    </Col> */}

                    <Col lg="4" md="4" sm="6" xs="12">
                      <div className="d-flex justify-content-center">
                        <Label>Image</Label>
                      </div>

                      <div className="parent">
                        <div className="file-upload">
                          <img height="25px" src={uploadImg} alt="upload" />
                          <p>Click to upload</p>
                          {/* <p>Maximun file size 10mb</p> */}
                          <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="d-flex justify-content-start">
                        <Button className="mt-5" color="primary" type="submit">
                          Create
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

export default Tables;
