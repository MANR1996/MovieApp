import { Form, useCatch } from "@remix-run/react";

// export async function loader({ request }) {
//   return getProjects();
// }

export async function action() {
  console.log("HERE");
  // const form = await request.formData();
  // return createProject({ title: form.get("title") });
}

export function ErrorBoundary({ error }) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <h1>Caught</h1>
      <p>Status: {caught.status}</p>
      <pre>
        <code>{JSON.stringify(caught.data, null, 2)}</code>
      </pre>
    </div>
  );
}

export default function Index() {
  // return (
  //   // <div className="bg-gray-100">
  //   <div className="max-w-md mx-auto bg-gray-100">
  //     <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
  //       <div className="grid place-items-center h-full w-12 text-gray-300">
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="h-6 w-6"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke="currentColor"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth="2"
  //             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  //           />
  //         </svg>
  //       </div>
  //       <Form method="post">
  //         <input
  //           className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
  //           type="text"
  //           id="search"
  //           placeholder="Search by title"
  //         />
  //         {/* <button type="submit" disabled={busy}>
  //           {busy ? "Creating..." : "Create New Project"}
  //         </button> */}
  //       </Form>
  //       {/* <input
  //         className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
  //         type="text"
  //         id="search"
  //         placeholder="Search something.."
  //       /> */}
  //     </div>
  //   </div>
  //   // </div>
  // );
}

// export default function Projects() {
//   const projects = useLoaderData();
//   const { state } = useNavigation();
//   const busy = state === "submitting";

//   return (
//     <div>
//       {projects.map((project) => (
//         <Link to={project.slug}>{project.title}</Link>
//       ))}

//       <Form method="post">
//         <input name="title" />
//         <button type="submit" disabled={busy}>
//           {busy ? "Creating..." : "Create New Project"}
//         </button>
//       </Form>
//     </div>
//   );
// }
