import TaskBoard from "./components/TaskBoard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-4">
    <h1 className="text-2xl font-bold mb-4">Tender Tasks</h1>
    <TaskBoard />
  </main>
  );
}
