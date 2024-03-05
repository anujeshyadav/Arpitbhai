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
  Input,
} from "reactstrap";
import { MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// core components
import Header from "components/Headers/Header.js";
import { Edit, Eye, Trash2 } from "react-feather";
import swal from "sweetalert";

const PlanList = () => {
  let Navigate = useNavigate();

  const handleDelete = () => {
    swal("Warning", "Sure You Want to Delete it", {
      buttons: {
        cancel: "cancel",
        catch: { text: "Delete ", value: "delete" },
      },
    }).then((value) => {
      switch (value) {
        case "delete":
          // Delete_targetINlist(id)
          //   .then((res) => {
          //     let selectedData = this.gridApi.getSelectedRows();
          //     this.gridApi.updateRowData({ remove: selectedData });
          //   })
          //   .catch((err) => {
          //     console.log(err);
          //   });
          break;
        default:
      }
    });
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <Col lg="4" md="4" sm="12">
                    <h3 className="mb-0">Plan List</h3>
                  </Col>
                  <Col></Col>
                  <Col lg="2" md="2" sm="6">
                    <Input type="text" placeholder="search here ..." />
                  </Col>
                  <Col lg="1" md="1" sm="12">
                    <div className="d-flex justify-content-end">
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          Navigate("/admin/addplan/0");
                        }}
                        color="primary"
                      >
                        {" "}
                        Add
                      </Button>
                    </div>
                  </Col>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Plan Name</th>
                    <th scope="col">Final Price</th>
                    {/* <th scope="col">Status</th> */}
                    <th scope="col">Points</th>
                    <th scope="col">Action</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../../assets/img/theme/bootstrap.jpg")}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">Plan Name</span>
                        </Media>
                      </Media>
                    </th>
                    <td>2500 RS</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        120
                      </Badge>
                    </td>
                    <td>
                      <span style={{ cursor: "pointer" }}>
                        order
                        {/* <Eye
                          onClick={() => Navigate("/admin/addplan/0")}
                          color="green"
                        /> */}
                      </span>
                      <span className="mx-1" style={{ cursor: "pointer" }}>
                        <Trash2 onClick={handleDelete} color="red" />
                      </span>
                      <span className="mx-1" style={{ cursor: "pointer" }}>
                        <Edit
                          onClick={() => Navigate("/admin/addplan/0")}
                          color="blue"
                        />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../../assets/img/theme/bootstrap.jpg")}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">Plan Name</span>
                        </Media>
                      </Media>
                    </th>
                    <td>2500 RS</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        120
                      </Badge>
                    </td>
                    <td>
                      <span style={{ cursor: "pointer" }}>
                        order
                        {/* <Eye
                          onClick={() => Navigate("/admin/addplan/0")}
                          color="green"
                        /> */}
                      </span>
                      <span className="mx-1" style={{ cursor: "pointer" }}>
                        <Trash2 onClick={handleDelete} color="red" />
                      </span>
                      <span className="mx-1" style={{ cursor: "pointer" }}>
                        <Edit
                          onClick={() => Navigate("/admin/addplan/0")}
                          color="blue"
                        />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../../assets/img/theme/bootstrap.jpg")}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">Plan Name</span>
                        </Media>
                      </Media>
                    </th>
                    <td>2500 RS</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        120
                      </Badge>
                    </td>
                    <td>
                      <span style={{ cursor: "pointer" }}>
                        order
                        {/* <Eye
                          onClick={() => Navigate("/admin/addplan/0")}
                          color="green"
                        /> */}
                      </span>
                      <span className="mx-1" style={{ cursor: "pointer" }}>
                        <Trash2 onClick={handleDelete} color="red" />
                      </span>
                      <span className="mx-1" style={{ cursor: "pointer" }}>
                        <Edit
                          onClick={() => Navigate("/admin/addplan/0")}
                          color="blue"
                        />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../../assets/img/theme/bootstrap.jpg")}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">Plan Name</span>
                        </Media>
                      </Media>
                    </th>
                    <td>2500 RS</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        120
                      </Badge>
                    </td>
                    <td>
                      <span style={{ cursor: "pointer" }}>
                        order
                        {/* <Eye
                          onClick={() => Navigate("/admin/addplan/0")}
                          color="green"
                        /> */}
                      </span>
                      <span className="mx-1" style={{ cursor: "pointer" }}>
                        <Trash2 onClick={handleDelete} color="red" />
                      </span>
                      <span className="mx-1" style={{ cursor: "pointer" }}>
                        <Edit
                          onClick={() => Navigate("/admin/addplan/0")}
                          color="blue"
                        />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../../assets/img/theme/bootstrap.jpg")}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">Plan Name</span>
                        </Media>
                      </Media>
                    </th>
                    <td>2500 RS</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        120
                      </Badge>
                    </td>
                    <td>
                      <span style={{ cursor: "pointer" }}>
                        order
                        {/* <Eye
                          onClick={() => Navigate("/admin/addplan/0")}
                          color="green"
                        /> */}
                      </span>
                      <span className="mx-1" style={{ cursor: "pointer" }}>
                        <Trash2 onClick={handleDelete} color="red" />
                      </span>
                      <span className="mx-1" style={{ cursor: "pointer" }}>
                        <Edit
                          onClick={() => Navigate("/admin/addplan/0")}
                          color="blue"
                        />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../../assets/img/theme/bootstrap.jpg")}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">Plan Name</span>
                        </Media>
                      </Media>
                    </th>
                    <td>2500 RS</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        120
                      </Badge>
                    </td>
                    <td>
                      <span style={{ cursor: "pointer" }}>
                        order
                        {/* <Eye
                          onClick={() => Navigate("/admin/addplan/0")}
                          color="green"
                        /> */}
                      </span>
                      <span className="mx-1" style={{ cursor: "pointer" }}>
                        <Trash2 onClick={handleDelete} color="red" />
                      </span>
                      <span className="mx-1" style={{ cursor: "pointer" }}>
                        <Edit
                          onClick={() => Navigate("/admin/addplan/0")}
                          color="blue"
                        />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
        {/* Dark table */}
      </Container>
    </>
  );
};

export default PlanList;
