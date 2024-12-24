import { Client, Account, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '67572f920000dd4e1cd4'); // Your project ID;

export const account = new Account(client);
export const databases = new Databases(client);

export const APPWRITE_CLIENT = {
  account,
  databases,
};
