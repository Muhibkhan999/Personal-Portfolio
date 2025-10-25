import Navbar from "@/components/Navbar";

const LicenseDisclosure = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Work Terms</h1>
        <div className="prose prose-invert max-w-none">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Project Terms</h2>
            <p className="mb-4">This outlines the terms and conditions for project collaboration and development services.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Project Requirements</h2>
            <p className="mb-4">Clients must provide:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Clear project specifications and requirements</li>
              <li>Timely feedback and approvals</li>
              <li>Access to necessary resources and accounts</li>
              <li>Agreed upon milestone payments</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Development Standards</h2>
            <p className="mb-4">All projects adhere to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Modern development best practices</li>
              <li>Clean, maintainable code standards</li>
              <li>Responsive design principles</li>
              <li>Security and performance optimization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Delivery & Support</h2>
            <p>Project delivery timelines and post-launch support will be agreed upon in the project contract.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LicenseDisclosure;
