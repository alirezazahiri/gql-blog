import Home from "./components/Home";
import Layout from "./layout";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Blogs/Blog";
import Author from "./components/Authors/Author";

const App = () => (
  <Layout>
    <Routes>
      <Route element={<Author />} path="/authors/:slug" />
      <Route element={<Blog />} path="/blogs/:slug" />
      <Route element={<Home />} path="/" />
    </Routes>
  </Layout>
);

export default App;
