'use client';

import Input from '@/components/Input';
import TransparentButton from '@/components/button/TransparentButton';
import H5 from '@/components/heading/H5';
import { type ChangeEvent, useState, useEffect } from 'react';
import validateEmail from './validate';

import { FormData, FormErrors } from '@/shared/types/newsletter.ts';

export default function Newsletter() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (isSuccess) {
      timeoutId = setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isSuccess]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Imię jest wymagane';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Nazwisko jest wymagane';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Adres e-mail jest wymagany';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Nieprawidłowy adres e-mail';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // tu mozna by wkorzystac debounce..
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // tu powininen być hook call ..
    if (validateForm()) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Newsletter subscription:', formData);
      setFormData({ firstName: '', lastName: '', email: '' });
      setIsSuccess(true);
    }

    setIsSubmitting(false);
  };

  return (
    <section className="relative w-full rounded-3xl border-2 border-purple-700 bg-white/15 p-12 backdrop-blur-sm overflow-hidden">
      <div 
        className={`absolute inset-0 flex items-center justify-center bg-plBlue/80 backdrop-blur-md
          transition-all duration-500 ease-in-out
          ${isSuccess ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="text-center transform transition-all duration-500 ease-out">
          <H5>
            Dziękujemy za zapisanie się do naszego newslettera!
          </H5>
        </div>
      </div>

      <div className={`transition-all duration-500 ${isSuccess ? 'opacity-0' : 'opacity-100'}`}>
        <H5 className="mb-4">Bądź na bieżąco!</H5>
        <p className="mb-8">
          Zostań częścią społeczności Poland 2.0! Dołącz już dzisiaj i mailowo otrzymuj najnowsze informacje o naszych wydarzeniach i inicjatywach!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="firstName"
              placeholder="Imię"
              value={formData.firstName}
              onChange={handleInputChange}
              error={errors.firstName}
            />
          </div>

          <div>
            <Input
              type="text"
              name="lastName"
              placeholder="Nazwisko"
              value={formData.lastName}
              onChange={handleInputChange}
              error={errors.lastName}
            />
          </div>

          <div>
            <Input
              type="email"
              name="email"
              placeholder="Adres e-mail"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
            />
          </div>

          <div className="flex justify-end">
            <TransparentButton
              type="submit"
            >
              {isSubmitting ? 'Zapisywanie...' : 'Zapisz się'}
            </TransparentButton>
          </div>
        </form>
      </div>
    </section>
  );
}