import { Suspense } from "react";
import { Header } from "../components/header/header";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/footer";
import { Toaster } from "react-hot-toast";

export const Layout = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
