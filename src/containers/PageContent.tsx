import Footer from "./Footer";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import routes from "../routes";

export default function PageContent() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((route: any, key: any) => {
          return (
            <Route
              key={key}
              path={`${route.path}`}
              element={<route.component />}
            />
          );
        })}
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <Footer />
    </>
  );
}
