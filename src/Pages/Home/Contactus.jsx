import { Home, PhoneAndroidOutlined, Email } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contactus = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      fname: form.fname.value,
      lname: form.lname.value,
      email: form.email.value,
      subject: form.subject.value,
    };

    // Sending the email to Green Dermatology
    emailjs.send('service_7lw1kzs', 'template_dz9bs3n', formData, 'zgcjV3EOTeSvGGhZn')
      .then(() => {
        // Sending confirmation email to the client
        emailjs.send('service_7lw1kzs', 'template_qbpvzva', {
          to_email: formData.email,
          to_name: `${formData.fname} ${formData.lname}`,
        }, 'zgcjV3EOTeSvGGhZn')
          .then(() => {
            toast.success('Your message has been sent successfully! We will get back to you shortly.');
          })
          .catch(() => {
            toast.error('Failed to send confirmation email to the client.');
          });
      })
      .catch(() => {
        toast.error('Oops! Something went wrong while sending your message. Please try again later.');
      });

    form.reset();
  };

  return (
    <div className="bg-getintouch-background bg-cover bg-center bg-no-repeat flex flex-col items-center pt-5 gap-5 lg:gap-36 md:p-16 min-h-screen">
      <div className="lg:w-1/2 flex flex-col items-center text-center p-5 md:p-0">
        <h1 className="text-2xl md:text-4xl font-medium text-tertiary">GET IN TOUCH</h1>
        <h5 className="text-xl md:text-2xl text-primary">
          We're here to help! If you have any questions, concerns, or comments about Green Dermatology, please feel free to reach out to us using the form below. We strive to respond promptly to all inquiries and look forward to assisting you with your dermatological needs.
        </h5>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center p-5 gap-8">
        <form className="flex flex-col w-full lg:w-1/2 space-y-4" onSubmit={sendEmail}>
          <div className="flex flex-col lg:flex-row gap-4">
            <TextField
              id="fname"
              name="fname"
              label="First Name"
              variant="outlined"
              fullWidth
              required
              className="bg-white"
            />
            <TextField
              id="lname"
              name="lname"
              label="Last Name"
              variant="outlined"
              fullWidth
              required
              className="bg-white"
            />
          </div>
          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            className="bg-white"
          />
          <TextField
            id="subject"
            name="subject"
            label="Subject"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
            className="bg-white"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: '#128b3f',
              color: 'white',
              '&:hover': {
                backgroundColor: '#128b3f',
                opacity: 0.8,
              },
            }}
            className="self-center md:self-start w-56"
          >
            Submit
          </Button>
        </form>
        <div className="w-full lg:w-1/2 self-start flex flex-col gap-4">
          <a
            href="https://maps.app.goo.gl/9Q1DkZ7hLk8FLJxz7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center p-2 lg:px-10 hover:bg-gray-100 w-fit rounded-lg transition-colors"
          >
            <Home sx={{ fontSize: 35 }} className="text-tertiary" />
            <div>
              <h3 className="text-xl text-tertiary font-medium">DELAWARE</h3>
              <p className="text-md">310 Mullet Run St, Milford, DE 19963</p>
            </div>
          </a>
          <a
            href="tel:+13024595010"
            className="flex gap-2 items-center p-2 lg:px-10 hover:bg-gray-100 w-fit rounded-lg transition-colors"
          >
            <PhoneAndroidOutlined sx={{ fontSize: 35 }} className="text-tertiary" />
            <div>
              <h3 className="text-xl text-tertiary font-medium">Phone Number</h3>
              <p className="text-md">+1 (302) 459-5010</p>
            </div>
          </a>
          <a
            href="mailto: kris@greenclinics.net"
            className="flex gap-2 items-center p-2 lg:px-10 hover:bg-gray-100 w-fit rounded-lg transition-colors"
          >
            <Email sx={{ fontSize: 35 }} className="text-tertiary" />
            <div>
              <h3 className="text-xl text-tertiary font-medium">Email</h3>
              <p className="text-md"> kris@greenclinics.net</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
