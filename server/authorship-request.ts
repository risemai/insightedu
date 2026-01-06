'use server';

import { sendAuthorShipRequest } from '@/lib/author-request';

type authorshipRequestType = {
  name: string;
  email: string;
  phone: string;
};

export const authorShipRequest = async (request: authorshipRequestType) => {
  try {
    const result = await sendAuthorShipRequest({
      name: request.name,
      email: request.email,
      phone: request.phone,
    });
    return result;
  } catch {
    return {
      success: false,
      message: 'Contact message failed',
    };
  }
};
