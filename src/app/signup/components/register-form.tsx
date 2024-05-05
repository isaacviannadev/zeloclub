'use-client';
import { yupResolver } from '@hookform/resolvers/yup';
import PhoneInput from '@zeloclub/components/Organisms/PhoneInput';
import Button from '@zeloclub/components/UI/Button';
import ErrorMessage from '@zeloclub/components/UI/ErroMessage';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Checkbox } from '../../../../@/components/ui/checkbox';
import { Input } from '../../../../@/components/ui/input';
import { Label } from '../../../../@/components/ui/label';
import { cn } from '../../../../@/lib/utils';

const registerSchema = yup.object({
  fullName: yup
    .string()
    .required('Nome completo é obrigatório')
    .min(3, 'Nome completo deve ter no mínimo 3 caracteres'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phoneNumber: yup.string().required('Telefone é obrigatório'),
  terms: yup.boolean(),
});

type RegisterFormData = yup.InferType<typeof registerSchema>;

const RegisterForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    mode: 'onTouched',
  });

  const onSubmitRegister = (data: RegisterFormData) => {
    return console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitRegister)}
      className='px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48'
    >
      <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div className='sm:col-span-2'>
            <label
              htmlFor='fullName'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Nome completo
            </label>
            <div className='mt-2.5'>
              <Input
                type='text'
                id='fullName'
                className={cn(
                  errors['fullName']?.message
                    ? 'border-red-400  focus:border-red-400  focus:ring-red-400'
                    : ''
                )}
                {...register('fullName')}
              />
              {errors['fullName']?.message && (
                <ErrorMessage message={errors['fullName'].message} />
              )}
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='email'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              E-mail
            </label>
            <div className='mt-2.5'>
              <Input
                type='email'
                id='email'
                autoComplete='email'
                className={cn(
                  errors['fullName']?.message
                    ? 'border-red-400  focus:border-red-400  focus:ring-red-400'
                    : ''
                )}
                {...register('email')}
              />
              {errors['email']?.message && (
                <ErrorMessage message={errors['email'].message} />
              )}
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='phoneNumber'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Telefone
            </label>
            <div className='mt-2.5'>
              <Controller
                name='phoneNumber'
                control={control}
                render={({ field }) => <PhoneInput {...field} error={errors} />}
              />
            </div>
          </div>
        </div>
        <div className='mt-6'>
          <Label
            htmlFor='terms'
            id='terms'
            className=' ml-2 text-sm font-semibold leading-6 text-gray-900'
          >
            <Checkbox id='terms' {...register('terms')} />
            Eu concordo com os{' '}
            <Link
              href='/use-terms'
              className='text-brand-600 underline hover:text-brand-500'
            >
              termos de uso
            </Link>{' '}
            e{' '}
            <Link
              href='/privacy-policy'
              className='text-brand-600 underline hover:text-brand-500'
            >
              política de privacidade
            </Link>
          </Label>
        </div>
        {errors['terms']?.message && (
          <ErrorMessage message={errors['terms'].message} />
        )}
        <div className='mt-8 flex justify-end'>
          <Button type='submit'>Registrar para fazer parte!</Button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
