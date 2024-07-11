// import { useRef } from "react";
import { Button, Input } from "antd";
import Form from "antd/es/form/Form";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../header";

const EditMovies = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { movie_id } = useParams();

  useEffect(() => {
    getSingleMovies(movie_id);
  }, []);

  //const [movieData, setMovieData] = useState({});

  const getSingleMovies = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/movies/${movie_id}`
      );
      //
      console.log(response.data.data);
      console.log(response.data.data._id);
      const newValues = {
        _id: response.data.data._id,
        name: response.data.data.name,
        info: response.data.data.info,
        rating: response.data.data.rating,
      };
      form.setFieldsValue(newValues);
      //setMovies(response.data.message);
      // console.log(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinish = async (values) => {
    try {
      await axios.patch(`http://localhost:8000/movies`, {
        ...values,
        _id: movie_id,
      });
      console.log(values);
      navigate(-1);
    } catch (e) {
      console.log(e);
      alert("cannot add Movie");
    }
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="bg-zinc-700 h-[100vh]">
        <Header title="Edit Movies" />

        <Form
          form={form}
          className="m-[10vh] ml-[50vh]"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Movie Id"
            name="_id"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input readOnly />
          </Form.Item>
          <Form.Item
            label="Movie Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please Enter Movie Name!",
              },
            ]}
          >
            <Input placeholder="movie name" />
          </Form.Item>
          <Form.Item
            label="Info"
            name="info"
            rules={[
              {
                required: true,
                message: "Movie Info Required!",
              },
            ]}
          >
            <Input placeholder="info" />
          </Form.Item>

          <Form.Item
            label="Rating"
            name="rating"
            rules={[
              {
                required: true,
                message: "Movie Rating Required!",
              },
            ]}
          >
            <Input placeholder="rating" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="default" htmlType="submit" className="">
              Edit Movie
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default EditMovies;
