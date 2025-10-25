import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ReturnsPolicy = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-white">Refund Policy</h1>
        <div className="prose prose-invert max-w-none text-white/80">
          <p className="mb-6">Muhammad Muhib Khan - Development Services</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">General Policy</h2>
            <p className="mb-4">
              All development services are provided with transparency and clear communication throughout the project lifecycle. Payment terms and refund eligibility are established in the project agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Custom Development Projects</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Custom development projects require milestone-based payments.</li>
              <li>Refunds may be available for work not yet started, subject to project agreement terms.</li>
              <li>Once development has begun on a milestone, that portion is considered final.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Project Cancellations</h2>
            <p className="mb-4">If a project needs to be canceled:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Cancellation requests must be submitted in writing to muhibkhan2410@gmail.com</li>
              <li>Completed work up to the cancellation point will be invoiced.</li>
              <li>Any deposits for future work not yet started may be refundable based on agreement terms.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Quality Guarantee</h2>
            <p className="mb-4">All delivered code:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Meets agreed-upon specifications and requirements</li>
              <li>Follows modern development best practices</li>
              <li>Includes reasonable bug fixes within the agreed support period</li>
              <li>Is delivered with documentation as specified in the project agreement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Acknowledgment</h2>
            <p className="mb-4">
              By engaging development services, you acknowledge and agree to these terms as part of the service agreement with Muhammad Muhib Khan.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReturnsPolicy;
