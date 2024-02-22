export default function Home() {
  return (
    <main>
      <div className="dark:prose-invert prose prose-stone mx-auto">
        <h2>Environment</h2>
        <pre>{JSON.stringify(process.env, null, 2)}</pre>
      </div>
    </main>
  );
}
