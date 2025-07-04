import { NextRequest, NextResponse } from 'next/server';
import { findUserById } from '../../../../../lib/auth';
import { initDatabase } from '../../../../../lib/schema';

export async function GET(request: NextRequest) {
  try {
    // Initialize database
    await initDatabase();

    // Get user ID from middleware
    const userId = request.headers.get('x-user-id');
    
    if (!userId) {
      return NextResponse.json(
        { error: 'User not authenticated' },
        { status: 401 }
      );
    }

    // Find user by ID
    const user = await findUserById(parseInt(userId));
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role,
        created_at: user.created_at,
        updated_at: user.updated_at
      }
    });

  } catch (error) {
    console.error('Profile error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 