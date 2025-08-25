
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowTurnDown } from 'react-icons/fa6';
import emailJs from '@emailjs/browser';

// Custom hook for form logic
function useContactForm(initialState) {
  const [form, setForm] = React.useState(initialState);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e, navigate) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    // Use environment variables if possible
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_mnehd7q';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_rywk01a';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'AXN0NM8BSmKr1TVYt';
    emailJs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: 'kharchi merouane',
          message: form.message,
          email: form.email,
          company_name: form.companyName,
        },
        publicKey
      )
      .then(() => {
        setLoading(false);
        setSuccess('Message sent successfully!');
        setForm(initialState);
        setTimeout(() => {
          setSuccess(null);
          navigate('/');
        }, 2000);
      })
      .catch(() => {
        setLoading(false);
        setError('Failed to send message. Please try again.');
      });
  };

  return {
    form,
    loading,
    error,
    success,
    handleChange,
    handleSubmit,
  };
}

const Email = () => {
  const navigate = useNavigate();
  const initialState = { name: '', email: '', message: '', companyName: '' };
  const { form, loading, error, success, handleChange, handleSubmit } = useContactForm(initialState);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-2 bg-secondary text-primary">
      <button
        onClick={() => navigate('/')}
        className="absolute cursor-pointer top-24 left-24 flex flex-row-reverse items-center gap-2"
        aria-label="Back to Home"
      >
        <FaArrowTurnDown className="rotate-90" /> Back to Home
      </button>
      <h1 className="text-3xl mb-8">Send us an Email</h1>
      <p className="text-md text-tertiary w-1/2 text-center">
        Whether you have a question, a project in mind, or just want to say hello, feel free to reach out to us via email. We’ll get back to you as soon as possible.
      </p>
      <form
        onSubmit={(e) => handleSubmit(e, navigate)}
        className="w-1/2 flex flex-col items-center gap-8 p-4 mt-4"
        aria-label="Contact form"
      >
        <label htmlFor="name" className="sr-only">Your Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded"
          required
          aria-required="true"
        />
        <label htmlFor="email" className="sr-only">Your Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded"
          required
          aria-required="true"
        />
        <label htmlFor="companyName" className="sr-only">Your Company Name (optional)</label>
        <input
          id="companyName"
          type="text"
          name="companyName"
          value={form.companyName}
          onChange={handleChange}
          placeholder="Your Company Name (optional)"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <label htmlFor="message" className="sr-only">Your Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-2 border border-gray-300 rounded h-32"
          required
          aria-required="true"
        />
        <button
          type="submit"
          className="px-8 py-3 bg-tertiary text-accent hover:opacity-80 transition-all duration-150 ease-in-out"
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? 'Sending...' : 'Send Email'}
        </button>
        {success && <div className="text-green-600" role="status">{success}</div>}
        {error && <div className="text-red-600" role="alert">{error}</div>}
      </form>
    </div>
  );
};

export default Email;
