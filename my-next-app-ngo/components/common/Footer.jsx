// components/common/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} NGO FutureProof. All rights reserved.</p>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm text-gray-600 hover:underline">About</a>
          <a href="#" className="text-sm text-gray-600 hover:underline">Contact</a>
          <a href="#" className="text-sm text-gray-600 hover:underline">Privacy</a>
          <a href="#" className="text-sm text-gray-600 hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}