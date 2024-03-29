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

const AddPlan = () => {
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
                          Navigate("/admin/planlist");
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
                      <Label>Plan Name</Label>
                      <Input
                        required
                        placeholder="Enter Category Name"
                        name="CategoryName"
                        onChange={handleChange}
                        value={Category.CategoryName}
                        type="text"
                      ></Input>
                    </Col>
                    <Col className="mb-3" lg="4" md="4" sm="6" xs="12">
                      <Label>Points</Label>
                      <Input
                        required
                        placeholder="Enter Category Name"
                        name="points"
                        onChange={handleChange}
                        value={Category.points}
                        type="text"
                      ></Input>
                    </Col>
                    <Col className="mb-3" lg="4" md="4" sm="6" xs="12">
                      <Label>Final Price</Label>
                      <Input
                        required
                        placeholder="Enter Category Name"
                        name="F_Price"
                        onChange={handleChange}
                        value={Category.F_Price}
                        type="text"
                      ></Input>
                    </Col>
                    <Col className="mb-3" lg="4" md="4" sm="6" xs="12">
                      <Label>Price</Label>
                      <Input
                        required
                        placeholder="Enter Category Name"
                        name="Price"
                        onChange={handleChange}
                        value={Category.F_Price}
                        type="text"
                      ></Input>
                    </Col>
                    <Col className="mb-3" lg="4" md="4" sm="6" xs="12">
                      <Label>Description</Label>
                      <Input
                        required
                        placeholder="Enter Category Name"
                        name="Description"
                        onChange={handleChange}
                        value={Category.Description}
                        type="text"
                      ></Input>
                    </Col>
                    <Col className="mb-3" lg="4" md="4" sm="6" xs="12">
                      <Label>Validity</Label>
                      <Input
                        required
                        placeholder="Enter Category Name"
                        name="Validity"
                        onChange={handleChange}
                        value={Category.Validity}
                        type="text"
                      ></Input>
                    </Col>
                    <Col className="mb-3" lg="4" md="4" sm="6" xs="12">
                      <Label>Validity type</Label>
                      <CustomInput
                        required
                        placeholder="Enter Category Name"
                        name="ValidityType"
                        onChange={handleChange}
                        value={Category.ValidityType}
                        type="select"
                      >
                        <option>--select--</option>
                        <option>Week</option>
                        <option>Month</option>
                        <option>Year</option>
                      </CustomInput>
                    </Col>
                    {/* <Col lg="4" md="4" sm="6" xs="12">
                      <Label>Category Image</Label>
                      <Input
                        className="form-control"
                        name="image"
                        onChange={handleChange}
                        // value={Category.Categoryname}
                        type="file"
                      ></Input>
                    </Col> */}
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

export default AddPlan;
