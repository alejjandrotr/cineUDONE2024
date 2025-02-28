import * as z from 'zod';

export const registerSchema = z.object({
  cedula: z.string().min(1, { message: 'La cédula es obligatoria' }),
  email: z.string().email({ message: 'El correo electrónico no es válido' }),
  password: z.string().min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
});
