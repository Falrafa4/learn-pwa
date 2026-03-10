import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-3xl font-bold">Opps!</h1>
      <p className="my-5 text-xl">Sorry, an unexpected error has occured.</p>
      <p className="text-lg font-bold text-red-600">{error.statusText || error.message}</p>
    </div>
  );
}
