import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/dbConnect';
import { NextJa_Auth } from '@/lib/dbConnect';

export const GET = async () => {

  try {
    const collection = dbConnect(NextJa_Auth.all_products);
    const result = await collection.find({}).toArray();
    return NextResponse.json(result);
  }

  catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }

};
