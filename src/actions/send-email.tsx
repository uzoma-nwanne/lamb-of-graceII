'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';
//import paths from '@/paths';

const sendMessageSchema = z.object({
  name: z.string().min(3, { message: "Must be 3 or more characters long." }),
  email:z.string().min(3).email({ message: "Must be a valid email address." }),
  phone: z.string().min(5),
  message: z.string().min(10),
});

interface SendMessageFormState {
  errors: {
    name?: string[];
    phone?: string[];
    email?: string[];
    message?: string[];
    _form?: string[];
  };
}

export async function sendMessage(
  formState: SendMessageFormState,
  formData: FormData
): Promise<SendMessageFormState> {
  const result = sendMessageSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

 console.log(result.data.name)
//   const topic = await db.topic.findFirst({
//     where: { slug },
//   });

//   if (!topic) {
//     return {
//       errors: {
//         _form: ['Cannot find topic'],
//       },
//     };
//   }

//   let post: Post;
//   try {
//     post = await db.post.create({
//       data: {
//         title: result.data.title,
//         content: result.data.content,
//         userId: session.user.id,
//         topicId: topic.id,
//       },
//     });
//   } catch (err: unknown) {
//     if (err instanceof Error) {
//       return {
//         errors: {
//           _form: [err.message],
//         },
//       };
//     } else {
//       return {
//         errors: {
//           _form: ['Failed to send message'],
//         },
//       };
//     }
//   }

//   revalidatePath(paths.topicShow(slug));
//   redirect(paths.postShow(slug, post.id));
return {
            errors: {
              _form: ['Failed to send message'],
            },
          };
}
