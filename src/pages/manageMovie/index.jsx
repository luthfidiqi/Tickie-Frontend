import "./index.css";
import Footer from "../../components/footer";
import NavbarSignIn from "../../components/NavbarSignIn";

import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import Pagination from "react-paginate";
import { useNavigate } from "react-router-dom";

import CardMovie from "../../components/CardMovie";

import { useSelector, useDispatch } from "react-redux";
import { getDataMovie } from "../../stores/actions/movie";

// Assets IMG
import spiderman from "../../assets/img/movie-details/spiderman.png";

function ManageMovie() {
  document.title = "Tickitz | Home";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // GET MOVIE
  const limit = 8;
  const [page, setPage] = useState(1);

  const movie = useSelector((state) => state.movie);
  // const [data, setData] = useState([]);
  // const [pageInfo, setPageInfo] = useState({});

  useEffect(() => {
    getdataMovie();
  }, []);

  useEffect(() => {
    getdataMovie();
  }, [page]);

  const getdataMovie = async () => {
    try {
      // PAGGIL ACTION
      await dispatch(getDataMovie(page, limit));
    } catch (error) {
      console.log(error.response);
    }
  };

  const [idMovie, setIdMovie] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [image, setImage] = useState(null);

  // FORM
  const [form, setForm] = useState({
    name: "",
    category: "",
    synopsis: "",
    director: "",
    releaseDate: "",
    casts: "",
    duration: "",
    image: null
  });

  const handleChangeForm = (event) => {
    const { name, value, files } = event.target;
    if (name === "image") {
      setForm({ ...form, [name]: files[0] });
      setImage(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }
    // formData.append("name", form.name)
    // axios.post("...", formData)

    // untuk mengecek data di formData
    // for (const data of formData.entries()) {
    //   console.log(data[0] + ", " + data[1]);
    //   // name, "Bagus"
    // }

    // dispatch(postMovie(formData));
    // getdataMovie();
    setImage(null);
    // resetForm();
  }

  const setUpdate = (data) => {
    const { 
      id,
      name,
      category,
      synopsis,
      director,
      releaseDate,
      casts,
      duration,
      image } = data;
    setForm({
      ...form,
      name,
      category,
      synopsis,
      director,
      releaseDate,
      casts,
      duration,
      image
    });
    setIdMovie(id);
    setIsUpdate(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(form);
    console.log(idMovie);
    // const formData = new FormData();
    // for (const data in form) {
    //   formData.append(data, form[data]);
    // }
    // dispatch(updateMovie(idMovie, formData));
    // getdataMovie();

    setIsUpdate(false);
    setImage(null);
    // resetForm();
  };
  
  const handleDelete = (id) => {
    console.log(id);
  };

  // PAGINATION
  const handlePagination = (data) => {
    setPage(data.selected + 1);
  };

  return (
    <>
    <div class="manageMovie">
      <NavbarSignIn></NavbarSignIn>

        <main class="manageMovie_main container">
          <section class="allMovie_title">
            <h1>Form Movie</h1>
            <form class="formMovie" onSubmit={isUpdate ? handleUpdate : handleSubmit}>
              <div class="d-flex">
                <div class="movieImage">
                {image && <img src={image} alt="Image Movie Preview" />}
                </div>
                <div class="form-grup-1">
                  <div class="mb-3">
                    <label for="formMovie-1" class="form-label"
                      >Movie Name</label
                    >
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="formMovie-1"
                      placeholder="Input movie name..."
                      onChange={(event) => handleChangeForm(event)}
                      value={form.name}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formMovie-1" class="form-label"
                      >Director</label
                    >
                    <input
                      type="text"
                      name="director"
                      class="form-control"
                      id="formMovie-1"
                      placeholder="Input director..."
                      onChange={(event) => handleChangeForm(event)}
                      value={form.director}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formMovie-1" class="form-label"
                      >Release date</label
                    >
                    <input
                      type="text"
                      name="releaseDate"
                      class="form-control"
                      id="formMovie-1"
                      placeholder="DD/MM/YYYY"
                      onChange={(event) => handleChangeForm(event)}
                      value={form.releaseDate}
                    />
                  </div>
                </div>

                <div class="form-grup-2">
                  <div class="mb-3">
                    <label for="formMovie-1" class="form-label"
                      >Category</label
                    >
                    <input
                      type="text"
                      name="category"
                      class="form-control"
                      id="formMovie-1"
                      placeholder="Input category..."
                      onChange={(event) => handleChangeForm(event)}
                      value={form.category}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formMovie-1" class="form-label"
                      >Casts</label
                    >
                    <input
                      type="text"
                      name="casts"
                      class="form-control"
                      id="formMovie-1"
                      placeholder="Input casts..."
                      onChange={(event) => handleChangeForm(event)}
                      value={form.casts}
                    />
                  </div>
                  <div className="d-flex">
                  <div class="mb-3 me-4">
                    <label for="formMovie-1" class="form-label"
                      >Duration</label
                    >
                    <input
                      type="text"
                      name="duration"
                      class="form-control"
                      id="formMovie-1"
                      placeholder="Input duration..."
                      onChange={(event) => handleChangeForm(event)}
                      value={form.duration}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formMovie-1" class="form-label"
                      >Image</label
                    >
                    <input
                      type="file" 
                      name="image" 
                      class="form-control"
                      onChange={(event) => handleChangeForm(event)}
                    />
                  </div>
                  </div>
                </div>
              </div>

              <div class="form-grup-3">
                <div class="mb-3">
                  <label for="formMovie-1" class="form-label"
                    >Synopsis</label
                  >
                  <textarea
                    type="textarea"
                    name="synopsis"
                    class="form-control"
                    id="formMovie-1"
                    placeholder="Input synopsis..."
                    onChange={(event) => handleChangeForm(event)}
                    value={form.synopsis}
                  />
                </div>
              </div>
              <div class="formMovie_content-btn d-flex">
                <button
                  class="d-flex formMovie_btn btn btn-outline-primary disable-mobile"
                >
                  Reset
                </button>
                <button
                  class="d-flex formMovie_btn-active btn btn-outline-primary"
                >
                  {isUpdate ? "Update" : "Submit"}
                </button>
              </div>
            </form>

      
              
            
          </section>

          <section class="allMovie_title mb-5 d-flex">
            <h1>Data Movie</h1>
            <div class="d-flex">
              <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Sort
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <div class="ml-2">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="exampleInputEmail"
                  placeholder="Search Movie Name ..."
                  onChange={(event) => handleChangeForm(event)}
                />
              </div>
            </div>
          
          </section>

          <section class="allMovie">
            <div className="row">
              {/* {movie.data.map((item) => (
                <div className="col" key={item.id}>
                  <CardMovie data={item} />
                </div>
              ))} */}
              {movie.isLoading ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                movie.data.map((item) => (
                  <div className="col" key={item.id}>
                    <CardMovie 
                    data={item}
                    setUpdate={setUpdate}
                    handleDelete={handleDelete}
                    />
                  </div>
                ))
              )}
            </div>
          </section>

          {/* <section class="allMovie_pagination">
            <nav aria-label="...">
              <ul class="pagination pagination-md">
                <li class="page-item active" aria-current="page">
                  <span class="page-link">1</span>
                </li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
              </ul>
            </nav>
          </section> */}

          <Pagination
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={movie.pageInfo.totalPage}
            onPageChange={handlePagination}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            initialPage={page - 1}
          />
        </main>

      <Footer></Footer>
    </div>
    </>
  );
}

export default ManageMovie;
