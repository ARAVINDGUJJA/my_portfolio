import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 8rem;
    gap: 3rem;
  }
`;

const FormSection = styled.div`
  flex: 1.5;
`;

const ContactTitle = styled.h1`
  font-size: 3.5rem;
  font-family: 'Space Mono', monospace;
  color: var(--neon-green);
  margin-bottom: 1rem;
`;

const ContactIntro = styled.p`
  color: var(--text-gray);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 500px;
`;

const Form = styled.form`
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 12px;
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-white);
  font-family: 'Space Mono', monospace;
  transition: all 0.3s ease;

  &::placeholder {
    color: var(--text-gray);
  }

  &:focus {
    outline: none;
    border-color: var(--neon-green);
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.2);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-gray);
  font-family: 'Space Mono', monospace;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--neon-green);
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.2);
  }

  option {
    background: var(--bg-dark);
    color: var(--text-white);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-white);
  font-family: 'Space Mono', monospace;
  resize: vertical;
  transition: all 0.3s ease;

  &::placeholder {
    color: var(--text-gray);
  }

  &:focus {
    outline: none;
    border-color: var(--neon-green);
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.2);
  }
`;

const SubmitButton = styled(motion.button)`
  background: var(--neon-green);
  color: var(--bg-dark);
  font-family: 'Space Mono', monospace;
  font-weight: bold;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
  }
`;

const StatusMessage = styled(motion.div)`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  font-family: 'Space Mono', monospace;
  
  &.success {
    background: rgba(0, 255, 136, 0.1);
    color: var(--neon-green);
  }
  
  &.error {
    background: rgba(255, 0, 0, 0.1);
    color: #ff4444;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 7rem;

  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const IconBox = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    color: var(--neon-green);
    font-size: 1.5rem;
  }
`;

const ContactDetails = styled.div`
  h3 {
    color: var(--text-gray);
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-white);
    font-family: 'Space Mono', monospace;
    font-size: 1.1rem;
  }
`;

const Contact = () => {
  const formRef = useRef();

  useEffect(() => {
    emailjs.init("xm5EFeCTVP_vM2IVH");
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        to_name: "Aravind", // Add your name here
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        reply_to: formData.email
      };

      const result = await emailjs.send(
        'service_ncy8axi',
        'template_dycilpi',
        templateParams
      );

      if (result.status === 200) {
        setStatus({
          submitting: false,
          submitted: true,
          error: null
        });

        // Clear form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }

    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again later.'
      });
    }
  };

  return (
    <ContactContainer>
      <FormSection>
        <ContactTitle>Let's work together</ContactTitle>
        <ContactIntro>
          we can turn your ideas into impactful, beautifully crafted digital experiences.
        </ContactIntro>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputRow>
            <Input
              type="text"
              name="firstName"
              placeholder="Firstname"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Lastname"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </InputRow>

          <InputRow>
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </InputRow>

          <InputGroup>
            <Select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="web-development">Web Development</option>
              <option value="consulting">Consulting</option>
            </Select>
          </InputGroup>

          <InputGroup>
            <TextArea
              name="message"
              placeholder="Type your message here."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={status.submitting}
          >
            {status.submitting ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                Sending...
              </>
            ) : (
              'Send message'
            )}
          </SubmitButton>

          {status.submitted && (
            <StatusMessage
              className="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <i className="fas fa-check-circle"></i> Message sent successfully!
            </StatusMessage>
          )}

          {status.error && (
            <StatusMessage
              className="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <i className="fas fa-exclamation-circle"></i> {status.error}
            </StatusMessage>
          )}
        </Form>
      </FormSection>

      <ContactInfo>
        <ContactMethod>
          <IconBox>
            <i className="fas fa-phone"></i>
          </IconBox>
          <ContactDetails>
            <h3>Phone</h3>
            <p>(+91) 7569051807</p>
          </ContactDetails>
        </ContactMethod>

        <ContactMethod>
          <IconBox>
            <i className="fas fa-envelope"></i>
          </IconBox>
          <ContactDetails>
            <h3>Email</h3>
            <p>gujjaaravind0@gmail.com</p>
          </ContactDetails>
        </ContactMethod>

        <ContactMethod>
          <IconBox>
            <i className="fas fa-location-dot"></i>
          </IconBox>
          <ContactDetails>
            <h3>Address</h3>
            <p>Ghatkeshar, 500088</p>
          </ContactDetails>
        </ContactMethod>
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact; 