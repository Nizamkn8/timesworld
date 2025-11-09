import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { loginSuccess } from "../../features/auth/authSlice";
import "./LoginPage.css";
import loginImg from "../../assets/images/login/login_img.png";
import SocialLoginButtons from "../../components/utils/SocialLoginButtons";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (!passwordPattern.test(formData.password))
      newErrors.password =
        "Password must be at least 8 chars, include 1 uppercase, 1 number, and 1 symbol";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(loginSuccess({ email: formData.email }));
      navigate("/home");
    }
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center custom-container justify-content-center login-sec"
    >
      <Row className="w-100 login-section-padding">
        <Col className="p-0">
          <div className="login-form-container d-flex justify-content-md-between justify-content-center  align-items-center ">
            <Form
              onSubmit={handleSubmit}
              className="flex-shrink-0 mw-280 w-100 dark-grey"
            >
              <h1 className="fw-bold sign-in">Sign In</h1>
              <span className="grey-2 fw-bold new-user">
                New User?{" "}
                <Link className="blue text-decoration-none">
                  Create an account
                </Link>
              </span>
              <Form.Group controlId="formEmail" className="mb-3 ">
                <Form.Control
                  type="email"
                  className="border-grey rounded-0 fw-semibold dark-grey login-input"
                  placeholder="Username or email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Control
                  type="password"
                  className="border-grey rounded-0 fw-semibold dark-grey login-input"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                controlId="formRemember"
                className="mb-3 d-flex align-items-center"
              >
                <Form.Check
                  type="checkbox"
                  label="Keep me signed in"
                  checked={formData.rememberMe || false}
                  onChange={(e) =>
                    setFormData({ ...formData, rememberMe: e.target.checked })
                  }
                  className="fw-semibold dark-grey login-checkbox"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100 bg-grey border-grey rounded-0 btn-hover fw-semibold btn-1"
              >
                Sign In
              </Button>

              <Row className="sign-in-with fw-bold">
                <div className="p-0">
                  <span>Or Sign In With</span>
                </div>
              </Row>

              {/* social media icons component */}
              <SocialLoginButtons />
            </Form>
            <div className="login-form-right section">
              <div>
                <img src={loginImg} alt="" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
