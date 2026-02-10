import { redirect } from "next/navigation";

function App() {
  const user = true;
  if (user) {
    redirect("/dashboard");
  }

  redirect("/auth/login");
}

export default App;
