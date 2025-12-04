"use client"; // Error boundaries must be Client Components

type ErrorProps = {
  error: Error & { digest?: string };
};

const error = ({ error }: { error: Error }, reset: () => void) => {
  console.log(error);

  return (
    <div>
      <h1>error</h1>
      <button className="p-2 border-2 rounded" onClick={() => reset()}>
        try again
      </button>
    </div>
  );
};
export default error;
