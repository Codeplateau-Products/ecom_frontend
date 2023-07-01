import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ProtectedRoute from "./utils/auth/ProtectedRoutes";
import { AuthProvider } from "./utils/auth/auth";
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {" "}
                  <Outlet />{" "}
                </>
              }>
              <Route index element={<h1>Home</h1>} />
              <Route path="about" element={<h1>About</h1>} />
              <Route path="contact" element={<h1>Contact</h1>} />
              <Route path="register" element={<h1>Register</h1>} />
              <Route path="login" element={<h1>Login</h1>} />

              <Route
                path="cart"
                element={
                  <ProtectedRoute>
                    <h1>Cart</h1>
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<h1>404</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
