import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

// Type for the form fields
type FormFields = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

// Type for error object
type FormErrors = Partial<Record<keyof FormFields, string>>;

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitMsg, setSubmitMsg] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (formData.phone && !/^\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    if (formRef.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Message sent successfully!");
            formRef.current?.reset();
            setSubmitMsg("Message sent successfully!");
            setFormData({ name: "", email: "", message: "", phone: "" });
            setLoading(false);
          },
          (error) => {
            console.error(error.text);
            toast.error("Failed to send message. Please try again.");
            setLoading(false);
          }
        );
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-full max-w-[500px]"
    >
      {/* Name Field */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-medium">
          Name
        </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Enter name"
          className={`bg-white p-2 rounded-sm border text-sm ${
            errors.name ? "border-red-500" : ""
          }`}
        />
        {errors.name && (
          <span className="text-red-500 text-xs">{errors.name}</span>
        )}
      </div>

      {/* Email Field */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-medium">
          Email Address
        </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Enter email"
          className={`bg-white p-2 rounded-sm border text-sm ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email}</span>
        )}
      </div>

      {/* Phone Field */}
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="font-medium">
          Phone
        </label>
        <input
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          className={`bg-white p-2 rounded-sm border text-sm ${
            errors.phone ? "border-red-500" : ""
          }`}
        />
        {errors.phone && (
          <span className="text-red-500 text-xs">{errors.phone}</span>
        )}
      </div>

      {/* Message Field */}
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="font-medium">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          className="bg-white p-2 rounded-sm border text-sm resize-none h-20"
        />
      </div>

      <button
        type="submit"
        className="cursor-pointer select-none rounded-3xl bg-amber-400 w-fit px-4 py-2 hover:bg-amber-500 active:bg-amber-600"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {submitMsg && <p className="text-green-500 text-xs">{submitMsg}</p>}
    </form>
  );
};
