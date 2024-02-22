export default function Home() {
  return (
    <main>
      <div className="dark:prose-invert prose prose-stone mx-auto">
        <h1>Environment</h1>
        <pre>{JSON.stringify(process.env, null, 2)}</pre>
      </div>
    </main>
  );
}
