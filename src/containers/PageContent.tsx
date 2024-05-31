import Footer from "./Footer";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import routes from "../routes";

export default function PageContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
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
      </div>
      <Footer />
    </div>
  );
}
